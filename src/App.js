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
  state = {modalVisible: false,}
  handleOpenModal = (event) =>{
      this.setState({
          modalVisible: true,
      })
  }
  handleCloseModal = (event) =>{
      this.setState({
          modalVisible: false,
      })
   }
  
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
          <NavBar>
            <HomeNav/>
            <MessagesNav handleOpenModal = {this.handleOpenModal}/>
            <WishNav handleOpenModal = {this.handleOpenModal}/>
            <SettingsNav handleOpenModal = {this.handleOpenModal}/>
            <AccountNav handleOpenModal = {this.handleOpenModal}/>
          </NavBar>
          <InfoLayout>
          <CheckLayout>
            <CheckBtn/>
            <CheckBtn/>
            <CheckBtn/>
            <CheckBtn/>
          </CheckLayout>
            <SearchInfo/>
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
            <PlusBtn/>
          </InfoLayout>
        </HomeLayOut>
        {
          this.state.modalVisible &&
          <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                  <h1>

                  </h1>
              </Modal>
          </ModalContainer>
        }
        
      </div>
    );
  }
}

export default App;
