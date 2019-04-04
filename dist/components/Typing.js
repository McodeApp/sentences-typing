var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Typing = function (_Component) {
    _inherits(Typing, _Component);

    function Typing() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Typing);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Typing.__proto__ || Object.getPrototypeOf(Typing)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentIndex: 1,
            firstRow: "",
            secondRow: "",
            firstRowFinish: false,
            typeSpeed: 100
        }, _this.type = function () {
            var _this$state = _this.state,
                currentIndex = _this$state.currentIndex,
                firstRowFinish = _this$state.firstRowFinish,
                secondRow = _this$state.secondRow,
                typeSpeed = _this$state.typeSpeed,
                firstRow = _this$state.firstRow;
            var _this$props = _this.props,
                sentences = _this$props.sentences,
                infinity = _this$props.infinity;

            var options = {};

            if (sentences.length === 1 && firstRowFinish) {
                return;
            }

            if (currentIndex === sentences.length - 1 && secondRow === sentences[currentIndex]) {
                if (infinity) {
                    options = {
                        currentIndex: 1,
                        secondRow: ""
                    };
                } else {
                    return;
                }
            }

            if (!firstRowFinish && sentences.length) {
                var _sentences = _slicedToArray(sentences, 1),
                    first = _sentences[0];

                var firstRowText = first.substring(0, firstRow.length + 1);
                options = {
                    firstRow: firstRowText,
                    firstRowFinish: first.length === firstRow.length
                };
            } else if (currentIndex < sentences.length) {
                if (secondRow.length !== sentences[currentIndex].length) {
                    var secondRowText = sentences[currentIndex].substring(0, secondRow.length + 1);
                    options = {
                        secondRow: secondRowText,
                        currentIndex: currentIndex
                    };
                } else {
                    var index = currentIndex < sentences.length - 1 ? currentIndex + 1 : 1;
                    options = {
                        secondRow: "",
                        currentIndex: index
                    };
                }
            }

            _this.setState(options);
            setTimeout(_this.type, typeSpeed);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Typing, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.type();
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                firstRow = _state.firstRow,
                secondRow = _state.secondRow;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    firstRow
                ),
                secondRow && React.createElement(
                    'h1',
                    null,
                    secondRow
                )
            );
        }
    }]);

    return Typing;
}(Component);

Typing.propTypes = {
    infinity: PropTypes.bool,
    sentences: PropTypes.arrayOf(PropTypes.string).isRequired
};

Typing.defaultProps = {
    infinity: false
};

export default Typing;