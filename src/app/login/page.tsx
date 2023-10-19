"use client";

import loginImage from "../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <div className="">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   place-items-center align-middle min-h-screen">
        <div className="">
          <Image
            className=" "
            src={loginImage}
            width={500}
            style={{ width: "20rem" }}
            alt="login page"
          ></Image>
        </div>
        <div className="text-sm ">
          <h1
            className="text-lg font-semibold"
            style={{
              margin: "15px 0px",
            }}
          >
            Login To Your Account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <button className="btn btn-primary">Login</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
