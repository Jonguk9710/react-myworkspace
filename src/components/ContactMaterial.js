import { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    height: theme.typography.fontSize * 2,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

const ContactMaterial = () => {
  const classes = useStyles();
  const [contactList, setContactList] = useState([]);

  const name = useRef();
  const tel = useRef();
  const email = useRef();
  const tb = useRef();

  const add = () => {
    setContactList([
      {
        fname: name.current.value,
        phone: tel.current.value,
        mail: email.current.value,
      },
      ...contactList,
    ]);
    name.current.value = "";
    tel.current.value = "";
    email.current.value = "";
  };
  const change = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      add();
    }
  };

  const remove = (index) => {
    const newContactList = contactList.filter((contact, idx) => {
      return idx !== index;
    });

    setContactList(newContactList);
  };

  const edit = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          contact.isEdit = true;
        }

        return contact;
      })
    );
  };

  const cancel = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          delete contact.isEdit;
        }

        return contact;
      })
    );
  };

  const save = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          const tr = tb.current.children[index];
          const nameEdit = tr.querySelector(".name");
          const phoneEdit = tr.querySelector(".tel");
          const emailEdit = tr.querySelector(".email");
          contact.fname = nameEdit.value;
          contact.phone = phoneEdit.value;
          contact.mail = emailEdit.value;
          delete contact.isEdit;
        }
        return contact;
      })
    );
  };

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper}>
            <div style={{ display: "flex" }}>
              <TextField
                variant="outlined"
                inputRef={name}
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
                inputRef={tel}
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
                inputRef={email}
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
            <div style={{ display: "flex" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>연락처</TableCell>
                      <TableCell>이메일</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody ref={tb}>
                    {contactList.map((contact, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Button
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                        <TableCell>
                          {!contact.isEdit && <span>{contact.fname}</span>}
                          {contact.isEdit && (
                            <TextField
                              type="text"
                              defaultValue={contact.fname}
                              inputProps={{ className: "name" }}
                            ></TextField>
                          )}
                        </TableCell>

                        <TableCell>
                          {!contact.isEdit && <span>{contact.phone}</span>}
                          {contact.isEdit && (
                            <TextField
                              type="text"
                              defaultValue={contact.phone}
                              inputProps={{ className: "tel" }}
                            ></TextField>
                          )}
                        </TableCell>

                        <TableCell>
                          {!contact.isEdit && <span>{contact.mail}</span>}
                          {contact.isEdit && (
                            <TextField
                              type="text"
                              defaultValue={contact.mail}
                              inputProps={{ className: "email" }}
                            ></TextField>
                          )}
                        </TableCell>
                        <TableCell>
                          {!contact.isEdit && (
                            <Button
                              onClick={() => {
                                edit(index);
                              }}
                            >
                              edit
                            </Button>
                          )}
                          {contact.isEdit && (
                            <Button
                              onClick={() => {
                                save(index);
                              }}
                            >
                              save
                            </Button>
                          )}
                          {contact.isEdit && (
                            <Button
                              onClick={() => {
                                cancel(index);
                              }}
                            >
                              cancel
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
      </Grid>
    </>
  );
};

export default ContactMaterial;
