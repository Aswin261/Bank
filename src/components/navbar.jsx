import React from 'react';
import { Link} from "react-router-dom";
function Navigation() {
    return (
        <nav class="navbar navbar-dark bg-dark py-1 ml-0">
        <div class="navbar ml-0 py-0">
  <Link to="/"><button class="btn mr-0 py-md-0 "style={{color:"white"}}>Random User</button></Link>
  <Link to="/Bank"><button class="btn mr-0 py-md-0 "style={{color:"white"}}>Bank</button></Link>
  </div>
</nav>
      );
}

export default Navigation;
