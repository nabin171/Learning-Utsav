'use client'
import React from "react";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "../Components/Footer/page";
import CustomNavbar from "../Components/NavBar/page";

const RiderSignup = () => {
  // Define validation schema
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Too short")
      .required("Phone is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    vehicleType: Yup.string().required("Please select a vehicle type"),
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <CustomNavbar></CustomNavbar>

      {/* Main form content */}
      <div className="flex-grow p-8 flex justify-center items-center bg-gray-100">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            vehicleType: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values); // Handle form submission
          }}
        >
          {({ isValid }) => (
            <Form className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
              <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                Sign Up as a Rider
              </h2>

              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <Field
                  name="fullName"
                  placeholder="John Doe"
                  className="input-field"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="input-field"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <Field
                  name="phone"
                  placeholder="9876543210"
                  className="input-field"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="********"
                  className="input-field"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="********"
                  className="input-field"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Vehicle Type */}
              <div className="mb-4">
                <label className="block text-gray-700">Vehicle Type</label>
                <Field as="select" name="vehicleType" className="input-field">
                  <option value="" label="Select vehicle type" />
                  <option value="Car" label="Car" />
                  <option value="Bike" label="Bike" />
                </Field>
                <ErrorMessage
                  name="vehicleType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className={`w-full py-2 px-4 text-white font-semibold rounded-lg 
                  ${
                    isValid
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RiderSignup;
