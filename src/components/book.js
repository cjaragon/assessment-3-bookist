import React, {Component} from 'react'

class Book extends Component {
    render() {
        return (
            <div className='book' onClick={this.props.add} >
                <img src={this.props.task.img} className='book-cover'/>
                <p>{this.props.task.title}</p>
                <p>{this.props.task.author}</p>
            </div>
        )
    }
}

export default Book