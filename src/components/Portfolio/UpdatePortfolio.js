import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function UpdatePortfolio() {
  const navigate = useNavigate();

  const [penname, setPenname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [dob, setDob] = useState("");

  const [profilePic, setProfilePic] = useState("");
  // to show choosen and existing pic
  const [dprofilePic, setDprofilePic] = useState("");

  // change profile event
  const onProfileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setDprofilePic(URL.createObjectURL(event.target.files[0]));
      setProfilePic(event.target.files[0]);
    }
  };

  //  config
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  // Fetch info
  const fetchInfo = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/writers/info",
      config
    );
    return res.data;
  };

  const getInfo = async () => {
    const infoFromServer = await fetchInfo();
    setPenname(infoFromServer.data.name);
    setDprofilePic("http://localhost:8080/" + infoFromServer.data.profilePic);

    setBirthplace(infoFromServer.data.birthPlace);
    setContact(infoFromServer.data.contact);
    setDob(infoFromServer.data.dob);
    setEmail(infoFromServer.data.email);
    setEducation(infoFromServer.data.education);
  };

  // useeffect call
  useEffect(() => {
    getInfo();
  }, []);

  //   update call
  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("penname", penname);
    data.append("email", email);
    data.append("contact", contact);
    data.append("birthPlace", birthplace);
    data.append("education", education);
    data.append("dob", dob);
    data.append("profilePic", profilePic);

    axios
      .put("http://localhost:8080/api/writers/update", data, config)
      .then((result) => {
        console.log(result);
        if (result.status) {
          toast.success("Profile updated");
          navigate("/portfolio");
        } else {
          toast.error(result.message);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong!!");
      });
  };

  return (
    <>
      <div className="container mt-2 mx-auto ">
        <div className="bg-white p-3 mb-2">
          <h3 className="text-center">Update your portfolio</h3>
        </div>
        <div className="p-3 mb-2 bg-white">
          <h5 className="">Personal Information</h5>
          <hr />

          <div className="mt-2 mx-5 shadow-sm p-4 ">
            <img
              src={dprofilePic}
              className="my-2"
              style={{ height: "10em" }}
            />

            <div class="row g-3 align-items-center mb-2 ">
              <div class="col-auto">
                <label htmlFor="displaypic" class="col-form-label">
                  Display Picture
                </label>
              </div>
              <div class="col-auto">
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={onProfileChange}
                  class="form-control"
                  id="exampleInputP1"
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  It is your display picture.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-center mb-2 ">
              <div class="col-auto">
                <label htmlFor="Penname" class="col-form-label">
                  Penname
                </label>
              </div>
              <div class="col-auto">
                <input
                  type="Text"
                  id="Penname"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  disabled
                  onChange={(e) => setPenname(e.target.value)}
                  value={localStorage.getItem("penname")}
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  It cannot be edited.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-center mb-2">
              <div class="col-auto">
                <label htmlFor="contact" class="col-form-label">
                  Contact
                </label>
              </div>
              <div class="col-auto">
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="Text"
                  id="contact"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  maxLength={10}
                  minLength={10}
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Number must be of 10 digits.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-between mb-2">
              <div class="col-auto">
                <label htmlFor="Email" class="col-form-label">
                  Email
                </label>
              </div>
              <div class="col-auto">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="Email"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Give your valid email.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-between mb-2">
              <div class="col-auto">
                <label htmlFor="dob" class="col-form-label">
                  Date of Birth
                </label>
              </div>
              <div class="col-auto">
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  id="dob"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Your date of birth in AD.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-center mb-2">
              <div class="col-auto">
                <label htmlFor="education" class="col-form-label">
                  Education
                </label>
              </div>
              <div class="col-auto">
                <input
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  type="Text"
                  id="education"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Your educational qualification.
                </span>
              </div>
            </div>
            <div class="row g-3 align-items-center mb-2">
              <div class="col-auto">
                <label htmlFor="birthplace" class="col-form-label">
                  Birthplace
                </label>
              </div>
              <div class="col-auto">
                <input
                  value={birthplace}
                  onChange={(e) => setBirthplace(e.target.value)}
                  type="Text"
                  id="birthplace"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Your place of birth.
                </span>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-danger btn-sm" onClick={submitForm}>
                Save information
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 mb-2 bg-white">
          <h5 className="">Published Books</h5>

          <div className="mt-2 mx-5 shadow-sm"></div>
        </div>
        <div className="p-3 mb-2 bg-white">
          <h5 className="">Awards</h5>

          <div className="mt-2 mx-5 shadow-sm"></div>
        </div>
      </div>
    </>
  );
}

export default UpdatePortfolio;
