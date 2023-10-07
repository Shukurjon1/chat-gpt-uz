import { Link } from "react-router-dom";

export default function ContactLink() {
    return (
        <Link
            to="mail-to:chat-gpt@contact.uz"
            className="ml-2 text-indigo-600 hover:underline"
        >
            contact@chat-gpt.uz
        </Link>
    );
}
