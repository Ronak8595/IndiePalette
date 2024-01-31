import { useEffect } from "react"
import Banner from "../../Components/Assets/Banner.png"
import Profile from "../../Components/Assets/Profile.png"

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sm:mt-[12vh] mt-[8vh]">
      <div className="w-full">
        <img className="h-full w-full" src={Banner}/>
      </div>
      <div className="bg-[#FFE9C7]">
        <div className="text-center text-[#5C0728] text-Poppins sm:px-[18%] px-[8%] py-[2%] sm:text-2xl text-xl font-normal">
          <p className="sm:py-[1%] py-[3%]">
            <span className="font-rozha-one text-3xl">Indie Palette</span> , the manufacturer of these hand-made table lamps, is committed to the principles of Reduce, 
            Recycle, and Reuse by repurposing used glass bottles. Rather than being discarded in bins, on roads, 
            or with scrap vendors, these bottles are collected, drilled, washed, and dried to become the prime raw material 
            for Indie Palette&apos;s aesthetic lamps.
          </p>
          <p className="sm:py-[1%] py-[3%]">
            The process begins by selecting bottles of various shapes and sizes. 
            These bottles are then painted with carefully chosen colors from a vast palette. They are further adorned with 
            clay, dried flowers, beads, and mirrors, incorporating elements such as jute and cowrie shells. Each lamp is 
            crafted to reflect a specific theme, which currently includes Tribal art showcasing traditional works like 
            Madhubani, Warli, and Gond Art; Spring with an array of flowers; Kids capturing the shades of childhood; 
            Forest featuring a wide variety of flora and fauna; and Textured, showcasing modernistic and free painting styles.
          </p>
          <p className="sm:py-[1%] py-[3%]">
            The transformation of these beautifully decorated bottles into table lamps is truly remarkable. When illuminated 
            with warm light, it becomes hard to believe that they originated from repurposed glass bottles. 
            The entire manufacturing process is meticulously carried out by hand, with no use of machines. 
            This truly embodies the spirit of Make In India, as it is a purely indigenous product.Indie Palette aspires to 
            create employment opportunities for handicapped individuals, rag pickers, and the underprivileged section of 
            society. 
          </p>
          <p className="sm:py-[1%] py-[3%]">
            By supporting these marginalized groups, the company aims to make a positive impact and contribute to a 
            more inclusive society.In summary, Indie Palette&apos;s hand-made table lamps not only showcase creativity and 
            craftsmanship but also promote sustainability and social responsibility. Through their innovative approach to 
            reusing glass bottles and empowering disadvantaged individuals, Indie Palette sets an inspiring example of a 
            conscious and impactful business.
          </p>
        </div>
        <div className="text-[#5C0728] text-center sm:px-[18%] px-[8%] pb-0 sm:text-2xl text-xl font-normal text-rozha-one">
          <h1 className="sm:text-5xl text-3xl font-rozha-one">Words from the Founder</h1>
          <div className="sm:flex sm:justify-between sm:text-right mt-[5%]">
              <div className="sm:w-[30%] w-[80%] mx-auto sm:pb-0 pb-[6%]">
                <img className="sm:h-5/6" src={Profile}/>
              </div>
              <div className="sm:w-[55%]">
                <p className="sm:pb-[12%] pb-[6%] font-semibold text-Tinos">
                  “chalo maan liya ke kachraa hoon main,<br/>
                  tum to hunarmand ho tarasha kyun nahin?”
                </p>
                <p className="sm:pb-[12%] pb-[6%] font-normal text-Poppins">....and the journey began at Kanha National Park, Chhattisgarh, where a glass bottle knocked me off my feet.....</p>
                <p className="sm:pb-[12%] pb-[6%] font-semibold text-Tinos">
                  Pujari ne dekha to tilak lagaa diya<br/>
                  Majdoor ne dekha to hathoda chala diya<br/>
                  Jauhari ne dekha to heera banaa diya<br/>
                  Sab nazariye ki baat hai, hoon to main ek patthar hi!!
                </p>
              </div>
          </div>
        </div>
        <div className="text-center text-[#5C0728] sm:px-[18%] px-[8%] pb-[2%] sm:text-2xl text-xl font-normal text-Poppins">
          <p className="sm:py-[1%] py-[3%]">Bottle painting has always been my hobby but this time I stared at the bottle with a different 
            perspective in mind. I started visualizing the waste glass bottle as a source of light. As they say 
            “Imagination creates Reality”, my glass bottle eventually became a lamp and Indie Palette came to life!!
          </p>
          <p className="sm:py-[1%] py-[3%]">
            At Indie Palette, our collection showcases the respect we have for our culture-rich country, 
            its colours, seasons, flora, ethnicity, modernity and numerous other elements. Our surroundings 
            are our inspiration. We aim to bring the diverse shades of our neighborhood on a glass bottle by 
            way of varied art techniques.
          </p>
          <p className="sm:py-[1%] py-[3%]">
            Indie Palette is all about India and its inhabitants, so we are dedicated to spend a portion of our revenue 
            towards the wellbeing of the nation. However small the contribution is, it will make some difference, 
            somewhere. You can come forward, buy-if-u-like and support our small business for a noble cause.
          </p>
         <p className="sm:py-[1%] py-[3%] text-right">
            Kind regards,<br />
            Suvidha<br />
            Founder - Indie Palette<br />
            Chartered Accountant Educationist<br />
          </p>
        </div>
      </div>
    </div>
  )
}
