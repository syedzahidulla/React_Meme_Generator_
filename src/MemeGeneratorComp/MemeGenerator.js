import React, { Component } from "react"
import '../style.css'
class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/30b1gx.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(Response => Response.json())
            .then(Response => {
                const { memes } = Response.data
                console.log(memes[0])
                this.setState({allMemeImgs:memes})
        })
    }
    //response.date.memes contains data from api

    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name]:value})
        
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMemeImg})
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    >
                    </input>
                    <input
                        name="bottomText"
                        type="text"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    >
                    </input>
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img  src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator