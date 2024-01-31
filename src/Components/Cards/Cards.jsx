import { Link } from "react-router-dom"

function Cards({Cover, name}) {
  return (    
    <div className="sm:w-[25%] sm:mx-[2%] sm:mb-[5%] h-[10%] w-[45%] mx-[2%] mb-[4%]">
      <Link to={"/collections/" + name} className="w-full h-full">
        <img className="shadow-2xl shadow-black-500/50 hover:opacity-60" src={Cover}/>
        <h2 className="text-center font-rozha-one text-[#5C0728] sm:text-4xl text-2xl pt-[12%]">{name}</h2>
      </Link>
    </div>
  )
}

export default Cards
