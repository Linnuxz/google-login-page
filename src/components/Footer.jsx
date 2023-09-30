import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Languages } from "../constants";

const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const listStyle = {
        maxHeight: "35rem",
        overflowY: "auto",
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsMenuOpen(false);
    };

    return (
        <div className="text-left text-[rgb(60,64,67)] text-[12px] relative flex justify-between">
            <div>
                <button
                    onClick={toggleMenu}
                    className="w-[180px] justify-between flex items-center"
                >
                    {selectedLanguage ? selectedLanguage.name : "Language"}
                    {isMenuOpen ? <VscTriangleUp /> : <VscTriangleDown />}
                </button>
                {isMenuOpen && (
                    <div
                        className="mt-2 w-[200px] ml-[-15px] bg-white border border-gray-300 shadow-2xl rounded bottom-[100%] absolute mb-[13px]"
                        style={{ ...listStyle }}
                    >
                        <ul className="py-1">
                            {Languages.map((language) => (
                                <li>
                                    <button
                                        onClick={() =>
                                            handleLanguageSelect(language)
                                        }
                                        className={`w-full text-left px-4 py-4 hover:bg-gray-100 ${
                                            selectedLanguage === language
                                                ? "bg-[rgb(190,212,251)]"
                                                : ""
                                        }`}
                                    >
                                        {language.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <ul className="flex gap-6">
                    <li className="cursor-pointer">
                        <a href="#">Help</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#">Terms</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
