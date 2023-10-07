import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleExclamation,
    faEye,
    faEyeSlash,
    faInfo,
    faInfoCircle,
    faStop,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NotebookSVG from "../../assets/notebook_illustration.svg";
import { Alert, Spinner } from "flowbite-react";
import Instead from "../../components/Instead";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import BlankProfileImage from "../../assets/blank_profile_picture.png";

export default function SignUp() {
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hintEnabled, setHintEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        setErrorMessage("");
        setLoading(false);
    }, [username, password, email]);

    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleHintToggle = () => {
        setHintEnabled((_lastHintEnabled) => !_lastHintEnabled);
    };

    // write a function that checks whether the email is valid or not
    const isEmailValid = (email) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isUsernameValid = (username) => {
        return username.length >= 2 && username.length <= 15;
    };

    const google = () => {
        window.open("/auth/google", "_self");
    };

    const isPasswordValid = (password) => {
        return password.length >= 6 && password.length <= 10;
    };

    const handleSubmit = (_event) => {
        _event.preventDefault();

        setLoading(true);

        if (!isEmailValid(email)) {
            return setErrorMessage("E-mail xato");
        }
        if (!isUsernameValid(username)) {
            return setErrorMessage("Ism juda qisqa yoki juda uzun");
        }
        if (!isPasswordValid(password)) {
            return setErrorMessage("Kod juda qisqa yoki juda uzun");
        }
        fetch("/auth/register", {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
                email: email,
                name: username,
                password: password,
            }),
        })
            .then((response) => {
                return response.json().then((json) => {
                    if (response.status !== 200) {
                        setLoading(false);
                        return setErrorMessage(json.message);
                    }
                    window.open(
                        "/verification?email=" + json.user.email,
                        "_self"
                    );
                    setLoading(false);
                });
            })
            .catch((_error) => {
                setLoading(false);
                setErrorMessage(_error.message);
            });
    };

    document.title = "Ro'yhatdan O'tish | Chat-GPT";

    return (
        // bg-gradient-to-br from-purple-600 to-indigo-900
        // bg-pattern bg-repeat-space bg-[length:70px_40px] rotate-45
        <div className="flex gap-8 p-6 min-w-full min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 justify-evenly items-center mdx:flex-col">
            <img src={NotebookSVG} alt="Login Illustration" className=" w-72" />
            <div className="max-w-lg my-10 bg-white p-8 rounded-xl shadow-lg ">
                <h1 className="text-3xl font-medium text-center sm:text-left">
                    Ro'yhatdan o'tish
                </h1>
                <p className="text-slate-500 mt-1 text-center sm:text-left">
                    Assalomu alaykum, xush kelibsiz! 👋
                </p>
                {/* // RADIOACTIVE */}
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
                <form onSubmit={handleSubmit} className="my-10 mt-8">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="name">
                            <p className="font-medium text-slate-700 pb-2">
                                Ism
                            </p>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleUsernameChange}
                                className="w-full transition py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Ismingizni kiriting"
                                minLength={2}
                                maxLength={15}
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">
                                E-mail pochta
                            </p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleEmailInputChange}
                                className="w-full transition py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="E-mail manzilingizni kiriting"
                                required
                            />
                        </label>
                        <label htmlFor="password" className="relative">
                            <p className="font-medium text-slate-700 pb-2">
                                Kod
                            </p>
                            <input
                                id="password"
                                name="password"
                                onChange={handlePasswordChange}
                                type={hintEnabled ? "text" : "password"}
                                className="w-full transition py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Parol o'ylab toping"
                                minLength={6}
                                required
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
                        {errorMessage && (
                            <Alert color="failure">
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    className=" mr-2 text-lg"
                                />
                                {errorMessage}
                            </Alert>
                        )}
                        <label>
                            <Alert color="info">
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    className=" mr-2 text-lg"
                                />
                                Ro'yhatdan o'tish orqali siz{" "}
                                <Link
                                    to="/privacy-policy"
                                    className="text-indigo-600 font-medium hover:underline"
                                >
                                    Maxfiylik siyosati
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mx-1 inline-block"
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
                                </Link>
                                ga rozilik bildirgan bo'lasiz
                            </Alert>
                        </label>
                        <button
                            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 transition shadow-lg hover:shadow inline-flex space-x-2 items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <Spinner color="info" />
                            ) : (
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
                            )}
                            <span>Ro'yhatdan o'tish</span>
                        </button>
                        <p className="text-center">
                            Avval ro'yhatdan o'tganmisiz? &nbsp;
                            <Link
                                to="/login"
                                className="text-indigo-600 font-medium inline-flex space-x-1 items-center hover:underline"
                            >
                                <span>Kirish </span>
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
