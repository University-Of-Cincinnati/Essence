'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'CardItemHeader',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'card-header': true,
        'clearfix': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var classes = this.state.classes || [];

    classes = Utils.classNames(classes, this.props.classes);

    this.setState({
      classes: classes
    });
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      { className: classes },
      self.props.children
    );
  }
});