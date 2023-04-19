import {Component} from 'react'
import DisplayCategory from '../DisplayCategory'

import './index.css'

class InventoryDetails extends Component {
  state = {displayOption: false}

  onDisplayOption = () => {
    const {displayOption} = this.state
    this.setState({displayOption: !displayOption})
  }

  render() {
    const {displayOption} = this.state
    const {inventoryItemDetails} = this.props
    console.log(inventoryItemDetails)

    const {displayName, category} = inventoryItemDetails
    console.log(category)
    return (
      <>
        {displayOption ? (
          <>
            <div className="inventory-details-container">
              <h1 className="display-name" onClick={this.onDisplayOption}>
                {displayName}
              </h1>
              <div className="category-length-container">
                <span className="length">{category.length}</span>
              </div>
            </div>
            <div className="all-category-container">
              {category.map(eachCategory => (
                <DisplayCategory categoryDetails={eachCategory} />
              ))}
            </div>
          </>
        ) : (
          <div className="inventory-details-container">
            <h1 className="display-name" onClick={this.onDisplayOption}>
              {displayName}
            </h1>
            <div className="category-length-container">
              <span className="length">{category.length}</span>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default InventoryDetails
