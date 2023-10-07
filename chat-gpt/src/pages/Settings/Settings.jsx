import axios from "axios";
import { Alert, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageFooter from "../../components/Footer";
import PageNavbar from "../../components/Navbar";
import UserContext from "../../contexts/UserContext";

export default function Settings() {
    const [update, setUpdate] = useState(localStorage.getItem("update_warn") === "true");
    document.title = "Sozlamalar | Chat-GPT";
    const handleChange = () => {
        setUpdate((_lastUpdate) => {
            if (!_lastUpdate) {
                localStorage.setItem("update_warn", "true");
            } else {
                localStorage.setItem("update_warn", "false");
            }
            return !_lastUpdate;
        });
    };
    const user = useContext(UserContext).user;
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const checkPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
        return passwordRegex.test(password);
    }

    const changePasswordRequest = async () => {
        if (oldPassword.length === 0 || newPassword.length === 0) return;
        setIsLoading(true);
        try {
            const userData = await axios.post(
                "/api/change-password",
                {
                    email: user?.emails[0].value,
                    oldPassword: oldPassword,
                    newPassword: newPassword
                }
            );
            setResult(userData.data);
            setOldPassword("")
            setNewPassword("")
        } catch (_error) {
            console.log(_error);
        }
        setIsLoading(false);
    }

    const changeOldPassword = (e) => {
        setOldPassword(e.target.value);
    }

    const changeNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    return (
        <div>
            <PageNavbar />
            <div className="container max-w-2xl mx-auto flex justify-center items-center my-20">
                <div className='w-72 md:w-96 bg-white p-5 rounded text-lg'>
                    <div
                        className="flex flex-col gap-4"
                        id="checkbox"
                    >
                        <div className="text-3xl">Sozlamalar</div>
                        <hr />
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="accept"
                                defaultChecked={update}
                                onChange={handleChange}
                            />
                            <Label htmlFor="accept">
                                Yangilanishlar haqida ogohlantirish.
                            </Label>
                        </div>
                        <div className="flex items-center gap-2 opacity-50">
                            <Checkbox
                                id="privacy-policy"
                                defaultChecked={true}
                                disabled={true}
                            />
                            <Label htmlFor="privacy-policy">
                                <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Maxfiylik Siyosatiga</Link> roziman
                            </Label>
                        </div>
                        <hr />
                        <div className="text-lg text-gray-600">Parolni yangilash</div>
                        <TextInput value={oldPassword} placeholder="Eski kodni kiriting." className="text-sm focus:outline-none outline-none " onChange={changeOldPassword} />
                        <TextInput value={newPassword} placeholder="Yangi kodni kiriting." className="text-sm focus:outline-none outline-none " onChange={changeNewPassword} />
                        <button disabled={isLoading} className="py-2 px-3 text-white bg-indigo-600 rounded text-sm shadow transition focus:shadow-lg" onClick={() => changePasswordRequest()}>
                            {isLoading && (
                                <Spinner color="info" />
                            )}{" "}
                            Davom etish
                        </button>
                        {result && <Alert color="info">{result}</Alert>}
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}