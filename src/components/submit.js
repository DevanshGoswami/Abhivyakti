import React from 'react';
import firebase from 'firebase';
import Thanks from './thanks';

var firebaseConfig = {
    apiKey: "AIzaSyAmQtAkeoqYNftNqPqiT9c6zhNkLvPa4EI",
    authDomain: "submitionsabhi.firebaseapp.com",
    databaseURL: "https://submitionsabhi.firebaseio.com",
    projectId: "submitionsabhi",
    storageBucket: "submitionsabhi.appspot.com",
    messagingSenderId: "377208660116",
    appId: "1:377208660116:web:82e03ac4b99345b24f1481"
  };

  firebase.initializeApp(firebaseConfig);

  var Ref = firebase.database().ref('Submitions');

  function SaveSubmit(name,email,domain,link,topic){
      var newSubmit = Ref.push();
      newSubmit.set({
          name : name,
          email : email,
          domain: domain,
          link: link,
          topic: topic
        
      });
  }


class Submit extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            link: "",
            domain: "",
            topic: "",
            show1:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
       
      
        var N = this.props.name;
        var E = this.props.email;
        var L = this.state.link;
        var D = this.state.domain;
        var T = this.state.topic;
      


        SaveSubmit(N,E,L,D,T);

        alert("Submitted");
        this.setState({
            show1: false
        })
        e.preventDefault();
       
    }

    handleChange(e){
       
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    
    render(){
         return(
             <>
             {this.state.show1?
            <div className="container">
            <div className="text-center mb-5">
            <h1 style={{color:"#13007d",fontWeight:"800"}}>INSTRUCTIONS</h1>
            </div>
            <div className="row justify-content-center">
                 <div>
                 <ul>
                   <li>No entry fee is required to take part in the competition.</li>
                   <li>The submission portal will open on 24th October 2020.</li>
                   <li>The deadline for editorial submission is 1st November 2020.</li>
                   <li>By submitting to the competition,<br></br> the participant agrees to abide by all the competition rules.</li>
                   <li>Participants must strictly adhere to the word limit of 1500 words.</li>
                   <li>Only original work will be considered for the competition.<br></br> Any form of plagiarism will result in disqualification of the participant.</li>
                   <li>All participants will receive a certificate of Participation.</li>
                   <li>The decision declared by CodeChef SRM Chapter will be final and binding.</li>
                   <li><strong>Submit the link to the google docs where you have written the editorial.</strong></li>
               </ul>
                 </div>
            </div>

           
           <div class="card-deck justify-content-center">
                   <div className="col-md-3"></div>
               <div class="card " style={{border:"none"}}>
                   <div class="card-body">
                   <form onSubmit={this.handleSubmit}>
                   <div class="form-check form-check-inline my-4">
               <input class="form-check-input" type="radio" onChange={this.handleChange} name="domain" id="inlineRadio1" value="Technical"/>
               <label class="form-check-label" for="inlineRadio1" style={{color:"#13007d"}}>Technical</label>
               </div>
               <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" onChange={this.handleChange} name="domain" id="inlineRadio2" value="Non-Technical"/>
               <label class="form-check-label" for="inlineRadio2" style={{color:"#13007d"}}>Non-Technical</label>
               </div>
           <div class="form-group">
               <label for="exampleFormControlInput1" style={{color:"#13007d"}}>Topic</label>
               <input type="text" class="form-control" name="topic" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Android 9.0" required/>
           </div>
           
           <div class="form-group">
               <label for="exampleFormControlInput2" style={{color:"#13007d"}}>Link to Docx</label>
               <input type="text" class="form-control" name="link" onChange={this.handleChange} id="exampleFormControlInput2" placeholder="https://docs.google.com/kjaflk" required/>
           </div>
           <div className="text-center ">
                       <button type="submit" class="btn btn-primary" style={{background:"#13007d",color:"white"}}>Submit</button>
                       </div>
           </form>
                   </div>
               </div>
               <div className="col-md-3"></div>
           </div>
            </div> 
             : <Thanks/>}
             </>
         );
    }
}

export default Submit;