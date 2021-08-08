
const LocationInfoBox = ({info}) => {

    return (
        <div className="location-info">
            <h2>Restaurant</h2>
                <h3>Name: {info.name}</h3>
            <ul>
                <li>{info.location.address1}</li>
                <li>{info.location.city}</li>
            </ul>

        </div>

    )

}

export default LocationInfoBox