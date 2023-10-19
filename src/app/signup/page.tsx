"use client";

import signupImage from "../../assets/signup.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import RootLayout from "@/Layouts/RootLayout";
import { useCreateUserMutation } from "@/redux/features/auth/authApi";
type FormValues = {
  id: string;
  password: string;
  userName: string;
  name: string;
  email: string;

  role: string;
  contact: string;
  address: string;
};

const SignUpPage = () => {
  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      //   console.log(data);
      const newUser = {
        userName: data.userName,
        name: data.name,
        email: data.email,
        password: data.password,
        role: "client",
        contact: data.contact,
        address: data.address,
      };
      console.log(newUser);
      const response: any = await createUser(data);
      console.log(response);
      if ("data" in response) {
        // Handle the success case
        console.log("Signup success:", response.data);
        // You can redirect or show a success message here
      } else if ("error" in response) {
        // Handle the error case
        console.error("Signup failed:", response.error);
        // You can show an error message to the user
      }
      console.log(response);
      return response;
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div className="">
      <RootLayout>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   place-items-center align-middle min-h-screen">
          <div className="">
            <Image
              className=" "
              src={signupImage}
              width={500}
              style={{ width: "20rem" }}
              alt="signup page"
            ></Image>
          </div>
          <div className="text-sm  ">
            <h1
              className="text-lg font-semibold"
              style={{
                margin: "15px 0px",
              }}
            >
              Create A New Account
            </h1>
            <div>
              <Form submitHandler={onSubmit}>
                <div>
                  <FormInput
                    name="userName"
                    type="text"
                    size="small"
                    label="User Name"
                  />
                </div>
                <div>
                  <FormInput
                    name="name"
                    type="text"
                    size="small"
                    label="Full Name "
                  />
                </div>
                <div
                  style={{
                    margin: "15px 0px",
                  }}
                >
                  <FormInput
                    name="email"
                    type="email"
                    size="small"
                    label="Email"
                  />
                </div>
                <div
                  style={{
                    margin: "15px 0px",
                  }}
                >
                  <FormInput
                    name="password"
                    type="password"
                    size="small"
                    label="Password"
                  />
                </div>
                {/* <div style={{ margin: "15px 0px" }}>
                  <FormInput
                    name="role"
                    type="text"
                    size="small"
                    label="Role"
                    value={"client"}
                  />
                </div> */}
                <div style={{ margin: "15px 0px" }}>
                  <FormInput
                    name="contact"
                    type="text"
                    size="small"
                    label="Contact No"
                  />
                </div>
                <div style={{ margin: "15px 0px" }}>
                  <FormInput
                    name="address"
                    type="text"
                    size="small"
                    label="Address"
                  />
                </div>

                <button className="btn btn-primary btn-sm">Signup</button>
              </Form>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default SignUpPage;
