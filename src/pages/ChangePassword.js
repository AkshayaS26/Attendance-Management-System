import React from "react";

export const ChangePassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Changed Successfully!");
      };
    return (
        <div>
            <div className='page-background' >
                <div className='card p-4 login-card' style={{ height: '630px',padding: '40px',marginTop:'60px', maxWidth: '550px', border:'3px solid #A2DDE0',margin:'auto',marginLeft:'590px'}}>
                    <div className='row d-flex justify-content-center m-4'>
                        <h1 className='text-center mb-2' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>CHANGE PASSWORD</h1>

                        <form className='col-md-12' onSubmit={handleSubmit}>
                            <div className='d-flex row'>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>USERNAME:</label>
                                    <input type='text' className='form-control mb-3 style-input' style={{border:'1px solid black'}} required placeholder="Enter UserName"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>REGISTERED EMAIL ID:</label>
                                    <input type='email' className='form-control mb-3 style-input' style={{border:'1px solid black'}} placeholder="Enter Email-Id"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>OLD PASSWORD:</label>
                                    <input type='password' className='form-control mb-3 style-input' style={{border:'1px solid black'}} placeholder="Enter Password"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>NEW PASSWORD:</label>
                                    <input type='password' className='form-control mb-3 style-input' style={{border:'1px solid black'}} placeholder="Enter Password"></input>
                                </div>
                                <div className='col-12'>
                                    <label className='text-left mb-2' for=''>CONFIRM PASSWORD:</label>
                                    <input type='password' className='form-control mb-3 style-input' style={{border:'1px solid black'}} placeholder="Enter Password"></input>
                                </div>
                               

                            </div>
                            <div className='row-mb-6'>
                                <div className='style'>
                                    <div className='col-md-6 text-center'>
                                <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-2 w-100 " >
                                   
                                    SUBMIT
                                </button>
                                </div> 
                               </div></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};