'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarRatingComponent = function (_Component) {
  _inherits(StarRatingComponent, _Component);

  function StarRatingComponent(props) {
    _classCallCheck(this, StarRatingComponent);

    var _this = _possibleConstructorReturn(this, (StarRatingComponent.__proto__ || Object.getPrototypeOf(StarRatingComponent)).call(this));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(StarRatingComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;


      if (value != null && value !== this.state.value) {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'onStartClick',
    value: function onStartClick(value) {
      this.props.onChange(value);
    }
  }, {
    key: 'renderStars',
    value: function renderStars() {
      var _props = this.props,
          name = _props.name,
          starCount = _props.starCount,
          starColor = _props.starColor,
          emptyStarColor = _props.emptyStarColor,
          editing = _props.editing;
      var value = this.state.value;

      var starStyles = function starStyles(i, value) {
        return {
          float: 'right',
          cursor: editing ? 'pointer' : 'default',
          color: value >= i ? starColor : emptyStarColor
        };
      };
      var radioStyles = {
        display: 'none',
        position: 'absolute',
        marginLeft: -9999
      };

      // populate stars
      var starNodes = [];

      for (var i = starCount; i > 0; i--) {
        var id = name + '_' + i;
        var starNodeInput = _react2.default.createElement('input', {
          key: 'input_' + id,
          style: radioStyles,
          className: 'dv-star-rating-input',
          type: 'radio',
          name: name,
          id: id,
          value: i,
          checked: value === i
        });
        var starNodeLabel = _react2.default.createElement(
          'label',
          {
            key: 'label_' + id,
            style: starStyles(i, value),
            className: 'dv-star-rating-star ' + (value >= i ? 'dv-star-rating-full-star' : 'dv-star-rating-empty-star'),
            htmlFor: id,
            onClick: this.onStartClick.bind(this, i)
          },
          this.renderIcon(i, value, name)
        );

        starNodes.push(starNodeInput);
        starNodes.push(starNodeLabel);
      }

      return starNodes;
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(index, value, name) {
      var _props2 = this.props,
          renderStarIcon = _props2.renderStarIcon,
          renderStarIconHalf = _props2.renderStarIconHalf;


      if (typeof renderStarIconHalf === 'function' && Math.ceil(value) === index && value % 1 !== 0) {
        return renderStarIconHalf(index, value, name);
      }

      if (typeof renderStarIcon === 'function') {
        return renderStarIcon(index, value, name);
      }

      return _react2.default.createElement(
        'i',
        { style: { fontStyle: 'normal' } },
        '\u2605'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          editing = _props3.editing,
          className = _props3.className;

      var classes = (0, _classnames2.default)('dv-star-rating', {
        'dv-star-rating-non-editable': !editing
      }, className);

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', position: 'relative' }, className: classes },
        this.renderStars()
      );
    }
  }]);

  return StarRatingComponent;
}(_react.Component);

StarRatingComponent.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.number,
  editing: _propTypes2.default.bool,
  starCount: _propTypes2.default.number,
  starColor: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  renderStarIcon: _propTypes2.default.func,
  renderStarIconHalf: _propTypes2.default.func
};
StarRatingComponent.defaultProps = {
  starCount: 5,
  value: 0,
  editing: true,
  starColor: '#ffb400',
  emptyStarColor: '#333'
};
exports.default = StarRatingComponent;
module.exports = exports['default'];
