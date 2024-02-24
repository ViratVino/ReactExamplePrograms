import { FaSearch } from "react-icons/fa";
const SearchCourses = ({searchTerm}) => {
  
    
  return (
    <div  className="search">
     
     <span><input type="text" placeholder="Search Here" onInput={e=>searchTerm(e.target.value)}/></span>
     <span className="searchIcon">
      <FaSearch />
      </span>
    </div>
  )
}

export default SearchCourses