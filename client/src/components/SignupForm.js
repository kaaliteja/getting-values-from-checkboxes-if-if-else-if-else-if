import React, { useRef } from "react";

function SignupForm() {
  let selectStateRef = useRef();
  let msgLabelRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let ageInputRef =useRef();

  let selectedGender;
  let salutation;
  let maritalStatus;

  let languagesKnown = {
    eng: false,
    tel: false,
    hin: false,
    tam: false,
    mal: false,
  };

  let onClickAccount = () => {
    if (selectedGender == "male") {
      salutation = "Mr.";
    } else {
      if (maritalStatus == "single") {
        salutation = "Miss.";
      } else {
        salutation = "Mrs.";
      }
    }

    console.log(languagesKnown);
    msgLabelRef.current.innerHTML = `${salutation} ${
      firstNameRef.current.value
    } ${lastNameRef.current.value} form ${
      selectStateRef.current.value
    }, your account has been created and you know ${
      languagesKnown.eng == true ? "English" : " "
    } ${languagesKnown.tel == true ? "Telugu" : " "} ${
      languagesKnown.hin == true ? "Hindi" : " "
    } ${languagesKnown.tam == true?"Tamil":" "} 
    ${languagesKnown.mal == true?"Malayalam":" "}`;
  };
  return (
    <div>
      <form>
        <h2>Signup Form</h2>
        <div>
          <label>First Name</label>
          <input ref={firstNameRef}></input>
        </div>

        <div>
          <label>Last Name</label>
          <input ref={lastNameRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label className="innerLabel">Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label className="innerLabel">Female</label>
        </div>
        <div>
          <label>Marital Staus</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label className="innerLabel">Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(event) => {
              console.log(event);
              if (event.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label className="innerLabel">Married</label>
        </div>
        <div>
          <label>State</label>
          <select ref={selectStateRef}>
            <option>Select State</option>
            <option value="AP">Andhra Pradesh</option>
            <option>Telengana</option>
            <option>Kerala</option>
            <option>Tamilnadu</option>
            <option>Gujarat</option>
            <option></option>
          </select>
        </div>
        <label>Languages</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.eng = eo.target.checked;
          }}
        ></input>
        <label className="innerLabel">English</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.tel = eo.target.checked;
          }}
        ></input>
        <label className="innerLabel">Telugu</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.hin = eo.target.checked;
          }}
        ></input>
        <label className="innerLabel">Hindi</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.tam = eo.target.checked;
          }}
        ></input>
        <label className="innerLabel">Tamil</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.mal = eo.target.checked;
          }}
        ></input>
        <label className="innerLabel">Malayalam</label>

        <div>
          <label>Age</label>
          <input ref={ageInputRef} onChange={()=>{
            let age = Number(ageInputRef.current.value);
            if(age<5){
              console.log("Infant")
            }else if(age>5 && age<=10){
              console.log("Kid")
            }else if(age>10 && age<=18){
              console.log("Teen")
            }else if(age>18 && age<=35){
              console.log("YoungAge")
            }else if(age>35 && age<=55){
              console.log("Middle Age")
            }else{
              console.log("Not a Valid value")
            }
          }}></input>
        </div>
        <div>
          <label>Email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Mobile.No</label>
          <input></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onClickAccount();
            }}
          >
            Submit
          </button>
        </div>
        <label ref={msgLabelRef} style={{ width: "500px" }}></label>
      </form>
    </div>
  );
}

export default SignupForm;
