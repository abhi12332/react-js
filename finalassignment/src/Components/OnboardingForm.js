import React from 'react'

import './List.css';
class OnboardingForm extends React.Component
{
    constructor()
    {
        super();
        this.state={
            id:'',
            Name:'',
            Category:'Domestic',
            Domicile: false,
            Birth_certificate:false,
            Marksheets:false, 
            Police_clearance:false,
            Passport:false,
            Declaration:false,
            DOB:'',
            Father_Name:'',
            Mother_Name:'',
            Marks:'',
            NameError:'',
            DomicileError:'',
            Birth_certificateError:'',
            MarksheetsError:'',
            Police_clearanceError:'',
            PassportError:'',
            DeclarationError:''
        }
    }

    submitForm = () => 
    {

        
        this.setState(
            {
                DomicileError:"",

                
            }
        )
        
        if(this.validation())
         {
            fetch('http://localhost:5000/Student', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.json)
            .then(data => {
                console.log(data);
                
            })
         }
         else{
             
             alert("somthing is wrong please try again");

         }

     }
    
    validation =()=>
    {
        if(this.state.Category == 'Domestic')
        {
            if(this.state.Domicile == false || this.state.Marksheets == false || this.state.Declaration == false || this.state.Birth_certificate == false)
            {
                this.setState(
                    {
                        DomicileError:"This field is required",
                        MarksheetsError:"This field is required",
                        DeclarationError:"This field is required",
                        Birth_certificateError:"This field is required"
                        

                    }
                )
            }
            else 
            {
                return true;
            }
        
        }
        else{
            if(this.state.Category == 'International')
            {
                if(this.state.Domicile == false || this.state.Marksheets == false || this.state.Declaration == false || this.state.Birth_certificate == false || this.state.Passport == false || this.state.Police_clearance == false)
                       {
                          this.setState(
                              {
                                DomicileError:"This field is required",
                                MarksheetsError:"This field is required",
                                DeclarationError:"This field is required",
                                Birth_certificateError:"This field is required",
                                Police_clearanceError:"This field is required",
                                PassportError:"This field is required"
                              }
                            )
                       }
                else 
                      {
                         return true;
                      }
            }
            else 
            {
                return true;
            }
        }
    }    

    valueChange=(e)=>
    {
       
        this.setState({

            [e.target.name]: e.target.value

        })
        
console.log(e.target.value)
    }
    valueChang2=(e)=>
    {
       
        this.setState({
           [e.target.name]:e.target.checked
           
        });
        
        console.log(e.target.checked)
    }
    navigateToList = () => {
        this.props.history.push('/List')
    }
    render(){
        return(

            <div>
             <div className="topnav">
                          
                          <a onClick={()=> this.navigateToList()} > Back To The List</a>
                           
                           <div className="search-container">
                           <form>
                                  <input type="text" placeholder="Search.." name="search"/>
                                  <button type="submit"><i className="fa fa-search"></i></button>
                           </form>
                           </div>
                </div>

            <form>
           
            <div>
                <label>Name</label>
                <input type="text" name="Name" value={this.state.Name} onChange={(e) => this.valueChange(e)} />
                 
            </div>
            <div>
                <label>Category</label>
                <select  name="Category" id="lang" onChange={(e) => this.valueChange(e)} value={this.state.Category}>
                        <option value="Domestic">Domestic</option>
                        <option value="International">International</option>
                        
                </select> 
            </div>
                   <input type="checkbox" name="Domicile"  onChange={(e)=>this.valueChang2(e)} value={this.state.Domicile}
/><span>Domicile</span>
<p style={ { color:"red"}}>{this.state.DomicileError}</p>
<br></br>
                  
                  
                   <input type="checkbox" name="Birth_certificate" onChange={(e)=>this.valueChang2(e)} value={this.state.Birth_certificate}/><span>Birth_certificate</span>
                   <p style={ { color:"red"}}>{this.state.Birth_certificateError}</p>
                  <br></br>
                   <input type="checkbox" name="Marksheets" onChange={(e)=>this.valueChang2(e)} value={this.state.Marksheets}/><span>Marksheets</span>
                   <p style={ { color:"red"}}>{this.state.MarksheetsError}</p>
                   <br></br>
                   <input type="checkbox"  name="Police_clearance" onChange={(e)=>this.valueChang2(e)} value={this.state.Police_clearance}/><span>Police_clearance</span>
                   <p style={ { color:"red"}}>{this.state.Police_clearanceError}</p>
                   <br></br>
                   <input type="checkbox" name="Passport" onChange={(e)=>this.valueChang2(e)} value={this.state.Passport}/><span>Passport</span>
                   <p style={ { color:"red"}}>{this.state.PassportError}</p>
                   <br></br>
                   <input type="checkbox" name="Declaration" onClick={(e)=>this.valueChang2(e)} value={this.state.Declaration}/><span>Declaration</span>
                   
                   <p style={ { color:"red"}}>{this.state.DeclarationError}</p>
                   <br></br>
            <div>

                <label>Date OF Birth</label>
                <input type="datetime-local" name="DOB" value={this.state.DOB} onChange={(e) => this.valueChange(e)}  required/>
            </div>
            <div>
                <label>Father Name</label>
                <input type="text" name="Father_Name" value={this.state.Father_Name} onChange={(e) => this.valueChange(e)} required/>
                
            </div>
            <div>
                <label>Mother Name</label>
                <input type="text" name="Mother_Name" value={this.state.Mother_Name} onChange={(e) => this.valueChange(e)} required/>
            </div>
            <div>
                <label>Marks</label>
                <input type="number" name="Marks" value={this.state.Marks} onChange={(e) => this.valueChange(e)} required />
            </div>
            
            </form>
            <div>
                
                <button type = "submit" onClick={() => this.submitForm()}>Save</button>
            </div>

           
        </div>
    )
    }
}
export default OnboardingForm;