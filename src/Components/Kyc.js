import React from "react";
import { Button, Form } from "react-bootstrap";

function Kyc() {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h4>KYC Details Of Clients</h4>
          <p>
            As Per SEBI Norms KYC is Mandatory for All Clients. after
            subscribing us, submit this KYC form.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <form>
            <div className="row">
              <div className="col-md-4">
                <labe>Full Name</labe>
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control-00"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="col-md-4">
                <labe>Gender</labe>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
              </div>
              <div className="col-md-4">
                <labe>Date of Birth (DOB)</labe>
                <div class="form-group">
                  <input
                    type="date"
                    name="lname"
                    class="form-control-00"
                    placeholder="Date of Birth (DOB)"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Nationality</labe>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">Indian</option>
                  <option value="2">Others</option>
                </Form.Select>
              </div>

              <div className="col-md-4">
                <labe>Mobile Number</labe>
                <div class="form-group">
                  <input
                    type="text"
                    name="lname"
                    class="form-control-00"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Alternative Mobile Number</labe>
                <div class="form-group">
                  <input
                    type="text"
                    name="lname"
                    class="form-control-00"
                    placeholder="Alternative Number"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Email Address</labe>
                <div class="form-group">
                  <input
                    type="text"
                    name="lname"
                    class="form-control-00"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Address</labe>
                <div class="form-group">
                  <input
                    type="text"
                    name="lname"
                    class="form-control-00"
                    placeholder="address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Aadhar card Uploaded file (UID)</labe>
                <div class="form-group">
                  <input
                    type="file"
                    name="lname"
                    class="form-control-00"
                    placeholder="Aadhar Number (UID)"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <labe>Pan card Uploaded file(UID)</labe>
                <div class="form-group">
                  <input
                    type="file"
                    name="lname"
                    class="form-control-00"
                    placeholder="Aadhar Number (UID)"
                    required
                  />
                </div>
              </div>
            </div>
            <Button type="submit" variant="success">
              Submit KYC
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Kyc;
