import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import "../App.css";

const Card = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            setIsFocused(false);
        }
    };

    return (
        <div className="border-[1px] border-solid border-[#dadce0] rounded-md w-[448px] py-[40px]">
            <div className="px-[100px] text-center">
                <img
                    src={Logo}
                    alt="google-logo"
                    className="w-[75px] mx-auto mb-3"
                />
                <h1 className="text-[24px] text-[rgb(32,33,36)] mb-2">
                    Sign in
                </h1>
                <p>Use your Google Account</p>
            </div>
            <div className="mx-auto text-center mt-[30px] relative">
                <input
                    type="text"
                    className="border-gray-300 border w-[366px] h-[54px] rounded pl-[13px]"
                    placeholder=" "
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <label
                    className={`absolute left-[55px] mt-[14px] bg-white ${
                        isFocused
                            ? "text-[#007bff] -top-[20px] ml-[-8px] text-xs focused px-[4px]"
                            : ""
                    }`}
                >
                    Email or phone
                </label>
            </div>
            <div className="mx-[41px] mt-[8px] text-[14px]">
                <a href="#" className="my-4 text-[rgb(26,115,232)] font-medium">
                    Forgot email?
                </a>
                <p className="text-[rgb(95,99,104)] mt-[50px] w-[365px]">
                    Not your computer? Use Guest mode to sign in privately.{" "}
                    <br></br>{" "}
                    <a href="#" className="text-[rgb(26,115,232)] font-medium">
                        Learn more
                    </a>
                </p>
            </div>
            <div className="mx-[41px] text-[14px]  flex justify-between mt-[40px] mb-[30px]">
                <button className="text-[#1A73E8] hover:text-blue-900">
                    Create account
                </button>
                <button className="w-[80px] h-[36px] rounded text-white bg-blue-600 hover:bg-blue-700">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Card;
