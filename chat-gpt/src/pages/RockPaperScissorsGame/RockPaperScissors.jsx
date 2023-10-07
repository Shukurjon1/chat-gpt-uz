import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { useEffect, useState } from "react";
import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";
gsap.registerPlugin(CustomEase);

export default function RockPaperScissors() {
    document.title = "Tosh Qaychi Qog'oz | Chat-GPT"
    const [playerRes, setPlayerRes] = useState(0);
    const [computerRes, setComputerRes] = useState(0);
    const [playing, setPlaying] = useState(false);
    const animateLeft = (_text) => {
        const overlay = document.getElementById("overlay");

        overlay.style.left = "100%"
        overlay.style.opacity = "0";
        overlay.innerText = _text;

        const timeline = gsap.timeline();
        timeline.to("#overlay", {
            left: "5%",
            ease: "slow",
            opacity: 1,
        }).to("#overlay", {
            left: "-180%",
            duration: 1.5,
            ease: CustomEase.create("custom", "M0,0,C0.22,-0.55,0.28,0.678,0.546,0.868,0.677,0.961,0.752,1,1,1"),
            opacity: 0,
            delay: 1
        });
    }

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 7);
    }

    const getRandom = () => {
        const pics = [Rock, Paper, Scissors];
        return pics[Math.floor(Math.random() * pics.length)];
    }

    const startShaking = () => {
        setPlaying(true);

        const computer = document.getElementById("computer");
        const player = document.getElementById("player");
        player.src = Rock;
        computer.src = Rock;
        const computerTimeline = gsap.timeline();
        const playerTimeline = gsap.timeline();
        const randomNumber = getRandomNumber();
        for (let i = 0; i < randomNumber; i++) {
            computerTimeline.to(computer, {
                y: "-=30%"
            }).to(computer, {
                y: "+=30%"
            })
        }
        for (let i = 0; i < randomNumber; i++) {
            playerTimeline.to(player, {
                y: "-=30%"
            }).to(player, {
                y: "+=30%"
            });
        }
        playerTimeline.then(() => {
            const playerResult = getRandom();
            const computerResult = getRandom();
            player.src = playerResult;
            computer.src = computerResult;

            switch (playerResult + computerResult) {
                case Rock + Paper:
                    animateLeft("Mag'lubiyat :(");
                    setComputerRes((_lastOne => _lastOne + 1));
                    break;
                case Paper + Rock:
                    animateLeft("G'alaba :)");
                    setPlayerRes((_lastOne) => _lastOne + 1);
                    break;
                case Scissors + Rock:
                    animateLeft("Mag'lubiyat :(");
                    setComputerRes((_lastOne => _lastOne + 1));
                    break;
                case Rock + Scissors:
                    animateLeft("G'alaba :)");
                    setPlayerRes((_lastOne) => _lastOne + 1);
                    break;
                case Scissors + Paper:
                    animateLeft("G'alaba :)");
                    setPlayerRes((_lastOne) => _lastOne + 1);
                    break;
                case Paper + Scissors:
                    animateLeft("Mag'lubiyat :(");
                    setComputerRes((_lastOne => _lastOne + 1));
                    break;
                default:
                    animateLeft("Teng!")
                    break;
            }
            setPlaying(false);
        })

    };

    useEffect(() => {
        animateLeft("Tosh Qaychi Qog'oz");
    }, [])

    return (
        <div className="w-full h-screen relative overflow-hidden bg-gray-700 text-white font-space-mission">
            <div id="overlay" className="absolute select-none top-1/2 -translate-x-5 text-center w-full -translate-y-1/2 md2x:text-3xl md3x:text-5xl text-6xl">Tosh Qaychi Qog'oz</div>
            <img id="player" className="absolute md5x:left-2 md5x:w-48 w-64 left-16 top-2/4" style={{ transform: "rotateY(180deg)" }} src={Rock} />
            <img id="computer" className="absolute md5x:right-2 md5x:w-48 w-64 right-16 top-2/4" src={Rock} />
            <button disabled={playing} onClick={startShaking} className="py-3 px-7 mx-auto block mt-14 bg-white text-gray-700 rounded hover:shadow-lg">Boshla</button>
            <div className="left-2/4 absolute -translate-x-1/2 mt-5 text-3xl font-poppins">{playerRes}/{computerRes}</div>
        </div>
    )
}