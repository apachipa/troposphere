define(function (require) {

  var React = require('react'),
      Backbone = require('backbone'),
      EditTagsView = require('components/common/tags/EditTagsView.react');

  return React.createClass({
    display: "ResourceTags",

    propTypes: {
      tags: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
      activeTags: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
      onTagsChanged: React.PropTypes.func.isRequired,
      onCreateNewTag: React.PropTypes.func.isRequired
    },

    getInitialState: function(){
      return {
        isEditingTags: false
      }
    },

    onEditTags: function(e){
      e.preventDefault();
      this.setState({isEditingTags: true});
    },

    onDoneEditingTags: function(e){
      e.preventDefault();
      this.setState({isEditingTags: false});
    },

    render: function () {
      return (
        <div>
          <EditTagsView
            activeTags={this.props.activeTags}
            tags={this.props.tags}
            onTagsChanged={this.props.onTagsChanged}
            onCreateNewTag={this.props.onCreateNewTag}
            label={"Instance Tags:"}
          />
        </div>
      );
    }

  });

});
