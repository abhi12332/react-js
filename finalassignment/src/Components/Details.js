import React from 'react';
class Details extends React.Component
{

   

   constructor() {
       super();
       
               this.state = {
                  
                    vehicleDetails: null
               }
          
       }
   

   componentDidMount() {
     
       this.getVehicleDetails();
   }

   getVehicleDetails = () => {
       const studentId = this.props.match.params.studentId;
       
       fetch(`http://localhost:5000/student/${studentId}`).then(res => res.json()).then(data => {
           this.setState({
               vehicleDetails: data
              
           });
       });
   }


    navigateToList = () => {
        this.props.history.push('/List')
    }


    render()
    {
       console.log(this.state);
        return(
           
            <div>
                
                   <fieldset id="field">
                   VehicleDetails -
                   {
                       this.state.vehicleDetails &&
                   
                       <div>    
                   
                 
                    <table id="customers">
                                   
                                   <tr>
                                  
                                     <th>Information</th>
                                     <th>Details</th>
   
                                     </tr>
   
                                    
                                  
                                     <tr>
                                        <td>First Name</td>
                                        <td>{this.state.vehicleDetails.Name} </td>
                                     </tr>
                                     <tr>
                                        <td>Father Name</td>
                                        <td>{this.state.vehicleDetails.Father_Name} </td>
                                     </tr>
                                     <tr>
                                        <td>Mother_Name</td>
                                        <td>{this.state.vehicleDetails.Mother_Name} </td>
                                     </tr>
                                     
                                     <tr>
                                        <td>Category</td>
                                        { }
                                        <td>{this.state.vehicleDetails.Category} </td>
                                     </tr>
                                   </table>    
                           </div>     
       }    
               
                   <div>
                       <button  onClick={() => this.navigateToList()}>Back to Home</button>
                       
                        
                   </div>
                   </fieldset>  
               </div>
        );

    }
}


export default Details;