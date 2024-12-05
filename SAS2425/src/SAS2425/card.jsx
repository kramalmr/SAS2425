export function card ({name, price, description, imageUrl}) {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
}