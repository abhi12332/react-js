import React from 'react';
import './List.css';


var abhishek="topnav"
class List extends React.Component {
    constructor() {
        super()
        this.state = {
            Student: [],
            query:'',
            people:[],
            Category:'All',
            temp:[]
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.getDetails();
        this.list();
      
      
    }

    getDetails = async () => {

        const res = await fetch('http://localhost:5000/Student');
        const data = await res.json();
        this.setState({
            Student: data
        })

            
    }

    navigateTo = () => {
        this.props.history.push('/OnboardingForm')
    }

    viewDetails = (student) => {
        this.props.history.push(`/Details/${student.id}`)
    }

    editItem = (student) => {
        console.log(student.id);
        this.props.history.push(`/Edit/${student.id}`)
    }
     
    list=()=>
    {
        this.props.history.push('/List');
    }
   
    deleteItem = (id) => {
        
        let r = window.confirm("Press a button!");
  if (r == true) {
    var studentId = id ;
        fetch('http://localhost:5000/Student/'+studentId, {
             method: 'delete',
             headers: {
                 'Content-Type': 'application/json'
                 // 'Content-Type': 'application/x-www-form-urlencoded',
             },
             body: JSON.stringify(this.state)
         })
         .then(res => res.json)
         .then(data => {
             console.log(data);
             this.componentDidMount()
            
         })
  } else {
    return true ;
  }
  
       
    }
    //  componentDidUpdate()
    //  { 
    //     this.setState((prev) => ({
           
    //         Student: prev.Student.filter(item => item.Name == this.state.query)
    //     }
    //     )
    //     );
    //  }

    valueChange=(e)=>
    {
        var a=e.target.value
        if(a=='International')
        {
            if(this.state.temp=='')
            {
                var students=this.state.Student.filter(item => item.Category.includes(e.target.value))
                console.log(students)
                    this.setState({
                        [e.target.name]:e.target.value,
                        Category:e.target.value,
                        temp:this.state.Student,
                        
                        Student: students
                    }
                    )
                
                  
            }
           else
           {
            var students=this.state.temp.filter(item => item.Category.includes(e.target.value))
            console.log(students)
                this.setState({
                    [e.target.name]:e.target.value,
                    Category:e.target.value,
                    temp:this.state.temp,
                    
                    Student: students
                }
                )
            
                console.log(e.target.value)
                console.log(this.state.query)
              
        }
    }
            else if(a=='Domestic')
            {

                if(this.state.temp=='')
                {
                    var students=this.state.Student.filter(item => item.Category.includes(e.target.value))
                    console.log(students)
                        this.setState({
                            [e.target.name]:e.target.value,
                            Category:e.target.value,
                            temp:this.state.Student,
                            
                            Student: students
                        }
                        )
                    
                      
                }
               else
               {
                var students=this.state.temp.filter(item => item.Category.includes(e.target.value))
                console.log(students)
                    this.setState({
                        [e.target.name]:e.target.value,
                        Category:e.target.value,
                        temp:this.state.temp,
                        
                        Student: students
                    }
                    )
                
                    console.log(e.target.value)
                    console.log(this.state.query)
                  
            }

             
            }
            else 
            {
                this.setState({
                    [e.target.name]:e.target.value
                })
                this.getDetails();
            }

        
        
    }


    search = (e) => {
        
        let a=e.target.value;
        if(a.length>0)
        {
        var students=this.state.Student.filter(item => item.Name.includes(e.target.value))
        console.log(students)
            this.setState({
               
                query:e.target.value,
                Student: students
            }
            )
        
            console.log(e.target.value)
            console.log(this.state.query)
          
        }
        else{
            this.setState({
                query:''
            })
            this.getDetails();

        }

    }
   
    
    render() {
       console.log(this.state.Student)

        return (
           

            
                     <div className={abhishek}>
                    
                    <div className={abhishek}>
                    <div>
                <label>Category</label>
                <select  name="Category" id="lang" onChange={(e) => this.valueChange(e)} value={this.state.Category}>
                        <option value="All">All</option>
                        <option value="Domestic">Domestic</option>
                        <option value="International">International</option>

                        
                </select> 
            </div>
                         
                           <a onClick={()=> this.navigateTo()}> Back To The Form</a>
                           <div className="search-container">
                           <form>
                                  <input type="text"  name="query" placeholder="Search.."  value={this.state.query} onChange={(e)=>this.search(e)}
                />
                                  {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                                 
                           </form>
                           </div>
                </div>
                    
                   
                     <fieldset className={abhishek}>
                                    
                     {
                         this.state.Student.map(item => (
                             <div>
                                
                                  <table id="customers">
                                 
                                    <tr >
                                   
                                      <th>Name</th>
                                      <th>marks</th>
                                      <th>Click Here For Delete and View</th>
                                      </tr>
    
                                     
                                   
                                      <tr>
                                         <td>{item.Name}</td>
                                        
                                         <td>{item.Marks} </td>
                                         <td>
 
                                        
                                             
                                         <span id="customers">
                                            {/* <button id = {context.a.a} onClick={() => this.viewDetails(item)}>View Details</button>
                                            <button  id ={context.a.a} onClick={() => this.deleteItem(item.id)}>Delete</button>
                                            <button  id ={context.a.a} onClick={() => this.editItem(item)}>Edit</button> */}
                                            <button id ="temp"onClick={()=> this.navigateTo()}> back</button>
                                            <button id ="temp" onClick={() => this.deleteItem(item.id)}> delete</button>
                                            <button id ="temp" onClick={() => this.viewDetails(item)}>View Details</button>
                                            <button   onClick={() => this.editItem(item)}>Edit</button>
                                         </span>  
                                         </td>
                                      </tr>
  
                                 </table>
                                 
                             </div>
                         ))
                     }
                     {/* <button id ={context.a.a} onClick={() => this.navigateToAddVehicle()}>Add vehicle</button>
                     <button id = {context.a.a} onClick={ context.clickEvent }>Colour Change</button>
                   */}
               
                      </fieldset>
                 </div>

        )
    }
}


export default List;