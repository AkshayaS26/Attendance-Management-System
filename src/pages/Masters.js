import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import * as ciicons from "react-icons/ci";
import * as mdicons from "react-icons/md";
const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted Successfully!');
  };

const DataTable = styled.table`
  width: 63%;
  border-collapse: collapse;
  margin-top: 40px;
  margin-left: 400px;
 
`;

const DataRow = styled.tr`
  border-bottom: 1px solid #ddd;

`;

const DataCell = styled.td`
  padding: 12px 8px;
  text-align: center;
  font-size: 14px;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
//   background-color: thistle;
 
`;
// const formcontrol = styled.input` 
// border:1px solid black;
// `;


export const Masters = () => {
    return (
        <div className="masters">
            <h1>Masters</h1>
        </div>
    );
};


export const DesignationMaster = () => {

    return (
        <div>
            <div className='page-background' >
                <div className='card p-4 login-card' style={{ height: '300px', padding: '40px', marginTop: '60px', maxWidth: '900px',border:'3px solid #A2DDE0',margin:'auto',marginRight:'170px'}}>
                    <div className='row d-flex justify-content-center m-4'>
                        <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>DESIGNATION REGISTRATION</h1>

                        <form className='col-md-12' onSubmit={handleSubmit}>
                            <div className='d-flex row'>
                                <div className='col-6'>
                                    <label className='text-left' for=''>DEPARTMENT NAME:</label>
                                    <select className='form-select style-input mt-8' style={{border:'1px solid black'}} required>
                                        <option value=''>Select Department</option>
                                        <option value=''>all</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='text-left' for=''>DESIGNATION NAME:</label>
                                    <input type='text' className='form-control style-input'  style={{border:'1px solid black'}} required></input>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className="d-flex  mt-4">
                                    <div className='col-md-6'>
                                        <label className='form-check-label mx-2 mt-2' for=''>STATUS:</label>


                                        <div className='form-check form-check-inline  mx-2  ' style={{ marginRight: '40px' }}>
                                            <input type='radio' className='form-check-input  ' name='status' value='active' id='active' style={{border:'1px solid black'}} ></input>
                                            <label className='form-check-label' For='active'>ACTIVE</label>
                                        </div>
                                        <div className='form-check form-check-inline' style={{ marginRight: '40px' }}>
                                            <input type='radio' className='form-check-input' name='status' value='inactive' id='inactive'  style={{border:'1px solid black'}}></input>
                                            <label className='form-check-label' For='inactive'>INACTIVE</label>
                                        </div>
                                    </div>


                                    <div className='col-6 mt-2'>

                                        <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100 " >
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <DataTable className="table">
                    <thead>
                        <tr>
                            <TableHeader style={{ backgroundColor: ' #CBF1F6' }}>S.No</TableHeader>
                            <TableHeader style={{ backgroundColor: '#CBF1F6' }}>Designation</TableHeader>
                            <TableHeader style={{ backgroundColor: '#CBF1F6' }}>Status</TableHeader>
                            <TableHeader style={{ backgroundColor: '#CBF1F6' }}>Update</TableHeader>
                            <TableHeader style={{ backgroundColor: '#CBF1F6' }}>Delete</TableHeader>

                        </tr>
                    </thead>
                    <tbody>

                    <DataRow>
                            <DataCell>1</DataCell>
                            <DataCell>Developer</DataCell>
                            <DataCell>Active</DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline/></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>2</DataCell>
                            <DataCell>Designer</DataCell>
                            <DataCell>Inactive</DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline/></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>3</DataCell>
                            <DataCell>Manager</DataCell>
                            <DataCell>Active</DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline/></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>4</DataCell>
                            <DataCell>Analyst</DataCell>
                            <DataCell>Inactive</DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline/></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>5</DataCell>
                            <DataCell>Tester</DataCell>
                            <DataCell>Active</DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline/></DataCell>
                        </DataRow>

                    </tbody>
                </DataTable>
            </div>
        </div>
    );
};
export const EmployeeMaster = () => {
    return (
        <div className="masters">
            <div className='page-background' >
                <div className='card p-4 login-card' style={{ height: '760px', width: '100%', padding: '40px', marginTop: '10px', minWidth: '1150px', border:'3px solid #A2DDE0', marginLeft:'30px' }}>
                    <div className='row d-flex justify-content-center m-4'>
                        <h1 className='text-center mb-6' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>EMPLOYEE REGISTRATION</h1>

                        <form className='col-md-12' onSubmit={handleSubmit}>
                            <div className='d-flex row'>
                                <div className='col-4' style={{}} >
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>EMPLOYEE CODE:</label>
                                    <input type='tel' className='form-control mb-1 style-input'  style={{border:'1px solid black'}} placeholder="Eg:A123" required></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>EMPLOYEE NAME:</label>
                                    <input type='text' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}placeholder="Eg:john"  ></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>DOB:</label>
                                    <input type='date' className='form-control mb-1 style-input' style={{border:'1px solid black'}} ></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>MOBILE NO:</label>
                                    <input type='tel' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}placeholder="Eg:80XX-09XX-00" required></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>EMAIL:</label>
                                    <input type='email' className='form-control mb-1 style-input' style={{border:'1px solid black'}} placeholder="Eg:john@gmail.com"  ></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>DATE OF JOIN:</label>
                                    <input type='date' className='form-control mb-1 style-input' style={{border:'1px solid black'}} ></input>
                                </div>

                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>REFERENCE NUMBER:</label>
                                    <input type='tel' className='form-control mb-1 style-input' style={{border:'1px solid black'}} placeholder="Enter Reference No" required></input>
                                </div>
                                <div className='col-4'>
                                    <label className='form-check-label mb-1 mx-5' for='' style={{ fontSize: '14px', marginTop: '20px' }}>GENDER:</label>
                                    <div className='form-check form-check-inline  mx-5  '>
                                        <input type='radio' className='form-check-input mt-3  ' name='status' value='male' id='male' style={{ fontSize: '23px',border:'1px solid black' }} ></input>
                                        <label className='form-check-label' For='male' style={{ fontSize: '14px' }}>MALE</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <input type='radio' className='form-check-input mt-3 ' name='status' value='female' id='female' style={{ fontSize: '23px',border:'1px solid black' }} ></input>
                                        <label className='form-check-label' For='female' style={{ fontSize: '14px' }}>FEMALE</label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>ESI NUMBER:</label>
                                    <input type='tel' className='form-control mb-1 style-input' style={{border:'1px solid black'}} ></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>UAN NUMBER:</label>
                                    <input type='tel' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>AADHAR NUMBER:</label>
                                    <input type='tel' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}placeholder="Eg:80XX-09XX-00XX" required></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>RESIDENTIAL ADDRESS:</label>
                                    <input type='text' className='form-control mb-1 style-input'   style={{border:'1px solid black'}}></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>STATE:</label>
                                    <input type='text' className='form-control mb-1 style-input' style={{border:'1px solid black'}}  ></input>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>COMPANY NAME:</label>
                                    <select className='form-select mb-1 style-input mt-8'  style={{border:'1px solid black'}} required>
                                        <option value=''>Select Company</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>BRANCH NAME:</label>
                                    <select className='form-select mb-1 style-input mt-8' style={{border:'1px solid black'}} required>
                                        <option value=''>Select Branch</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>DIVISION NAME:</label>
                                    <select className='form-select mb-1 style-input mt-8'  style={{border:'1px solid black'}} required>
                                        <option value=''>Select Division</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>DEPARTMENT NAME:</label>
                                    <select className='form-select mb-1 style-input mt-8'  style={{border:'1px solid black'}} required>
                                        <option value=''>Select Department</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>DESIGNATION NAME:</label>
                                    <select className='form-select mb-1 style-input mt-8' style={{border:'1px solid black'}} required>
                                        <option value=''>Select Designation</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <label className='text-left' style={{ fontSize: '14px' }} for=''>EMPLOYEE PHOTO:</label>
                                    <input type='file' className='form-control mb-1 style-input'  style={{border:'1px solid black'}}></input>
                                </div>
                                <div className='col-4'>
                                    <button type="reset" className="btn btn-info btn-submit btn-custom-size  w-100 " style={{ marginTop: '47px' }}>
                                        RESET
                                    </button>
                                </div>
                                <div className='col-4'>
                                    <button type="submit" className="btn btn-info btn-submit btn-custom-size  w-100 " style={{ marginTop: '47px' }}>
                                        SUBMIT
                                    </button>
                                </div>
                                <div className='col-3' style={{ marginTop: '30px' }}>

                                    <input type='text' className='form-control style-input'style={{border:'1px solid black'}} placeholder="Enter Employee Name" required></input>
                                </div>
                                <div className='col-3' style={{ marginTop: '30px' }}>

                                    <input type='tel' className='form-control style-input'style={{border:'1px solid black'}} placeholder="Enter Employee Code" ></input>
                                </div>
                                <div className='col-3' style={{ marginTop: '30px' }}>

                                    <select className='form-select style-input mt-8'style={{border:'1px solid black'}} required>
                                        <option value=''>Select Status</option>
                                        <option value=''>Active</option>
                                        <option value=''>Inactive</option>

                                    </select>

                                </div>
                                <div className='col-3'>
                                    <button type="submit" className="btn btn-dark btn-submit btn-custom-size mx-2 w-100 " style={{ marginTop: '30px' }}>
                                        SEARCH
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <DataTable className="table " style={{ margin:'auto',marginTop:'100px',width:'100%' }}>
                    <thead>
                        <tr>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>S.No</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Employee Code</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Employee Name</TableHeader>
                            
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Status</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Photo</TableHeader>

                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Edit</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Delete</TableHeader>

                        </tr>
                    </thead>
                    <tbody>

                    <DataRow>
                            <DataCell>1</DataCell>
                            <DataCell>A123</DataCell>
                            <DataCell>John Doe</DataCell>
                            
                            <DataCell>Active</DataCell>
                            <DataCell><mdicons.MdPhotoLibrary /></DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>2</DataCell>
                            <DataCell>B456</DataCell>
                            <DataCell>Jane Smith</DataCell>
                            
                            <DataCell>Inactive</DataCell>
                            <DataCell><mdicons.MdPhotoLibrary /></DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>3</DataCell>
                            <DataCell>C789</DataCell>
                            <DataCell>Emily Johnson</DataCell>
                            
                            <DataCell>Active</DataCell>
                            <DataCell><mdicons.MdPhotoLibrary /></DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>4</DataCell>
                            <DataCell>D012</DataCell>
                            <DataCell>Michael Brown</DataCell>
                           
                            <DataCell>Inactive</DataCell>
                            <DataCell><mdicons.MdPhotoLibrary /></DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>5</DataCell>
                            <DataCell>E345</DataCell>
                            <DataCell>Sarah Wilson</DataCell>
                            
                            <DataCell>Active</DataCell>
                            <DataCell><mdicons.MdPhotoLibrary /></DataCell>
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>

                    </tbody>
                </DataTable>
            </div>
        </div>
    );
};

export const HolidayMaster = () => {
    return (
        <div>
            <div className='page-background' >
                <div className='card p-4 login-card' style={{ height: '350px', padding: '40px', marginTop: '10px', maxWidth: '900px', border:'3px solid #A2DDE0',marginLeft:'420px' }}>
                    <div className='row d-flex justify-content-center m-4'>
                        <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>HOLIDAY REGISTRATION</h1>

                        <form className='col-md-12' onSubmit={handleSubmit}>
                            <div className='d-flex row'>
                                <div className='col-12'>
                                    <label className='text-left' for=''>HOLIDAY DATE:</label>
                                    <input type='date' className='form-control style-input' style={{border:'1px solid black'}} required></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left' style={{marginTop:'15px'}} for=''>HOLIDAY NAME:</label>
                                    <input type='text' className='form-control style-input' style={{border:'1px solid black'}} placeholder="Enter The Holiday"></input>
                                </div>
                            </div>
                            <div className='row-mb-6'>
                                <div className='style'>
                                    <div className='col-md-4 text-center' style={{marginTop:'15px'}}>
                                        <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100 ">
                                            REGISTER HOLIDAY
                                        </button>
                                    </div> </div></div>
                        </form>
                    </div>
                </div>
                <DataTable className="table">
                    <thead>
                        <tr>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6'}}>S.No</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Holiday Name</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Holiday Date</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}> Edit</TableHeader>
                            <TableHeader style={{ fontSize: '14px', backgroundColor: '#CBF1F6' }}>Delete</TableHeader>

                        </tr>
                    </thead>
                    <tbody>

                    <DataRow>
                            <DataCell>1</DataCell>
                            <DataCell>New Year</DataCell>
                            <DataCell>2024-01-01</DataCell>
                            
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>2</DataCell>
                            <DataCell>Christmas</DataCell>
                            <DataCell>2023-12-25</DataCell>
                            
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>3</DataCell>
                            <DataCell>Independence Day</DataCell>
                            <DataCell>2024-07-04</DataCell>
                            
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>4</DataCell>
                            <DataCell>Labor Day</DataCell>
                            <DataCell>2024-05-01</DataCell>
                            
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>
                        <DataRow>
                            <DataCell>5</DataCell>
                            <DataCell>Thanksgiving</DataCell>
                            <DataCell>2023-11-23</DataCell>
                           
                            <DataCell><ciicons.CiEdit /></DataCell>
                            <DataCell><mdicons.MdDeleteOutline /></DataCell>
                        </DataRow>

                    </tbody>
                </DataTable>
            </div>
        </div>
    );
};