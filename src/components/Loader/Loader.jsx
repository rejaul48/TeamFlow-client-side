import Lottie from 'lottie-react'
import React from 'react'
import loaderAnimation from '../../LottieAnimationLoader/LottieAnimaitonLoader.json'

const Loader = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-1/2 sm:w-1/3 md:w-2/4 lg:w-2/6 ">
                    <Lottie
                        animationData={loaderAnimation}
                        loop={true}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    )
}

export default Loader
