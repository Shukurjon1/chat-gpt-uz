import { Spinner, Textarea } from 'flowbite-react';
import { useState } from 'react';
import PageFooter from '../../components/Footer';
import PageNavbar from '../../components/Navbar';
import axios from "axios"

export default function Simplifier() {
    document.title = "Sodda Matn | Chat-GPT";

    const [text, setText] = useState("");
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)
    const [resultWordCount, setResultWordCount] = useState(0)
    const [resultWordCharacterCount, setResultWordCharacterCount] = useState(0)

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        getResponse();
    }

    const copyResult = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(result).then(() => {
                alert("nusxalandi!")
            });
        }
    }

    const getResponse = async () => {
        if (text.length === 0 || text.length >= 1000) return;
        setLoading(true);

        try {
            const data = await axios.post("/api/text-simplifier", {
                prompt: text
            });
            setResult(data.data.trim());
            setResultWordCount(data.data.split(" ").length);
            setResultWordCharacterCount(data.data.split("").length);
        } catch (_error) {
            console.log(_error);
            setResult("Bir daqiqa tanaffus!")
        }

        setLoading(false);
    }
    return (
        <div>
            <PageNavbar />
            <div className=' max-w-md my-20 mx-auto p-3'>
                <Textarea
                    placeholder="Ingliz tilidagi matnni kiriting..."
                    className='resize-none'
                    rows="8"
                    onChange={handleOnChange}
                />
                <button className="bg-white text-indigo-800 py-2 px-3 my-4 rounded hover:shadow-lg" onClick={handleClick} disabled={loading}>{loading && (
                    <Spinner color="info" className='mr-1' />
                )} Davom Etish</button>
                <div className='bg-white text-gray-700'>
                    <div className='p-4'>
                        {result}
                    </div>
                    <div className='mt-3 p-4 font-semibold bg-gray-200 gap-2 md7x:text-center flex justify-between md7x:flex-col md7x:gap-3 items-center'>
                        <div>{resultWordCount}ta so'z, {resultWordCharacterCount} harf</div>
                        <button className='py-1 px-3 bg-indigo-600 rounded text-white' onClick={copyResult}>Nusxalash</button>
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}