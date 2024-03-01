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
        series: false

    }

    componentDidMount = async () => {

        // await fetch(`https://api.kinopoisk.dev/v1.4/movie`, {
        //         method: 'GET',
        //         headers: {
        //             accept: 'application/json', 
        //             // 'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
        //         },
                
        //     })
        //     .then((response) => response.json())
            
        //     .then(
        //         async (result) => {
        //             if (result.statusCode != 404) {
        //                 this.setState({items: this.state.items.push(result)})
        //             }
        //         }
        //     ) 
        //     .catch((err) => {
                
        //     });

        // console.log(this.state.items[0].docs)
            

        $.ajax({
            url: `https://api.kinopoisk.dev/v1.4/movie`,
            method: 'GET',
            headers: {
                accept: 'application/json', 
                'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
                
            },
            beforeSend: function(xhr){
                let newContent = ``
                newContent += `
                    <div class="preloader">
                            <img class="preloader__logo" id="preloader" src="preloader.svg" width="40px" height="40px"/>
                    </div>
                `
                $('.data-container__all-films').html(newContent)
            },
            success: function (data) {
                $('.preloader').css({
                    display: 'none',
                })

                let newContent = ``
                for (let id = 0; id < 10; id++) {
                    newContent += `
                    <div class='card' style='background: url("linear.svg") center/cover no-repeat, url("${data.docs[id].poster.previewUrl}") center/cover no-repeat'>
                        <div class="card__text">
                            <h2>${data.docs[id].name}</h2>
                            <h3>${data.docs[id].type}</h3>
                        </div>
                    </div>
                    `
                }


                $('.data-container__all-films').html(newContent)
            }
        })
    
    }

    handleClick = async (e) => {
        const arr = $('.data-container__buttons button').get()
        for (let i = 0; i < 3; i++) {
            if (arr[i].classList.contains('active')) {
                arr[i].classList.remove('active');
            }
        }
        
        e.target.classList.add('active');
        
        switch (e.target.id) {
            case "all":
                await this.setState({series: false})
                break
            case "films":
                await this.setState({series: false})
                break
            case "series":
                await this.setState({series: true})
                break
        }

        await $.ajax({
            url: `https://api.kinopoisk.dev/v1.4/movie?isSeries=${this.state.series}`,
            method: 'GET',
            headers: {
                accept: 'application/json', 
                'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
            },
            beforeSend: function(xhr){
                let newContent = ``
                newContent += `
                    <div class="preloader">
                            <img class="preloader__logo" id="preloader" src="preloader.svg" width="40px" height="40px"/>
                    </div>
                `
                $('.data-container__all-films').html(newContent)
            },
            success: function (data) {
                $('.preloader').css({
                    display: 'none',
                })

                let newContent = ``
                for (let id = 0; id < 10; id++) {
                    newContent += `
                    <div class='card' style='background: url("linear.svg") center/cover no-repeat, url("${data.docs[id].poster.previewUrl}") center/cover no-repeat'>
                        <div class="card__text">
                            <h2>${data.docs[id].name}</h2>
                            <h3>${data.docs[id].type}</h3>
                        </div>
                    </div>
                    `
                }


                $('.data-container__all-films').html(newContent)
            }
        })
    }
    

    render() {
        return(
            <section className='data-container'>
                <div className="data-container__buttons">
                    <button className="active" id="all" onClick={this.handleClick}>Все</button>
                    <button className='' id="films" onClick={this.handleClick}>Фильмы</button>
                    <button className='' id="series" onClick={this.handleClick}>Сериалы</button>
                </div>

                <div className='data-container__all-films'>
                </div>
                
            </section>
        )
    }
}

export default Data;