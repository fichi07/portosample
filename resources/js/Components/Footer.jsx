export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url('/images/background/Design1.png')`,

                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
            }}
            className="bg-white pb-[30px] border-t-[10px] border-blue-500"
        >
            <hr />
            <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[30px]">
                <div className="flex justify-between items-center w-full px-5 text-base leading-4 text-black">
                    <hr />
                    <div className="flex items-center">
                        <img
                            src="../images/Logo.png"
                            alt="logo"
                            className="w-auto h-8"
                        />
                    </div>
                    <div className="flex-grow text-center">
                        @ 2022. All Rights Reserved, Designed by Moch Wahyu
                        Fitra
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            loading="lazy"
                            src="../images/icons/facebook.svg"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                        <img
                            loading="lazy"
                            src="../images/icons/twitter.svg"
                            alt="Twitter"
                            className="w-8 h-8"
                        />
                        <img
                            loading="lazy"
                            src="../images/icons/instagram.svg"
                            alt="Instagram"
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
