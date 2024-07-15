import bro from "./assets/Bro.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={bro} alt="Bruuh" />
            <h2 className="card-title">Bruuh</h2>
            <p className="card-text">I code all day and watch cool anime!!</p>
        </div>
    );
}

export default Card;
