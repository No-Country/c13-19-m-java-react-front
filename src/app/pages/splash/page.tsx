"use client";

import Lottie from "lottie-react";
import animationData from "../../utils/animation_llu51y9u.json";

export default function Splash() {
    const style = {
        height: 300,
    };

    return(
        <div className="min-h-screen p-20 gap-2 bg-violet-500 flex flex-col items-center justify-center text-amber-400">
            <h1 className="text-4xl font-bold text-center font-sansita animate-fadeIn">
                Learn with me
            </h1>

            <Lottie style={style} animationData={animationData} /> 
        </div>
    );
}