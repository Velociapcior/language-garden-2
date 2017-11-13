import React, { Component } from 'react';
import kidspanel from './assests/kids-panel.jpg';
import youthpanel from './assests/youth-panel.jpg';
import adultpanel from './assests/adult-panel.jpg';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

class PageTabs extends Component {
  render() {
    return (
      <div>
        <h2>Oferta</h2>
        <Tabs
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="one">Dzieci</Tab>
            <Tab tabFor="two">Młodzież</Tab>
            <Tab tabFor="three">Dorośli</Tab>
          </TabList>
          <TabPanel className="row-background" tabId="one">
            <div className="row">
              <div className="col-md-4">
                <img className="img-offer" alt="kids" src={kidspanel} />
              </div> 
              <div className="col-md-8"> 
                <h3>Oferta dla dzieci z klas I-IV</h3>
                <h6>Zajęcia prowadzone są w grupach maksymalnie do 6 osób.</h6>
              </div>
            </div>
            <div className="row">
            <div className="todo col-md-12">
              
                <ul>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">Opis zajęć</h4>
                        Wprowadzenie zawartości leksykalno-gramatycznej odbywa się głównie za pomocą materiałów wizualnych (karty, mapy, prezentacje, rysunki, przedmioty i wiele innych) oraz poprzez gry i zabawy.
                      </div>
                    </li>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name"> Program nauczania</h4>
                        W zależności od potrzeb grupy zajęcia mogą być
                                    oparte na podręczniku szkolnym lub podręczniku zaproponowanym przez szkołę językową.
                                    Dokładamy wszelkich starań, aby dostosować program nauczania również do uczniów, którzy doświadczają trudności w przyswajaniu materiału
                                    edukacyjnego. 
                      </div>
                    </li>
                    <li>                 
                      <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">Szansa dla wszystkich</h4>
                        Stawiamy przede wszystkim na ścisłą współpracę z rodzicami, po to, aby
                                    proces nauczania był najbardziej efektywny.
                      </div>
                      </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="row-background" tabId="two">
          <div className="row">
              <div className="col-md-4">
                <img className="img-offer" alt="kids" src={youthpanel} />
              </div> 
              <div className="col-md-8"> 
                <h3>Oferta dla dzieci z klas V-VIII szkoły podstawowej oraz szkół ponadgimnazjalnych i średnich</h3>
                <h6>Zajęcia prowadzone są głównie w grupach z parzystą liczbą uczniów, jednak nie więcej niż 6.</h6>
              </div>
            </div>
            <div className="row">
            <div className="todo col-md-12">
              
                <ul>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">Kursy ogólne</h4>
                        kursy całoroczne, układane w oparciu o podręcznik dopasowany do poziomu ucznia/grupy.
                      </div>
                    </li>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name"> Kursy egzaminacyjne</h4>
                        Kursy egzaminacyjne: kursy obejmujące przygotowanie do egzaminów tj.: gimnazjalny, maturalny, 
                        <br/>
                        <div className="todo-name">KET</div>
                        <div className="todo-name">PET</div>
                        <div className="todo-name">FCE</div>
                        <div className="todo-name">CAE</div>
                        <div className="todo-name">IELTS (Academic and General)</div>
                        oraz ich symulacje.
                      </div>
                    </li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="row-background" tabId="three">
          <div className="row">
              <div className="col-md-4">
                <img className="img-offer" alt="kids" src={adultpanel} />
              </div> 
              <div className="col-md-8"> 
                <h3>Kursy dla dorosłych</h3>
                <h6>Zajęcia prowadzone są w grupach maksymalnie do 6 osób</h6>
              </div>
            </div>
            <div className="row">
            <div className="todo col-md-12">
                <ul>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">Opis zajęć</h4>
                        Wprowadzenie zawartości leksykalno-gramatycznej odbywa się głównie za pomocą materiałów wizualnych (karty, mapy, prezentacje, rysunki, przedmioty i wiele innych) oraz poprzez gry i zabawy.
                      </div>
                    </li>
                    <li>
                    <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">  Kursy egzaminacyjne</h4>
                        FCE, CAE, CPE oraz BEC, IELTS. 
                      </div>
                    </li>
                    <li>                 
                      <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name"> Kursy specjalistyczne</h4>
                        Kursy specjalistyczne Medycyna, biznes, media, gastronomia, turystyka, historia, literatura, i wiele innych. 
                      </div>
                    </li>
                    <li>                 
                      <div className="todo-icon fui-check"></div>
                      <div className="todo-content">
                        <h4 className="todo-name">Żywy język</h4>
                        Na tym etapie nauczania staramy się mówić przeważnie w języku obcym, co doskonale uczy sprawności słuchania ze zrozumieniem, kształtuje wymowę i zachęca do interakcji. 
                      </div>
                    </li>
                </ul>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default PageTabs;
