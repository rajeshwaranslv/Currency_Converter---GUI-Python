 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/layouts/sidebar';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import addFaqs from './components/Faq/add-faq';
import Dashboard from './components/layouts/Dashboard';
import listFaqs from './components/Faq/list-faq';
import addPages from './components/Pages/addPages';
import listPages from './components/Pages/listPages';
function App() {
  return (
    <Router>
    <div class="container-scroller">
      <Navbar/>
      <div class="container-fluid page-body-wrapper">
      <Sidebar/>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/add-faq" component={addFaqs}/>
      <Route exact path="/list-faq" component={listFaqs}/>
      <Route exact path="/add-page" component={addPages}/>
      <Route exact path="/list-page" component={listPages}/>
      </Switch>
      </div>
    </div>
    <Footer/>
    </Router>
 
  );
}

export default App;
