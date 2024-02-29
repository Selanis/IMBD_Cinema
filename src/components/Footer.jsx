import './Footer.scss';
import React, { Component} from 'react'
import $, { extend } from 'jquery';

class Footer extends Component {
    state = {

    }

    render() {
        return (
            <footer>
                <div className="footer-container">
                    <h3>Разработчик</h3>
                    <h2>Полехова Екатерина, ТКБО-01-22</h2>
                </div>
            </footer>
        )
    }
}

export default Footer;