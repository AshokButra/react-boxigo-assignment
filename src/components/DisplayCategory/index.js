import './index.css'

const DisplayCategory = props => {
  const {categoryDetails} = props

  const {displayName, items} = categoryDetails

  console.log(items)

  return (
    <div className="item-container">
      <h1 className="item-name">{displayName}</h1>
      {items.map(eachItem => (
        <div className="each-item-display">
          <div className="display-name-container">
            <p className="display-item-name">
              {eachItem.uniqueId} {eachItem.displayName}
            </p>
            <span className="order">{eachItem.order}</span>
          </div>
          <p className="raw-material">{eachItem.typeOptions}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayCategory
