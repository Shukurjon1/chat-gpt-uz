import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SignUp from "./pages/Registration/SignUp";
import Login from "./pages/Registration/Login";
import OTP from "./pages/Registration/OTP";
import NotFound from "./pages/NotFound/NotFound";
import MainTest from "./pages/Dashboard/MainTest";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import Chat from "./pages/Chat/Chat";
import Instructions from "./pages/Help/Instructions.";
import axios from "axios";
import Grammar from "./pages/Grammar/Grammar";
import Outline from "./pages/Outline/Outline";
import CodeInterpreter from "./pages/CodeInterpreter/CodeInterpreter";
import Settings from "./pages/Settings/Settings";
import HashtagGenerator from "./pages/HashtagGenerator/HashtagGenerator";
import RockPaperScissors from "./pages/RockPaperScissorsGame/RockPaperScissors";
import ExtractContactInformation from "./pages/ExtractContactInformation/ExtractContactInformation";
import Premium from "./pages/Premium/Premium";
import Simplifier from "./pages/Simplifier/Simplifier";
import AlitaTheBattleAngel from "./pages/Alita/Alita"

function App() {
    const context = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const user = context.user;
    const setUser = context.setUser;
    const Loading = () => {
        return (
            <div className="flex flex-col gap-4 text-white justify-center items-center h-screen overflow-hidden bg-indigo-600">
                <div
                    className="spinner-border animate-spin border-t-transparent border-b-transparent inline-block w-16 h-16 rounded-full"
                    role="status"
                    style={{ borderWidth: "8px" }}
                ></div>
                <div className="text-2xl">Kuting...</div>
            </div>
        );
    };
    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true);
            if (!user) {
                try {
                    const userData = await axios.get(
                        "/auth/login/success",
                        { withCredentials: true, timeout: 5000 }
                    );
                    setUser({ ...userData.data.user, verified: true });
                } catch (_error) {
                    setIsLoading(false);
                }
            }
            setIsLoading(false);
        };
        getUser();
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="*" element={<NotFound />}></Route>
                    <Route
                        exact
                        path="/"
                        element={
                            isLoading ? (
                                <Loading />
                            ) : user?.verified ? (
                                <MainTest />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={
                            !user?.verified ? <Login /> : <Navigate to="/" />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/sign-up"
                        element={
                            !user?.verified ? <SignUp /> : <Navigate to="/" />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    ></Route>
                    <Route exact path="/ai/chat" element={<Chat />}></Route>
                    <Route exact path="/ai/grammar" element={<Grammar />}></Route>
                    <Route exact path="/verification" element={<OTP />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/pricing" element={<Pricing />}></Route>
                    <Route
                        exact
                        path="/help/instructions"
                        element={<Instructions />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/outline"
                        element={<Outline />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/code-interpreter"
                        element={<CodeInterpreter />}
                    ></Route>
                    <Route
                        exact
                        path="/settings"
                        element={!user?.verified ? <Login /> : <Settings />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/hashtag-generator"
                        element={<HashtagGenerator />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/rock-paper-scissors"
                        element={<RockPaperScissors />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/extract-contact-information"
                        element={<ExtractContactInformation />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/premium-services"
                        element={<Premium />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/text-simplifier"
                        element={<Simplifier />}
                    ></Route>
                    <Route
                        exact
                        path="/ai/alita-the-battle-angel"
                        element={<AlitaTheBattleAngel />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
