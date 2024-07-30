import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function HomePage() {
  useEffect(() => {

    document.title = "HomePage";
  },[]);
  const navigate = useNavigate();
  return (
    <>
      <h1>My Home Page</h1>
      <NavLink to="/product">
        <p>Go to Product Page</p>
      </NavLink>
    </>
  );
}

export default HomePage;
