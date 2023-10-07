import { Footer } from "flowbite-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import WaveVector from "../assets/wave.svg";

export default function PageFooter() {
    return (
        <div className="flex flex-col">
           <img src={WaveVector} className="w-full" />
            <footer className="p-4 bg-white md:px-6 md:py-8 -mt-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        to="https://chat-gpt.uz/"
                        className="flex items-center mb-4 sm:mb-0"
                    >
                        <img
                            src={Logo}
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Chat-GPT
                        </span>
                    </Link>
                    <ul className="flex flex-wrap md2x:pt-3 md2x:flex-col gap-5 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="hover:underline">
                                Haqida
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy-policy"
                                className="hover:underline"
                            >
                                Maxfiylik Siyosati
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">
                                Bog'lanish
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block md2x:text-center text-sm text-gray-500 sm:text-center ">
                    © 2020&nbsp;
                    <Link
                        to="https://khumoyun-dev.uz/"
                        className="hover:underline"
                    >
                        Khumoyun.
                    </Link>
                    <br />
                    <span>Hamma huquqlar himoyalangan.</span>
                </span>
            </footer>
        </div>
    );
}
