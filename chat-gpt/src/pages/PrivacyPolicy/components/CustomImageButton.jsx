import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function CustomImageButton(_props) {
    return (
        <Link to={_props.URL}>
            <button className="mt-6 bg-indigo-700 text-white py-3 px-6 font-poppins hover:bg-indigo-500 rounded-lg border-indigo-500 transition shadow-lg hover:shadow">
                <FontAwesomeIcon icon={_props.icon} />
                <span className="ml-2">{_props.text}</span>
            </button>
        </Link>
    );
}
