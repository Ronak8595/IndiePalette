import { useParams } from "react-router-dom"
import Product from "../../Components/Product/Product"
import { data } from "../../Components/Assets/Data"

export default function Collections() {
  const { name } = useParams();
  const List = data[name];
  const array = Object.entries(List.products);
  const products = [...array].reverse();
  const wordsArray = List.title.split(' ');
  const category = wordsArray[0];
  return (
    <div className="sm:mt-[12vh] mt-[8vh]">
      <div className="bg-[#FFE9C7] text-[#5C0728] pb-[5%]">
        <div className="text-center px-[10%] sm:py-[1%] py-[3%]">
          <h1 className="font-rozha-one text-3xl sm:text-5xl py-[1.5%]">{List.title}</h1>
          <p className="text-lg">
            {List.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-left px-[10%]">
          {products.map(([id, product]) => <Product key={id} id={id} name={product.name} category={category} image={product.image}/>)}
        </div>
      </div>
    </div>
  )
}
