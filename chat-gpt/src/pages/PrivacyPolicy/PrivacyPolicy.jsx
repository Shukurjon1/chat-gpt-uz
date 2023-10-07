import { useSearchParams } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import PrivacyPolicyEn from "./PrivacyPolicyEn";
import PrivacyPolicyUz from "./PrivacyPolicyUz";

export default function PrivacyPolicy() {
    const [searchParams, setSearchParams] = useSearchParams();
    const condition = searchParams.get("lang") === "en";

    const element = condition ? <PrivacyPolicyEn /> : <PrivacyPolicyUz />;

    if (condition) document.title = "Privacy Policy | Chat-GPT";
    else document.title = "Maxfiylik Siyosati | Chat-GPT";

    return (
        <div className="container min-w-full min-h-full bg-gradient-to-br from-purple-600 to-indigo-900 overflow-x-hidden">
            {element}
            <ScrollUpButton ContainerClassName="bg-indigo-60 rounded" />
        </div>
    );
}
