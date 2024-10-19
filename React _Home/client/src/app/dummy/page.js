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
  let [isLiked, setIsLiked] = useState(false);
  let [isSmall,SetIsSmall]=useState(false);
  return (
    <div>
      {isReactionDivOpen && (
        <div className="bg-black p-2 m-2 shadow-lg border border-gray flex w-[15%] rounded-md">
          <AiFillLike
            size={isSmall ? "40" : "80"}
            color={isLiked ? "blue" : "red"}
            onMouseOver={() => SetIsSmall(true)}
          />
          <FaSadCry size={40} color="#ffcc33" />
          <FaAngry size={40} color="#f64d52" />
          <IoHappy size={40} color="#ffcc4d" />
          <FaHeart size={40} color="red" />
        </div>
      )}

      <Button
        onMouseEnter={() => setIsReactionDivOpen(true)}
        onClick={() => setIsLiked(true)}
        className=""
      >
        {" "}
        <AiFillLike size={40} color={isLiked ? "blue" : "red"} /> Like
      </Button>
    </div>
  );
};

export default Reactions;
