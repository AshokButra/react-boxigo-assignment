import {Component} from 'react'

import {BsArrowRight} from 'react-icons/bs'
import {AiFillHome, AiFillCheckSquare} from 'react-icons/ai'
import {FaBoxes, FaRoute} from 'react-icons/fa'
import {ImTruck, ImPencil} from 'react-icons/im'
import {RiAlertFill} from 'react-icons/ri'

import MyMoveDetails from '../MyMoveDetails'

import './index.css'

class MyMovesDetails extends Component {
  state = {viewDetailsClicked: false}

  onDisplayMove = () => {
    const {viewDetailsClicked} = this.state
    this.setState({viewDetailsClicked: !viewDetailsClicked})
  }

  render() {
    const {viewDetailsClicked} = this.state
    const {itemDetails} = this.props

    const newData = {
      customStatus: itemDetails.custom_status,
      distance: itemDetails.distance,
      estimateId: itemDetails.estimate_id,
      movingFrom: itemDetails.moving_from,
      movingTo: itemDetails.moving_to,
      newFloorNo: itemDetails.new_floor_no,
      oldFloorNo: itemDetails.old_floor_no,
      propertySize: itemDetails.property_size,
      totalItems: itemDetails.total_items,
      orderDate: itemDetails.order_date,
      items: itemDetails.items,
      oldHouseAdditionalInfo: itemDetails.old_house_additional_info,
      oldElevatorAvailability: itemDetails.old_elevator_availability,
      newElevatorAvailability: itemDetails.new_elevator_availability,
      oldParkingDistance: itemDetails.old_parking_distance,
      newParkingDistance: itemDetails.new_parking_distance,
    }

    const {
      customStatus,
      distance,
      estimateId,
      movingFrom,
      movingTo,
      newFloorNo,
      oldFloorNo,
      propertySize,
      totalItems,
      orderDate,
      items,
      oldHouseAdditionalInfo,
      oldElevatorAvailability,
      newElevatorAvailability,
      oldParkingDistance,
      newParkingDistance,
    } = newData

    return (
      <>
        {viewDetailsClicked ? (
          <div className="move-detail-container">
            <div className="from-to-container">
              <div className="from-container">
                <h1 className="from-word">From</h1>
                <p className="from-address">{movingFrom}</p>
              </div>
              <div className="arrow-container">
                <BsArrowRight className="arrow" />
              </div>
              <div className="to-container">
                <h1 className="to-word">To</h1>
                <p className="to-address">{movingTo}</p>
              </div>
              <div className="request-container">
                <h1 className="request">Request#</h1>
                <h1 className="estimate-id">{estimateId}</h1>
              </div>
            </div>
            <br />
            <div className="total-distance-address-container">
              <div className="home-icon-container">
                <AiFillHome className="home" />
                <span className="description">{propertySize}</span>
              </div>
              <div className="boxes-container">
                <FaBoxes className="boxes" />
                <span className="description">{totalItems}</span>
              </div>
              <div className="route-container">
                <FaRoute className="route" />
                <span className="description">{distance}</span>
              </div>
              <div className="delivery-container">
                <ImTruck className="delivery" />
                <span className="description">{orderDate}</span>
                <ImPencil className="pencil" />
              </div>
              <div className="check-container">
                <AiFillCheckSquare className="check" />
                <span className="description">Is flexible</span>
              </div>
              <div className="buttons-container">
                <button
                  type="button"
                  className="view-details-button"
                  onClick={this.onDisplayMove}
                >
                  View More Details
                </button>
                <button type="button" className="quotes-awaiting-button">
                  {customStatus}
                </button>
              </div>
            </div>
            <br />
            <div className="disclaimer-container">
              <RiAlertFill className="alert-icon" />
              <p className="disclaimer">
                Disclaimer:{' '}
                <span className="disclaimer-description">
                  Please update your move date before two days of shifting
                </span>
              </p>
            </div>
            <MyMoveDetails inventoryDetails={newData} />
          </div>
        ) : (
          <>
            <div className="move-detail-container">
              <div className="from-to-container">
                <div className="from-container">
                  <h1 className="from-word">From</h1>
                  <p className="from-address">{movingFrom}</p>
                </div>
                <div className="arrow-container">
                  <BsArrowRight className="arrow" />
                </div>
                <div className="to-container">
                  <h1 className="to-word">To</h1>
                  <p className="to-address">{movingTo}</p>
                </div>
                <div className="request-container">
                  <h1 className="request">Request#</h1>
                  <h1 className="estimate-id">{estimateId}</h1>
                </div>
              </div>
              <br />
              <div className="total-distance-address-container">
                <div className="home-icon-container">
                  <AiFillHome className="home" />
                  <span className="description">{propertySize}</span>
                </div>
                <div className="boxes-container">
                  <FaBoxes className="boxes" />
                  <span className="description">{totalItems}</span>
                </div>
                <div className="route-container">
                  <FaRoute className="route" />
                  <span className="description">{distance}</span>
                </div>
                <div className="delivery-container">
                  <ImTruck className="delivery" />
                  <span className="description">{orderDate}</span>
                  <ImPencil className="pencil" />
                </div>
                <div className="check-container">
                  <AiFillCheckSquare className="check" />
                  <span className="description">Is flexible</span>
                </div>
                <div className="buttons-container">
                  <button
                    type="button"
                    className="view-details-button"
                    onClick={this.onDisplayMove}
                  >
                    View More Details
                  </button>
                  <button type="button" className="quotes-awaiting-button">
                    {customStatus}
                  </button>
                </div>
              </div>
              <br />
              <div className="disclaimer-container">
                <RiAlertFill className="alert-icon" />
                <p className="disclaimer">
                  Disclaimer:{' '}
                  <span className="disclaimer-description">
                    Please update your move date before two days of shifting
                  </span>
                </p>
              </div>
            </div>
            <hr />
          </>
        )}
      </>
    )
  }
}

export default MyMovesDetails
