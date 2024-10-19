"use client";
import React, { useState } from "react";
import { FaAngry } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { FaSadCry } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Button } from "@nextui-org/react";

const Reactions = () => {
  let [isReactionDivOpen, setIsReactionDivOpen] = useState(false);
  let [isColor, setIsColor] = useState(false);

  let [isSize, setIsSize] = useState(false);
  return (
    <div>
      {isReactionDivOpen && (
        <div className="bg-black p-2 m-2 shadow-lg border border-gray flex w-[15%] rounded-md">
          <AiFillLike
            color={isColor ? "blue" : "red"}
            size={isSize ? "40" : "80"}
            onMouseOver={() => {
              setIsColor(true);
              setIsSize(false);
            }}
            onMouseLeave={() => {
              setIsColor(false);
              setIsSize(true);
            }}
          />
          <FaSadCry
           
            color={isColor ? "blue" : "red"}
            size={isSize ? "40" : "80"}
            onMouseOver={() => {
              setIsColor(true);
              setIsSize(false);
            }}
          
          />
          <FaAngry size={40} color="red" />
          <IoHappy size={40} color="red" />
          <FaHeart size={40} color="red" />
        </div>
      )}

      <Button
        onMouseEnter={() => setIsReactionDivOpen(true)}
        className=""
        onClick={() => setIsColor(true)}
      >
        {" "}
        <AiFillLike size={40} color={isColor ? "blue" : "red"} /> Like
      </Button>
    </div>
  );
};

export default Reactions;
