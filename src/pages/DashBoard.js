import React, { useState } from "react";
import * as Imicons from "react-icons/im";
import * as Gricons from "react-icons/gr";
import * as tbicons from "react-icons/tb";
import { Modal, Button } from 'react-bootstrap';
import pp from '../pp.jpg'; // Adjust the path as needed

export const DashBoard = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [presentCount, setPresentCount] = useState(7); // Example: Replace with your actual count logic
    const [absentCount, setAbsentCount] = useState(3); // Example: Replace with your actual count logic
    const totalCount = presentCount + absentCount;
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleMouseEnter = (card) => setHoveredCard(card);
    const handleMouseLeave = () => setHoveredCard(null);

    const handleCardClick = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const renderPopup = () => {
        if (hoveredCard === 'present') {
            return (
                <div className="popup">
                    <h1 style={{marginLeft:'130px',marginTop:'20px'}}><Imicons.ImHappy style={{marginRight:'10px',marginBottom:'10px'}}/>{presentCount} </h1>
                </div>
            );
        } else if (hoveredCard === 'absent') {
            return (
                <div className="popup">
                    <h1 style={{marginLeft:'130px',marginTop:'20px'}}><Imicons.ImSad2 style={{ marginRight:'10px',marginBottom:'10px' }}/>{absentCount}</h1>
                </div>
            );
        } else if (hoveredCard === 'total') {
            return (
                <div className="popup">
                    <h1 style={{marginLeft:'130px',marginTop:'20px'}}> <Gricons.GrUserWorker style={{ marginRight:'10px',marginBottom:'10px'  }}/>{totalCount} </h1>
                </div>
            );
        }
        return null;
    };

    const renderTableContent = () => {
        switch (modalContent) {
            case 'present':
                return (
                    <div className="table-container">
                        <h2>Present Employees</h2>
                        <table className="table">
                            <thead>
                                <tr><th>S.No</th>
                                    <th>Employee ID</th>
                                    <th>Name</th>
                                    
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td>1</td>
    <td>Arun Kumar</td>
    <td>101</td>
    <td>Developer</td>
</tr>
<tr>
    <td>2</td>
    <td>Deepa Rani</td>
    <td>102</td>
    <td>Designer</td>
</tr>
<tr>
    <td>3</td>
    <td>Advick Vendhan</td>
    <td>103</td>
    <td>Manager</td>
</tr>
<tr>
    <td>4</td>
    <td>yaalini</td>
    <td>104</td>
    <td>Analyst</td>
</tr>
<tr>
    <td>5</td>
    <td>Vijay Raj</td>
    <td>105</td>
    <td>Developer</td>
</tr>
<tr>
    <td>6</td>
    <td>Saravanan K</td>
    <td>106</td>
    <td>Tester</td>
</tr>
<tr>
    <td>7</td>
    <td>Driti Vendhan</td>
    <td>107</td>
    <td>HR</td>
</tr>
{/* <tr>
    <td>8</td>
    <td>Manoj Kumar</td>
    <td>108</td>
    <td>Sales</td>
</tr> */}
                            </tbody>
                        </table>
                    </div>
                );
            case 'absent':
                return (
                    <div className="table-container">
                        <h2>Absent Employees</h2>
                        <table className="table">
                            <thead>
                                <tr><th>S.No</th>
                                    <th>Employee ID</th>
                                    <th>Name</th>
                                    {/* <th>Serial No</th> */}
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td>1</td>
    <td>Manoj Kumar</td>
    <td>108</td>
    <td>Sales</td>
</tr>
<tr>
    <td>2</td>
    <td>Suresh Babu</td>
    <td>109</td>
    <td>Support</td>
</tr>
<tr>
    <td>3</td>
    <td>Anitha R</td>
    <td>110</td>
    <td>Marketing</td>
</tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'total':
                return (
                    <div className="table-container">
                        <h2>All Employees</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                <th>S.No</th>
                                    <th>Employee ID</th>
                                    <th>Name</th>
                                   
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td>1</td>
    <td>Arun Kumar</td>
    <td>101</td>
    <td>Developer</td>
</tr>
<tr>
    <td>2</td>
    <td>Deepa Rani</td>
    <td>102</td>
    <td>Designer</td>
</tr>
<tr>
    <td>3</td>
    <td>Advick Vendhan</td>
    <td>103</td>
    <td>Manager</td>
</tr>
<tr>
    <td>4</td>
    <td>yaalini</td>
    <td>104</td>
    <td>Analyst</td>
</tr>
<tr>
    <td>5</td>
    <td>Vijay Raj</td>
    <td>105</td>
    <td>Developer</td>
</tr>
<tr>
    <td>6</td>
    <td>Saravanan K</td>
    <td>106</td>
    <td>Tester</td>
</tr>
<tr>
    <td>7</td>
    <td>Driti Vendhan</td>
    <td>107</td>
    <td>HR</td>
</tr>
<tr>
    <td>8</td>
    <td>Manoj Kumar</td>
    <td>108</td>
    <td>Sales</td>
</tr>
<tr>
    <td>9</td>
    <td>Suresh Babu</td>
    <td>109</td>
    <td>Support</td>
</tr>
<tr>
    <td>10</td>
    <td>Anitha R</td>
    <td>110</td>
    <td>Marketing</td>
</tr>
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="home">
            {/* <img src={pp} alt="Chart" style={{ width: '30%',height:'40%' }} /> Display the image */}
            <div>
                {/* <div className="col-md-4"> */}
                    <div
                        className='card p-4 login-card'
                        style={{
                            backgroundColor: hoveredCard === 'present' ? '#CBF1F6' : 'white',
                            height: '200px', cursor: 'pointer', borderWidth: '3px',width:'400px', border:'4px solid #A2DDE0',borderRadius:'20px'
                        }}
                        onMouseEnter={() => handleMouseEnter('present')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick('present')}
                    >
                        <div className="logo"><h2 style={{marginLeft:'80px',marginTop:'40px',fontFamily:'helvetica',fontWeight:'bold'}}>CHECKED IN</h2></div>
                        {hoveredCard === 'present' && renderPopup()}
                    {/* </div> */}
                </div>
                {/* <div className="col-4"> */}
                    <div
                        className='card p-4 login-card'
                        style={{
                            backgroundColor: hoveredCard === 'absent' ? '#CBF1F6' : 'white',
                            height: '200px', cursor: 'pointer', borderWidth: '3px', border:'4px solid #A2DDE0',borderRadius:'20px'
                        }}
                        onMouseEnter={() => handleMouseEnter('absent')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick('absent')}
                    >
                        {/* <h3>ABSENT</h3> */}<h2 style={{marginLeft:'90px',marginTop:'40px',fontFamily:'helvetica',fontWeight:'bold'}}>OFF DUTY</h2>
                        {hoveredCard === 'absent' && renderPopup()}
                    {/* </div> */}
                </div>
                {/* <div className="col-md-4"> */}
                    <div
                        className='card p-4 login-card'
                        style={{
                            backgroundColor: hoveredCard === 'total' ? '#CBF1F6' : 'white',
                            height: '200px', cursor: 'pointer', borderWidth: '3px',border:'4px solid #A2DDE0',borderRadius:'20px'
                        }}
                        onMouseEnter={() => handleMouseEnter('total')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCardClick('total')}
                    >
                        {/* <h3>TOTAL COUNT</h3> */}<h2 style={{marginLeft:'15px',marginTop:'40px',fontFamily:'helvetica',fontWeight:'bold'}}>TOTAL HEADCOUNT</h2>
                        {hoveredCard === 'total' && renderPopup()}
                    </div>
                {/* </div> */}
            </div>
            <div style={{marginBottom:'200px',marginLeft:'100px'}}>
            <img src={pp} alt="Chart" style={{ width: '100%',height:'100%',marginRight:'200px'}} /> 
            </div>
            
          
                
            {/* Modal for showing table */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent === 'present' ? 'Present Employees' : modalContent === 'absent' ? 'Absent Employees' : 'All Employees'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderTableContent()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};




