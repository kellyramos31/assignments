import React, { Component } from "react"

class HitList extends Component {
    constructor() {
        super()
        this.state = {
            hitList: []   //NOTE:  data array has a name and an image for each
        }
    }
    componentDidMount() {
        this.setState({})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    hitList: data
                })
            })
    }
    render() {
        //NEED to map through data here
        const displayList = this.state.hitList.map((hit, index) => {
            return <Hits
                key={hit.index}
                name={hit.name}
                image={hit.image}
            />
        })

        return (
            <div>
                {displayList}
            </div>
        )
    }
}

export default HitThese