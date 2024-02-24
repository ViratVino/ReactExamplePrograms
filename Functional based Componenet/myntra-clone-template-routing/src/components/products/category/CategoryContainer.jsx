import { useParams } from "react-router-dom"

const CategoryContainer = () => {
   
  let {category}=useParams();
  console.log(category);


  return (
  <h1>{category}</h1>
  )
}

export default CategoryContainer