import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Tooltip } from "flowbite-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {
    useEffect(() => {
        document.querySelectorAll(".share-el").forEach((el) => {
            el.addEventListener("click", () => {
                if (navigator.share) {
                    navigator.share({
                        title: "Chat-GPT",
                        url:
                            "https://chat-gpt.uz" + props.to ||
                            "https://chat-gpt.uz",
                        text: props.text,
                    });
                } else {
                    window.open(
                        `tg://msg_url?url=${"https://chat-gpt.uz" + props.to
                        }&text=Chat-GPT`,
                        "_blank"
                    );
                }
            });
        });
    }, []);

    return (
        <div className="bg-white rounded-lg transition shadow-lg self-start hover:shadow">
            <img
                className="object-cover w-full rounded-lg lg:w-full"
                src={props.img}
                alt={props.alt}
            />

            <div className="flex flex-col -mt-10 justify-between px-4 gap-2 lg:px-0 lg:gap-0 py-8 lg:mx-4">
                <div
                    className="text-xl font-semibold text-gray-800 flex flex-wrap gap-2"
                >
                    <p>{props.title}</p>

                    {
                        props.badge && <Badge color={props.error ? "failure" : props.success ? "success" : "warning"} className="justify-self-start">{props.badge}</Badge>
                    }
                </div>
                <p className="text-gray-600 mt-2">{props.content}</p>

                <div className="flex justify-between items-center mt-4 md8x:flex-col md8x:gap-4">
                    <div className="px-4 select-none py-2 w-5/6 md8x:w-full mdx:self-center text-center bg-indigo-700 transition shadow hover:shadow-lg cursor-pointer text-white rounded self-start capitalize">
                        <Link to={props.to || "/"}>Xizmatdan Foydalanish</Link>
                    </div>
                    <div className="w-1/6 flex justify-end">
                        <Tooltip content="Yaqinlaringiz bilan ulashing!">
                            <FontAwesomeIcon
                                icon={faShare}
                                className="bg-orange-600 mt-1 share-el py-2 px-2 shadow focus:shadow-lg rounded-full text-white cursor-pointer"
                            />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}
