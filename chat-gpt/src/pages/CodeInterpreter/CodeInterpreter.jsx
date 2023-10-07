import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Card, Label, Select, Spinner, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import PageFooter from '../../components/Footer'
import PageNavbar from '../../components/Navbar'

export default function CodeInterpretor() {
  document.title = "Dasturlash | Chat-GPT"
  const [explanation, setExplanation] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = function (e) {
    setCode(e.target.value);
  }

  const getExplanation = async () => {
    if (code.length === 0 || code.length >= 300) return;
    setLoading(true);

    try {
      const data = await axios.post(
        "/api/code-interpreter",
        {
          prompt: code,
        }
      );

      setExplanation(data.data.trim());
    } catch (_error) {
      console.log(_error);
    }
    setLoading(false);
  }
  return (
    <div>
      <PageNavbar />
      <div className="container mx-auto my-20 px-4 max-w-2xl">
        <h1 className="text-4xl text-center mb-10 text-gray-100 mt-20">
          Dasturlash
          <FontAwesomeIcon icon={faCode} className="ml-3" />
        </h1>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dasturlash
          </h5>
          <div id="select">
            <div className="mb-2 block">
              <Label
                htmlFor="countries"
                className='text-white'
                value="Dasturlash tilini tanlang:"
              />
            </div>
            <Select
              id="langs"
              required={true}
            >

              <option>
                JavaScript
              </option>
              <option>
                Python
              </option>
              <option>
                C++
              </option>
              <option>
                Go
              </option>
              <option>
                Avtomatik aniqlash
              </option>
            </Select>
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label
                htmlFor="code"
                value="Kodni kiriting:"
              />
            </div>
            <Textarea
              placeholder="const fib = (n, s = [0, 1]) => n == s.length ? s : fib(n, s.concat(s[s.length - 2] + s[s.length - 1]))"
              className='resize-none'
              rows="8"
              onChange={handleChange}
            />
          </div>
          <button disabled={loading} className="py-2 px-4 rounded bg-indigo-600 text-white hover:shadow-lg transition" onClick={getExplanation}>{loading && (
                        <Spinner color="info" />
                    )}Davom Etish</button>
          <hr />
          <div className='bg-gray-100 p-4 rounded border border-gray-400 flex flex-col gap-3 '>
            {explanation.split(/\d\./g).map((_item, _index) => {
              return <div key={_index} className="p-3 rounded m-2 border text-gray-600 border-gray-400"><b>{(_index + 1) + ")"}</b> {_item.trim()}</div>
            })}
          </div>
        </Card>
      </div>
      <PageFooter />
    </div>
  )
}
