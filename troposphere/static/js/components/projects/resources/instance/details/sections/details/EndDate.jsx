import React from "react";
import Backbone from "backbone";
import ResourceDetail from "components/projects/common/ResourceDetail";
import Time from "components/common/Time";

var EndDate = React.createClass({
    displayName: "EndDate",

    propTypes: {
        instance: React.PropTypes.instanceOf(Backbone.Model).isRequired
    },

    render: function() {
        return (
        <ResourceDetail label="Deleted">
            <Time date={this.props.instance.get("end_date")} />
        </ResourceDetail>
        );
    }
});

export default EndDate;
