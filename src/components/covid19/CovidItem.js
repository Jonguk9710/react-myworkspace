import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import DeleteIcon from "@material-ui/icons/Delete";

const CovidItem = ({ covid }) => {
  const [isEdit, setIsEdit] = useState(covid.isEdit);
  const dispatch = useDispatch();
  const inputSido = useRef();
  const inputName = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_COVID", payload: id });
  };

  const save = (id) => {
    const name = inputName.current.value;
    const location = inputSido.current.value;

    dispatch({ type: "MODIFY_COVID", payload: { id, name, location } });
  };
  return (
    <TableRow>
      <TableCell>
        <Button
          onClick={() => {
            remove(covid.id);
          }}
        >
          <DeleteIcon style={{ cursor: "pointer" }} />
        </Button>
      </TableCell>
      <TableCell>
        {!isEdit && <span>{covid.name}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={covid.name}
            inputRef={inputName}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{covid.location}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={covid.location}
            inputRef={inputSido}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ display: "flex" }}>
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
              save(covid.id);
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

export default CovidItem;
