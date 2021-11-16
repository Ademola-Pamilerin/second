import Button from "../Button/button";
import Card from "../card/card";
import classes from "./error.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.clicked}></div>;
};
const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button Clicked={props.clicked}>Close</Button>
      </footer>
    </Card>
  );
};

const Error = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop clicked={props.clicked}/>, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Modal title={props.title} message={props.message} clicked={props.clicked}/>, document.getElementById("modal"))}
    </>
  );
};
export default Error;
