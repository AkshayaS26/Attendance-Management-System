import React, { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(5); // Number of profiles per page

  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, form]);
    setForm({});
    alert('Registration successful!');
  };

  // Handle delete profile
  const handleDeleteProfile = (indexToDelete) => {
    setSubmittedData(submittedData.filter((_, index) => index !== indexToDelete));
  };

  // Calculate current profiles to display based on pagination
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = submittedData.slice(indexOfFirstProfile, indexOfLastProfile);

  return (
    <div className="profile">
      <div className="page-background">
        <div
          className="card p-4 login-card"
          style={{
            height: "500px",
            width: "100%",
            padding: "40px",
            marginTop: "60px",
            maxWidth: "750px",
            border:'3px solid #A2DDE0',
            margin: "auto",
            marginLeft:'220px'
          }}
        >
          <div className="row d-flex justify-content-center m-4">
            <h1
              className="text-center"
              style={{
                fontWeight: "bold",
                marginTop: "3vh",
                margin: "auto",
                padding: "10px",
              }}
            >
              PROFILE REGISTRATION
            </h1>

            <form className="col-md-10" onSubmit={handleFormSubmit}>
              <div className="d-flex row justify-content-center">
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="companyName">
                    ENTER COMPANY NAME:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1 style-input"
                    style={{border:'1px solid black'}}
                    placeholder="Eg: Cognizant"
                    name="companyName"
                    value={form.companyName || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="companyAddress">
                    ADDRESS:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1 style-input"
                    placeholder="Eg: Anna Nagar"
                    style={{border:'1px solid black'}}
                    name="companyAddress"
                    value={form.companyAddress || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="address">
                    FULL ADDRESS:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1 style-input"
                    placeholder="Eg: 5th street...."
                    style={{border:'1px solid black'}}
                    name="address"
                    value={form.address || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="pincode">
                    PIN CODE:
                  </label>
                  <input
                    type="tel"
                    className="form-control mb-1 style-input"
                    style={{border:'1px solid black'}}
                    placeholder="Eg: 600030"
                    name="pincode"
                    value={form.pincode || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="state">
                    STATE:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1 style-input"
                    style={{border:'1px solid black'}}
                    placeholder="Eg: TamilNadu"
                    name="state"
                    value={form.state || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="district">
                    DISTRICT:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1 style-input"
                    style={{border:'1px solid black'}}
                    placeholder="Eg: Chennai"
                    name="district"
                    value={form.district || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-5">
                  <label className="text-left" style={{ fontSize: "14px" }} htmlFor="companyPhoto">
                    COMPANY PHOTO:
                  </label>
                  <input
                    type="file"
                    className="form-control mb-1 style-input"
                    style={{border:'1px solid black'}}
                    name="companyPhoto"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-5">
                  <button
                    type="submit"
                    className="btn btn-info btn-submit btn-custom-size w-100"
                    style={{ marginTop: "47px" }}
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {currentProfiles.length > 0 && (
          <div>
            <table className="table" style={{width:'90%',marginLeft:' 110px',marginTop:'40px'}}>
              <thead>
                <tr >
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>S.No</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Company Name</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Address1</th> 
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Address</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Pincode</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>State</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>District</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Company Photo</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Update</th>
                  <th style={{ fontSize: '14px',backgroundColor:'#CBF1F6' }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentProfiles.map((data, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: '14px' }}>{indexOfFirstProfile + index + 1}</td>
                    <td style={{ fontSize: '14px' }}>{data.companyName}</td>
                    <td style={{ fontSize: '14px' }}>{data.companyAddress}</td>
                    <td style={{ fontSize: '14px' }}>{data.address}</td>
                    <td style={{ fontSize: '14px' }}>{data.pincode}</td>
                    <td style={{ fontSize: '14px' }}>{data.state}</td>
                    <td style={{ fontSize: '14px' }}>{data.district}</td>
                    <td>
                      {data.companyPhoto && (
                        <img
                          src={URL.createObjectURL(data.companyPhoto)}
                          alt="Company"
                          width="50"
                          height="50"
                        />
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-warning btn-sm"
                        onClick={() => alert("Update functionality not implemented")}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDeleteProfile(indexOfFirstProfile + index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;