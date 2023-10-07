import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LoginScreen from "../../assets/login_screen.png"
import SignUpScreen from "../../assets/signup_screen.png"
import Planets from "../../assets/planets.png"
import TickTackToe from "../../assets/ticktacktoe.png"
import KingsAdventure from "../../assets/kingsadventure.png"
import Breakout from "../../assets/breakout.png"
import Santa from "../../assets/santa.png"
import PlanetsV1 from "../../assets/planetsv1.jpg"
import Kundalik from "../../assets/kundalik.jpg"
import Pacman from "../../assets/pacman.jpg"

export default function Instructions() {
    return (
        <div
            style={{ backgroundColor: "#2E2F39" }}
            className="w-full h-screen overflow-y-auto scrollbar-none overflow-x-hidden"
            id="scroll"
        >
            <div className="hero px-8 my-10 flex justify-between gap-3 items-center md3x:flex-col text-gray-200">
                <div className="flex gap-3 items-center md3x:flex-col">
                    <img src={Logo} alt="Logo" className="w-16" />
                    <div className="flex flex-col mb-1">
                        <h1 className="text-4xl mb-2 inline-block md3x:text-center">
                            Chat-GPT
                        </h1>
                        <p className="text-gray-400 md3x:text-center">
                            Foydalanish bo'yicha yo'riqnoma.
                        </p>
                    </div>
                </div>
                <button className="px-4 py-2 rounded bg-indigo-500">
                    <Link to="/">
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="mr-2 shadow-lg"
                        />
                        Bosh Sahifa
                    </Link>
                </button>
            </div>
            <div className="container mx-auto px-4">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Chat-GPT Nima? 🤔
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="mb-2 text-gray-400 flex flex-col gap-4">
                                <p>
                                    <b>ChatGPT</b> – suhbat qurish, koddagi xatolarni qidirish, she’r yozish, skript yozish va hatto bahslashishga qodir bo‘lgan chat-bot hisoblanadi.

                                </p>
                                <p>
                                    ChatGPT <a className="hover:underline text-blue-600" href="https://openai.com/">“OpenAI”</a> kompaniyasining maxsuloti hisoblanadi.
                                </p>

                                <p>
                                    2022 yil noyabr oyi oxirida ta’sischilaridan biri Ilon Mask bo‘lgan “OpenAI” kompaniyasi ChatGPT universal chat-botini taqdim etdi. U turli vazifalarni bajarishga qodir. ChatGPT “OpenAI” kompaniyasining GPT-3.5 til modeli asosida Azure AI superkompyuterida yaratilgan.
                                </p>

                                <p>
                                    Chat-bot internetdan olingan bir qator matnlar va insoniy fikr-mulohazalarga asoslangan o‘quv tizimidan foydalangan holda takomillashtirildi. Keyin neyron tarmoq o‘z javoblaridan foydalanib, ularni aniqroq va to‘g‘riroq qilish uchun bir necha marta qayta o‘qitilgan.
                                </p>

                                <p>
                                    Ishlab chiquvchilar uni ishlatish uchun qulay, to‘g‘ri va “inson” qilishni maqsad qilganliklarini ta’kidladi.
                                </p>

                                <p>
                                    “Bloomberg” tahlilchilarining fikricha, ChatGPT boshqa neyron tarmoqlardan turli sohalardagi vazifalarni bajarish qobiliyati bilan ajralib turadi.
                                </p>

                                <p>
                                    Neyron tarmoq, boshqa narsalar qatorida, asosiy dastur kodini chiqarishi, moliyaviy tahlillar, texnik maqolalar yoki ilmiy tushunchalar xulosalari, prognozlar, shaxsiy maslahatlar va har qanday savollarga axloqiy javoblar yaratishi mumkin.
                                </p>

                                <p>
                                    Bundan tashqari, u foydalanuvchi bilan suhbatning tafsilotlarini eslab qoladi va bahsli mavzulardan qochadi. Nihoyat, chat-bot javoblari yetakchi savollar bilan sozlanishi mumkin.
                                </p>

                                Kelajakda “OpenAI” ChatGPT'ni amaliy dasturlash interfeysi sifatida taqdim etishni rejalashtirmoqda, shunda ishlab chiquvchilar chat-botni veb-saytlari yoki ilovalariga joylashtirishlari mumkin.</div>
                            <p className="text-gray-300 mt-5">
                                Manba: {' '}
                                <a
                                    href="https://qalampir.uz"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    qalampir.uz
                                </a>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Platformada ro'yhatdan o'tish jarayoni. ✔️
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-300 flex flex-col gap-4">
                                Platformada ro'yhatdan o'tish uchun sizdan Google (har qanday) akkounti talab qilinadi.
                                Quyidagi videoda qanday qilib Google akkount ochish ko'rsatilgan:
                                <iframe className="w-full my-4" width="560" height="315" src="https://www.youtube.com/embed/3_51D_UDYwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></p>
                            <p className="text-gray-300">
                                Akkount ochilgach, e-mail pochtangizni eslab qoling va <a href="https://chat-gpt.uz/" className="text-blue-600 hover:underline">chat-gpt.uz</a> saytiga tashrif buyuring. Brovzerda quyidagi sahifa ochiladi:
                                <img className="block my-3 w-full" src={LoginScreen} />
                            </p>
                            <p className="text-gray-300">
                                "Ro'yhatdan otish" havolasini bosing:
                                <img className="block my-3 w-full" src={SignUpScreen} />
                            </p>
                            <p className="text-gray-300">
                                Bu yerda ismingiz, e-mail pochtangiz va parolni kiritasiz, keyin esa e-mailingizni tasdiqlash uchun pochtangizga maxsus xabar jo'natiladi. Agar xabarni olmagan bo'lsangiz, "SPAM" bo'limini tekshirishni unutmang. <i>Agar gmail ilovasidan foydalanishni bilmasangiz, quyidagi video siz uchun:</i>
                                <iframe className="w-full my-3" width="560" height="315" src="https://www.youtube.com/embed/52uN1WIcPCs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </p>
                            <p className="text-gray-300">
                                E-mail tasdiqlangach, bemalol platformaga pochtangiz va kirish kodini taqdim etgan holda kirishingiz mumkin.

                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Yodda tutish lozim ⚠️
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="mb-2 text-gray-500 flex flex-col gap-3">
                                <p className="font-bold">Foydalanish bepul 💯</p>
                                <p>Sun'iy intellekt siz bilan bo'lgan muloqotni platformani tark etishingiz bilanoq unutadi. ❌</p>
                                <p>Agar sun'iy intellekt sizni har doim eslab qolishini istasangiz "Premium"ga a'zo bo'ling. Buning uchun, platformaning <a href="/contact" className="text-blue-600 hover:underline">"aloqa"</a> sahifasiga o'tib <code>"PREMIUM SUBSCRIPTION"</code> xabarini jo'natasiz va tez orada adminstrator siz bilan bog'lanadi. 📞</p>
                                <p>Premium foydalanuvchilar platformaning hamma funksiyalaridan foydalanish huquqiga ega. Qo'shimcha servislar, eslab qolish xususiyati hamda +1 OpenAI akkounti sovg'a tariqasida beriladi. (agar qo'shimcha servislar yoqmagan bo'lsa) ✔️</p>
                                <p>Hozirda 10dan ortiq OpenAI akkountlari zahiraga qo'yilgan. Sotib olish yoki sotish uchun <a href="/contact" className="text-blue-600 hover:underline">"aloqa"</a> sahifasidan foydalaning (siz bilan qayta bog'lanishimiz uchun Telegram yoki WhatsApp manzilingizni xabar ichida qoldirishni unutmang) 💰</p>
                                <p className="font-bold">Tez orada platforma to'liq O'zbek tilida ishlaydi! 🔥</p>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Keyingi qadam...
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="mb-2 text-gray-500 flex flex-col gap-3">

                                <p>Ushbu loyiha mening Full-Stack dasturchi sifatida yaratgan birinchi ishim hisoblanadi.
                                    Umid qilamanki bu sizga mamnun keldi 🙂 </p>
                                <p>Loyiha bo'yicha savol va takliflaringizni <a href="/contact" className="text-blue-600 hover:underline">"aloqa"</a> sahifasidan yo'llashingiz mumkin. ✉️</p>
                            </div>
                            <p className="mb-2 mt-4 text-gray-500 dark:text-gray-400">
                                Mening boshqa loyihalarim bilan tanishing:
                            </p>
                            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-4">
                                <Carousel>
                                    <a href="https://solar-system-app-3d.netlify.app" className="md:w-2/4">
                                        <img
                                            src={Planets}
                                            alt="Planets"

                                        />
                                    </a>
                                    <a href="http://tic-tac-toe-mg.eu-4.evennode.com/" className="md:w-2/4">
                                        <img
                                            src={TickTackToe}
                                            alt="Tick Tack Toe"
                                        />
                                    </a>
                                    <a href="https://my-platformer-game.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={KingsAdventure}
                                            alt="Kings Adventure"
                                        />
                                    </a>
                                    <a href="https://santas-in-a-soviet-city.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={Santa}
                                            alt="Santas in a Soviet City"
                                        />
                                    </a>
                                    <a href="https://play-breakout.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={Breakout}
                                            alt="Breakout"
                                        />
                                    </a>
                                    <a href="https://pacmaaan.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={Pacman}
                                            alt="Pacman"
                                        />
                                    </a>
                                    <a href="https://kundalik.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={Kundalik}
                                            alt="Pacman"
                                        />
                                    </a>
                                    <a href="https://the-planets-3d.netlify.app/" className="md:w-2/4">
                                        <img
                                            src={PlanetsV1}
                                            alt="Planets V1"
                                        />
                                    </a>
                                </Carousel>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <br />
            <br />
            <br />
        </div >
    );
}
