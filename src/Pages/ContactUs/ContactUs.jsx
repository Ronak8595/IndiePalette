import VisCard from "../../Components/Assets/VisCard.png"
import ContactUsBanner from "../../Components/Assets/ContactUsBanner.png"
import { useEffect } from "react"

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sm:pt-[12vh] pt-[8vh] sm:h-[90vh] h-[94vh]">      
      <div className="relative h-full">
        <div className="sm:h-1/2 h-1/4 bg-[#5C0728]">
          <img className="w-full h-full" src={ContactUsBanner}/>
          <span className="text-[#FFD08A] sm:text-5xl text-3xl font-rozha-one absolute sm:top-[20%] top-[10%] sm:left-[10%] left-[5%]">Contact Us</span>
        </div>
        <img className="absolute inset-0 sm:max-h-[60%] max-w-[90%] max-h-full mx-auto my-auto shadow-2xl" src={VisCard}/>
        <div className="sm:h-1/2 h-3/4 bg-[#FFE9C7]"></div>
      </div>
    </div>
  )
}
