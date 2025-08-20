
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Components/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "/src/App.css";


export default function Profile({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (

    <>
    <div className="back">
<button className="back-btn">
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span><Link to="/" className="nav-link">Home</Link></span>
</button>
    </div>
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Welcome, {user.email}</h3>
      {/* <h3>name, {user.name}</h3> */}
      {/* <button >Logout</button> */}
      <h1>--------------------</h1>
      <h3 className="qut">“Programming isn’t about what you know; it’s about what you can figure out.”</h3>
      <h1>--------------------</h1>


<div className="logout-btn">
<button class="Btn" onClick={handleLogout}> 
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  <div class="text">Logout</div>
</button>
</div>

    </div>
    </>
  );
}
