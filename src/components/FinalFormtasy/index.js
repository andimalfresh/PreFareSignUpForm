import React from  'react'
import styles from './FinalFormtasy.module.scss'



const FinalFormtasy = (props) => {


    return (
        <div className={styles.signUpA}> 
            <div className={styles.formWrapper} >
            <span className={styles.formTextGreen}>Interactive form example for PreFare foods..</span>
                <form>
                    <p>My name is....<input className={styles.formInput}  /></p>
                    <p>I wish to order <input className={styles.formInputB} onKeyDown={props.handleFormB} />servings per meal.</p>
                    <p style={props.showInputFormB ? {display: 'block'} : { display: 'none' }} className={styles.formB}>We live in zipcode <input className={styles.formInputC} onKeyDown={props.handleFormC} /></p>
                    <p style={props.showInputFormC ? {display: 'block'} : { display: 'none' }} className={styles.formC}>My email address is <input className={styles.formInput} onKeyDown={props.handleFormD} /></p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className={styles.formD}>
                        <span className={styles.formTextGreen}> We just need a bit more information and youll be all set... </span>
                    </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> address 1 <input className={styles.formInput} /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> address 2 <input className={styles.formInput} /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> city <input className={styles.formInputC} /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> phone <input className={styles.formInputC} /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> gluten Free? <input className={styles.formInputB} /> </p>
                    <p style={props.showInputFormD ? {display: 'block'} : { display: 'none' }}> vegetarian? <input className={styles.formInputB} /> </p>
                    <button style={props.showInputFormD ? {display: 'block'} : { display: 'none' }} className={styles.signUpButton} type="submit"> SIGN ME UP </button>     
                </form>
            </div>
        </div>
    )
  }

export default FinalFormtasy