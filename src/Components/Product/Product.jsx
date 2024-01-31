import { Link } from "react-router-dom"

function Products({name, id, image, category}) {
  return (
    <div className="sm:h-[20%] sm:w-[20%] m-[2.5%] text-[#5C0728]">
      <Link to={"/collections/" + category + "/" + id}>
        <div>
          <img src={image}/>
        </div>
        <h2 className="text-2xl font-semibold mt-[2%] font-rozha-one">{name}</h2>
        <h3 className="text-xl font-semibold font-Poppins">{id}</h3>
      </Link>
    </div>
  )
}

export default Products
