import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';




const DataTable = styled.table`
  width: 78%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: 290px;
  ?border: 1px solid black;

`;

const DataRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const DataCell = styled.td`
  padding: 12px 8px;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
  background-color: #CBF1F6;
  

  
`;



const LogReport = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Searched Successfully");
  };

  return (
    <div className="page-background">
      <div className="card p-4 login-card" style={{ height: '250px',width:'100%',padding: '40px',marginTop:'60px',minWidth:'1150px', border:'3px solid #A2DDE0',margin:'auto',marginLeft:'290px'}}>
        <div className="row d-flex justify-content-center m-4" >
          <h1 className="text-center mb-1 " style={{ fontWeight: 'bold',marginBottom:'10px',padding:'15px' }}>LOG REPORT</h1>
          <form  className="col-md-12" onSubmit={handleSubmit}>
            <div className="d-flex row">
              <div className="col-3 mb-2">
                <label className="text-left" htmlFor="startDate">FROM DATE:</label>
                <input type="date" className="form-control  style-input" style={{border:'1px solid black'}}  name="startDate"  required />
              </div>
              <div className="col-3 mb-2">
                <label className="text-left" htmlFor="endDate">TO DATE:</label>
                <input type="date" className="form-control  style-input" style={{border:'1px solid black'}} name="endDate"  />
              </div>
              <div className="col-3">
                <label className="text-left" htmlFor="logType">SELECT TYPE:</label>
                <select className="form-select  style-input mt-8" style={{border:'1px solid black'}} name="logType"  required>
                  <option value="">Select Type</option>
                  <option value="all">All</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100" style={{ marginTop: '22px' }}>SEARCH</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>S.No</TableHeader>
            
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Log Date</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Code</TableHeader>
          </tr>
        </thead>
        <tbody>
       
        <DataRow>
            <DataCell>1</DataCell>
            <DataCell>2024-07-01</DataCell>
            <DataCell>Azhagi</DataCell>
            <DataCell>EMP001</DataCell>
          </DataRow>
          <DataRow>
            <DataCell>2</DataCell>
            <DataCell>2024-07-02</DataCell>
            <DataCell>Aahana</DataCell>
            <DataCell>EMP002</DataCell>
          </DataRow>
          <DataRow>
            <DataCell>3</DataCell>
            <DataCell>2024-07-03</DataCell>
            <DataCell>Thamizhini</DataCell>
            <DataCell>EMP003</DataCell>
          </DataRow>
         
        </tbody>
      </DataTable>
    </div>
  );
};
const AttendanceReport = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Searched Successfully");
  };
  const[logs,setLogs]=useState([
    { employeeName: 'Azhagiyal', employeeCode: 'EMP001' ,intime: '09:00 AM', outtime: '05:00 PM', status: 'Present' },
    { employeeName: 'Ram', employeeCode: 'EMP002',intime: '09:15 AM', outtime: '05:15 PM', status: 'Present'  },
    {  employeeName: 'Iniyazh', employeeCode: 'EMP003',intime: '08:45 AM', outtime: '04:45 PM', status: 'Present' }
     
    ]);
  

 
  

 
  return (
    <div className="page-background">
      <div className="card p-4 login-card" style={{ height: '250px',width:'100%',padding: '40px',marginTop:'60px',minWidth:'1150px',  border:'3px solid #A2DDE0',margin:'auto',marginLeft:'290px'}}>
        <div className="row d-flex justify-content-center m-4" >
          <h1 className="text-center mb-1" style={{ fontWeight: 'bold',padding:'15px' }}>ATTENDANCE REPORT</h1>
          <form  className="col-md-12" onSubmit={handleSubmit}>
            <div className="d-flex row">
              <div className="col-3">
                <label className="text-left" htmlFor="startDate">FROM DATE:</label>
                <input type="date" className="form-control mb-2 style-input" style={{border:'1px solid black'}} name="startDate" required />
              </div>
              <div className="col-3">
                <label className="text-left" htmlFor="endDate">TO DATE:</label>
                <input type="date" className="form-control  style-input" style={{border:'1px solid black'}}  name="endDate"   />
              </div>
              <div className="col-3">
                <label className="text-left" htmlFor="logType">SELECT MODE:</label>
                <select className="form-select style-input mt-8" style={{border:'1px solid black'}} name="logType" required>
                  <option value="">Select Type</option>
                  <option value="all">All</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
              <div className="col-3">
                <searchButton type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100" style={{ marginTop: '24px' }}>SEARCH</searchButton>
              </div>
            </div>
          </form>
        </div>
      </div>
     
      <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>S.No</TableHeader>
            
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Code</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>In Time</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Out Time</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ?(
            logs.map((log,index) => (

            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              
              <DataCell>{log.employeeName}</DataCell>
              <DataCell>{log.employeeCode}</DataCell>
              <DataCell>{log.intime}</DataCell>
              <DataCell>{log.outtime}</DataCell>
              <DataCell>{log.status}</DataCell>
            </DataRow>
          ))
        ):(
          <DataRow>
            <DataCell colSpan="6">data not found</DataCell>
            </DataRow>
        )}
        </tbody>
      </DataTable>
    </div>
  );
};

const MonthlyReport = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Searched Successfully");
  };
  const[logs,setLogs]=useState([
    
  ]);
  const DataTable=styled.table`
  width: 62%;
   margin-left: 410px;
   margin-top:40px;
  `;
  

 

  return (
    <div className="page-background">
      <div className="card p-4 login-card" style={{ height: '250px',width:'100%',marginTop:'60px',minWidth:'900px',border:'3px solid #A2DDE0' ,margin:'auto',marginLeft:'420px'}}>
        <div className="row d-flex justify-content-center m-4">
          <h1 className="text-center mb-1" style={{ fontWeight: 'bold',padding:'15px'}}>MONTHLY REPORT</h1>
          <form  className="col-md-12" onSubmit={handleSubmit}>
            <div className="d-flex row">
              <div className="col-4">
                <label className="text-left"  htmlFor="startDate">SELECT MONTH:</label>
                <input type="month" className="form-control mb-1 style-input" style={{border:'1px solid black'}} name="startDate"  required />
              </div>
              <div className="col-4">
                <label className="text-left" htmlFor="endDate">EMPLOYEE CODE:</label>
                <input type="tel" className="form-control mb-2 style-input" style={{border:'1px solid black'}} name="endDate"  required/>
              </div>

              <div className="col-4">
                <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100" style={{ marginTop: '22px' }}>SEARCH</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Employee Code</TableHeader>
            
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Month</TableHeader>
            
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Working days</TableHeader>
            
            <TableHeader style={{backgroundColor:'#CBF1F6'}}>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
       
        <DataRow>
            <DataCell>1</DataCell>
            <DataCell>2024-07-01</DataCell>
            <DataCell>Azhagi</DataCell>
            <DataCell>November</DataCell>
            <DataCell>28</DataCell>
            <DataCell>Active</DataCell>

          </DataRow>
          <DataRow>
            <DataCell>2</DataCell>
            <DataCell>2024-07-02</DataCell>
            <DataCell>Aahana</DataCell>
            <DataCell>April</DataCell>
            <DataCell>30</DataCell>
            <DataCell>Active</DataCell>
          </DataRow>
          <DataRow>
            <DataCell>3</DataCell>
            <DataCell>2024-07-03</DataCell>
            <DataCell>Thamizhini</DataCell>
            <DataCell>May</DataCell>
            <DataCell>26</DataCell>
            <DataCell>InActive</DataCell>
          </DataRow>
         
        </tbody>
      </DataTable>
    </div>
  );
};

const Reports = () => {
  return <div>Reports Component</div>;
};

export {
  Reports,
  LogReport,
  AttendanceReport,
  MonthlyReport,
};