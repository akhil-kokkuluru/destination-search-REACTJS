import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  inputTyping = event => {
    const anotherValue = event.target.value

    this.setState({searchInput: anotherValue})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const alteredList = destinationsList.filter(jj =>
      jj.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="contentContainer">
        <h1>Destination Search</h1>
        <div className="searchbar">
          <input
            type="search"
            placeholder="Search"
            className="inputcss"
            onChange={this.inputTyping}
          />
          <img
            className="imagecsst"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="destination"
          />
        </div>
        <div className="desItem">
          {alteredList.map(listItem => (
            <DestinationItem destinationsList={listItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
