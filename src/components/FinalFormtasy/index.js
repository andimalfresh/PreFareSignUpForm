import React, {Component} from  'react'
import styles from './FinalFormtasy.module.scss'

class FinalFormtasy extends Component {
    render() {
    return (
        <div className={styles.formWrapper}>
            Interactive form example for PreFare foods..
            <div className={styles.signUpA}>
            <form>
                <p>My name is....<input className={styles.formInput} /></p>
                <p>I wish to have food delivered for myself and <input className={styles.formInput} /> additional people.</p>
                <p>We live in zipcode <input className={styles.formInput} /></p>
                <p>My email address is <input className={styles.formInput} /></p>
            </form>
            </div>
        </div>
    )
  }
}

export default FinalFormtasy