import classes from "./Modal.module.css";
import Card from "./Card";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart.js";

//무조건 포탈 사용할 것 안 그러면 Form에 갇혀서 이상하게 출력됨
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default Modal;
