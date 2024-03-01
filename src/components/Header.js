import './styles.scss';
import './Header.scss';
import React, { Component} from 'react'
import $ from 'jquery';

class Header extends Component {
    state = {
        theme: localStorage.getItem('theme'),
        themeLogo: `${localStorage.getItem('theme')}.svg`,
        mainLogoTheme: `main-logo-${localStorage.getItem('theme')}.svg`,
        search: ''
    }

    componentDidMount = async () => {
        $('header').css({
            'background-color': `var(--background-block-${this.state.theme})`
        })
        $('body').css({
            'background-color': `var(--background-${this.state.theme})`
        })
        $('#findFilm').css({
            'color': `var(--text-${this.state.theme})`
        })
        $('footer').css({
            'background-color': `var(--background-block-${this.state.theme})`
        })

        $('.footer-container h2').css({
            'color': `var(--text-${this.state.theme})`
        })
        $('.footer-container h3').css({
            'color': `var(--text-${this.state.theme})`
        })
        
    }

    themeModeClick = async () => {
        switch (this.state.theme) {
            case "light":
                localStorage.setItem('theme', "dark")
                break
            case "dark":
                localStorage.setItem('theme', "light")
                break
        }

        await this.setState({theme: localStorage.getItem('theme'), themeLogo: `${localStorage.getItem('theme')}.svg`, mainLogoTheme: `main-logo-${localStorage.getItem('theme')}.svg`})

        
        $('body').css({
            'background-color': `var(--background-${this.state.theme})`
        })
        $('#findFilm').css({
            'color': `var(--text-${this.state.theme})`
        })
        $('header').css({
            'background-color': `var(--background-block-${this.state.theme})`
        })
        $('footer').css({
            'background-color': `var(--background-block-${this.state.theme})`
        })

        $('.footer-container h2').css({
            'color': `var(--text-${this.state.theme})`
        })
        $('.footer-container h3').css({
            'color': `var(--text-${this.state.theme})`
        })
    }

    handleKey = async (event) => {
        if (event.key == 'Enter' || event.target.id == 'submitFilm') {
            event.preventDefault()
            console.log("Okk")

            $.ajax({
                url: `https://api.kinopoisk.dev/v1.4/movie/search?query=${this.state.search}`,
                method: 'GET',
                headers: {
                    accept: 'application/json', 
                    // 'X-API-KEY': '01VENBA-2NPMNVM-NAVPFNN-90A8N0R',
                    'X-API-KEY': '20K3GT5-C6ZMQ4Y-M2NJKF4-ZFZK0FK',
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
                    try {
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
                    } catch {
                        let newContent = `<h2 class='preloader'>Не нашли :(</h2>`

                        $('.data-container__all-films').html(newContent)
                    }
                    
                }
            })

            // if ($('.data-container__all-films'))
        }

        
    }
    
    render() {

        return(
            <header>
                <div className="header">
                    <img src={this.state.mainLogoTheme} />

                    <form>
                        <input type="text" name="find" id="findFilm" placeholder='Поиск' onChange={(e) => {this.setState({search: e.target.value})}} onKeyDown={this.handleKey}/>
                        <input type="submit" value="Find" id="submitFilm" onClick={this.handleKey} />
                        {/* <label for="findFilm">
                            <img src="find-button.svg" />
                        </label> */}
                    </form>

                    <button onClick={this.themeModeClick}>
                        <img src={this.state.themeLogo} />
                    </button>
                </div>
                
            </header>
        )
    }
}

export default Header;
