import { faCopy, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Spinner, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import PageFooter from '../../components/Footer';
import PageNavbar from '../../components/Navbar';

export default function HashtagGenerator() {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    const handleClick = async () => {
        if (text.length == 0) return;
        setLoading(true);

        try {
            const data = await axios.post("/api/hashtag-generator", {
                prompt: text
            });
            const hashtags = data.data;
            const split = hashtags.split("#");
            const mapped = split.map((hashtag, index) => {
                return (
                    <span key={index} className="bg-indigo-600 text-white rounded-lg p-2">
                        <FontAwesomeIcon icon={faHashtag} />
                        {hashtag.trim()}
                    </span>
                );
            });

            setResult(mapped);
        } catch (_error) {
            console.log(_error);
        }

        setLoading(false);
    }

    document.title = 'Xeshteg Generatori | Chat-GPT';
    return (
        <div>
            <PageNavbar />
            <div className="container mx-auto flex justify-center flex-col gap-6 items-center pt-8 p-4 my-10">
                <h1 className='text-gray-100 text-4xl text-center'>Xeshteg Generatori &nbsp;<FontAwesomeIcon icon={faHashtag} /></h1>
                <div className='w-72 md:w-96'>
                    <Textarea rows={9} className="my-4 resize-none" placeholder='I was once afraid to be dad...' id="text" onChange={(_) => setText(_.target.value)} />
                    <button className="bg-white text-indigo-600 py-2 px-3 my-4 rounded hover:shadow-lg mt-0" onClick={handleClick} disabled={loading}>{loading && (
                        <Spinner color="info" />
                    )} Davom Etish</button>

                    <div className='p-4 bg-gray-200 rounded-lg flex flex-wrap gap-2'>
                        {result.map((hashtag, index) => index !== 0 && hashtag)}
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}
