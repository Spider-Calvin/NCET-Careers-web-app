import React, { useState , useEffect , useRef } from "react";
import "./form.scss";
import { urlFor, client } from "../../client";

const Form = () => {
  const [formData, setFormData] = useState({
    fimg : {},
    email: "",
    message: "",
  });


  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [imageAsset, setImageAsset] = useState();
  const [fileAsset, setFileAsset] = useState();
  const [imageUploaded, setimageUploaded] = useState(true);

  const ServicesRef = useRef(null);


   const conOneAppear = () => {
     setLoading1(true);
      setLoading2(false);
       setLoading3(false);
       console.log("con1")
   };

   const conTwoAppear = () => {
      setLoading1(false);
      setLoading2(true);
      setLoading3(false);
       console.log("con2");
   };

    const conThreeAppear = () => {
       setLoading1(false);
       setLoading2(false);
       setLoading3(true);
       console.log("con3");
    };

     const conOnScroll = () => {
      window.scrollTo({
        top: ServicesRef.current.offsetTop,
        behavior: "smooth",
      });
     };



  const { fn , f1 , f2 , f3 , f4 , f5 , f6 , f7 ,fimg ,fsig ,f8 ,f9, f10, f11, f12, f13 , f14 , f15 , f16, f17 ,f18 ,f19 ,f20,f21,f22,f23,f24,f25,f26,f27,f28,f29,f30,f31,f32,f33,f34,f35,f36,f37,f38,f39,f40,f41,f42,f43,f44,f45,f46,f47,f48,f49,f50,f51,f52} = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  



  const handleSubmit = (e) => {

     setLoading(true);
    e.preventDefault();
    
    const job_form = {
      _type: "job_form",
      f: formData.fn,
      f1: formData.f1,
      f2: formData.f2,
      f3: formData.f3,
      f4: formData.f4,
      f5: formData.f5,
      f6: formData.f6,
      f7: formData.f7,
      f8: formData.f8,
      f9: formData.f9,
      f10: formData.f10,
      f11: formData.f11,
      f12: formData.f12,
      f13: formData.f13,
      f14: formData.f14,
      f15: formData.f15,
      f16: formData.f16,
      f17: formData.f17,
      f18: formData.f18,
      f19: formData.f19,
      f20: formData.f20,
      f21: formData.f21,
      f22: formData.f22,
      f23: formData.f23,
      f24: formData.f24,
      f25: formData.f25,
      f26: formData.f26,
      f27: formData.f27,
      f28: formData.f28,
      f29: formData.f29,
      f30: formData.f30,
      f31: formData.f31,
      f32: formData.f32,
      f33: formData.f33,
      f34: formData.f34,
      f35: formData.f35,
      f36: formData.f36,
      f37: formData.f37,
      f38: formData.f38,
      f39: formData.f39,
      f40: formData.f40,
      f41: formData.f41,
      f42: formData.f42,
      f43: formData.f43,
      f44: formData.f44,
      f45: formData.f45,
      f46: formData.f46,
      f47: formData.f47,
      f48: formData.f48,
      f49: formData.f49,
      f50: formData.f50,
      f51: formData.f51,
      f52: formData.f52,
      fimg: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
      fsig: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: fileAsset._id,
        },
      },
    };

    console.log(formData.f1)

    client
      .create(job_form)
      .then(() => {
        setLoading(false);
        console.log("form submitted")
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  } 



  const uploadImage = (e) => {
    console.log("upload img called")
     setimageUploaded(false
      );

    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      // setWrongImageType(false);
      // setLoading(true);
      client.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          console.log("image uploaded succesfully")
          setImageAsset(document);
          setimageUploaded(true)
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
    } else {
      // setLoading(false);
      // setWrongImageType(true);
    }
  };


  const uploadResume = (e) => {
    console.log("Resume Upload is Called");
    setimageUploaded(false);

    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      console.log("wrong file type");
    } else {
      // setWrongImageType(false);
      // setLoading(true);
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document_file) => {
          console.log("file uploaded succesfully");
          setFileAsset(document_file);
          setimageUploaded(true);
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
    }
  };


  

  return (
    <>
      <div className="form_container">
        <h2 className="head-text">
          <p>JOB APPLICATION FORM</p>
        </h2>

        {!isFormSubmitted ? (
          <form onSubmit={handleSubmit} className="form">
            <div className="dept_con">
              <div className="dept_select">
                <label className="lable">
                  {" "}
                  SELECT THE POSITION APPLYING FOR{" "}
                </label>
                <select
                  onChange={handleChangeInput}
                  name="f1"
                  value={f1}
                  required
                >
                  <option value="">select</option>
                  <option value="Professor"> Professor</option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="Associate Professor">
                    {" "}
                    Associate Professor
                  </option>
                  <option value="Lab Technician"> Lab Technician</option>
                  <option value="Dean Academic"> Deans Academic </option>
                </select>
              </div>
            </div>
            <div className="first_box">
              <div className="first_box1">
                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Enter Your Name"
                      name="fn"
                      value={fn}
                      required
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Fathers Name"
                      name="f2"
                      required
                      value={f2}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Mothers Name"
                      name="f3"
                      required
                      value={f3}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Designation"
                      name="f4"
                      required
                      value={f4}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Department"
                      name="f5"
                      required
                      value={f5}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Date of birth dd-mm-yy"
                      name="f6"
                      required
                      value={f6}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="first_box2">
                <div>
                  <div className="input">
                    Upload Your Passport Size Image
                    <input
                      className="p-text"
                      type="file"
                      required
                      onChange={uploadImage}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    Upload Your RESUME
                    <input
                      className="p-text"
                      type="file"
                      name="fsig"
                      required
                      onChange={uploadResume}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="textarea_con">
              <div className="input full_width_area">
                <textarea
                  className="p-text"
                  placeholder="Address with Postal Code"
                  value={f8}
                  required
                  name="f8"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            {/*========================================================================== */}
            <div className="first_box">
              <div className="first_box1">
                <div>
                  <div className="input">
                    <p> Enter your Mail id</p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="xyz@gmail.com"
                      name="f9"
                      required
                      value={f9}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p> Religion </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Type Here"
                      name="f11"
                      value={f11}
                      required
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p> Caste </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Type Here"
                      name="f12"
                      value={f12}
                      required
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p> Category </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Type Here"
                      name="f13"
                      value={f13}
                      required
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              <div className="first_box1">
                <div>
                  <div className="input">
                    <p> Mobile Number </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="+91 0000000000"
                      name="f10"
                      required
                      value={f10}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p> PAN Number </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="xxxxxxxxx"
                      name="f14"
                      required
                      value={f14}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p>Adhar Number </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      name="f15"
                      required
                      value={f15}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="input">
                    <p> Passport Number </p>
                    <input
                      className="p-text"
                      type="text"
                      placeholder="x-x-x-x-x-x-x"
                      name="f16"
                      required
                      value={f16}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="edu_details_con">
              <div className="edu_contnet_div">
                <br />
                <br />
                <div className="edu_btn_div">
                  <div className="edu_btn_innerdiv">
                    <div
                      onClick={conOneAppear}
                      className={loading1 ? "edu_btn" : "edu_btn_off"}
                    >
                      <p>UNDERGRADUATE</p>
                    </div>
                    <div
                      className={loading2 ? "edu_btn" : "edu_btn_off"}
                      onClick={conTwoAppear}
                    >
                      <p>POSTGRADUATE</p>
                    </div>
                    <div
                      className={
                        loading3 ? "edu_btn phd_btn" : "edu_btn_off phd_btn"
                      }
                      onClick={conThreeAppear}
                    >
                      <p> Ph. D</p>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  className={loading1 ? "edu_con1" : "edu_con1  con_disaaper"}
                >
                  {" "}
                  <div className="first_box">
                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Year Of Passing</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f17"
                            required
                            value={f17}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> University </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f18"
                            value={f18}
                            required
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Institution Name </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f19"
                            required
                            value={f19}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> % of Marks </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f20"
                            required
                            value={f20}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Mode (Reg/ PT/Distance) </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f21"
                            required
                            value={f21}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Specialization</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f22"
                            required
                            value={f22}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Projects Guided</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f23"
                            required
                            value={f23}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <br />
                        <br />
                        <div className="edu_submit">
                          <div
                            className="edu_btn phd_btn"
                            onClick={conTwoAppear}
                          >
                            <p>Next</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={loading2 ? "edu_con1" : "edu_con1  con_disaaper"}
                >
                  <div className="first_box">
                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Year Of Passing</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f24"
                            required
                            value={f24}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> University </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f25"
                            required
                            value={f25}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Institution Name </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f26"
                            required
                            value={f26}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> % of Marks </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f27"
                            required
                            value={f27}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Mode (Reg/ PT/Distance) </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f28"
                            required
                            value={f28}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Specialization</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f29"
                            required
                            value={f29}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Projects Guided</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f30"
                            required
                            value={f30}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <br />
                        <br />
                        <div className="edu_submit">
                          <div
                            className="edu_btn phd_btn"
                            onClick={conThreeAppear}
                          >
                            <p>Next</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={loading3 ? "edu_con1" : "edu_con1  con_disaaper"}
                >
                  {" "}
                  <div className="first_box">
                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Year Of Passing</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f31"
                            value={f31}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> University </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f32"
                            value={f32}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Institution Name </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f33"
                            value={f33}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> % of Marks </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f34"
                            value={f34}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Mode (Reg/ PT/Distance) </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f35"
                            value={f35}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Specialization</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f36"
                            value={f36}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p>Projects Guided</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f37"
                            value={f37}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <br />
                        <br />
                        <div className="edu_submit">
                          <div
                            className="edu_btn phd_btn"
                            onClick={conOnScroll}
                          >
                            <p>Submit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div ref={ServicesRef}></div>
                </div>
              </div>
            </div>
            <div className="exp_con">
              <div className="edu_contnet_div1">
                <br />
                <br />
                <div className="exp_banner">
                  <div className="edu_btn">
                    <p>Experience Details In years</p>
                  </div>
                </div>
                <br />
                <div className="edu_con1">
                  {" "}
                  <div className="first_box">
                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Teachning</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            required
                            name="f38"
                            value={f38}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Research </p>
                          <input
                            className="p-text"
                            required
                            type="text"
                            placeholder="Type Here"
                            name="f39"
                            value={f39}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p> Industry</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            required
                            name="f40"
                            value={f40}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Total Experience in Years </p>
                          <input
                            className="p-text"
                            required
                            type="text"
                            placeholder="Type Here"
                            name="f41"
                            value={f41}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div className="edu_submit">
                    <div className="edu_btn phd_btn">
                      <p>Submit</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="exp_con">
              <div className="edu_contnet_div1">
                <div className="exp_banner">
                  <br />
                  <br />
                  <div className="edu_btn">
                    <p>Other Details</p>
                  </div>
                </div>
                <br />
                <div className="edu_con1">
                  {" "}
                  <div className="first_box">
                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p>No. of Publication in National Conference</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f42"
                            value={f42}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> No. of Publication in International Conference</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f43"
                            value={f43}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Professional Memberships</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f46"
                            value={f46}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Awards</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f47"
                            value={f47}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> No of books Published</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f49"
                            value={f49}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> IPRs/ Patents</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f50"
                            value={f50}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="first_box1">
                      <div>
                        <div className="input edu_background">
                          <p>No. of Publication in National Journal</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f44"
                            value={f44}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> No. of Publication in International Journal </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f45"
                            value={f45}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Grants fetched </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f48"
                            value={f48}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Consultancy Activities </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f51"
                            value={f51}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> Interaction with Professional Institutions</p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f52"
                            value={f52}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="input edu_background">
                          <p> PF Number </p>
                          <input
                            className="p-text"
                            type="text"
                            placeholder="Type Here"
                            name="f7"
                            value={f7}
                            onChange={handleChangeInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div className="edu_submit">
                    <div className="edu_btn phd_btn">
                      <p>Submit</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {imageUploaded ? (
              <button className="p-text">
                {loading ? "Submitting..." : "SUBMIT APPLICATION"}
              </button>
            ) : (
              <button type="submit" className="p-text">
                LOADING
              </button>
            )}
          </form>
        ) : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch! <br /> will get back to you soon
            </h3>
          </div>
        )}

        <div className="open_in_desk">
          <h2 className="head-text">
            open this application in desktop to fill this application
            <p>Small devices not supported</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Form
