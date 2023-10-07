import {
    faArrowRight,
    faCircle,
    faSpellCheck,
    faStop,
    faX,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Badge, Label, Textarea } from "flowbite-react";
import React, { useState } from "react";
import PageFooter from "../../components/Footer";
import PageNavbar from "../../components/Navbar";
import countWords from "../../utils/countWords"

export default function Grammar() {
    document.title = "Grammatika | Chat-GPT";

    const [correctedGrammar, setCorrectedGrammar] = useState(
        "She didn't go to hospital..."
    );

    const [wordCount, setWordCount] = useState(0);

    const [loading, setLoading] = useState(false);

    const [text, setText] = useState("She no went hospital...");

    const correctGrammar = async () => {
        if (text.length === 0) return;
        if (wordCount >= 200) return;
        if(loading) return;
        
        setLoading(true);

        try {
            const correctedMessage = await axios.post(
                "/api/grammar",
                {
                    prompt: text,
                }
            );

            setCorrectedGrammar(correctedMessage.data.trim());
        } catch (_error) {
            console.log(_error);
        }

        setLoading(false);
    };

    const handleChange = (e) => {
        if (wordCount >= 200) {
            e.preventDefault();
            return;
        };
        setText(e.target.value);
        setWordCount(countWords(e.target.value));
    }

    return (
        <div className="w-full min-h-screen">
            <PageNavbar />

            <h1 className="text-4xl text-center mb-6 text-gray-100 mt-20">
                Grammatika
                <FontAwesomeIcon icon={faSpellCheck} className="ml-3" />
            </h1>

            <div className="container rounded mx-auto relative p-6 text-gray-700 flex flex-col gap-3 justify-center items-center md:gap-5 md:flex-row  mb-10">
                <p className='my-2 text-white absolute -top-4 left-[12%]'>{wordCount}/200</p>
                <Textarea
                    id="grammar-input"
                    placeholder="She no went hospital..."
                    required={true}
                    rows={6}
                    className="resize-none max-w-md shadow-lg relative"
                    onChange={handleChange}
                />
                {wordCount <= 200 && <FontAwesomeIcon
                    icon={loading ? faXmark : faArrowRight}
                    className="my-3 hover:shadow-none text-indigo-600 bg-white rounded-full p-2 w-8 h-8 text-2xl shadow-lg cursor-pointer"
                    onClick={correctGrammar}
                />}
                <Textarea
                    id="grammar-input"
                    placeholder="She didn't go to hospital..."
                    required={true}
                    rows={6}
                    value={correctedGrammar}
                    className="resize-none max-w-md shadow-lg"
                    readOnly={true}
                />
            </div>
            <PageFooter />
        </div>
    );
}
