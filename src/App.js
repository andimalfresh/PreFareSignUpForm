import React, { Component } from 'react';
import FinalFormtasy from './components/FinalFormtasy'
import TitleBar from './components/TitleBar'
import Prefooter from './components/Prefooter'
import PriceChange from './components/PriceChange'
// import ParallaxComponent from './components/ParallaxComponent'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './App.module.scss';

const menuAPI = "https://uumbrella.herokuapp.com/products/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      address_1:'',
      address_2:'',
      city:'',
      state:'',
      zip:'',
      email:'',
      signup_date:'',
      meals_per_week:'',
      delivery_day:'',
      account_on_hold: null,
      gluten_free: false,
      vegetarian: false,
      number_of_servings:'',
      phone: '',
      meal_credits: '',
      showInputFormB: false,
      showInputFormC: false,
      showInputFormD: false,
      showHiddenForm: false,
      menuItems: [],
      retail_price: '',
      menuItemSelected:''
    }
  }

  async componentDidMount() {
    let responce = await fetch(menuAPI)
    let json = await responce.json()
    console.log("jsonlog", json)
    this.setState ({
      menuItems: json
    })
  }
  getPriceData = (event) => {
      const { value, name } = event.target
      this.setState({
        [name]: value
      })
  }

  updateMenuItem = () => {
    let update = {
      retail_price: this.state.retail_price
    }
    fetch(`${menuAPI}${this.state.menuItemSelected}`, {
      method: "PUT", 
      body: JSON.stringify(update), 
      headers: {
        "Content-Type": "application/json", 
      }
    })
    setTimeout(function(){
      window.location.reload()
    },1000)
  }

  getIdForUpdate = (event) => {
    this.setState({
     menuItemSelected : event.target.id
    })
  }

  formSubmission = () => {
    console.log(this.state)
    alert('Thank you ' + this.state.name + ' for signing up with PreFare. We will send you a comfirmation text shortly to '+ this.state.phone + '.')
  }

  getFormData = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleHiddenForm = () => {
    console.log('Hidden Form')
    this.setState({
        showHiddenForm: true
    })
  }

  handleFormB = () => {
    console.log('FormB')
    this.setState({
        showInputFormB: true
    })
  }

  handleFormC = () => {
    console.log('FormC')
    this.setState({
        showInputFormC: true
    })
  }
  handleFormD = () => {
    console.log('FormD')
    this.setState({
        showInputFormD: true
    })
  }

  render() {
  return (
    <div className={styles.App}>
        <TitleBar />
        <FinalFormtasy formSubmission={this.formSubmission} getFormData={this.getFormData} handleFormD={this.handleFormD} handleFormC={this.handleFormC} handleFormB={this.handleFormB} showInputFormB={this.state.showInputFormB} showInputFormC={this.state.showInputFormC} showInputFormD={this.state.showInputFormD} />
        <Prefooter />
        <PriceChange updateMenuItem={this.updateMenuItem} retail_price={this.state.retail_price} getPriceData={this.getPriceData} getIdForUpdate={this.getIdForUpdate} menuItems={this.state.menuItems} handleHiddenForm={this.handleHiddenForm} showHiddenForm={this.state.showHiddenForm } />
    </div>
    );
  }
}
export default App;
