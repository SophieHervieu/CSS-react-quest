
const Card = props => {
    return (
    <div>
        <div className="profile">
        <h2>{props.name}</h2>
        <h3>{props.job}</h3>
        <h3>{props.email}</h3>
        <h3>{props.gitHub}</h3>
        </div>
    </div>
    );
};

export default Card;