import React from  'react'
import styles from './FinalFormtasy.module.scss'



const FinalFormtasy = (props) => {


    return (
        <div className={styles.formWrapper}>
            Interactive form example for PreFare foods..
            <div className={styles.signUpA}>
                <form>
                    <p>My name is....<input className={styles.formInput}  /></p>
                    <p>I wish to order for <input className={styles.formInput} onKeyDown={props.handleFormB} /> people per meal.</p>
                    <p className={styles.formB}>We live in zipcode <input className={styles.formInput} onKeyDown={props.handleFormC} /></p>
                    <p className={styles.formC}>My email address is <input className={styles.formInput} onKeyDown={props.handleFormD} /></p>
                    <p className={styles.formD}>
                         We just need a bit more information and youll be all set... 
                         <input className={styles.formInput} onKeyDown={props.handleFormD} /></p>
                </form>
            </div>
        </div>
    )
  }

export default FinalFormtasy