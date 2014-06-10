/** @jsx React.DOM */

define(
  [
    'react',
    'components/common/PageHeader.react',
    './InstanceAttributes.react',
    './InstanceLinks.react',
    './ActionList.react',
    'backbone'
  ],
  function (React, PageHeader, InstanceAttributes, InstanceLinks, ActionList, Backbone) {

    return React.createClass({

      render: function () {
        return (
          <div>
            <h2>Instance Details</h2>
            <ul>
              <li>Status: Active</li>
              <li>IP Address: 128.196.64.25</li>
              <li>Launched: May 21, 2014 (9 days ago)</li>
              <li>Based On: iPlant Base Image v3.0</li>
              <li>Identity: 7 on iPlant Cloud-Tucson</li>
              <li>ID: b94d4964-8de3-4965-a87a-f4cf44d33165</li>
            </ul>
          </div>
        );
      }

    });

  });
