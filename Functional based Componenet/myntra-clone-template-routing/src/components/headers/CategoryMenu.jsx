import { Link } from "react-router-dom"

const CategoryMenu = () => {
    let catogoryListMenu=[
        {
            id:1,
            name:"Men"
        },
        {
            id:2,
            name:"Women"
        },
        {
            id:3,
            name:"Kids"
        },
        {
            id:4,
            name:"Home&Living"
        },
        {
            id:5,
            name:"Beauty"
        },
        {
            id:6,
            name:"Studio"
        },
    ]
  return (
    <ul className="list">
        {
            catogoryListMenu.map((val)=>{
                return(
             <li key={val.id}>
                <Link to={`shop/${val.name}`}>{val.name}</Link>
             </li>
                )
            })
        }

    </ul>
  )
}

export default CategoryMenu