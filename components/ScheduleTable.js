import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(day, time, contens) {
  return { day, time, contens };
}

const rows = [
  createData('2020年6月5日（金)', 'hoge', 'hoge'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function ScheduleTable() {
  const classes = useStyles();

  return (
    <table>
      <tr>
        <th>日にち</th>
        <th>時間</th>
        <th>内容</th>
      </tr>
      <tr>
        <td rowspan="2">2020年6月5日（金）</td>
        <td>20:00-20:30</td>
        <td>オープニング・詳細発表</td>
      </tr>
      <tr>
        <td>20:30-</td>
        <td>開発開始</td>
      </tr>
      <tr>
        <td>2020年6月6日（土）</td>
        <td>20:00-20:30</td>
        <td>終日開発</td>
      </tr>
      <tr>
        <td>2020年6月7日（日）</td>
        <td>20:00-20:30</td>
        <td>終日開発</td>
      </tr>
    </table>
  );
}
