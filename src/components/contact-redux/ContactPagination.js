import TablePagination from "@material-ui/core/TablePagination";
import { useDispatch, useSelector } from "react-redux";

const ContactPagination = () => {
  const { totalElements, page, size } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch({
      type: "FETCH_CONTACTLIST_PAGING",
      payload: { page: newPage, size },
    });
  };

  const handleChangeRowsPerPage = (event) => {
    const newSize = parseInt(event.target.value);

    dispatch({
      type: "FETCH_CONTACTLIST_PAGING",
      payload: { page: 0, size: newSize },
    });
  };

  return (
    <TablePagination
      component="div"
      count={totalElements}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={size}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default ContactPagination;
