import React, { Component } from 'react';
import logo from './logo.svg';
import { CSSTransitionGroup } from 'react-transition-group';
import '../node_modules/flat-ui/bootstrap/css/bootstrap.css';
import '../node_modules/flat-ui/css/flat-ui.css';
import SimpleSlider from './SimpleSlider'
import './App.css';
import PageTabs from './PageTabs';
import PricingTable from './PricingTable';
import {  Sticky } from './sticky';

class Page extends Component {
  render(){
    return(
      <div>
        {this.props.pageCanRender ? 
          <div>
            <div className="header">
                <h1 className="Page-title">Language Garden</h1>
            </div>
            <div className="content">
                <Sticky className="sticky-class">
                  <div className="btn-group">
                  <a className="btn btn-primary col-md-12" href="#fakelink"><span>Początek</span></a>
                  <a className="btn btn-primary col-md-12" href="#fakelink"><span>Oferta</span></a>
                  <a className="btn btn-primary col-md-12" href="#fakelink"><span>Cennik</span></a>
                  <a className="btn btn-primary col-md-12" href="#fakelink"><span>Kontakt</span></a>
                  </div>
                </Sticky>
                <SimpleSlider/>
                <PageTabs/>
                <PricingTable/>
            </div>
          </div>
        : null}
      </div>
    )
    
  }
}

class WelcomeScreen extends Component {
  handleClick(){
    this.props.unmountMe()
  }

  componentWillUnmount(){
    this.props.unmounted();
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Language Garden</h1>
        <button type="button" onClick={() => this.handleClick()} className="btn btn-hg btn-primary btn-wide">Zacznij</button>
      </header>     
  </div>)
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {renderWelcomeScreen: true,
                  welcomeScreenDidUnmount: false};
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
    this.welcomeScreenUnmounted = this.welcomeScreenUnmounted.bind(this);
  }
  
  welcomeScreenUnmounted(){
    this.setState({
      welcomeScreenDidUnmount: true
    })
  }

  handleChildUnmount(){
    this.setState({renderWelcomeScreen: false});
  }

  render() {
    return (    
      <div>
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.state.renderWelcomeScreen ? <WelcomeScreen unmounted={this.welcomeScreenUnmounted} unmountMe={this.handleChildUnmount} /> : null}
        </CSSTransitionGroup>
          <Page className="page-container" pageCanRender={this.state.welcomeScreenDidUnmount}/>
      </div>
      );
    }
}

export default App;
