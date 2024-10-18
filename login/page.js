"use client";
import { useForm } from "react-hook-form";
import "./login.css";
import { toast } from "react-toastify";
// import { loginData } from "../database/data";
// import { loginData } from "../database/data";

export default function login(){
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const savekaro = (putData) => {

    let again = loginData.find(function(logData){
      if(logData.email == putData.email){
        return true
      }
      
    })
    if(again){
      toast.error('Account is already Exist')
    }else{
      loginData.push(putData);
      toast.success('login SuccessFul')
      console.log(putData);
    }
      // toast.success('login SuccessFully')
      // console.log(putData);

  };

  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          '
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit(savekaro)}>
            <input
              {...register("email", {
                required:true,
                pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              type="text"
              id="login"
              className="fadeIn second"
              placeholder="login"
            />
             {errors.email && errors.email.type == "pattern" ? <div className="error">Please enter a valid email</div> : null}
            <input
              {...register("password", {required: true , minLength:7})}
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="password"
            />
            {errors.password && errors.password.type == "minLength" ? 
              <div className="error">Please enter Atleast 6 Number</div>
             : null}
            <input
              type="submit"
              className="fadeIn fourth"
              defaultValue="Log In"
            />
          </form>
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
