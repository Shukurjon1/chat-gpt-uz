import { Alert, Card } from "flowbite-react";
import React from "react";
import PageNavbar from "../../components/Navbar";
import RobotChattingPNG from "../../assets/robot_chatting.png";
import RobotGeneratingADPNG from "../../assets/ai_job_script_generating.png";
import RobotGrammarFix from "../../assets/robot_grammar_fix.png";
import RobotInstructionsPNG from "../../assets/robot_instructions.png";
import PageFooter from "../../components/Footer"

export default function Main() {

    return (
        <>
            <PageNavbar />

            <div
                className="flex flex-col gap-1 bg-blue-100 p-4 text-sm text-indigo-700"
                role="alert"
            >
                <h1 className="text-2xl font-bold">Xayrli tong, Khumoyun!</h1>
                <div className="text-indigo-600">
                    Change a few things up and try submitting again.
                </div>
            </div>

            <div className="pt-12 grid grid-rows-3 md5x:grid-rows-1 md5x:grid-flow-row grid-flow-col gap-6 justify-center items-start min-w-full min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 overflow-x-hidden p-5">
                <div className="max-w-xs row-span-3 md5x:col-span-2">
                    <Card
                        imgSrc={RobotChattingPNG}
                        className="rounded-2xl hover:shadow-xl"
                    >
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            Dunyodagi eng ilg'or AI bilan suhbatlashing!
                        </h5>
                        <p className="font-normal text-gray-700">
                            Bizning sun'iy intellektimiz sizga yangi narsalarni
                            kashf etishga, savollaringizga javob berishga va
                            dunyoni butunlay yangicha tarzda o'rganishga yordam
                            beradi!
                        </p>
                    </Card>
                </div>
                <div className="max-w-xs col-span-2">
                    <Card
                        imgSrc={RobotGeneratingADPNG}
                        className="rounded-2xl hover:shadow-xl"
                    >
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            Daqiqalar ichida qiziqarli reklama yoki ish
                            e'lonlarini yarating!
                        </h5>
                    </Card>
                </div>
                <div className="max-w-xs row-span-2 col-span-2">
                    <Card
                        imgSrc={RobotGrammarFix}
                        className="rounded-2xl hover:shadow-xl"
                    >
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            Grammatikangizdagi xato va kamchiliklarni bartaraf
                            qiling!
                        </h5>
                    </Card>
                </div>
                <div className="max-w-xs md5x:col-span-2">
                    <Card
                        imgSrc={RobotInstructionsPNG}
                        className="rounded-2xl hover:shadow-xl"
                    >
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            Foydalanish bo'yicha yo'riqnoma va ayrim misollar bilan tanishing.
                        </h5>
                    </Card>
                </div>
                <div className="max-w-xs md5x:col-span-2">
                    <Card
                        imgSrc={RobotInstructionsPNG}
                        className="rounded-2xl hover:shadow-xl"
                    >
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            Foydalanish bo'yicha yo'riqnoma va ayrim misollar
                        </h5>
                    </Card>
                </div>
            </div>
        </>
    );
}
