import React, { Component } from 'react';
import logo from './logo.svg';
import kidspanel from './assests/kids-panel.jpg' 
import { CSSTransitionGroup } from 'react-transition-group';
import '../node_modules/flat-ui/bootstrap/css/bootstrap.css';
import '../node_modules/flat-ui/css/flat-ui.css';
import './App.css';
import SimpleSlider from './SimpleSlider'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

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
              <SimpleSlider/>
              <PageTabs/>
            </div>
          </div>
        : null}
      </div>
    )
    
  }
}

class PageTabs extends Component {
  render() {
    return (
      <div>
        <h2>Oferta</h2>
        <Tabs
          className="container"
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="one">Dzieci</Tab>
            <Tab tabFor="two">Młodzież</Tab>
            <Tab tabFor="three">Dorośli</Tab>
          </TabList>
          <TabPanel tabId="one">
          <div className="col-md-4">
            <img className="img-offer" alt="kids" src={kidspanel} />
          </div> 
            <div className="todo col-md-8">              
              <ul>
                  <li>
                  <div class="todo-icon fui-user"></div>
                    <div className="todo-content">
                      <h4 className="todo-name">Opis zajęć</h4>
                      Wprowadzenie zawartości leksykalno-gramatycznej odbywa się głównie za pomocą materiałów wizualnych (karty, mapy, prezentacje, rysunki, przedmioty i wiele innych) oraz poprzez gry i zabawy.
                    </div>
                  </li>
                  <li>
                  <div class="todo-icon fui-user"></div>
                    <div className="todo-content">
                      <h4 className="todo-name">Opis zajęć</h4>
                      Wprowadzenie zawartości leksykalno-gramatycznej odbywa się głównie za pomocą materiałów wizualnych (karty, mapy, prezentacje, rysunki, przedmioty i wiele innych) oraz poprzez gry i zabawy.
                    </div>
                  </li>
                  <li>                 
                    <div class="todo-icon fui-user"></div>
                    <div className="todo-content">
                      <h4 className="todo-name">Opis zajęć</h4>
                      Wprowadzenie zawartości leksykalno-gramatycznej odbywa się głównie za pomocą materiałów wizualnych (karty, mapy, prezentacje, rysunki, przedmioty i wiele innych) oraz poprzez gry i zabawy.
                    </div>
                    </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel tabId="two">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId="three">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </div>
    );
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
