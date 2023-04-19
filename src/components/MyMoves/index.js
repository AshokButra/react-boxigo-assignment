import {Component} from 'react'
import MyMovesDetails from '../MyMovesDetails'
import './index.css'

class MyMoves extends Component {
  state = {BoxigoDetailsList: []}

  componentDidMount() {
    this.getBoxigoDetails()
  }

  getBoxigoDetails = async () => {
    const url = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const newData = {
      customerEstimateFlow: data.Customer_Estimate_Flow,
    }

    this.setState({
      BoxigoDetailsList: newData.customerEstimateFlow,
    })
  }

  render() {
    const {BoxigoDetailsList} = this.state
    console.log(BoxigoDetailsList)
    return (
      <div className="my-moves-bg-container">
        <h1 className="my-moves-heading">My Moves</h1>
        {BoxigoDetailsList.map(eachItem => (
          <MyMovesDetails itemDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default MyMoves
