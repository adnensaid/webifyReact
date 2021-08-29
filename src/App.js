import React, { Component } from 'react';
import { Header } from './components';
import  Home  from './features/home';
import Services from './features/servicesPgae';
import { BrowserRouter as Router, Route ,NavLink, Redirect, Switch, withRouter } from 'react-router-dom';


const HeaderWithRouter = withRouter(Header);
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage:0,
      scrollTop:0
    }
  }
  updateSelectedPage = (index)=>{
    this.setState({
      currentPage : index
    })
  }
  onScroll = (e)=>{
    const scrollTop =e.target.scrollTop;
    this.setState({
      scrollTop:scrollTop
    })
  }
  render(){
    return (
      <Router>
        <div
        className="App d-flex flex-column"
        onScroll = { this.onScroll }
        >
          <HeaderWithRouter scrollTop = { this.state.scrollTop } />
          <Switch>
            <Route path="/services" component={ Services }/>
            <Route path="/home"  component={ Home } />
            <Redirect to="/home" />
          </Switch>
        </div>    
      </Router>
    );
  }
}

export default App;
