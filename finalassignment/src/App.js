
import './App.css';
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import OnboardingForm from './Components/OnboardingForm';
import Details from './Components/Details';
import AdminForm from './Components/AdminForm'
import List from './Components/List'
import Edit from './Components/Edit';

function App() {
  return (
    //<OnboardingForm/>
    <BrowserRouter>
    <div>
      <Switch>
            <Route path="/AdminForm" component={AdminForm}/>
            <Route path="/List" component={List}></Route>
            <Route path="/OnboardingForm" component={OnboardingForm}/>
            <Route path="/Details/:studentId" component={Details}/>
            
            <Route path="/Edit/:studentId" component={Edit}/>
            <Redirect from="/" to="/AdminForm"/>
            
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
