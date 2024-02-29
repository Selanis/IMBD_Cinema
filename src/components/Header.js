import './styles.scss';
import './Header.scss';
import React, { Component} from 'react'
import $ from 'jquery';

class Header extends Component {
    state = {
        theme: localStorage.getItem('theme'),
        themeLogo: `${localStorage.getItem('theme')}.svg`,
        mainLogoTheme: `main-logo-${localStorage.getItem('theme')}.svg`
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
    
    render() {

        return(
            <header>
                <div className="header">
                    <img src={this.state.mainLogoTheme} />

                    <form>
                        <input type="text" name="find" id="findFilm" placeholder='Поиск' />
                        <input type="submit" value="Find" id="submitFilm" />
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
