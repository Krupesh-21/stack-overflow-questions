import React from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function QuestionListTable({ handleQuestionModal, questions, modalData }) {
  function handleClick(data) {
    handleQuestionModal(true);
    modalData(data);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Question</StyledTableCell>
            <StyledTableCell>Creation Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((data, index) => {
            return (
              <StyledTableRow key={index}>
                <StyledTableCell>{data.owner.display_name}</StyledTableCell>
                <StyledTableCell
                  onClick={() => handleClick(data)}
                  style={{ cursor: "pointer" }}
                >
                  {data.title}
                </StyledTableCell>
                <StyledTableCell>
                  {moment.unix(data.creation_date).format("LLL")}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default QuestionListTable;
