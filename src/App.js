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
      showInputFormB: false,
      showInputFormC: false,
    }
  }

  handleFormB = () => {
    this.setState({
        showInputFormB: true
    })
  }

  handleFormC = () => {
    this.setState({
        showInputFormC: true
    })
  }

  render() {
  return (
    <div className="App">
      <TitleBar />
      <FinalFormtasy showInputFormB={this.state.showInputFormB} showInputFormC={this.state.showInputFormC} />
    </div>
    );
  }
}
export default App;
