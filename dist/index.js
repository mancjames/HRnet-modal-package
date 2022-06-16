function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
const Background = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: fixed;\n"])));
const Center = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"])));
const ModalDiv = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      width: 200px;\n      height: 150px;\n      background-color: white;\n      z-index: 9999;\n      border-radius: 16px;\n      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);\n      text-align: center;\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n"])));
const ModalButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: black;\n  background-color: white;\n"])));
function Modal(_ref) {
  let {
    setOpen,
    message,
    buttonText
  } = _ref;
  return /*#__PURE__*/React.createElement(Background, {
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(ModalDiv, null, /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement(ModalButton, {
    onClick: () => setOpen(false)
  }, buttonText))));
}

module.exports = Modal;
//# sourceMappingURL=index.js.map
