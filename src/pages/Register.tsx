import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hoc/UseAuth";
import { ReactComponent as Human } from "../assets/human_1.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";
import { ReactComponent as Hide } from "../assets/Hide.svg";
import { useDispatch } from "react-redux";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../store/user/action";

type LocationState = {
  from: {
    pathname: string;
  };
};

interface RegisterForm {
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
 const { handleSubmit, register } = useForm()
 const dispatch = useDispatch();

  const locationState = location.state as LocationState;
  const fromPage = locationState?.from?.pathname || "/";

  const onSubmit: SubmitHandler<FieldValues>= async (data) => {
  
    const formData =  data as RegisterForm;
    const email = formData.email as string;
    const password = formData.password as string;

    await dispatch(
      registerUser({
        email,
        password,
      })
    );
    navigate(fromPage, { replace: true });
  };

  return (
    <StyledWraper>
      <div className="colum">
        <h1 className="header">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <Mail className="mail" />
            <label>
              <input 
               {...register("email", { required: true })}
              className="input1" type="text" placeholder="Email" />
            </label>
          </div>

          <div className="string1">Enter your email</div>

          <div className="password">
            <Hide className="sauron" />
            <label>
              <input
              {...register("password", { required: true })}
                className="input2"
                type="password"
                placeholder="password"
              />
            </label>
          </div>

          <div className="string2">Enter your password</div>

          <div className="password">
            <Hide className="sauron" />
            <label>
              <input
              {...register("password2", { required: true })}
                className="input2"
                type="password"
                placeholder="password"
              />
            </label>
          </div>

          <div className="string3">Repeat your password without errors</div>

          <button type="submit" className="button">
            Sing Up
          </button>
        </form>
      </div>
      <Human className="human" />
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  margin-bottom: 154px;
  height: 522px;
  width: 1280px;

  .colum {
    padding-left: 80px;
  }

  .header {
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    font-style: bold;
    font-weight: 700;
  }

  .email {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 60px;
  }

  .mail {
    margin: auto;
    width: 64px;
  }

  .input1 {
    background-color: transparent;
    width: 349px;
    height: 64px;
    border: 0px;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    color: #0d1821;
  }

  .string1 {
    width: 126px;
    height: 24px;
    margin-top: 10px;
    color: #344966;
  }

  .password {
    display: flex;
    height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 30px;
  }

  .sauron {
    margin: auto;
    width: 64px;
  }

  .input2 {
    background-color: transparent;
    width: 349px;
    height: 64px;
    border: 0px;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    color: #0d1821;
  }

  .string2 {
    width: 158px;
    height: 24px;
    margin-top: 10px;
    color: #344966;
  }
  .string3 {
    width: 286px;
    height: 24px;
    margin-top: 10px;
    color: #344966;
  }

  .button {
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    width: 166px;
    height: 44px;
    background: #344966;
    border-radius: 16px;
    margin-top: 60px;
    color: #f0f4ef;
  }

  .human {
    padding-left: 146px;
    width: 612px;
    height: 522px;
  }
`;

export default Register;
