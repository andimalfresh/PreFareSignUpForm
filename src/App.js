import React, { Component } from 'react';
import FinalFormtasy from './components/FinalFormtasy'
import TitleBar from './components/TitleBar'
import Prefooter from './components/Prefooter'
import ParallaxComponent from './components/ParallaxComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './App.module.scss';

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
      gluten_free: null,
      vegetarian: null,
      number_of_servings:'',
      phone: '',
      meal_credits: '',
      showInputFormB: false,
      showInputFormC: false,
      showInputFormD: false,
    }
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
    <Router>
    <div className={styles.App}>
      <TitleBar />
        <div className='fancyPics'>

          {/* <ParallaxComponent /> */}
        </div>
        <FinalFormtasy handleFormD={this.handleFormD} handleFormC={this.handleFormC} handleFormB={this.handleFormB} showInputFormB={this.state.showInputFormB} showInputFormC={this.state.showInputFormC} showInputFormD={this.state.showInputFormD} />
        <Prefooter />
    </div>
    </Router>
    );
  }
}
export default App;
