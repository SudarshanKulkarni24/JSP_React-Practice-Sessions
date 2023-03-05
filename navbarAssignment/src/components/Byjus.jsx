import React, { Component } from 'react';
import styles from "./byjus.module.css";
class Byjus extends Component {
    render() {
        return (
            <>
              <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_logo.svg" alt="Brand-logo"  height="50px"/></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_item}><a href="#">Study Materials</a></li>
                        <li className={styles.nav_item}><a href="#">BYJU'S Answer</a></li>
                        <li className={styles.nav_item}><a href="#">Scholarship</a></li>
                        <li className={styles.nav_item}><a href="#">BTC</a></li>
                        <li className={styles.nav_item}><a href="#">Buy a Course</a></li>
                        <li className={styles.nav_item}><a href="#">Success Stories</a></li>
                    </ul>
                    <div className={styles.login_btn}>
                        <button>LOGIN</button>
                    </div>
                    <div className={styles.callus}>
                        <img src="https://cdn1.byjus.com/home/call.svg" alt="call us" />
                    </div>
                    <div className={styles.search}>
                        <img src="https://cdn1.byjus.com/byjusweb/SearchIcon.svg" alt="search" />
                    </div>
                    {/* <div className={styles.searchfield}>
                        <input type="search"  className={styles.searchtext} placeholder='Type your Search'/>
                    </div> */}
                    
                    
                    </div>
                    
            </nav> 
            </>
        );
    }
}

export default Byjus;
