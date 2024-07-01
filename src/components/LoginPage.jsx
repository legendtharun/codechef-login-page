import { useState } from "react"
import "../index.css"
import "../output.css"
import "./sample2.css"
import {Link} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineLock } from "react-icons/md";
export default function Loginpage() {
  const [invalid, setinvalid] = useState({ bg: "border-gray-500", msg: "" ,msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"})
  const [emailvalid, setemailvalid] = useState({
    bg: "border-gray-500",
    msg: "",
     msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"
  })
  const [phonevalid, setphonevalid] = useState({
    bg: "border-gray-500",
    msg: "",
    msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"
  })
  const [passvalid, setpassvalid] = useState({
    bg: "border-gray-500",
    msg: "",
    msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"
  })
  
 
  const handleChange=()=>{
    if (document.getElementById("firstname").value === "") {
      setinvalid({ bg: "border-red-500", msg: "First name is required!!", msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200"})
    } else {
      setinvalid({ bg: "border-green-500", msg: "First name is given.", msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200" })
    }
  }
  const emailChange=()=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let email_details = document.getElementById("email").value
    if (!re.test(String(email_details).toLowerCase())) {
      setemailvalid({ bg: "border-red-500", msg: "Email is invalid!!" ,msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200"})
    } else {
      setemailvalid({ bg: "border-green-500", msg: "Email is valid.", msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200" })
    }
  }
  const phoneChange=()=>{
    const phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/
    
      let phonenumber = document.getElementById("phone").value
      if (!phonePattern.test(phonenumber)) {
        setphonevalid({ bg: "border-red-500", msg: "Invalid Phone Number!!",msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" })
      } else {
        setphonevalid({ bg: "border-green-500", msg: "Valid Phone Number.", msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200" })
      }
  }
  
  const passChange=()=>{
    let passvalue= document.getElementById("pass").value
    let cpassvalue= document.getElementById("cpass").value
    if (passvalue.length < 8) {
      setpassvalid({
        bg: "border-red-500",
        msg: "Password is invalid. It should be atleast 8 characters in length!!",
        msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
      })
  } else if (!/[a-z]/.test(passvalue)) {
    setpassvalid({
      bg: "border-red-500",
      msg: "Password is invalid. Password must contain atleast one Lowercase letter!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
  } else if (!/[A-Z]/.test(passvalue)) {
    setpassvalid({
      bg: "border-red-500",
      msg: "Password is invalid. Password must contain atleast one Uppercase letter!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
  } else if (!/[0-9]/.test(passvalue)) {
    setpassvalid({
      bg: "border-red-500",
      msg: "Password is invalid. Password must contain atleast one number!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
    
  } else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passvalue)){
    setpassvalid({
      bg: "border-red-500",
      msg: "Password is invalid. Password must contain atleast one special character!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
  }
  else if(cpassvalue!==passvalue){
    setpassvalid({
      bg: "border-red-500",
      msg: "Passwords does not match!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
    
  }else{
    setpassvalid({ bg: "border-green-500", msg: "Password is valid." ,msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200"})
  }
  }
  
  return (
    <>
      <div className="w-full flex justify-center items-center h-full overflow-x-hidden whole sm:bg-gradient-lighten sm:bg-blend-lighten relative z-10 sm:pb-[5%] pt-[15%] sm:pt-[5%]">
        <div className="bg-image-7  absolute h-full w-full top-0 blur-[2px] whole sm:hidden"></div>
        <div className="sm:w-[500px] sm:flex loginbox  rounded-tl-[180px] rounded-tr-[15px] flex-col align-middle sm:rounded-[50px] p-[15px] pl-[25px] pr-[25px] bg-white  relative z-12 shadow-lg ">
          <div className="bg-cover bg-center sm:bg-image-1 absolute  w-[200px] h-[120px] top-[250px] left-[-160px] -rotate-[25deg] inset-0 -z-[1] blur-[1px]"></div>
          <div className="bg-cover bg-center sm:bg-image-2 absolute  w-[200px] h-[120px] top-[420px] left-[480px] rotate-[40deg] inset-0 -z-[1] blur-[1.5px] scale-[130%]"></div>
          <div className="bg-cover bg-center sm:bg-image-3 absolute  w-[160px] h-[160px] top-[200px] left-[475px] rotate-[40deg] inset-0 -z-[1] blur-[1.5px] scale-[80%]"></div>
          <div className="bg-cover bg-center sm:bg-image-4 absolute  w-[200px] h-[160px] top-[100px] left-[-170px] inset-0 -z-[1] scale-[90%]"></div>
          <div className="bg-cover bg-center sm:bg-image-5 absolute  w-[100px] h-[100px] top-[90px] left-[480px] inset-0 -z-[1]"></div>
          <div className="bg-cover bg-center sm:bg-image-6 absolute  w-[100px] h-[100px] top-[460px] left-[-90px] inset-0 -z-[1] scale-[180%]"></div>
          <div className="flex flex-col items-center">
            <div className="bg-codechef-logo w-[120px] h-[120px] bg-cover bg-center"></div>
            <h1 className="font-bold text-2xl text-blue-500 ">SIGN UP</h1>
          </div>
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-4">
            Name
          </label>
          <div className="grid  w-full grid-cols-2">
            <div className="">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                className={
                  "p-1 m-2 border-2 border-spacing-1 w-[85%] sm:w-auto rounded-lg mt-0 ml-6 mr-6 focus:outline-none" +
                  " " +
                  `${invalid.bg+" "+invalid.focuscolor}`
                
                }
                onChange={handleChange}
              ></input>
              <label
                className={" text-sm font-light  grid-col-1 ml-6 "+`${invalid.msgcolor}`}
                style={{}}
                id="firstnamewarning"
              >
                {invalid.msg}
              </label>
            </div>
            <div className="">
              <input
                type="text"
                id="secondname"
                placeholder="Last Name"
                className="p-1 m-2 mt-0 border-2 border-spacing-1 w-[85%] sm:w-auto border-gray-500 rounded-lg  mr-6 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              ></input>
            </div>
          </div>
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Email
          </label>
          <div className="min-w-full">
            <div className="">
              <CgProfile className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="text"
                placeholder="some.mail@university.com"
                id="email"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6 w-[89.5%]  focus:outline-none" +
                  " " +
                  `${emailvalid.bg+" "+emailvalid.focuscolor}`
                }
                onChange={emailChange}
                
              ></input>
              <label
                className={" text-sm font-light  grid-col-1 ml-6 "+`${emailvalid.msgcolor}`}
                style={{}}
                id="emailwarning"
              >
                {emailvalid.msg}
              </label>
            </div>
          </div>
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Phone Number
          </label>
          <div className="min-w-full">
            <div className="">
            <RiContactsBook3Line className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="text"
                placeholder="+91 ***** *****"
                id="phone"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6 w-[89.5%] focus:outline-none" +
                  " " +
                  `${phonevalid.bg}`+" "+`${phonevalid.focuscolor}`
                }
                onChange={phoneChange}
              ></input>
              <label
                className={" text-sm font-light  grid-col-1 ml-6 "+`${phonevalid.msgcolor}`}
                style={{}}
                id="phonewarning"
              >
                {phonevalid.msg}
              </label>
            </div>
          </div>
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Password
          </label>
          <div className="min-w-full">
            <div className="">
            <MdOutlineLock className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="password"
                placeholder="********"
                id="pass"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6 w-[89.5%] focus:outline-none" +
                  " " +
                  `${passvalid.bg}`+" "+`${passvalid.focuscolor}`
                }
                onChange={passChange}
              ></input>
            </div>
          </div>
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Confirm Password
          </label>
          <div className="min-w-full">
            <div className="">
            <MdOutlineLock className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="password"
                placeholder="********"
                id="cpass"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6  w-[89.5%] focus:outline-none" +
                  " " +
                  `${passvalid.bg}`+" "+`${passvalid.focuscolor}`
                }
                onChange={passChange}
              ></input>
              <div className="ml-6 p-0.5">
              <label
                className={" text-sm font-light  grid-col-1 text-wrap "+`${passvalid.msgcolor}`}
                style={{}}
                id="passwarning"
              >
                {passvalid.msg}
              </label></div>
            </div>
          </div>
          <div className="p-3 pl-[25px] pr-[25px] w-full">
            <button
              className="bg-blue-500 text-white rounded-3xl p-2 w-full hover:bg-blue-400 hover:-translate-y-1 font-bold text-2xl"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://legendtharun.github.io/codechef-login-page/';
                }}
            >
              Sign Up
            </button>
            <div className="p-2 mt-1 mb-2 font-normal w-full  flex align-center justify-center">
              <span className="mr-auto">Already have an account?</span>
              <Link to="/" className="text-blue-500  ml-auto font-bold hover:text-blue-400">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
