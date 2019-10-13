import React from 'react'
import styles from './Prefooter.module.scss'

const Prefooter = ()=> {
    return (
        <div className={styles.prefooter}>
          <p>Who will you share your PreFare with? </p>
          <a href='/'><button className={styles.shareButton}>JOIN US TODAY</button></a>
        </div>

    )
}
export default Prefooter