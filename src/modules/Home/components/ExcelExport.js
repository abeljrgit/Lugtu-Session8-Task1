import { Button } from '@mui/material';
import React from 'react';
import ReactExport from 'react-export-excel';
import { connect } from 'react-redux';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// const dataSet1 = [
//   {
//     name: 'Johson',
//     amount: 30000,
//     sex: 'M',
//     is_married: true,
//   },
//   {
//     name: 'Monika',
//     amount: 355000,
//     sex: 'F',
//     is_married: false,
//   },
//   {
//     name: 'John',
//     amount: 250000,
//     sex: 'M',
//     is_married: false,
//   },
//   {
//     name: 'Josef',
//     amount: 450500,
//     sex: 'M',
//     is_married: true,
//   },
// ];

class Download extends React.Component {
  render() {
    const dataSet1 =
      this.props.blogPostApi.queries['getAllPosts(undefined)']?.data;

    return (
      <ExcelFile
        element={
          <Button variant="text" sx={{ color: 'white' }}>
            DOWNLOAD ALL POST YOU SEE BELOW
          </Button>
        }
      >
        <ExcelSheet data={dataSet1} name="Employees">
          <ExcelColumn label="USER_ID" value="userId" />
          <ExcelColumn label="ID" value="id" />
          <ExcelColumn label="TITLE" value="title" />
          <ExcelColumn label="BODY" value="body" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

const mapStateToProps = (state) => {
  return { blogPostApi: state.blogPostApi };
};

export default connect(mapStateToProps, null)(Download);
