function Card(props) {
    return (
        <div
            style={{
                border: '1px solid black',
                width: '300px',
                padding: '10px',
                margin: '10px',
                borderRadius: '8px'
            }}
        >
            <img
                src={props.image}
                alt={props.title}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                   
                   
                }}
            />
            <h3>{props.title}</h3>
            <p><strong>Price: ${props.price}</strong></p>
            <p>{props.description.substring(0, 60)}...</p>
        </div>
    );
}

export default Card;