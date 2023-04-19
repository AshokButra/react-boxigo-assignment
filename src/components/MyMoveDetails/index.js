import InventoryDetails from '../InventoryDetails'

import './index.css'

const MyMoveDetails = props => {
  const {inventoryDetails} = props
  const {
    items,
    oldHouseAdditionalInfo,
    newFloorNo,
    oldFloorNo,
    oldElevatorAvailability,
    newElevatorAvailability,
    oldParkingDistance,
    newParkingDistance,
  } = inventoryDetails

  const {inventory} = items

  return (
    <>
      <div className="additional-information-container">
        <div className="text-button-container">
          <h1 className="additional-information">Additional Information</h1>
          <button type="button" className="edit-additional-info">
            Edit Additional Info
          </button>
        </div>
        <p className="text-description">{oldHouseAdditionalInfo}</p>
      </div>
      <div className="house-details-container">
        <div className="text-button-container">
          <h1 className="house-details">House Details</h1>
          <button type="button" className="edit-house-details">
            Edit House Details
          </button>
        </div>
        <h1 className="existing-house-details">Existing House Details</h1>
        <div className="existing-house-details-container">
          <div>
            <h1 className="floor-no">Floor No.</h1>
            <p className="floor-no-value">{oldFloorNo}</p>
          </div>
          <div>
            <h1 className="elevator-available">Elevator Available.</h1>
            <p className="is-elevator-available">{oldElevatorAvailability}</p>
          </div>
          <div>
            <h1 className="distance-from-elevator">
              Distance from Elevator / Staircase to truck
            </h1>
            <p className="distance-from-elevator-value">{oldParkingDistance}</p>
          </div>
        </div>
        <h1 className="new-house-details">New House Details</h1>
        <div className="new-house-details-container">
          <div>
            <h1 className="floor-no">Floor No.</h1>
            <p className="floor-no-value">{newFloorNo}</p>
          </div>
          <div>
            <h1 className="elevator-available">Elevator Available.</h1>
            <p className="is-elevator-available">{newElevatorAvailability}</p>
          </div>
          <div>
            <h1 className="distance-from-elevator">
              Distance from Elevator / Staircase to truck
            </h1>
            <p className="distance-from-elevator-value">{newParkingDistance}</p>
          </div>
        </div>
      </div>
      {inventory.map(eachItem => (
        <InventoryDetails inventoryItemDetails={eachItem} />
      ))}
    </>
  )
}

export default MyMoveDetails
