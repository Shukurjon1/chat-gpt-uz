import PageNavbar from "../../components/Navbar";
import PageFooter from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Alert, Spinner } from "flowbite-react";
import axios from "axios"

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [formSent, setFormSent] = useState(false);

    const handleSubmit = async _event => {
        _event.preventDefault();
        if(loading) return;
        
        if (message.length === 0 || message.length >= 2000) return;
        setLoading(true);
        try {
            const data = await axios.post("/api/contact-admin", {
                message: "@MessageToAdmin " + message
            });
            setFormSent(true)
        } catch (_error) {
        }
        setLoading(false);
    }

    const handleChange = _event => {
        setMessage(_event.target.value);
    };

    return (
        <>
            <PageNavbar />
            <div className="flex items-center justify-center flex-col gap-10 p-5 my-12">
                <div className="text-center text-5xl md8x:text-3xl text-white">Aloqa
                    <FontAwesomeIcon icon={faContactBook} className="ml-3" /></div>
                <div className="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">OpenAI Akkount</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Bug</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Takliflar</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Savollar</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Xato va kamchiliklar</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Birgalikda ishlash</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Frilansing</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">PREMIUM SUBSCRIPTION</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Premium narxlar</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Akkount nosozliklar</div>
                            <div className="bg-green-500 md8x:text-sm text-white p-1 rounded">Blokdan chiqarish</div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Xabar:
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Xabaringizni shu yerda yozing..."
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-4 text-base font-semibold text-white outline-none"
                            >
                                {loading && <Spinner color="info" className="mr-2 w-5 h-5" />} Jo'natish
                            </button>
                            {formSent &&
                                <Alert color="info" className="mt-4">
                                    Sizga tez orada javob qaytaramiz ✔️
                                </Alert>}
                        </div>
                    </form>
                </div>
            </div>
            <PageFooter />
        </>
    )
}