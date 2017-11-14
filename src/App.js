import React, { Component } from 'react';
import '../node_modules/flat-ui/bootstrap/css/bootstrap.css';
import '../node_modules/flat-ui/css/flat-ui.css';
import './App.css';
import logo from './logo.svg';
import { CSSTransitionGroup } from 'react-transition-group';
import scrollToComponent from 'react-scroll-to-component';
import SimpleSlider from './SimpleSlider'
import PageTabs from './PageTabs';
import PricingTable from './PricingTable';
import {  Sticky } from './sticky';
import Map from './Map';
import ContactData from './ContactData'

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
                  <a className="btn btn-primary col-md-12" onClick={() => scrollToComponent(this.SimpleSlider, {offset: -150, align: 'top', duration: 300})}><span>Początek</span></a>
                  <a className="btn btn-primary col-md-12" onClick={() => scrollToComponent(this.PageTabs, {offset: 0, align: 'top', duration: 300})}><span>Oferta</span></a>
                  <a className="btn btn-primary col-md-12" onClick={() => scrollToComponent(this.PricingTable, {offset: 0, align: 'top', duration: 300})}><span>Cennik</span></a>
                  <a className="btn btn-primary col-md-12" onClick={() => scrollToComponent(this.ContactData, {offset: 0, align: 'top', duration: 300})}><span>Kontakt</span></a>
                  <a className="btn btn-primary col-md-12" onClick={() => scrollToComponent(this.Map, {offset: 0, align: 'top', duration: 300})}><span>Mapa dojazdu</span></a>
                  </div>
                </Sticky>
                <SimpleSlider ref={(SimpleSlider) => {this.SimpleSlider = SimpleSlider;}}/>
                <PageTabs ref={(PageTabs) => {this.PageTabs = PageTabs;}}/>
                <PricingTable ref={(PricingTable) => {this.PricingTable = PricingTable;}}/>
                <ContactData ref={(ContactData) => {this.ContactData = ContactData;}}/>
                <Map ref={(Map) => {this.Map = Map;}}/>
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
