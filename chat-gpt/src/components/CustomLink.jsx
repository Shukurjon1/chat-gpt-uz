import { Link } from "react-router-dom";

export default function CustomLink({ url, text, isActive, icon }) {
    let element = (
        <Link
            to={url}
            className="md:flex gap-1 md:flex-col block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
        >
            {icon}
            {text}
        </Link>
    );

    if (!isActive) {
        element = (
            <Link
                to={url}
                className="md:flex gap-1 md:flex-col block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0"
            >
                {icon}
                {text}
            </Link>
        );
    }

    return element;
}
