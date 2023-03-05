import React, { Component } from 'react';
import styles from "./random.module.css";
class Random extends Component {
    render() {
        return (
            <>
              <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Random.org_logo.svg" alt="Brand-logo"  height="50px" width="170px"/></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_item}><a href="#">Home</a></li>
                        <li className={styles.nav_item}><a href="#">About</a></li>
                        <li className={styles.nav_item}><a href="#">Monetize</a></li>
                        <li className={styles.nav_item}><a href="#">BTC</a></li>
                        <li className={styles.nav_item}><a href="#">Contact Us</a></li>
                    </ul>
                    <div className={styles.login_btn}>
                        <button>LOGIN</button>
                    </div>
                    
                    <div className={styles.searchfield}>
                        <input type="search"  className={styles.searchtext} placeholder='Type your Search'/>
                    </div>
                    <div className={styles.search}>
                        <img src="https://cdn1.byjus.com/byjusweb/SearchIcon.svg" alt="search" />
                    </div>
                    
                    </div>
                    
            </nav> 
            </>
        );
    }
}

export default Random;
