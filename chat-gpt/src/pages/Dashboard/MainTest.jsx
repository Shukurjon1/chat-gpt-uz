import PageNavbar from "../../components/Navbar";
import RobotGeneratingADPNG from "../../assets/ai_job_script_generating.png";
import RobotGrammarFix from "../../assets/robot_grammar_fix.png";
import RobotInstructionsPNG from "../../assets/robot_instructions.png";
import RobotChattingPNG from "../../assets/robot_chatting.png";
import CardItem from "./components/CardItem";
import PageFooter from "../../components/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import OutlineImage from "../../assets/outline_maker.png"
import CodingImage from "../../assets/coding.png"
import Hashtags from "../../assets/hashtags.png"
import RockPaperScissors from "../../assets/rock_paper_scissors.jpg"
import AIGeneratedImages from "../../assets/ai_generated_images.png"
import ContactImage from "../../assets/contact.png"
import PremiumImage from "../../assets/premium.png"
import ArticleImage from "../../assets/article.png"
import AlitaImage from "../../assets/alita.png"
import QuestionMark from "../../assets/question_mark.png"

export default function MainTest() {
    document.title = "Chat-GPT";
    const { user } = useContext(UserContext);
    const [timeOfDay, setTimeOfDay] = useState("Salom");

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();

        if (hours < 12) {
            setTimeOfDay("Xayrli tong");
        } else if (hours >= 12 && hours < 17) {
            setTimeOfDay("Salom");
        } else {
            setTimeOfDay("Xayrli kech");
        }
    }, []);
    return (
        <>
            <PageNavbar activePage="home" />
            <section className=" pb-16">
                <div className="container px-6 py-10 pt-14 mx-auto">
                    <h1
                        style={{ maxWidth: "1024px" }}
                        className="mx-auto text-3xl font-semibold text-gray-100 capitalize lg:text-4xl dark:text-white"
                    >
                        {timeOfDay}, {user?.name?.givenName}!
                    </h1>
                    <p
                        style={{ maxWidth: "1024px" }}
                        className="mx-auto text-gray-200 mt-2 mb-8"
                    >
                        Quyidagi bo'limlardan birini tanlang.
                    </p>

                    <div
                        style={{ maxWidth: "1024px" }}
                        className="mx-auto grid grid-cols-1 gap-8 mt-6 md:mt-14 mdcustom:grid-cols-2 lg:grid-cols-3"
                    >
                        <CardItem
                            img={RobotInstructionsPNG}
                            alt="Robot Instructions"
                            title="Foydalanish bo'yicha yo'riqnoma."
                            content="Platformadan qanday foydalanish to'g'risida o'qing."
                            to="/help/instructions"
                        />
                        <CardItem
                            img={RobotChattingPNG}
                            alt="Robot Chatting"
                            title="Dunyodagi eng ilg'or sun'iy intellekt bilan suhbatlashing!"
                            content="Bizning sun'iy intellektimiz sizga yangi
                            narsalarni kashf etishga, savollaringizga
                            javob berishga va dunyoni butunlay yangicha
                            tarzda o'rganishga yordam beradi!"
                            to="/ai/chat"
                        />
                        <CardItem
                            img={RobotGeneratingADPNG}
                            alt="Robot Generating AD"
                            title="Daqiqalar ichida qiziqarli reklama yoki ish
                            e'lonlarini yaratish!"
                            content="Sarlavha, talablar va h.k asosida tezda reklama yoki ish e'lonini yarating!"
                        />
                        <CardItem
                            img={RobotGrammarFix}
                            alt="Robot Grammar Fix"
                            title="Grammatika bo'yicha xato va kamchiliklarni
                            bartaraf qilish!"
                            to="/ai/grammar"
                            content="Ushbu xizmat orqali siz insho'ingizdagi xato va kamchiliklarni to'g'irlashingiz mumkin."
                        />
                        <CardItem
                            img={Hashtags}
                            alt="Coding"
                            title="Berilgan matnga mos xeshteg yaratish."
                            content="Siz yozmoqchi bo'lgan post yoki blog uchun xeshteg yozib beradi."
                            to="/ai/hashtag-generator"
                        />
                        <CardItem
                            img={CodingImage}
                            alt="Coding"
                            title="Dasturlash tili tarjimoni"
                            content="Python, JavaScript, C++ va yana ko'plab ommabop dasturlash tillarida yozilgan murakkab kodlarni tushintirib beradi."
                            to="/ai/code-interpreter"
                            badge="Qayta Ishlanmoqda"
                        />
                        <CardItem
                            img={OutlineImage}
                            alt="Outline"
                            title="Insho konturi"
                            to="/ai/outline"
                            content="Berilgan mavzu bo'yicha qisqacha mundarija tuzib beradi."
                        />
                        <CardItem
                            img={RockPaperScissors}
                            alt="Rock Paper Scissors"
                            title="Tosh Qaychi Qog'oz o'yini"
                            to="/ai/rock-paper-scissors"
                            content="Sun'iy intellekt bilan tosh-qaychi-qog'oz o'yinini o'ynang!"
                            badge="Qayta Ishlanmoqda"
                        />
                        <CardItem
                            img={ArticleImage}
                            alt="Article Image"
                            title="Sodda Matn"
                            to="/ai/text-simplifier"
                            content="Ingliz tilida yozilgan 'advanced' darajadagi matnlarni soddalashtirib beradi"
                        />
                        <CardItem
                            img={AIGeneratedImages}
                            alt="AI Generated Images"
                            title="Rasm generatori"
                            to="/"
                            content="Oddiy so'zlar yordamida turli xil rasmlar yaratish"
                            badge="Kredit tugab qoldi."
                            error={true}
                        />
                        <CardItem
                            img={ContactImage}
                            alt="Contact Image"
                            title="Aloqa ma'lumotlarini chiqarib olish"
                            to="/ai/extract-contact-information"
                            content="Uzun xabarlar ichidan aloqa malumotlarini (telefon raqam, e-mail, ism, adres, va h.k) chiqarib oladi."
                        />
                        <CardItem
                            img={AlitaImage}
                            alt="Alita: The Battle Angel"
                            title="Alita: The Battle Angel"
                            to="/ai/alita-the-battle-angel"
                            content="Kiborg Alita: mashhur kino qahramoni bilan suhbat"
                        />
                        <CardItem
                            img={PremiumImage}
                            alt="Premium Service"
                            title="Premium xizmatlar"
                            to="/ai/premium-services"
                            content="Premium foydalanuvchilar uchun maxsus xizmatlar to'plami."
                            badge="Premium"
                            success={true}
                        />
                    </div>
                </div>
            </section>
            <PageFooter />
        </>
    );
}
