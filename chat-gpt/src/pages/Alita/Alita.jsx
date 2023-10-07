import { useEffect, useState } from "react";
import Message from "./components/Message";
import Typed from "react-typed";
import axios from "axios";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Alita() {
    const [messages, setMessages] = useState([
        {
            bot: "Hi Hugo! How have you been?",
        },
    ]);
    const [loading, setLoading] = useState(false);

    const scrollToBottom = (element) => {
        element.scroll({ top: element.scrollHeight, behavior: "smooth" });
    };

    useEffect(() => {
        var objDiv = document.getElementById("scroll");
        scrollToBottom(objDiv);
        document.title = "Chat | Chat-GPT"
    }, [messages]);

    const [message, setMessage] = useState("");

    const sendMessage = async (message, _bot) => {
        setLoading(true);

        document.getElementById("base-input").value = "";

        if (message.length < 1 || message.length > 150) return;

        let text = "";

        let allMessages = messages
            .map((message) => {
                text = "\nAlita: " + message.bot;

                if (message.user) {
                    text = "\nHugo: " + message.user + ".";
                }

                return text;
            })
            .join(" ");

        if (_bot) {
            setMessages((_oldMessages) => [
                ..._oldMessages,
                {
                    bot: message,
                },
            ]);
            allMessages += "\nAlita: " + message;
        } else {
            setMessages((_oldMessages) => [
                ..._oldMessages,
                {
                    user: message,
                },
            ]);
            allMessages += "\nHugo: " + message + ".";
        }

        try {
            const actualMessage = await axios.post(
                "/api/chat-alita",
                {
                    prompt: allMessages + "\nAlita:",
                }
            );

            actualMessage.data = actualMessage.data.replace(/Alita:/g, "");

            setMessages((_oldMessages) => [
                ..._oldMessages,
                {
                    bot: actualMessage.data.trim(),
                },
            ]);

        } catch (_error) {
            console.log(_error);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage(message);
        }
    };

    const handleClick = (e) => {
        sendMessage(message);
    };

    return (
        <div
            style={{ backgroundColor: "#2E2F39" }}
            className="w-full h-screen overflow-y-auto scrollbar-none overflow-x-hidden"
            id="scroll"
        >
            <div className="hero px-8 my-10 flex justify-between gap-3 items-center md3x:flex-col text-gray-200">
                <div className="flex gap-3 items-center md3x:flex-col">
                    <img src={Logo} alt="Logo" className="w-16" />
                    <div className="flex flex-col mb-1">
                        <h1 className="text-4xl mb-2 inline-block md3x:text-center">
                            Chat-GPT
                        </h1>
                        <p className="text-gray-400 md3x:text-center">
                            Ushbu chatda siz "Hugo" ya'ni Alita'ning yigiti ro'lini o'ynaysiz.
                        </p>
                    </div>
                </div>
                <button className="px-4 py-2 rounded bg-indigo-500">
                    <Link to="/">
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="mr-2 shadow-lg"
                        />
                        Bosh Sahifa
                    </Link>
                </button>
            </div>
            <div className="flex flex-col pb-14">
                {messages.map((_message, id) => {
                    return (
                        <Message key={id} user={_message.user}>
                            {id === messages.length - 1 && _message.bot ? (
                                <Typed
                                    strings={[_message.bot || _message.user]}
                                    typeSpeed={30}
                                    showCursor={false}
                                    cursorChar=""
                                />
                            ) : (
                                <span>{_message.bot || _message.user}</span>
                            )}
                        </Message>
                    );
                })}
            </div>
            <div className="fixed border-t border-t-gray-100 w-full text-white left-0 bottom-0">
                <input
                    type="text"
                    id="base-input"
                    placeholder="Hey! ahvollaring qalay?"
                    className="outline-none border-none  text-md block w-full py-4 px-10"
                    style={{ backgroundColor: "#3E3F4D", opacity: loading ? "0.5" : "1" }}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                />
            </div>
        </div>
    );
}
