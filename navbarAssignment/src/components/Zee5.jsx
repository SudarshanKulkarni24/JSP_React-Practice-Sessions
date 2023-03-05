import React, { Component } from 'react';
import styles from "./zee5.module.css";
class Zee5 extends Component {
    render() {
        return (
            <>
              <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.4.1" alt="Brand-logo"  height="50px"/></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_item}><a href="#">Home</a></li>
                        <li className={styles.nav_item}><a href="#">TV Shows</a></li>
                        <li className={styles.nav_item}><a href="#">Movies</a></li>
                        <li className={styles.nav_item}><a href="#">Sports+</a></li>
                        <li className={styles.nav_item}><a href="#">Premium</a></li>
                    </ul>
                    <div className={styles.searchfield}>
                        <input type="search"  className={styles.searchtext} placeholder='Search for Movies, Shows, Channels etc'/>
                    </div>
                    <div className={styles.login_btn}>
                        <button>LOGIN</button>
                    </div>
                    <div className={styles.sub_btn}>
                        <button>BUY PLAN</button>
                    </div>
                    
                    </div>
                    
            </nav> 
            </>
        );
    }
}

export default Zee5;
