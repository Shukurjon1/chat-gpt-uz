import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleExclamation,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import LoginSVG from "../../assets/login_illustration.svg";
import Instead from "../../components/Instead";
import { Alert, TextInput } from "flowbite-react";
import UserContext from "../../contexts/UserContext";
import BlankProfilePhoto from "../../assets/blank_profile_picture.png";
import Envelope from "../../assets/envelope-solid.svg";

export default function Login() {
    const [hintEnabled, setHintEnabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const google = () => {
        window.open("/auth/google", "_self");
    };

    useEffect(() => {
        setError("");
    }, [email, password]);

    const handleHintToggle = () => {
        setHintEnabled((_lastHintEnabled) => !_lastHintEnabled);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (_event) => {
        _event.preventDefault();
        fetch("/auth/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => {
                return response.json().then((_) => {
                    if (response.status !== 200) {
                        return setError(_.message);
                    }
                    setUser({
                        displayName: _.user.name,
                        name: {
                            givenName: _.user.name,
                        },
                        emails: [{ value: _.user.email }],
                        photos: [{ value: BlankProfilePhoto }],
                        verified: _.user.verified,
                    });
                    navigate("/");
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    document.title = "Kirish | Chat-GPT";

    return (
        <div className="flex p-6 gap-6 min-w-full min-h-screen justify-evenly items-center bg-gradient-to-br from-purple-600 to-indigo-900 mdx:flex-col">
            <img
                src={LoginSVG}
                alt="Login Illustration"
                className="w-96 md4x:w-72"
            />
            <div className="lg:w-5/12 mdx:w-9/12 md3x:w-full md:w-7/12 my-10 bg-white p-8 rounded-xl shadow-lg ">
                <h1 className="text-4xl font-medium text-center sm:text-left">
                    Kirish
                </h1>
                <p className="text-slate-500 mt-1 text-center sm:text-left">
                    Assalomu alaykum, xush kelibsiz! 👋
                </p>

                <div className="my-5">
                    <button
                        className="w-full text-center py-3 my-3 px-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                        onClick={google}
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            className="w-6 h-6"
                            alt="Google Logo Image"
                        />{" "}
                        <span>Google orqali kirish</span>
                    </button>
                </div>
                <br />
                <Instead />
                <form onSubmit={handleLogin} className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">
                                E-mail pochta
                            </p> 
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full transition py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="E-mail manzilingizni kiriting"
                                onChange={handleEmail}
                            />
                        </label>
                        <label htmlFor="password" className="relative">
                            <p className="font-medium text-slate-700 pb-2">
                                Kod
                            </p>
                            <input
                                id="password"
                                name="password"
                                type={hintEnabled ? "text" : "password"}
                                className="w-full transition py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Parolni kiriting"
                                onChange={handlePassword}
                            />
                            <div
                                className="absolute top-0 right-0 text-indigo-700"
                                onClick={handleHintToggle}
                            >
                                <FontAwesomeIcon
                                    icon={hintEnabled ? faEye : faEyeSlash}
                                />
                            </div>
                        </label>
                        {error && (
                            <Alert color="failure">
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className=" mr-2 text-lg"
                                />
                                {error}
                            </Alert>
                        )}
                        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                            <div>
                                <label htmlFor="remember" className="">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                                        defaultChecked
                                    />
                                    &nbsp; Meni eslab qol
                                </label>
                            </div>
                            <div>
                                <Link
                                    to="#"
                                    className="font-medium text-indigo-600 hover:underline"
                                >
                                    Kod esingizdan chiqdimi?
                                </Link>
                            </div>
                        </div>

                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 transition shadow-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>
                            <span>Kirish</span>
                        </button>
                        <p className="text-center">
                            Hisobingiz yo'qmi? &nbsp;
                            <Link
                                to="/sign-up"
                                className="text-indigo-600 font-medium inline-flex space-x-1 items-center hover:underline"
                            >
                                <span>Ro'yhatdan o'tish </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
