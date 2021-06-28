import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import CovidItem from "./CovidItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CovidPagination from "./CovidPagination";

const CovidList = () => {
  const data = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_COVIDLIST_PAGING" });
  }, [dispatch]);

  return (
    <div>
      <TableContainer style={{ height: "49vh", overflowY: "scroll" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>이름</TableCell>
              <TableCell>지역(시,도)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.content.map((covid) => (
              <CovidItem key={covid.id} covid={covid}></CovidItem>
            ))}
          </TableBody>
        </Table>
        <CovidPagination
          totalElements={data.totalElements}
          page={data.page}
          size={data.size}
        />
      </TableContainer>
    </div>
  );
};

export default CovidList;
