import './styles.scss';
import './Data.scss';
import React, { Component} from 'react'
import $ from 'jquery';

class Data extends Component {
    state = {
        apiData: 'https://api.kinopoisk.dev/',
        apiToken: '01VENBA-2NPMNVM-NAVPFNN-90A8N0R'
    }

    render() {
        return(
            <section class='data-container'>
                <div class='all-films'>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                    <div style={{background: 'rgba(0, 100, 0, 1)'}} class='card'>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Data;