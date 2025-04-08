function Card(props) {

    return (

        <div className = 'home-card'>

            <h2 className = 'home-card-headline'>

                <span className = 'home-card-headline-span'>{props.headline}</span>

            </h2>

            <div className = 'home-card-button-container'>

                <button className = 'home-card-button'> {props.button} </button>

            </div>

        </div>

    )

}

export default Card;