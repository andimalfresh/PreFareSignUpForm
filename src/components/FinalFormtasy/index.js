import React from  'react'
import styles from './FinalFormtasy.module.scss'



const FinalFormtasy = (props) => {


    return (
        <div className={styles.formWrapper}>
            Interactive form example for PreFare foods..
            <div className={styles.signUpA}>
            <form>
                <p className={styles.formOne}>My name is....<input className={styles.formInput}  /></p>
                <p className={styles.formOne}>I wish to order for <input className={styles.formInput} onKeyDown={props.handleFormB} /> people per meal.</p>
                <p className={`${props.showInputFormB ? 'hidden' : 'hidden'}`}>We live in zipcode <input className={styles.formInput} onKeyDown={props.handleFormC} /></p>
                <p className={`${props.showInputFormC ? 'hidden' : 'hidden'}`}>My email address is <input className={styles.formInput} onKeyDown={props.handleFormD} /></p>
            </form>
            </div>
        </div>
    )
  }

export default FinalFormtasy