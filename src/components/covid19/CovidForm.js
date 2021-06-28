import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const CovidForm = () => {
  const inputSido = useRef();
  const inputName = useRef();
  const dispatch = useDispatch();

  const add = () => {
    const name = inputName.current.value;
    const location = inputSido.current.value;
    dispatch({ type: "ADD_COVID", payload: { name, location } });
    inputName.current.value = "";
    inputSido.current.value = "";
  };
  const change = (event) => {
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputName}
        label="이름"
        onKeyPress={change}
        size="small"
        style={{
          width: "20%",
          marginRight: "0.5rem",
          marginLeft: "12.0rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputSido}
        label="지역(시,도)"
        onKeyPress={change}
        size="small"
        style={{
          width: "20%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={() => {
          add();
        }}
      >
        입력
      </Button>
    </div>
  );
};

export default CovidForm;
