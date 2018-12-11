import React, { Component } from 'react';
import HomeLayOut from './components/home-layout';
import FiltersLayOut from './components/filters-layout';
import Logo from './components/logo-layout';
import Cart from './components/cart';
import Fav from './components/fav';
import Calendar from './components/calendar';
import LeftPad from './components/leftpad';
import Switch from './components/switch';
import Bulb from './components/bulb';
import Search from './components/search';
import Delivered from './components/delivered_btn';
import NavBar from './components/navbar';
import HomeNav from './components/home-nav';
import MessagesNav from './components/messages-nav';
import WishNav from './components/wish-nav';
import SettingsNav from './components/settings-nav';
import AccountNav from './components/account-nav';
import InfoLayout from './components/info-layout';
import SearchInfo from './components/search-info';
import CardInfo from './components/card-info';
import CheckLayout from './components/check-layout';
import CheckBtn from './components/check-btn';
import ModalContainer from './containers/modal';
import Modal from './components/modal';
import PlusBtn from './components/plus-btn';

class App extends Component {
  
  render() {
    return (
      <div>
        <HomeLayOut>
          <LeftPad>
            <Logo/>
            <FiltersLayOut>
              <Bulb/>
              <Cart/>
              <Switch/>
              <Calendar/>
              <Switch/>
              <Fav/>
              <Switch/>
              <Search/>
              <Delivered/>
            </FiltersLayOut>
          </LeftPad>
          <CheckLayout>
            <CheckBtn/>
            <CheckBtn/>
            <CheckBtn/>
            <CheckBtn/>
          </CheckLayout>
          <NavBar>
            <HomeNav/>
            <MessagesNav/>
            <WishNav/>
            <SettingsNav/>
            <AccountNav/>
          </NavBar>
          <InfoLayout>
            <SearchInfo/>
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
            <PlusBtn/>
          </InfoLayout>
         
        </HomeLayOut>
        
      </div>
    );
  }
}

export default App;
