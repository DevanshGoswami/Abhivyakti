import React from 'react';
import Abhi from '../images/Abhivyakti.png';
import axios from 'axios';
import Submit from './submit';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            email:"",
            password:"",
            name:"",
            show1:true,
            show2:false,
            wrong:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
  axios.get("https://abhivyakti-7781e.firebaseio.com/.json").then((sub)=>{
      sub.data.forEach(element => {
          this.setState({
              data: this.state.data.concat(element)
          })
      });
  })
}

handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit(e){
    e.preventDefault();
    const email = this.state.email;
    const pass = this.state.password;
    const data = this.state.data;

   const user = data.filter(data=>data.password === pass && data.email ===email);
    
     
    if(user[0]){
        this.setState({
            show1:false,show2:true,wrong:false,name:user[0].name
        })
    }
    else{
        this.setState({
            wrong:true
        })
    }
}


    render(){
        return(
            <>
            {this.state.show1?
 <div className="container" style={{marginTop:"120px"}} >
 <div className="jumbotron text-center" style={{background:"none"}}>
   <img alt="" src={Abhi} height="90" width="270"></img>
 </div>
 <div class="card-deck justify-content-center">
     <div className="col-md-3"></div>
 <div class="card " style={{border:"none"}}>
     <div class="card-body">
     <form onSubmit={this.handleSubmit}>
         <div class="form-group">
             <label for="exampleInputEmail1" style={{color:"#13007d"}}><strong>Email address</strong></label>
             <input type="email" name="email" class="form-control" onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
         </div>
         <div class="form-group">
             <label for="exampleInputPassword1" style={{color:"#13007d"}}><strong>Password</strong></label>
             <input type="password" name="password" class="form-control" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Password" required/>
         </div>
         <div className="text-center ">
         <button type="submit" class="btn btn-link"><i class="fa fa-sign-in" style={{fontSize:"30px",color:"#13007d"}}></i></button>
         </div>
     </form>
     </div>
     {this.state.wrong?<div className="my-4 text-center">
         <p style={{color:"red",fontSize:"20px"}}>Wrong Credentials</p>
     </div>:null}
 </div>
 <div className="col-md-3"></div>
 </div>
 
</div>

:null}

{this.state.show2?<p style={{marginTop:"200px"}}><Submit name={this.state.name} email={this.state.email}/></p>:null}

            </>
        );
    }
}

export default Login;