import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "flowbite-react";

export default function Message({ children, user }) {
    let el = null;
    const copyText = (_text) => {
        let element = document.createElement("input");
        element.value = _text;
        element.style.opacity = 0;
        element.style.position = "fixed";
        element.style.pointerEvents = "none";
        element.style.top = "0px";
        element.style.left = "0px";
        document.body.appendChild(element);
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);
    };

    if (user) {
        el = (
            <div
                className="py-8 md8x:py-5 md8x:px-16 px-20 pr-18 block text-gray-100 overflow-x-hidden relative"
                style={{ lineHeight: "1.8rem" }}
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className="absolute text-lg left-0 pl-9 md8x:pl-6 mt-1"
                />
                {children}
            </div>
        );
    } else {
        el = (
            <div
                style={{ backgroundColor: "#3E3F4D", lineHeight: "1.8rem" }}
                className="py-8 md8x:py-5 md8x:px-16 px-20 pr-18 block relative text-gray-100 overflow-x-hidden"
            >
                <FontAwesomeIcon
                    icon={faRobot}
                    className="absolute text-lg left-0 pl-9 md8x:pl-6 mt-1"
                />
                {children}
                <FontAwesomeIcon
                    icon={faCopy}
                    className="absolute text-lg right-0 pr-12 md8x:pr-7 mt-1"
                    onClick={() => copyText(children.props?.strings[0])}
                />
            </div>
        );
    }
    return el;
}
