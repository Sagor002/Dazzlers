import { useEffect, useState } from "react";
import Overlay from "../Components/Overlay";

const slides = [
    "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8112163/pexels-photo-8112163.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6110063/pexels-photo-6110063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5864264/pexels-photo-5864264.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15774577/pexels-photo-15774577/free-photo-of-man-opening-car-door-for-woman.jpeg?auto=compress&cs=tinysrgb&w=600",
];


const Slider = () => {
    const [curImg, setCurImg] = useState(0);

    useEffect(()=>{
        const slideInterval = setInterval(()=> {
            if (curImg === slides.length -1) {
                setCurImg(0);
            }else {
                setCurImg(curImg + 1);
            }
        }, 10000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [curImg]);

    return (
        <div className="w-screen h-screen relative">
        <img src={slides[curImg]} alt="Slide image" className="w-full h-full object-cover" />
        <Overlay />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 z-[2] flex items-center gap-5">
            {slides.map((_, index)=> (
                <button onClick={() => setCurImg(index)}
                key={index} className={`${index === curImg ? "w-10" : "w-3"} h-3 rounded-full bg-white`}></button>
            ))}
        </div>
    </div>
    );
};

export default Slider;