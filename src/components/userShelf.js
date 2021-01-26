import React, {Component} from 'react'

class UserShelf extends Component {
    render() {
        let list = this.props.bookShelf.map((elem, index) => {
            for (let i = 0; i <= this.props.bookShelf.length; i++) {
                return <p key={index}>{elem}</p>
            }
        })

        return (
            <div className='shelf' >
                <h2> Your Shelf</h2>
                <button> Clear Shelf </button>
                {list}
            </div>
        )
    }
}

export default UserShelf