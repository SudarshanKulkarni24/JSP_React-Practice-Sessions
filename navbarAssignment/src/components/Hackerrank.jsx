import React, { Component } from 'react';
import styles from "./hackerrank.module.css";
class Hackerrank extends Component {
    render() {
        return (
            <>
              <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" alt="Brand-logo" width="150px"/></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                    <li className={styles.nav_item}><a href="#"><b>Products</b></a></li>
                        <li className={styles.nav_item}><a href="#"><b>Solutions</b></a></li>
                        <li className={styles.nav_item}><a href="#"><b>Resources</b></a></li>
                        <li className={styles.nav_item}><a href="#"><b>Pricing</b></a></li>
                    </ul>
                    <div className={styles.candidate_btn}>
                        <button><b>For Candidates</b> |</button>
                    </div>
                    <div className={styles.demo_btn}>
                        <button><b>Request Demo</b></button>
                    </div>
                    <div className={styles.signup_btn}>
                        <button><b>Sign Up</b></button>
                    </div>
                    
                    
                    </div>
                    
            </nav> 
            </>
        );
    }
}

export default Hackerrank;
