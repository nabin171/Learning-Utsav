"use client";
import React from "react";
import {
  Badge,
  Avatar,
  Image,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { RadioGroup, Radio, Checkbox } from "@nextui-org/radio";
import Link from "next/link";
import CustomNavbar from "../component/NavBar/page";
const Register = () => {
  const registerUser = async (values) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      values
    );
    if (data) alert("registered successfully");
  };

  return (
    <form onSubmit className="">
      <CustomNavbar></CustomNavbar>

      <div className="rounded-2xl container flex  hsl(var(--nextui-background) / 0.7) justify-center items-center min-h-screen  min-w-full shadow-lg ">
        <div className="box flex flex-col  gap-5 p-4 bg-gray-100 ">
          <div className="flex justify-between">
            <img
              src="/mylogo.png"
              width={90}
              height={30}
              className="rounded"
            ></img>
            <h2 className=" pt-4 heading  text-right text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1">
              Express Rides
            </h2>
          </div>

          <p className="freetrial text-center text-black-100">
            Let's get started with your 30 days free trial
          </p>
          <div className="flex flex-col gap-5 ">
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs"
              id="email"
              name="email"
            />

            <Input
              isRequired
              type="username"
              label="Username"
              placeholder="Enter your username"
              className="max-w-xs"
              id="username"
              name="username"
            />

            <div>
              <Input
                isRequired
                type="password"
                label="Password"
                className="max-w-xs"
                placeholder="Create your password"
                id="password"
                name="password"
              />
            </div>
            <Input
              classNames="py-2"
              isRequired
              type="password"
              label="Confirm your Password"
              className="max-w-xs"
              placeholder="Enter your password"
              id="confirmpassword"
              name="confirmpassword"
            />
          </div>

          <Select
            name="gender"
            label="Gender"
            onChange={(e) => formik.setFieldValue("gender", e.target.value)}
          >
            <SelectItem key="Male">Male</SelectItem>
            <SelectItem key="Female">Female</SelectItem>
            <SelectItem key="Others">Others</SelectItem>
          </Select>

          <div className="bg-gray-800 rounded-xl flex justify-center">
            <Button
              as={Link}
              className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
              href="/login"
              variant="flat"
            >
              Sign Up
            </Button>
          </div>

          <p className="freetrial text-center text-black-100">
            Already have an account yet?{" "}
            <span className=" text-blue-600 underline ">
              <Link href="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <div></div>
    </form>
  );
};

export default Register;
