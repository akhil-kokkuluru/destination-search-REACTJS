import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  return (
    <div className="totalcont">
      <img
        src={destinationsList.imgUrl}
        className="imagecss"
        alt={destinationsList.name}
      />
      <p className="para">{destinationsList.name}</p>
    </div>
  )
}

export default DestinationItem
