import './styles.scss';
import './Data.scss';
import React, { Component} from 'react'
import $ from 'jquery';

class Data extends Component {
    state = {
        apiData: 'https://api.kinopoisk.dev/v1.4',
        apiToken: '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
        isLoaded: false,
        items: [],
        id: 666
    }

    componentDidMount = () => {
        fetch(`https://api.kinopoisk.dev/v1.4/movie`, {
                method: 'GET',
                headers: {
                    accept: 'application/json', 
                    'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
                    limit: 100
                },
                
            })
            .then((response) => response.json())
            
            .then(
                (result) => {
                    if (result.statusCode != 404) {
                        this.setState({items: this.state.items.push(result)})
                    }
                    console.log(this.state.items)
                }
            ) 
            .catch((err) => {
                
            })
            
    }

    showAllCards = () => {

    }

    render() {
        return(
            <section className='data-container'>
                <div className="data-container__buttons">
                    <button className="active">Все</button>
                    <button>Фильмы</button>
                    <button>Сериалы</button>
                </div>

                <div className='data-container__all-films'>
                    <div className='card' style={{background: 'url("linear.svg") center/cover no-repeat, url("https://image.openmoviedb.com/kinopoisk-images/9784475/0d357941-77df-4aa2-b1b0-0f608887a2b9/x1000") center/cover no-repeat'}}>
                        <div className="card__text">
                            <h2></h2>
                            <h3></h3>
                        </div>
                    </div>
                    
                </div>
                
            </section>
        )
    }
}

export default Data;