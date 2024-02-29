import './styles.scss';
import './Header.scss';
import React, { Component} from 'react'
import $ from 'jquery';

class Header extends Component {
    state = {
        theme: localStorage.getItem('theme')
    }



    themeModeClick = () => {
        switch (this.state.theme) {
            case "light":
                this.setState({theme: "dark"})
                localStorage.setItem('theme', "dark")
                break
            case "dark":
                this.setState({theme: "light"})
                localStorage.setItem('theme', "light")
                break
        }
    }
    
    render() {
        return(
            <header>
                <div className="header">
                    <img src="main-logo.svg" />

                    <form>
                        <input type="text" name="find" id="findFilm" placeholder='Поиск' />
                        <input type="submit" value="Find" id="submitFilm" />
                        {/* <label for="findFilm">
                            <img src="find-button.svg" />
                        </label> */}
                    </form>

                    <button onClick={this.themeModeClick}>{this.state.theme} Theme</button>
                </div>
                
            </header>
        )
    }
}

export default Header;
