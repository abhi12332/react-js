import React from 'react';
import './AdminForm.css'
class AdminForm extends React.Component
{
    constructor() {
        super()
        this.state = {
           
            AdminName: '',
            Password: ''
            
        }
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    navigateto=()=>
    {
            this.props.history.push('/OnboardingForm');
    }
     submitForm =()=>
     {
         this.navigateto();
     }
    render() {
        return (
            
            <div id ="main" >
                <form id = "login">
                <div>
                    <label> <b> User Reg Id
                     </b>
                    </label>
                    <input type="teaxt" name="AdminName" id="admin" value={this.state.AdminName} onChange={(e) => this.valueChange(e)} required/>
                    <br></br>
                </div>
                <div>
                    <label> <b> Password
                    </b>
                    </label>
                    <input type="text" name="Password" id ="password"value={this.state.Password} onChange={(e) => this.valueChange(e)} required/>
                    <br></br>
                </div>
                <br></br>    
                <div>
                    
                    <button type = "submit" onClick={() => this.submitForm()}>Save</button>
                </div>      
                <br></br>  

                </form>

               
            </div>
            
            
        )
    }
    
}
export default AdminForm;