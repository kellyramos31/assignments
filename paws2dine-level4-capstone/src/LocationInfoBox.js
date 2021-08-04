

const LocationInfoBox = ({info}) => {

    return (
        <div className="location-info">
            <h2>Restaurant</h2>
            <ul>
                <li>Name: {info.name}</li>
                <li>{info.location.address1}</li>
                <li>{info.location.city}</li>
            </ul>

        </div>

    )

}

export default LocationInfoBox