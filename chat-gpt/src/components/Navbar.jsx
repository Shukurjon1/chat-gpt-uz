import {
    faBook,
    faHouse,
    faInfoCircle,
    faMessage,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import BlankProfilePicture from "../assets/blank_profile_picture.png";
import ChatGPTImage from "../assets/logo.png";
import ChatGPTLogo from "../assets/chat_gpt.svg";
import CustomLink from "./CustomLink";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function PageNavbar(props) {
    const unsubscribe = () => {
        window.open("/auth/logout", "_self");
    };

    const { user } = useContext(UserContext);
    return (
        user && (
            <Navbar fluid={true} rounded={false} className="shadow-lg">
                <Navbar.Brand href="https://chat-gpt.uz">
                    <img src={ChatGPTImage} className="mr-3 h-9" alt="Logo" />
                    <span className="relative self-center whitespace-nowrap">
                        <img
                            src={ChatGPTLogo}
                            className="w-28 md6x:w-20"
                            alt="Chat GPT Logo"
                        />
                    </span>
                </Navbar.Brand>
                <div className="flex gap-2 md:order-2 md7x:gap-1">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <img
                                alt="User settings"
                                src={user?.photos[0]?.value}
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full md7x:w-8 md7x:h-8 md7x:mt-1"
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block font-bold text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.emails[0]?.value}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item><Link to="/settings">Sozlamalar</Link></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={unsubscribe}>
                            Chiqish
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className="-ml-0 md:-ml-14 ">
                    <CustomLink
                        url="/"
                        isActive={props.activePage === "home"}
                        text="Bosh Sahifa"
                        icon={
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="text-xl mr-2"
                            />
                        }
                    />

                    <CustomLink
                        url="https://khumoyun-dev.uz/"
                        text="Haqida"
                        icon={
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-xl mr-2"
                            />
                        }
                    />

                    <CustomLink
                        url="/help/instructions"
                        icon={
                            <FontAwesomeIcon
                                icon={faBook}
                                className="text-xl mr-2"
                            />
                        }
                        text="Yo'riqnoma"
                    />

                    <CustomLink
                        url="/contact"
                        icon={
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="text-xl mr-2"
                            />
                        }
                        text="Aloqa"
                    />
                </Navbar.Collapse>
            </Navbar>
        )
    );
}
