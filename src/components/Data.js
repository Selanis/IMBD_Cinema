import './styles.scss';
import './Data.scss';
import React, { Component} from 'react'
import $ from 'jquery';
import {Movies} from './Movies'


class Data extends Component {
    state = {
        apiData: 'https://api.kinopoisk.dev/v1.4',
        apiToken: '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
        isLoaded: false,
        items: [],
        id: 666
    }

    componentDidMount = async () => {

        await fetch(`https://api.kinopoisk.dev/v1.4/movie`, {
                method: 'GET',
                headers: {
                    accept: 'application/json', 
                    // 'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
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
            

            // $.ajax({
            //     url: '../../public/index.html',
            //     method: 'POST',
            //     data: this.state.items[0],
            //     success: function (data) {
            //         console.log(data)
            //         // data = ``
            //         // for (let id = 0; id < 10; id++) {
            //         //     data += `
            //         //     <div className='card' style={{background: 'url("linear.svg") center/cover no-repeat, url("${dataFilms.docs[id].poster.previewUrl}") center/cover no-repeat'}}>
            //         //         <div className="card__text">
            //         //             <h2></h2>
            //         //             <h3></h3>
            //         //         </div>
            //         //     </div>
            //         //     `
            //         // }

            //         // console.log(this.state.items)

            //         // $('.data-container__all-films').html(data)
            //     }
            // })
    
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
                    {
                        this.state.items.lenght == 1 ? (
                            <Movies items={this.state.items} />
                        ) : <div className="preloader">
                            <img className="preloader__logo" id="preloader" src="preloader.svg" />
                        </div>
                        
                    }
                    
                </div>
                
            </section>
        )
    }
}

export default Data;