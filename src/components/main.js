import React from 'react';
import NavLogo from '../images/navlogo.png';
import SRM from '../images/srm.png';
import Login from './login';


import Fiesta from '../images/cheff.png'


class Main extends React.Component{
    render(){
        return(
            <>
           
            <nav class="navbar shadow p-3 mb-5 bg-white rounded fixed-top" style={{background:"white"}}>
                <a class="navbar-brand" href="https://codechefsrm.in/">
                    <img src={NavLogo} height="20" width="110" class="d-inline-block align-top mt-2" alt=""/>
                </a>
                <span class="navbar-text">
                <a href="https://www.srmist.edu.in/"><img src={SRM} height="40" width="40" alt=""></img></a>
                </span>
            </nav>
           <Login/>
           {/* <Submit/> */}
           {/* <Thanks/> */}
           <div className="text-center mb-5">
               <img alt="" src={Fiesta} height="200" width="200"></img>
               <p><span style={{color:"#13007d"}}>&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
           </div>
            </>
        );
    }
}

export default Main;