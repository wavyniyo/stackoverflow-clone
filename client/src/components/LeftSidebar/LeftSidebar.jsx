import React from 'react' ;
import './LeftSidebar.css' ;
import { NavLink } from 'react-router-dom' ;
import Globe from '../../assets/Globee.svg' ;

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active' >
          <p>Home</p>
        </NavLink>

        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' >
            <img src={Globe} alt='Globe' />
            <p style={{paddingLeft: "10px"}} > Questions </p>
          </NavLink>

          <NavLink to='/Tags'  className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
            <AiIcons.AiFillTag />
            <p>Tags</p>
          </NavLink>

          <NavLink to='/Users'  className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
            <AiIcons.AiOutlineUser />
            <p>Users</p>
          </NavLink>
          <br></br>
          <p className='side-nav-links' activeClassName='active' style={{margin: "9px"}}> Explore Community </p>
          <a href="https://client-stackoverflow-clone.netlify.app/" class="stackbtn"><i className='icon'> <IoIcons.IoMdPeople /> </i><span> Community </span></a>  

        </div>

      </nav>
      
    </div>
  )
}

export default LeftSidebar ;
