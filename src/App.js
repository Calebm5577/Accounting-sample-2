import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header'
import {Header2} from './Components/Header2/Header2'
// import {Body} from './Components/HomeComponents/HomeBanner/Body/Body'
import {Office} from './Components/OurOffice/Office'
import {Call} from './Components/CallUs/Call'
import {BottomBanner} from './Components/BottomBanner/BottomBanner'
import { Switch, Route } from 'react-router-dom';

import { StickyContainer, Sticky } from 'react-sticky';

//Pages
import {About} from './Pages/About'
import {Home} from './Pages/Home'
import {Services} from './Pages/Services'
import {Contact} from './Pages/Contact'

function App() {
  return (
    <div className="App">
      <Header />
        <StickyContainer>
        <Sticky>
            {({
              style
            }) => (
              <header style={style} className="Mainnav">
                <Header2 />
              </header>
            )}
          </Sticky>
          <Switch>
            <Route exact path='/About' component={About}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Services' component={Services}/>
            <Route exact path='/Contact' component={Contact}/>
          </Switch>
      <BottomBanner />
      </StickyContainer>
    </div>
  );
}

export default App;
