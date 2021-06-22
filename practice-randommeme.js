import React, { Component } from "react"
import "./RandomMeme.css"
import axios from "axios"


//probably will change to "function RandomMeme(props)"... so just a display component...

class RandomMeme extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            image: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        console.log("I'm working")
        axios.get(`https://api.imgflip.com/get_memes`)
            .then(response => {
                this.setState({
                    isLoading: true,
                    // color: "#" + response.data.colors[0].hex
                    image: response.data.memes.url
                })

            })
            .catch(error => console.log(error))

        this.setState(prevState => {
            return {
                isLoading: !prevState.isLoading
            }

        })
    }

    render() {
        console.log(this.state.color)
        let pageDisplay = this.state.isLoading ? "How do you like this meme image?" : null
        return (
            <div>
                <p className="question">{pageDisplay}</p>
                <div className="change-it" style={{ height: "400px", url: this.state.image }}></div>
                <button className="getNewColor" onClick={this.handleClick}><span>CLICK HERE</span> to display a color!</button>
                <div className="bottom-band"></div>
            </div >
        )
    }
}

export default RandomMeme;



