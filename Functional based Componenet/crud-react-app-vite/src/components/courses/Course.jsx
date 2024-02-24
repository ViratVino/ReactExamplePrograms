import { Link } from "react-router-dom"
const Course = ({title,trainer,id,description,createdAt}) => {
  return (
    <div className="list">
        <h1>{title}</h1>
        <p>{trainer}</p>
        <p className="view_more">
        <Link to={`/${id}`} className="btn-info" state={{id,title,trainer,createdAt,description}}>View More</Link>
        </p>
    </div>
  )
}

export default Course