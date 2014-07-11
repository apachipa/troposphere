/** @jsx React.DOM */

define(
  [
    'react',
    'backbone',
    '../../instances/detail/InstanceDetails.react',
    'stores/ProjectInstanceStore',
    'stores/ProviderStore',
    'stores/SizeStore',
    'stores/IdentityStore',
    'controllers/NotificationController'
  ],
  function (React, Backbone, InstanceDetails, ProjectInstanceStore, ProviderStore, SizeStore, IdentityStore, NotificationController) {

    function getState(project) {
      return {
        instances: ProjectInstanceStore.getInstancesInProject(project),
        providers: ProviderStore.getAll()
      };
    }

    return React.createClass({

      propTypes: {
        instanceId: React.PropTypes.string.isRequired,
        project: React.PropTypes.instanceOf(Backbone.Model).isRequired
      },

      getInitialState: function(){
        return getState(this.props.project);
      },

      componentDidMount: function () {
        ProjectInstanceStore.addChangeListener(this.updateState);
        ProviderStore.addChangeListener(this.updateState);

        // todo: IdentityStore is only included here because InstanceStore.get(instanceId) is
        // lazy loading, but I'm not sure how to get InstanceStore to know when new
        // identities have been without getting this component to call InstanceStore.getAll()
        // again at the moment.  Figure it out and remove this line.
        IdentityStore.addChangeListener(this.updateState);
        SizeStore.addChangeListener(this.updateState);
      },

      componentWillUnmount: function () {
        ProjectInstanceStore.removeChangeListener(this.updateState);
        ProviderStore.removeChangeListener(this.updateState);
        IdentityStore.removeChangeListener(this.updateState);
        SizeStore.removeChangeListener(this.updateState);
      },

      updateState: function(){
        if (this.isMounted()) this.setState(getState(this.props.project));
      },

      render: function () {
        if(this.state.instances && this.state.providers) {
          var instance = this.state.instances.get(this.props.instanceId);
          if(!instance) NotificationController.error(null, "No volume with id: " + this.props.volumeId);

          var providerId = instance.get('identity').provider;
          var provider = this.state.providers.get(providerId);

          var identityId = instance.get('identity').id;
          var sizeId = instance.get('size_alias');
          var sizes = SizeStore.getAllFor(providerId, identityId);
          if(sizes) {
            var size = sizes.get(sizeId);

            return (
              <InstanceDetails instance={instance} provider={provider} size={size}/>
            );
          }
        }

        return (
           <div className="loading"></div>
        );
      }

    });

  });
