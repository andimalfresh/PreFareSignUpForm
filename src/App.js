import React, { Component } from 'react';
import FinalFormtasy from './components/FinalFormtasy'
import TitleBar from './components/TitleBar'
import './App.scss';

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
    }
  }
  render() {
  return (
    <div className="App">
      <TitleBar />
      <FinalFormtasy />
    </div>
    );
  }
}
export default App;
