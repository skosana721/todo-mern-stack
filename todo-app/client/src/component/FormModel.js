import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/actions/todos";

function FormModel() {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <i
        className="far fa-times-circle"
        onClick={() => dispatch(closeModal())}
      ></i>
      <Form />
    </div>
  );
}

export default FormModel;
