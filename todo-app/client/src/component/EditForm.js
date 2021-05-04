import React, { useState } from "react";

function EditForm() {
  const [edit, setEdit] = useState("");
  return (
    <div>
      <form>
        <input type="text" name="" id="" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
