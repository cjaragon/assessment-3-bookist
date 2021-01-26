import React, {Component} from 'react'
import Results from './results'
import UserShelf from './userShelf'
 
class Profile extends Component {
    constructor() {
        super()

        this.state = {
            bookShelf: []
        }

        this.addToShelf = this.addToShelf.bind(this)
    }

    addToShelf = (book) => {
        this.setState({ bookShelf: [...this.state.bookShelf, book] })
    }

    render() {
       
        return(
            <div className='profile' >
                <Results search={this.props.search}/>
                <UserShelf bookShelf={this.state.bookShelf} add={this.addToShelf} />
            </div>
        )
    }
}

export default Profile