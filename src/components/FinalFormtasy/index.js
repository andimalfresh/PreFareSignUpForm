import React from  'react'
import styles from './FinalFormtasy.module.scss'



const FinalFormtasy = (props) => {


    return (
        <div className={styles.signUpA}> 
            <div className={styles.formWrapper} >
            <span className={styles.formTextGreen}>Interactive form example for PreFare foods..</span>
                <form>
                    <p>My name is....<input className={styles.formInput} name="name" onChange={props.getFormData }  /></p>
                    <p>I wish to order <input className={styles.formInputB} onKeyDown={props.handleFormB} name="number_of_servings"  onChange={props.getFormData } />servings per meal.</p>
                    <p style={props.showInputFormB ? {display: 'block'} : { display: 'none' }} className={styles.formB}>We live in zipcode <input type="number" className={styles.formInputC} onKeyDown={props.handleFormC} name="zip"  onChange={props.getFormData } /></p>
                    <p style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formC}>My email address is <input className={styles.formInput} onKeyDown={props.handleFormD} name="email"  onChange={props.getFormData } /></p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className={styles.formD}>
                        <span className={styles.formTextGreen}> We just need a bit more information and youll be all set... </span>
                    </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> address 1 <input className={styles.formInput}  name="address_1"  onChange={props.getFormData }/> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> address 2 <input className={styles.formInput} name="address_2"  onChange={props.getFormData } /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> city <input className={styles.formInput} name="city"  onChange={props.getFormData } /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> phone <input type="number" className={styles.formInput} name="phone"  onChange={props.getFormData } /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> gluten Free? <input disabled className={styles.formInputB} name="gluten_free"  onChange={props.getFormData } /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> vegetarian? <input disabled className={styles.formInputB} name="vegetarian"  onChange={props.getFormData } /> </p>
                    <button style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className={styles.signUpButton} onClick={props.formSubmission}> SIGN ME UP </button>     
                </form>
            </div>
        </div>
    )
  }

export default FinalFormtasy