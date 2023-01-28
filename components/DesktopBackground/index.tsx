import DesktopBackgroundImg from '../../public/images/desktop-background-grass.jpg'
import TimeWindowsLogo from '../../public/windows_icons/time_windows_logo.png';
import EasyCloShop from '../../public/windows_icons/easyclo_shop.png';
import EasyCloInstagram from '../../public/windows_icons/easyclo_instagram.png';
import AppIcons from '../../public/windows_icons/windows_app_icons.png'
import CloseIcon from '../../public/windows_icons/close_prompt.png'
import ErrorIcon from '../../public/windows_icons/error_icon.png'
import ErrorIconBg from '../../public/windows_icons/error_icon_bg.png'
import EasyLogo from '../../public/images/pixelized-logo.png';
import EasyLogoGifPink from '../../public/images/rozowe.gif';
import EasyCopyingGif from '../../public/images/copying_gif_pro.gif'

import Image, {StaticImageData} from 'next/image'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'

function OpenedApp({icon, name, link, isOpen}:{
    icon: StaticImageData;
    name: string;
    link: string;
    isOpen: boolean;
}) {
    return (
        <Link href={link} target={"_blank"}>
            <button className={`flex gap-3 items-center px-2 h-full w-max win-95_buttons relative ${!isOpen && "hidden"}`}>
                <Image
                    src={icon}
                    alt={name}
                    className={"z-20 undraggable-img sm:h-[44px] h-[20px] sm:w-[44px] w-[20px]"}
                />
                <p className={"text-xl z-20 hidden sm:inline"}>{name}</p>
            </button>
        </Link>
    )
}

function TimeContainer() {
    let currentHours = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    let currentMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();

    const [fullTime, setFullTime] = useState(`${currentHours}: ${currentMinutes}`);

    useEffect(() => {

        const interval = setInterval(() => {
            currentHours = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
            currentMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();

            setFullTime(`${currentHours}:${currentMinutes}`)
        }, 1000)

        return () => clearInterval(interval)
    })
    return (
        <button className={"absolute sm:right-2 right-1 sm:top-[4px] top-[1px] sm:h-[48px] h-[24px] sm:w-[105px] w-max win-95_borders flex gap-2 justify-center items-center px-2 outline-none"}>
             <Image
                src={TimeWindowsLogo}
                alt={"Time Windows Logo"}
                className={"sm:inline hidden"}
            />
            <p className={"sm:text-xl text-sm"}>{fullTime}</p>
        </button>
    )
}

function StartButton({onClickFunc}: {onClickFunc: () => void}) {
    return (
        <button className={"h-full win-95_borders flex gap-2 items-center px-2 outline-none"} onClick={onClickFunc}>
            <Image
                src={EasyLogo}
                alt={"Start Windows Logo"}
                className={"sm:w-[90px] sm:h-[40px] h-[24px] w-[60px]"}
            />
            <p className={"sm:text-xl text-sm"}>Start</p>
        </button>
    )
}

function TaskBar({setActiveLoadingScreen}: {setActiveLoadingScreen: (value: boolean) => void;}) {
    return (
        <section className={"win-95_borders absolute flex sm:gap-2 gap-1 bottom-0 left-0 w-full sm:h-[60px] h-[30px] bg-[#C3C3C3] sm:p-1 p-[2px]"}>
            <StartButton onClickFunc={() => setActiveLoadingScreen(true)}/>

            <OpenedApp
                icon={EasyCloShop}
                name={"My Shop"}
                link={"https://easysolutionclo.com/"}
                isOpen={true}
            />
            <OpenedApp
                icon={EasyCloInstagram}
                name={"My Instagram"}
                link={"https://www.instagram.com/easysolutionclo/?hl=pl"}
                isOpen={true}
            />

            <TimeContainer/>
        </section>
    )
}

function LoadingAnimation() {
    const lastLoadingBox = useRef<any>();
    const [openErrBox, setOpenErrBox] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if(lastLoadingBox.current.style.display == "block") {
                lastLoadingBox.current.style.display = "none";
            } else {
                lastLoadingBox.current.style.display = "block";
            }
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [])

    function handleErrBox() {
        if(openErrBox) {
             setOpenErrBox(false);
        } else {
            setOpenErrBox(true);
        }
    }
    return (
        <div className={"relative w-[350px] sm:w-[600px] mb-24 win-95_borders z-10 self-center bg-[#C3C3C3] sm:pl-[3px] sm:pr-[6px] pr-[2px] sm:pt-[2px] pt-[1px]"}>
        {/*w-[calc(100%_-_20px)] h-[calc(100%_-_40px)]*/}

            {openErrBox &&
                <div className={"absolute top-[38px] win-95_borders left-[50px] bg-[#C3C3C3]"}>
                    <div className={"w-full bg-[#02007F] sm:h-[32px] h-[20px] flex items-center sm:px-1 px-[2px] sm:gap-2 gap-1"}>
                        <Image src={ErrorIcon} alt={"easysolutionclo"} className={"ml-1 sm:h-[24px] sm:w-[24px] h-[18px] w-[18px] object-cover"}/>
                        <p className={"sm:text-2xl text-base text-white"}>Error</p>

                        <Image src={CloseIcon} alt={"Windows App Icons"} className={"ml-auto sm:h-[24px] sm:w-[24px] h-[18px] w-[18px] object-cover cursor-pointer undraggable-img"} onClick={handleErrBox} />
                    </div>

                    <div className={"flex items-center justify-center gap-4 py-8 px-8"}>
                        <Image src={ErrorIconBg} priority alt={"Windows App Icons"} className={"sm:h-[52px] sm:w-[52px] h-[40px] w-[40px] undraggable-img"}/>
                        <p className={"sm:text-xl text-base"}>Take it easy..ツ</p>
                    </div>

                    <div className={"grid place-items-center pb-8"}>
                        <button className={"win-95_buttons px-12 sm:text-2xl text-base"} onClick={handleErrBox}>Ok.</button>
                    </div>
                </div>
            }

            <div className={"w-full bg-[#02007F] sm:h-[32px] h-[20px] flex items-center sm:px-1 px-[2px] sm:gap-2 gap-1"}>
                <Image src={EasyCloShop} alt={"easysolutionclo"} className={"sm:h-[24px] h-[18px] sm:w-[24px] w-[18px] object-cover"}/>
                <p className={"sm:text-2xl text-base text-white"}>easysolutionclo.exe</p>

                <Image src={AppIcons} alt={"Windows App Icons"} className={"ml-auto sm:h-[24px] h-[18px] w-[60px] sm:w-auto object-cover cursor-pointer undraggable-img"}/>
            </div>

            <div className={"sm:px-12 px-3 py-6"}>
                <div className={"flex justify-between"}>
                    <div className={"sm:text-xl text-base"}>
                        <p>Downloading:</p>
                        <p>easysolutionclo.exe from Poland</p>
                    </div>
                    <Image
                        src={EasyCopyingGif}
                        alt={"Copying gif"}
                        className={"absolute sm:right-12 sm:top-[70px] sm:scale-100 -right-4 top-[50px] scale-[.65]"}
                    />
                </div>

                <div className={"mt-2 h-[36px] win-95_borders-v2 flex gap-1 pb-[2px]"}>

                    {new Array(12).fill("x").map((_, index) => {
                        if(index < 7) {
                            return (
                                <div className={"w-[20px] h-full bg-[#02007F]"} key={index}></div>
                            )
                        } else {
                            return (
                                <div className={"w-[20px] h-full bg-[#02007F] sm:block hidden"} key={index}></div>
                            )
                        }
                    })}

                    <div className={"w-[20px] h-full bg-[#02007F] last-loading-box block"} ref={lastLoadingBox}></div>
                </div>

                <p className={"text-center py-2 mt-3 sm:text-xl text-base"}>Please wait...</p>
                {/*<p className={"text-center py-10 mt-3 text-xl"}>Take it easy.. ツ</p>*/}

                <div className={"grid place-items-center"}>
                    <button className={"win-95_buttons px-12 sm:text-2xl text-base"} onClick={handleErrBox}>Abort</button>
                </div>
            </div>
        </div>
    )
}

function LoadingScreen() {
    return (
        <div className={"w-full h-full top-0 left-0 absolute h-screen flex flex-col gap-8 items-center justify-center bg-black z-[999]"}>
            <p className={"text-xl sm:text-4xl text-[#c3c3c3] text-center"}>
                <Typewriter words={["welcome to easysolutionclo..."]}/>
            </p>
            <Image src={EasyLogo} alt={"EasyLogo"} className={"absolute bottom-10 h-[30px] w-[60px] sm:w-[200px] sm:h-[100px]"}/>
        </div>
    )
}

export default function DesktopBackground() {
    const [activeLoadingScreen, setActiveLoadingScreen] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveLoadingScreen(false)
        }, 3500)

        return () => {
            clearTimeout(timeout);
        }
    }, [activeLoadingScreen])
    return (
        <>
        {activeLoadingScreen &&
            <LoadingScreen/>
        }
        <section className={"flex justify-center items-center h-screen"}>
            {/*<Image*/}
            {/*    src={DesktopBackgroundImg}*/}
            {/*    alt={"Pixelized logo"}*/}
            {/*    className={"w-full h-full object-cover absolute top-0 -z-10 opacity-70 undraggable-img"}*/}
            {/*/>*/}

            <Image
                src={EasyLogoGifPink}
                alt={"EasyLogo"}
                className={"undraggable-img absolute top-[45px] h-[100px] w-[200px] sm:w-[300px] sm:h-[150px] sm:top-[25px]"}
                priority
                quality={25}
            />

            <div className={"sm:mt-32 mt-0 sm:h-auto h-screen flex justify-center flex-col relative"}>
                <LoadingAnimation/>

                <div className={"flex justify-center w-full gap-8 sm:relative absolute sm:bottom-0 bottom-[120px]"}>
                    <Link href={"https://easysolutionclo.com/"} passHref target={"_blank"} className={"w-max inline-block"}>
                        <Image
                            src={EasyCloShop}
                            alt={"EasyCloShop"}
                            className={"mx-auto scale-75 sm:scale-100"}
                        />
                        <p className={"text-white text-center mt-0 sm:mt-2 sm:text-xl text-base "}>SHOP</p>
                    </Link>

                    <Link href={"https://www.instagram.com/easysolutionclo/?hl=pl"} passHref target={"_blank"} className={"w-max inline-block"}>
                        <Image
                            src={EasyCloInstagram}
                            alt={"EasyCloInstagram"}
                            className={"mx-auto scale-[0.9] sm:scale-100"}
                        />
                        <p className={"text-white text-center mt-2 sm:mt-4 sm:text-xl text-base"}>INSTAGRAM</p>
                    </Link>
                </div>
            </div>

        </section>
        <TaskBar setActiveLoadingScreen={setActiveLoadingScreen}/>
        </>
    )
}