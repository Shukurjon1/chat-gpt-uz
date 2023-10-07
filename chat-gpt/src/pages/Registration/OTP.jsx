import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MailSVG from "../../assets/mail_illustration.svg";
import UserContext from "../../contexts/UserContext";

export default function OTP() {
    document.title = "Tasdiqlash | Chat-GPT";
    const loc = useLocation().search;
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const user = useContext(UserContext);

    useEffect(() => {
        if (loc) {
            if (loc.indexOf("email")) {
                setEmail(loc.split("=")[1]);
            } else setEmail(null);
        } else navigate("/login");
    }, []);

    return (
        email && (
            <div className="flex min-w-full min-h-screen justify-center items-center bg-gradient-to-br from-purple-600 to-indigo-900 p-6">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-md rounded-xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <img
                                src={MailSVG}
                                alt="Mail Image"
                                className="w-32 mb-4"
                            />
                            <div className="font-semibold text-3xl mt-5">
                                <p>E-mail Tasdiqlash</p>
                            </div>
                            <div className="flex flex-col gap-5 text-sm font-medium text-gray-400">
                                <p>
                                    Biz ushbu e-mail pochtaga tasdiqlov uchun
                                    havola yubordik: <b>{email}</b>
                                </p>
                                <Alert color="info">
                                    <FontAwesomeIcon icon={faWarning} />&nbsp;&nbsp;{" "}
                                    <b>Spam</b> bo'limini tekshirishni unutmang.
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
