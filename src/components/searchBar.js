import React, {Component} from 'react'

class SearchBar extends Component {
    constructor (){
        super()

        this.state = {
            userInput: ''
        }
    }

    handleChange = (val) => {
        return this.setState({ userInput: val })
    }

    clear = () => {
        this.props.handleClear()
        this.setState({ userInput: '' })
    }  

    render() {
        return (
            <div>
                <input
                placeholder='What are you looking for?'
                value={this.state.userInput}
                onChange={e => this.handleChange(e.target.value)}/>
                <button className='button'
                onClick={() => this.props.handleSearch(this.state.userInput)}> Search </button>
                <button className='button'
                onClick={this.clear}> Clear Search </button>
            </div>
        )
    }
}

export default SearchBar