import { useState } from "react";
import Input from "../Elements/Input";
import CheckIcon from "@mui/icons-material/Check";

const EditableField = ({ register, errors, type, name, label, setFocus }) => {
  const [editState, setEditState] = useState(true);

  const editField = () => {
    setEditState(!editState)
    setFocus(name, { shouldSelect: false })
  }

  return (
      <div className="profile-info-field">
        <Input
          register={register}
          errors={errors}
          type={type}
          name={name}
          label={label}
          readOnly={editState}
        />
        <button className="profile-edit-btn" onClick={editField}>
          {!editState ? <CheckIcon /> : "Edit"}
        </button>
      </div>
  );
};

export default EditableField;
