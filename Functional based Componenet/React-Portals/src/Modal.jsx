import ReactDOM from "react-dom";
console.log(ReactDOM);
const Modal = ({ toggle: { toggle, handleToggle },children }) => {

  return ReactDOM.createPortal(
   <>
   {children}
   </>,
    document.getElementById("model")
  );
};

export default Modal;
