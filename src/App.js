import React from 'react';

import 'bootstrap/scss/bootstrap-reboot.scss';
import './App.scss';

import Hero from './components/hero.component'
import Banner from './components/banner.component'

import VideosContainer from './containers/videos.container'
import TourContainer from './containers/tour.container'

import Footer from './components/footer.component'


function App() {


    return (
      <div className="App">
        <Hero />
        <Banner>
          <span></span>
        </Banner>
        <main className="sections" id="main">
          <VideosContainer title="Videos" />
          <TourContainer title="Tour Dates" />
        </main>
        <Footer title="Them Things" />
      </div>
    );
}

export default App;
