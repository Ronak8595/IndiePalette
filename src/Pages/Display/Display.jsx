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
    <div className="sm:pt-[12vh] pt-[8vh] sm:h-[90vh] h-auto bg-[#FFE9C7]">
      <div className="h-full">
        <div className="sm:w-3/4 w-[85%] mx-auto sm:flex sm:py-[2%] py-[5%] sm:gap-[1.5%] h-full">
          <div className="w-[5%] sm:block hidden">
            <Link to={"/collections/" + name}>
              <GoMoveToStart className="text-4xl"/>
            </Link>
          </div>
          <div className="sm:w-[40%] sm:h-full h-[65%]">
            <div className="border-2 border-black w-full h-full flex sm:justify-between p-[2%] flex-col sm:flex-row">
              <div className="sm:h-full h-[88%]">
                <img
                  className="w-full h-full object-cover border-2 border-black"
                  src={displayImage}
                  alt=""
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:mt-0 mt-[2%] justify-between sm:pl-[2%] sm:h-full h-[10%]">
                  <div className="sm:w-24 sm:h-24 w-auto h-[16vw] rounded-full overflow-hidden m-[0.5%]" onClick={handleColor01}>
                    <div className="h-fit">
                      <img src={productData[0].OutletImage} alt="" className="w-full h-full scale-125 sm:translate-y-4 translate-y-2" />
                    </div>
                  </div>
                  <div className="sm:w-24 sm:h-24 w-auto h-[16vw] rounded-full overflow-hidden m-[0.5%]" onClick={handleColor02}>
                    <div className="h-fit">
                      <img src={productData[1].OutletImage} alt="" className="w-full h-full scale-125 sm:translate-y-4 translate-y-2" />
                    </div>                  
                  </div>
                  <div className="sm:w-24 sm:h-24 w-auto h-[16vw] rounded-full overflow-hidden m-[0.5%]" onClick={handleColor03}>
                    <div className="h-fit">
                      <img src={productData[2].OutletImage} alt="" className="w-full h-full scale-125 sm:translate-y-4 translate-y-2" />
                    </div>
                  </div>
                  <div className="sm:w-24 sm:h-24 w-auto h-[16vw] rounded-full overflow-hidden m-[0.5%]" onClick={handleColor04}>
                    <div className="h-fit">
                      <img src={productData[3].OutletImage} alt="" className="w-full h-full scale-125 sm:translate-y-4 translate-y-2" />
                    </div>
                  </div>
                  <div className="sm:w-24 sm:h-24 w-auto h-[16vw] rounded-full overflow-hidden m-[0.5%]" onClick={handleColor05}>
                    <div className="h-fit">
                      <img src={productData[4].OutletImage} alt="" className="w-full h-full scale-125 sm:translate-y-4 translate-y-2" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[45%] flex sm:flex-col flex-col-reverse justify-between sm:h-full h-[35%] sm:pt-0 pt-[5%]">
            <div>
              <h3 className="font-rozha-one sm:text-4xl text-2xl text-[#5C0728]">Doraemon</h3>
              <h4 className="sm:text-2xl text-sm text-[#5C0728]">KID06</h4>
              <p className="sm:mt-10 sm:text-xl text-sm text-[#5C0728]">
                From whimsical animal-shaped lamps to dreamy nightlights adorned
                with stars and moon motifs, our Kids Collection of lamps adds a
                touch of magic and wonder to any space, creating a cozy ambiance
                that nurtures their imagination and brings bedtime stories to
                life.
              </p>
            </div>
            <div className="flex sm:gap-6 gap-1 sm:-mb-2 flex-start">
              <div className={`sm:p-2 p-1 h-full border-black ${activeLink === 'bg01' ? 'border-2' : ''}`} onClick={handleBg01}>
                <img
                  className="sm:w-[142px] sm:h-[187px] h-[18vw] object-cover border-2 border-black "
                  src={bg01}
                  alt=""
                />
              </div>
              <div className={`sm:p-2 p-1 h-full border-black ${activeLink === 'bg02' ? 'border-2' : ''}`} onClick={handleBg02}>
                <img
                  className="sm:w-[142px] sm:h-[187px] h-[18vw] object-cover border-2 border-black "
                  src={bg02}
                  alt=""
                />
              </div>
              <div className={`sm:p-2 p-1 h-full border-black ${activeLink === 'bg03' ? 'border-2' : ''}`} onClick={handleBg03}>
                <img
                  className="sm:w-[142px] sm:h-[187px] h-[18vw] object-cover border-2 border-black "
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
