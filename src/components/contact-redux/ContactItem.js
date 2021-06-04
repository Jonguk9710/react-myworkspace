import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";

const ContactItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(contact.isEdit);
  const dispatch = useDispatch();
  const inputTel = useRef();
  const inputName = useRef();
  const inputEmail = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const fname = inputName.current.value;
    const tel = inputTel.current.value;
    const email = inputEmail.current.value;

    dispatch({ type: "SAVE_CONTACT", payload: { id, fname, tel, email } });
  };
  return (
    <TableRow>
      <TableCell>
        <Button
          onClick={() => {
            remove(contact.id);
          }}
        >
          <DeleteIcon style={{ cursor: "pointer" }} />
        </Button>
      </TableCell>
      <TableCell>
        {!isEdit && <span>{contact.fname}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.fname}
            inputRef={inputName}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.tel}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.tel}
            inputRef={inputTel}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.email}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.email}
            inputRef={inputEmail}
          ></TextField>
        )}
      </TableCell>
      <TableCell>
        {!isEdit && (
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            edit
          </Button>
        )}
        {isEdit && (
          <Button
            onClick={() => {
              save(contact.id);
              setIsEdit(false);
            }}
          >
            save
          </Button>
        )}
        {isEdit && (
          <Button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            cancel
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ContactItem;
