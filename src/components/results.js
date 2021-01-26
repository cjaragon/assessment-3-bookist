import React, { Component } from 'react'
import data from '../data'
import Book from './book'

class Results extends Component {

    render() {
        let list = data.filter((element, index) => { return element.title.includes(this.props.search)})
        .map((elem, index) => {
            return < Book key={index} task={elem} addToShelf={this.props.add} />
        })

        return <div className='result-box'>{list}</div>
    }
}

export default Results