import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { FaCheck, FaTimes } from 'react-icons/fa';
const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

const DataTableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  
  
`;

const TickIcon = styled(FaCheck)`
  color: green;
`;

const CrossIcon = styled(FaTimes)`
  color: red;
`;





export const Pageaccess  = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your action has been registered");
      };
      const data = [
        { sno: 1, role: 'Admin', permissions: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false] },
        { sno: 2, role: 'Manager', permissions: [true, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true] },
        { sno: 3, role: 'Employee', permissions: [false, true, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false] },
        { sno: 4, role: 'HR', permissions: [true, false, false, true, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false] },
        { sno: 5, role: 'Developer', permissions: [true, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false] },
      ];
    
    return (
        <div className='page-background' >
        <div className='card p-4 login-card' style={{ height: '300px',padding: '40px',marginTop:'60px', maxWidth: '600px',border:'3px solid #A2DDE0',margin:'auto',marginLeft:'550px'}}>
            <div className='row d-flex justify-content-center m-4'>
                <h2 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>PAGE ACCESS FOR USER</h2>

                <form className='col-md-12'onSubmit={handleSubmit}>
                    <div className='d-flex row'>
                        <div className='col-12'>
                            <label className='text-left' style={{marginTop:'15px'}} for=''>ENTER NEW ROLE:</label>
                            <input type='text' className='form-control style-input' style={{border:'1px solid black'}} required></input>
                        </div>
                        
                    <div className='row-mb-6'>
                        <div className='style'>
                            <div className='col-md-6 text-center' style={{marginTop:'30px'}}>
                        <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100 ">
                            CREATE ROLE
                        </button>
                        </div> </div></div></div>
                </form>
            </div>
        </div>
        <DataTableContainer>
        <DataTable style={{marginLeft:'250px'}}>
          <thead>
            <tr>
              <TableHeader>S.No</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Dashboard</TableHeader>
              <TableHeader>Company</TableHeader>
              <TableHeader>Branch</TableHeader>
              <TableHeader>Division</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>Designation</TableHeader>
              <TableHeader>Employee</TableHeader>
              <TableHeader>Permission</TableHeader>
              <TableHeader>ShiftUpdate</TableHeader>
              <TableHeader>OutUpdate</TableHeader>
              <TableHeader>Holiday</TableHeader>
              <TableHeader>PageAccess</TableHeader>
              <TableHeader>UserRegister</TableHeader>
              <TableHeader>LogReport</TableHeader>
              <TableHeader>AttendanceReport</TableHeader>
              <TableHeader>MonthlyReport</TableHeader>
              <TableHeader>OverallReport</TableHeader>
              <TableHeader>OverTimeReport</TableHeader>
              <TableHeader>CompanyProfile</TableHeader>
              <TableHeader>Delete</TableHeader>
            </tr>
          </thead>
          <tbody>
        {data.map((item, index) => (
          <DataRow key={index}>
            <DataCell>{item.sno}</DataCell>
            <DataCell>{item.role}</DataCell>
            {item.permissions.map((perm, permIndex) => (
              <DataCell key={permIndex}>
                {perm ? <TickIcon /> : <CrossIcon />}
              </DataCell>
            ))}
          </DataRow>
        ))}
      </tbody>
        </DataTable>
      </DataTableContainer>
    </div>
    );
};

export const UserRegister = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Registered Successfully");
      };
    
    return (
        <div>
            <div className='page-background' >
                <div className='card p-4 login-card' style={{ height: '550px',padding: '40px',marginTop:'60px', maxWidth: '550px',margin:'auto',border:'3px solid #A2DDE0',marginLeft:'580px'}}>
                    <div className='row d-flex justify-content-center m-4'>
                        <h1 className='text-center mb-2' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>USER REGISTRATION</h1>

                        <form className='col-md-12' onSubmit={handleSubmit}>
                            <div className='d-flex row'>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>USER NAME:</label>
                                    <input type='text' className='form-control mb-3 style-input' style={{border:'1px solid black'}} required placeholder="Enter User Name"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>USER CODE:</label>
                                    <input type='tel' className='form-control mb-3 style-input' style={{border:'1px solid black'}} placeholder="Enter User Id"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>PASSWORD:</label>
                                    <input type='password' className='form-control mb-3 style-input'style={{border:'1px solid black'}} placeholder="Enter Password"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2'style={{fontSize:'17px'}} for=''>SELECT ONE ROLE:</label>
                                    <select className='form-select mb-3 style-input mt-8'style={{border:'1px solid black'}} required>
                                        <option value=''>Select One Role</option>
                                        <option value=''>Admin</option>
                                        <option value=''>Manager</option>
                                        
                                    </select>
                                    
                                </div>

                            </div>
                            <div className='row-mb-6'>
                                <div className='style'>
                                    <div className='col-md-6 text-center'>
                                <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100 " >
                                   
                                    REGISTER USER
                                </button>
                                </div> </div></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pageaccess;