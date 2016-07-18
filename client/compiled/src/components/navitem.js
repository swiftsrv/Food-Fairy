'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navitem = function (_React$Component) {
  _inherits(Navitem, _React$Component);

  function Navitem(props) {
    _classCallCheck(this, Navitem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navitem).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Navitem, [{
    key: 'somefunction',
    value: function somefunction() {
      this.setState({
        value: 'something'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'navitem' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '/home' },
              'Home'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '/search' },
              'Search'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '/saved' },
              'Saved'
            )
          )
        )
      );
    }
  }]);

  return Navitem;
}(React.Component);

window.Navitem = Navitem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdml0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxPOzs7QUFDSixtQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMkZBQ1YsS0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxhQUFNO0FBREssS0FBYjtBQUZnQjtBQUtqQjs7OzttQ0FDYTtBQUNaLFdBQUssUUFBTCxDQUFjO0FBQ1osZUFBTztBQURLLE9BQWQ7QUFHRDs7OzZCQUNPO0FBQ04sYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxPQUFSO0FBQUE7QUFBQTtBQUFKLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxTQUFSO0FBQUE7QUFBQTtBQUFKLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxRQUFSO0FBQUE7QUFBQTtBQUFKO0FBSEY7QUFERixPQURGO0FBU0Q7Ozs7RUF0Qm1CLE1BQU0sUzs7QUF5QjVCLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJuYXZpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmF2aXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOicnXG4gICAgfVxuICB9XG4gIHNvbWVmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6ICdzb21ldGhpbmcnXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdml0ZW1cIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPScvaG9tZSc+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPScvc2VhcmNoJz5TZWFyY2g8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj0nL3NhdmVkJz5TYXZlZDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5OYXZpdGVtID0gTmF2aXRlbTsiXX0=