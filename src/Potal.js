import reactDom from "react-dom";

const Portal = ({ children }) => {
  return reactDom.createPortal(children, document.getElementById("portal"));
};

export default Portal;
