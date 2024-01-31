import { GoMoveToStart } from "react-icons/go";
import { data } from "../../Components/Assets/Data";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Display() {
  const{ name, id } = useParams();
  const product = data[name].products[id];
  const productData = data[name].products[id].data;
  const [ displayImage, setDisplayImage ] = useState(product.image);
  const [ bg01, setBg01 ] = useState(productData[4].Backgrounds.bg01);
  const [ bg02, setBg02 ] = useState(productData[4].Backgrounds.bg02);
  const [ bg03, setBg03 ] = useState(productData[4].Backgrounds.bg03);
  const [activeLink, setActiveLink] = useState('bg01');
  const handleBg01 = () => {
    setDisplayImage(bg01);
    setActiveLink('bg01');
  }
  const handleBg02 = () => {
    setDisplayImage(bg02);
    setActiveLink('bg02');
  }
  const handleBg03 = () => {
    setDisplayImage(bg03);
    setActiveLink('bg03');
  }
  const handleColor01 = () => {
    setDisplayImage(productData[0].OutletImage);
    setBg01(productData[0].Backgrounds.bg01);
    setBg02(productData[0].Backgrounds.bg02);
    setBg03(productData[0].Backgrounds.bg03);
    setActiveLink('bg01');
  }
  const handleColor02 = () => {
    setDisplayImage(productData[1].OutletImage);
    setBg01(productData[1].Backgrounds.bg01);
    setBg02(productData[1].Backgrounds.bg02);
    setBg03(productData[1].Backgrounds.bg03);
    setActiveLink('bg01');
  }
  const handleColor03 = () => {
    setDisplayImage(productData[2].OutletImage);
    setBg01(productData[2].Backgrounds.bg01);
    setBg02(productData[2].Backgrounds.bg02);
    setBg03(productData[2].Backgrounds.bg03);
    setActiveLink('bg01');
  }
  const handleColor04 = () => {
    setDisplayImage(productData[3].OutletImage);
    setBg01(productData[3].Backgrounds.bg01);
    setBg02(productData[3].Backgrounds.bg02);
    setBg03(productData[3].Backgrounds.bg03);
    setActiveLink('bg01');
  }
  const handleColor05 = () => {
    setDisplayImage(productData[4].OutletImage);
    setBg01(productData[4].Backgrounds.bg01);
    setBg02(productData[4].Backgrounds.bg02);
    setBg03(productData[4].Backgrounds.bg03);
    setActiveLink('bg01');
  }
  return (
    <div className="sm:pt-[12vh] pt-[8vh] h-[90vh] bg-[#FFE9C7]">
      <div className="h-full">
        <div className=" w-3/4 mx-auto flex py-[2%] gap-[1.5%] h-full">
          <div className="w-[5%]">
            <Link to={"/collections/" + name}>
              <GoMoveToStart className="text-4xl"/>
            </Link>
          </div>
          <div className="w-[40%]">
            <div className="border-2 border-black w-full h-full flex gap-[3%] p-[2%]">
              <div className="">
                <img
                  className="w-full h-full object-cover border-2 border-black "
                  src={displayImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between px-[4%]">
                  <div className="w-24 h-24 rounded-full overflow-hidden" onClick={handleColor01}>
                    <div>
                      <img src={productData[0].OutletImage} alt="" className="w-full h-full scale-125 translate-y-4" />
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden" onClick={handleColor02}>
                    <div>
                      <img src={productData[1].OutletImage} alt="" className="w-full h-full scale-125 translate-y-4" />
                    </div>                  
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden" onClick={handleColor03}>
                    <div>
                      <img src={productData[2].OutletImage} alt="" className="w-full h-full scale-125 translate-y-4" />
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden" onClick={handleColor04}>
                    <div>
                      <img src={productData[3].OutletImage} alt="" className="w-full h-full scale-125 translate-y-4" />
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden" onClick={handleColor05}>
                    <div>
                      <img src={productData[4].OutletImage} alt="" className="w-full h-full scale-125 translate-y-4" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className=" w-[45%] flex flex-col justify-between ">
            <div>
              <h3 className="font-rozha-one text-4xl text-[#5C0728]">Doraemon</h3>
              <h4 className=" text-2xl text-[#5C0728]">KID06</h4>
              <p className="mt-10 text-xl text-[#5C0728]">
                From whimsical animal-shaped lamps to dreamy nightlights adorned
                with stars and moon motifs, our Kids Collection of lamps adds a
                touch of magic and wonder to any space, creating a cozy ambiance
                that nurtures their imagination and brings bedtime stories to
                life.
              </p>
            </div>
            <div className="flex gap-6 -mb-2 ">
              <div className={`p-2 border-black ${activeLink === 'bg01' ? 'border-2' : ''}`} onClick={handleBg01}>
                <img
                  className="w-[142px] h-[187px] object-cover border-2 border-black "
                  src={bg01}
                  alt=""
                />
              </div>
              <div className={`p-2 border-black ${activeLink === 'bg02' ? 'border-2' : ''}`} onClick={handleBg02}>
                <img
                  className="w-[142px] h-[187px] object-cover border-2 border-black "
                  src={bg02}
                  alt=""
                />
              </div>
              <div className={`p-2 border-black ${activeLink === 'bg03' ? 'border-2' : ''}`} onClick={handleBg03}>
                <img
                  className="w-[142px] h-[187px] object-cover border-2 border-black "
                  src={bg03}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
