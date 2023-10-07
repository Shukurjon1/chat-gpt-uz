import axios from 'axios';
import { Button, Card, Checkbox, Label, Spinner, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import PageFooter from '../../components/Footer'
import PageNavbar from '../../components/Navbar'

export default function ExtractContactInformation() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  
  const handleSubmit = async () => {
    if (text.length == 0) return;
    if (text.length >= 1000) return;
    setLoading(true);
    try {
      const data = await axios.post("/api/extract-contact-information", {
        prompt: text
      });
      const res = data.data;

      setResult(res);
    } catch (_error) {
      console.log(_error);
    }
    setLoading(false);
  };

  return (
    <div>
      <PageNavbar />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='w-72 md:w-96'>
          <p className='text-white'>Xabarni kiriting:</p>
          <Textarea rows={9} className="my-4 resize-none" placeholder='Hi Khumoyun, I got your message yesterday at 8 in the morn..' id="text" onChange={(_) => setText(_.target.value)} />
          <button className="bg-white text-indigo-600 py-2 px-3 my-4 rounded hover:shadow-lg mt-0" onClick={handleSubmit} disabled={loading}>{loading && (
            <Spinner color="info" />
          )} Davom Etish</button>
          <div className='p-4 bg-gray-200 rounded-lg flex flex-wrap gap-2'>
            {result}
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}
