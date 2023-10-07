import { faCopy, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Spinner, Textarea, TextInput } from 'flowbite-react';
import React from 'react'
import PageFooter from '../../components/Footer';
import PageNavbar from '../../components/Navbar';
import { useState } from "react";
import axios from "axios";
import countWords from "../../utils/countWords"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Outline() {
    document.title = "Insho Konturi | Chat GPT";
    const [topic, setTopic] = useState("");
    const [result, setResult] = useState("Natija...");
    const [loading, setLoading] = useState(false);
    const copy = () => {
        document.getElementById("result").select()
        document.execCommand("copy")
    }
    const [wordCount, setWordCount] = useState(0);

    const getOutline = async () => {
        if (topic.length === 0) return;
        setLoading(true);

        try {
            const data = await axios.post("/api/essay-outline", {
                prompt: topic
            });
            setResult(data.data.trim());
        } catch (_error) {
            console.log(_error);
            setResult("Bir daqiqa tanaffus!")
        }

        setLoading(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && wordCount <= 20) {
            getOutline();
        }
    }

    const handleChange = (e) => {
        setTopic(e.target.value);
        setWordCount(countWords(e.target.value));
    }

    return (
        <div>
            <PageNavbar />
            <div className="container mx-auto flex justify-center flex-col gap-6 items-center pt-8 p-4 my-14">
                <h1 className='text-gray-100 text-4xl text-center'>Insho Konturi &nbsp;<FontAwesomeIcon icon={faSmileWink} /></h1>
                {loading && (
                    <Spinner color="info" />
                )}
                <div className='w-72 md:w-96'>
                    <p className='my-2 mt-0 text-white'>{wordCount}/20</p>
                    <TextInput placeholder="misol: How to learn programming?" className='w-full outline-none focus:outline-none' onKeyDown={handleKeyDown} onChange={handleChange} disabled={loading}/>
                    <Textarea rows={12} className="my-4 resize-none" placeholder='Natija...' value={result} readOnly={true} id="result" />
                    <button className="outline-none bg-white rounded py-2 px-4 w-full" onClick={copy}>Nusxalash!
                        <FontAwesomeIcon icon={faCopy} className="ml-2 text-indigo-600" />
                    </button>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}
