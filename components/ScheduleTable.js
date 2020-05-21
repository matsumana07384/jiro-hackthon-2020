import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(day, time, contens) {
  return { day, time, contens };
}

const rows = [
  createData('2020年6月5日（金)', 'hoge', 'hoge'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ScheduleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">日にち</StyledTableCell>
            <StyledTableCell align="center">時間</StyledTableCell>
            <StyledTableCell align="center">内容</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.contens}>
              <StyledTableCell component="th">
                {row.day}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="center" scope="row">
                {row.contens}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
