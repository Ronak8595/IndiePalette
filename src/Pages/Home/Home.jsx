import Banner from "../../Components/Assets/Banner.png";
import Cards from "../../Components/Cards/Cards";
import Abstract from "../../Components/Assets/Covers/Abstract.png"
import Forest from "../../Components/Assets/Covers/Forest.png"
import Kids from "../../Components/Assets/Covers/Kids.png"
import Spring from "../../Components/Assets/Covers/Spring.png"
import Texture from "../../Components/Assets/Covers/Texture.png"
import Traditional from "../../Components/Assets/Covers/Traditional.png"
import Tribal from "../../Components/Assets/Covers/Tribal.png"


export default function Home() {
  return (
    <div className="sm:mt-[12vh] mt-[8vh] bg-[#FFE9C7]">
      <div className="w-full">
        <img className="h-full w-full" src={Banner} />
      </div>
      <div id="colls">
        <h1 className="text-center font-rozha-one text-[#5C0728] text-2xl sm:text-5xl py-[1.5%]">Collections</h1>
        <div className="flex px-[10%] flex-wrap justify-evenly">
          <Cards Cover = {Abstract} name = {"Abstract"}/>
          <Cards Cover = {Forest} name = {"Forest"}/>
          <Cards Cover = {Kids} name = {"Kids"}/>
          <Cards Cover = {Spring} name = {"Spring"}/>
          <Cards Cover = {Texture} name = {"Texture"}/>
          <Cards Cover = {Traditional} name = {"Traditional"}/>
          <Cards Cover = {Tribal} name = {"Tribal"}/>
        </div>
      </div>
    </div>
  );
}
