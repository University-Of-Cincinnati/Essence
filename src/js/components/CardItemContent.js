'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'CardItemContent',

    getInitialState: function() {
      return {
        classes: {
          'card-supporting-text': true
        }
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes || [];

      classes = Utils.classNames(classes, this.props.classes);

      this.setState({
        classes: classes
      });
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div className={classes}>
          {this.props.children}
        </div>
      );
    }
});
