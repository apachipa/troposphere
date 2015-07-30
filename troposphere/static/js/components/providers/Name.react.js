/** @jsx React.DOM */

define(
  [
    'react',
    'backbone'
  ],
  function (React, Backbone) {

    return React.createClass({

      propTypes: {
        provider: React.PropTypes.instanceOf(Backbone.Model).isRequired
      },

      render: function () {
        var provider = this.props.provider;
        return (
          <div className="row">
            <h2>{provider.get('name')}</h2>
          </div>
        );

      }

    });

  });
