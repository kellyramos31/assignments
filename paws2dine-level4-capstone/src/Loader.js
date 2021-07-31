//import spinner from "./spinner.gif" 
//OR whatever image, gif, etc., going to use here


const Loader = () => {
    return (
        <div className="loader">
            <img serc={spinner} alt="Loading"/>
            <h1>Fetching Data...</h1>
        </div>
    )

}

export default Loader