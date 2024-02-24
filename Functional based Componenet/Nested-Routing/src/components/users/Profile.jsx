import { Outlet ,useLocation,Link} from "react-router-dom";

const Profile = () => {
  let profile=useLocation();
  console.log(profile);

let {avatar_url,login,html_url,repos_url,company,location,email,hireable,bio,follower,following,public_repos}=profile.state;

  return (
    <section id="profile">
      <article>
        <header>
          <Link to="/all-users" className="back-btn">Back</Link>
          <picture>
            <img src={avatar_url} alt="" />
            
            </picture>
            <main>
            <h2>{login}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis quibusdam cupiditate expedita hic in aut deleniti incidunt harum totam consequatur iste, fuga cumque, excepturi ducimus corrupti? Esse, incidunt enim.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia delectus earum beatae est assumenda harum sed repudiandae dolore porro saepe maiores ut ad commodi itaque, distinctio error? Laboriosam suscipit impedit perferendis hic dolor, doloribus fuga similique atque quia rem!
            </p>
            {/* <p>{repos_url}</p> */}
            <a href={html_url} target="_blank">View Github Profile</a>
            </main>
        </header>
      </article>
       
    </section>
  )
}

export default Profile