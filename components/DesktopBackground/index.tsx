import DesktopBackgroundImg from '../../public/images/desktop-background-grass.jpg'
import StartWindowsLogo from '../../public/windows_icons/stsrt_windows_logo.png';
import TimeWindowsLogo from '../../public/windows_icons/time_windows_logo.png';
import ComputerWindowsLogo from '../../public/windows_icons/computer_windows_logo.png';
import EasyCloShop from '../../public/windows_icons/easyclo_shop.png';
import EasyCloInstagram from '../../public/windows_icons/easyclo_instagram.png';
import AppIcons from '../../public/windows_icons/windows_app_icons.png'
import CloseIcon from '../../public/windows_icons/close_prompt.png'
import ErrorIcon from '../../public/windows_icons/error_icon.png'
import ErrorIconBg from '../../public/windows_icons/error_icon_bg.png'
import EasyLogo from '../../public/images/easylogo.png';

import Image, {StaticImageData} from 'next/image'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {setFips} from "crypto";

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
                    className={"z-20 undraggable-img h-[44px] w-[44px]"}
                />
                <p className={"text-xl z-20 hidden sm:inline"}>{name}</p>
            </button>
        </Link>
    )
}

function TimeContainer() {
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();

    const [fullTime, setFullTime] = useState(`${currentHours}: ${currentMinutes}`);

    useEffect(() => {
        const interval = setInterval(() => {
            setFullTime(`${currentHours}:${currentMinutes}`)
        }, 1000)

        return () => clearInterval(interval)
    })
    return (
        <button className={"absolute right-2 top-[4px] h-[48px] sm:w-[105px] w-max win-95_borders flex gap-2 justify-center items-center px-2 outline-none"}>
             <Image
                src={TimeWindowsLogo}
                alt={"Time Windows Logo"}
                className={"sm:inline hidden"}
            />
            <p className={"text-xl"}>{currentHours}:{currentMinutes}</p>
        </button>
    )
}

function StartButton() {
    return (
        <button className={"h-full win-95_borders flex gap-2 items-center px-2 outline-none"}>
            <Image
                src={EasyLogo}
                alt={"Start Windows Logo"}
                className={"w-[50px]"}
            />
            <p className={"text-xl"}>Start</p>
        </button>
    )
}

function TaskBar() {
    return (
        <section className={"win-95_borders absolute flex gap-2 bottom-0 left-0 w-full h-[60px] bg-[#C3C3C3] p-1"}>
            <StartButton/>
            <TimeContainer/>

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
        <div className={"relative sm:w-[600px] xs:w-[380px] mb-12 win-95_borders z-10 self-center bg-[#C3C3C3] pl-[3px] pr-[6px] pt-[2px] sm:mt-0 mt-32"}>
{/*w-[calc(100%_-_20px)] h-[calc(100%_-_40px)]*/}

            {openErrBox &&
                <div className={"absolute top-[38px] win-95_borders left-[50px] bg-[#C3C3C3]"}>
                    <div className={"w-full bg-[#02007F] h-[32px] flex items-center px-1 gap-2"}>
                        <Image src={ErrorIcon} alt={"easysolutionclo"} className={"ml-1 h-[24px] w-[24px] object-cover"}/>
                        <p className={"text-2xl text-white"}>Error</p>

                        <Image src={CloseIcon} alt={"Windows App Icons"} className={"ml-auto h-[24px] object-cover cursor-pointer undraggable-img"} onClick={handleErrBox} />
                    </div>

                    <div className={"flex items-center justify-center gap-4 py-8 px-8"}>
                        <Image src={ErrorIconBg} alt={"Windows App Icons"} className={"h-[52px] w-[52px] undraggable-img"}/>
                        <p className={"text-xl"}>Take it easy..ツ</p>
                    </div>

                    <div className={"grid place-items-center pb-8"}>
                        <button className={"win-95_buttons px-12 text-2xl"} onClick={handleErrBox}>Ok.</button>
                    </div>
                </div>
            }

            <div className={"w-full bg-[#02007F] h-[32px] flex items-center px-1 gap-2"}>
                <Image src={EasyCloShop} alt={"easysolutionclo"} className={"h-[24px] w-[24px] object-cover"}/>
                <p className={"text-2xl text-white"}>easysolutionclo.exe</p>

                <Image src={AppIcons} alt={"Windows App Icons"} className={"ml-auto h-[24px] object-cover cursor-pointer undraggable-img"}/>
            </div>

            <div className={"sm:px-12 px-3 py-6"}>
                <div>
                    <div className={"text-xl"}>
                        <p>Downloading:</p>
                        <p>easysolutionclo.exe from Poland</p>
                    </div>
                    <div>
                        {/*    animacja     */}
                    </div>
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

                <p className={"text-center py-2 mt-3 text-xl"}>Please wait...</p>
                {/*<p className={"text-center py-10 mt-3 text-xl"}>Take it easy.. ツ</p>*/}

                <div className={"grid place-items-center"}>
                    <button className={"win-95_buttons px-12 text-2xl"} onClick={handleErrBox}>Abort</button>
                </div>
            </div>
        </div>
    )
}
export default function DesktopBackground() {
    return (
        <>
        <section className={"grid place-items-center h-screen"}>
            <Image
                src={DesktopBackgroundImg}
                alt={"Pixelized logo"}
                className={"w-full h-full object-cover absolute top-0 -z-10 opacity-70 undraggable-img"}
            />

            <Image src={EasyLogo} alt={"EasyLogo"} className={"absolute top-[5px] scale-75 mx-auto"}/>

            <div className={"mt-32"}>
                <LoadingAnimation/>

                <div className={"flex justify-center gap-8"}>
                    <Link href={"https://easysolutionclo.com/"} passHref target={"_blank"} className={"w-max inline-block"}>
                        <Image
                            src={EasyCloShop}
                            alt={"EasyCloShop"}
                            className={"mx-auto scale-75 sm:scale-100"}
                        />
                        <p className={"text-white text-center mt-0 sm:mt-2 sm:text-xl text-lg"}>SHOP</p>
                    </Link>

                    <Link href={"https://www.instagram.com/easysolutionclo/?hl=pl"} passHref target={"_blank"} className={"w-max inline-block"}>
                        <Image
                            src={EasyCloInstagram}
                            alt={"EasyCloInstagram"}
                            className={"mx-auto scale-[0.9] sm:scale-100"}
                        />
                        <p className={"text-white text-center mt-2 sm:mt-4 sm:text-xl text-lg"}>INSTAGRAM</p>
                    </Link>
                </div>
            </div>

        </section>
        <TaskBar/>
        </>
    )
}

// todo
// - dokonczyc projekt alternatywnej wersji z otwartym menu
// - wykadrowac na kazdej rozdzielczosci tlo
// - dzialanie pulpitu
// - zamykanie okien
// - otwieranie okien
// - wersja mobilna

// ikona

{/*<Image*/}
{/*    src={EasyCloShop}*/}
{/*    alt={"EasyCloShop"}*/}
{/*    className={"absolute top-[400px] left-[800px]"}*/}
{/*/>*/}
{/*<p className={"text-white absolute left-[805px] top-[475px]"}>My Shop</p>*/}
