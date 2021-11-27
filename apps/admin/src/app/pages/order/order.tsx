import React, { useRef } from "react";
import logoImg from '../../../assets/logo.svg';

const Order = () => {
    const form: any = useRef(null);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        const payload: any = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        //  console.log("payload", payload);
        // Place your API call here to submit your payload.
    };

    return (
        <div>
            <section className="bg-white {-- h-screen --}">
                <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 px-2 py-20 sm:py-40 sm:px-12 flex flex-col justify-center items-center bg-indigo-600 relative">
                        <div className="absolute left-0 top-0 pl-3 pt-3">
                          <img alt="logo" src={logoImg} />
                        </div>
                        <div className="flex relative z-30 flex-col justify-center px-4 md:pr-12">
                            <div className="px-2 flex flex-col items-center justify-center">
                                <svg className="w-32 h-32" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path
                                            fill="#fff"
                                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-4xl pt-8 leading-tight text-white text-center">The Tadya</h3>
                            <h3 className="text-4xl pt-8 leading-tight text-white text-center">Check Out</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Order;
