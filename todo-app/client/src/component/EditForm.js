import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodos } from "../redux/actions/todos";

function EditForm({ todo, _id }) {
  const [edit, setEdit] = useState(todo);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTodos({ _id, edit }));
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          onChange={(e) => setEdit(e.target.value)}
          value={edit}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
