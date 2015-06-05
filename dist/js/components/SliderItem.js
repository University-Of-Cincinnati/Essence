'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Utils = require('../utils'),
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
  displayName: 'SliderItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      isMobile: Utils.mobile.isMobile(),
      isMoving: false,
      isHidden: '',
      classes: {
        'e-slider': true,
        'discrete': this.props.discrete ? true : false,
        'zero': this.props.start < 1 ? true : false
      },
      inputValue: this.props.start || 0,
      discrete: this.props.start || 0,
      handleStyles: { left: this.props.start ? this.props.start + '%' : '0%' },
      fillStyles: { width: this.props.start ? this.props.start + '%' : '0%' },
      discreteStyles: {
        marginLeft: this.props.discrete ? this.props.start + '%' : '-7px',
        transform: false
      }
    };
  },

  renderMoveStart: function renderMoveStart() {
    var self = this,
        discreteStyles = self.state.discreteStyles;

    discreteStyles.transform = 'scale(1)';

    self.setState({
      discreteStyles: discreteStyles,
      isMoving: true,
      isHidden: self.props.discrete ? '-hide' : ''
    });
  },

  renderMoveEnd: function renderMoveEnd() {
    var self = this,
        discreteStyles = self.state.discreteStyles;

    discreteStyles.transform = 'scale(0)';

    self.setState({
      discreteStyles: discreteStyles,
      isHidden: '',
      isMoving: false
    });
  },

  renderMove: function renderMove(event) {
    var self = this;
    self.renderDrag(event);
  },

  renderDrag: function renderDrag(event) {
    var self = this,
        classes = self.state.classes,
        discreteStyles = self.state.discreteStyles,
        clientX = self.state.isMobile ? event.changedTouches[0].clientX : event.clientX,
        sliderParent = this.refs.sliderParent.getDOMNode(),
        offset = clientX - sliderParent.offsetParent.offsetLeft,
        horizontal = (offset / sliderParent.offsetWidth * 100).toFixed(0),
        horizontalFill = horizontal;

    if (offset / sliderParent.offsetWidth * 100 < 1) {
      horizontal = horizontalFill = 0;
    } else if (offset / sliderParent.offsetWidth * 100 > 100) {
      horizontal = horizontalFill = 100;
    }

    if (self.props.steps) {
      horizontal = horizontalFill = Math.round(horizontal / 20) * 20;
    }

    if (event.screenX !== 0) {
      self.setState({
        discrete: horizontal,

        handleStyles: {
          left: horizontal + '%'
        },

        fillStyles: {
          width: horizontalFill + '%'
        },

        inputValue: horizontal
      });

      discreteStyles.marginLeft = horizontal + '%';
      classes.zero = horizontal < 1 ? true : false;
    }

    self.setState({
      discreteStyles: discreteStyles,
      classes: classes
    });

    event.preventDefault();
  },

  renderSteps: function renderSteps() {
    var self = this,
        step = 0,
        steps = [],
        scrollFix = React.createElement('div', {
      className: 'e-step',
      style: { marginLeft: '99.8%' },
      key: 'step-99.8'
    });

    for (step; step <= 80; step += 20) {
      steps.push(React.createElement('div', {
        className: 'e-step',
        style: { marginLeft: step + '%' },
        key: 'step-' + step
      }));
    }

    steps.push(scrollFix);

    if (self.props.steps) {
      return React.createElement(
        'div',
        { className: 'e-steps' },
        steps
      );
    }

    return null;
  },

  renderDiscrete: function renderDiscrete() {
    var self = this;

    if (self.props.discrete) {
      return React.createElement(
        'div',
        {
          className: 'e-discrete-value',
          style: self.state.discreteStyles
        },
        self.state.discrete
      );
    }
    return null;
  },

  renderFill: function renderFill() {
    var self = this;

    if (self.props.fill && !self.props.disable) {
      return React.createElement('div', {
        className: 'e-fill',
        style: self.state.fillStyles
      });
    }
    return null;
  },

  renderSlider: function renderSlider() {
    var self = this,
        classes = self.state.classes,
        inputName = self.props.name || 'sliderInput',
        onMove = self.state.isMoving ? self.renderMove : null;

    if (self.props.disable) {
      classes['disabled'] = true;
    }

    classes = classSet(classes);

    return React.createElement(
      'div',
      {
        className: classes,
        onMouseLeave: self.renderMoveEnd,
        onMouseDown: self.renderMoveStart,
        onMouseUp: self.renderMoveEnd,
        onMouseMove: onMove,
        onTouchStart: self.renderMoveStart,
        onTouchEnd: self.renderMoveEnd,
        onTouchMove: onMove,
        ref: 'sliderParent'
      },
      React.createElement(
        'div',
        { className: 'e-slider-track' },
        React.createElement('div', {
          className: 'e-slider-handle' + self.state.isHidden,
          style: self.state.handleStyles,
          ref: 'sliderHandle'
        })
      ),
      self.renderFill(),
      self.renderDiscrete(),
      self.renderSteps(),
      React.createElement('input', { name: inputName, defaultValue: self.state.inputValue, className: 'hide' })
    );
  },

  render: function render() {
    var self = this;

    return self.renderSlider();
  }
});