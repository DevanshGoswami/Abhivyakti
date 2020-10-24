import React from 'react';
import Abhi from '../images/Abhivyakti.png';



class Thanks extends React.Component{
    render(){
        return(
            <>
            <div className="container" style={{marginTop:"150px"}} >
                <div className="jumbotron text-center" style={{background:"none"}}>
                  <img alt="" src={Abhi} height="90" width="270"></img>
                  <p className="lead my-4" style={{fontSize:"22px"}}>You have successfully submitted your response.<br></br><i class="fa fa-refresh" style={{color:"#13007d"}} aria-hidden="true"></i> to make another submission.</p>
                </div>
             <div className = "text-center mb-5">
             <a href = "https://www.instagram.com/codechefsrm/"><span className = "fa fa-instagram fa-2x mx-2" style={{color:"#13007d"}}></span></a>
             <a href = "https://www.facebook.com/CodeChefSRM"><span className = "fa fa-facebook fa-2x mx-2" style={{color:"#13007d"}}></span></a>
             <a href = "https://twitter.com/CodeChefSRM"><span className = "fa fa-twitter fa-2x mx-2" style={{color:"#13007d"}}></span></a>
             <a href = "https://www.linkedin.com/company/ccscsrm/"><span className = "fa fa-linkedin fa-2x mx-2" style={{color:"#13007d"}}></span></a>
             </div>
            </div>
            </>
        );
    }
}

export default Thanks;