import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ContactList = () => {
  const contactList = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTLIST" });
  }, [dispatch]);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>이름</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.map((contact) => (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactList;
