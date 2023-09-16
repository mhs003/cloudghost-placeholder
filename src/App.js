import "./App.css";
import Clouds from "./components/Clouds";
import logo from "./images/logo.png";
import bg2 from "./images/bg2.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./components/AnimatedText";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
    const [isSplashed, setIsSplashed] = useState(false);
    const [splashText, setSplashText] = useState("");
    const [splashAnimation, setSplashAnimation] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setSplashText("Hello World");
            setSplashAnimation(true);
        }, 300);

        const timer2 = setTimeout(() => {
            setSplashAnimation(false);
        }, 3000);

        const timer3 = setTimeout(() => {
            setSplashText("Welcome to the [CloudGhost]");
            setSplashAnimation(true);
        }, 3500);

        const timer4 = setTimeout(() => {
            setSplashAnimation(false);
        }, 6600);

        const timer5 = setTimeout(() => {
            setIsSplashed(true);
        }, 7100);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, []);

    const showMainContents = {
        opacity: 1,
    };

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    return (
        <>
            <Clouds />
            <div className="top-0 left-0 w-screen h-screen backdrop-blur-[8px] bg-transparent overflow-y-auto">
                {isSplashed ? (
                    <motion.div
                        animate={isSplashed ? showMainContents : ""}
                        className="p-14 opacity-0"
                    >
                        <div className="flex justify-between items-center px-24">
                            <a href="#home">
                                <img src={logo} alt="" className="w-60" />
                            </a>
                            <div className="flex gap-7">
                                <a
                                    href="#top"
                                    className="font-bold text-white underline"
                                >
                                    Home
                                </a>
                                <a
                                    href="#contact"
                                    className="font-bold text-white underline"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-8 px-24 mt-5">
                            <h1 className="text-8xl text-center font-bold text-white drop-shadow-md">
                                CloudGhost is a hosting company
                            </h1>
                            <p className="text-white drop-shadow-md font-bold text-[45px] text-center leading-tight">
                                We gonna provide the best hosting services that
                                you never had before
                            </p>
                            <h3 className="text-3xl text-center font-bold text-purple-800 mt-6 drop-shadow-md">
                                Yet,
                            </h3>
                            <div className="mx-auto w-[60%] my-10 p-10 backdrop-blur-3xl shadow-lg rounded-xl">
                                <LazyLoadImage
                                    alt="The hero image"
                                    width="100%"
                                    height="100%"
                                    src={bg2}
                                />
                            </div>
                            <h1 className="text-5xl text-center font-bold text-purple-800 drop-shadow-lg">
                                We are currently preparing ourselves to fetch
                                the world
                            </h1>
                        </div>
                        <hr className="border-slate-200 border-2 rounded-full w-[80%] mx-auto mt-20 shadow-md" />
                        <div
                            className="flex justify-center flex-col items-center gap-8 mt-20 px-24"
                            id="contact"
                        >
                            <h1 className="text-3xl text-center font-bold text-white drop-shadow-md">
                                However, you can provide us your email address.
                                <br />
                                So we can notify you when we are ready
                            </h1>
                            <form className="flex justify-center items-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="p-4 w-[500px] rounded-xl outline-none"
                                />
                                <button className="px-8 py-4 bg-purple-800 rounded-xl text-white font-bold text-xl transition-transform active:scale-90">
                                    Notify Me
                                </button>
                            </form>
                            <p className="mt-20 color-black text-bold text-center">
                                © 2023 CloudGhost. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="h-screen flex justify-center items-center flex-col">
                        <motion.div
                            initial="hidden"
                            animate={splashAnimation ? "visible" : "hidden"}
                            variants={container}
                        >
                            <div className="text-white text-center font-bold">
                                <AnimatedCharacters
                                    className="text-6xl"
                                    text={splashText}
                                    color="#fff"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
