import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const inputTel = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const dispatch = useDispatch();

  const add = () => {
    const id = new Date().getTime();
    const tel = inputTel.current.value;
    const fname = inputName.current.value;
    const email = inputEmail.current.value;
    dispatch({ type: "ADD_CONTACT", payload: { id, fname, tel, email } });
    inputTel.current.value = "";
    inputName.current.value = "";
    inputEmail.current.value = "";
  };
  const change = (event) => {
    // console.log(event);
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
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputTel}
        label="연락처"
        onKeyPress={change}
        size="small"
        style={{
          width: "40%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputEmail}
        label="이메일"
        onKeyPress={change}
        size="small"
        style={{
          width: "40%",
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

export default ContactForm;
