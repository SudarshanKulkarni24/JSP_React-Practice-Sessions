import React, { Component } from 'react';
import styles from "./navone.module.css";

class Hotstar extends Component {
    render() {
        return (
            <>
            <nav className={styles.navBlock}>
                <div className={styles.nav_container}>
                    <div className={styles.brand_logo}>
                        <a href="#" className={styles.logo}><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Brand-logo" /></a>
                    </div>
                    
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_item}><a href="#">TV</a></li>
                        <li className={styles.nav_item}><a href="#">Movies</a></li>
                        <li className={styles.nav_item}><a href="#">Sports</a></li>
                        <li className={styles.nav_item}><a href="#">Disney+</a></li>
                        <li className={styles.nav_item}><a href="#"><img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" /></a></li>
                    </ul>
                    <div className={styles.searchfield}>
                        <input type="search"  className={styles.searchtext} placeholder='Search'/>
                    </div>
                    <div className={styles.sub_btn}>
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className={styles.login_btn}>
                        <button>LOGIN</button>
                    </div>
                    </div>
                    
            </nav>
            </>
        );
    }
}

export default Hotstar;
