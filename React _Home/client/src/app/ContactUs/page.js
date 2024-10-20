

import { Avatar, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Textarea } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Footer/page";
import CustomNavbar from "../Components/NavBar/page";

const contactUs = () => {
  return (
    <div>
  <CustomNavbar></CustomNavbar>

      <div className=" pt-28 pl-20 flex justify-between">
        <div className="flex flex-col gap-7">
          <p className="text-4xl font-bold text-left">Contact Us</p>
          <div className="flex flex-col gap-8">
            <div className="">
              <Input
                type="name"
                placeholder="Name "
                className="max-w-xs w-96 "
                id="name"
                name="name"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <FaCircleUser />
                  </div>
                }
              />
            </div>

            <div>
              <Input
                type="Email"
                placeholder="Email "
                className="max-w-xs w-96"
                id="Email"
                name="email"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <MdEmail />
                  </div>
                }
              />
            </div>
            <Textarea
              label="Message"
              placeholder="Enter your Message"
              className="max-w-xs"
            />
          </div>

          <div className="bg-gray-800 rounded-xl w-48 flex justify-center  ">
            <Button
              as={Link}
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
              href="/#"
              variant="flat"
            >
              Send Message
            </Button>
          </div>
        </div>

        <div className="pic ">
          <img src="/contact.webp" width={720} height={840}></img>
        </div>
      </div>

      <div className="pt-20">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default contactUs;
