import React, { useState } from "react";

export default function Card(props) {
    const [toggle, setToggle] = useState(false);
    const [index, setIndex] = useState(0)
    
    const [cardStyle, setCardStyle] = useState({
        background: 'linear-gradient(#777777, #333333)',
      });

    const handleFavorite = () => {
      setToggle(!toggle);
      if(toggle == true){
        setCardStyle({
            background: "linear-gradient(#9AFF9A, #00FF00)",
          });
      }else{
        setCardStyle({
            background: "linear-gradient(#777777, #333333)",
          });
      }
    };
      

    return (
        <div className="container my-2">
        <div className="card" style={cardStyle}>
            <div className="card-body">
            <p className="card-text text-white text-center fs-5">
                <span>&#10024;</span>
                 { props.texto }
                <span>&#10024;</span>
            </p>
            <div className="d-grid gap-2">
                <button className="btn btn-danger"
                    onClick={() => props.onDelete(index)}
                >
                    Borrar &#128465;
                </button>
                <button className="btn btn-success"
                    onClick={handleFavorite}    
                >
                    Destacar &#10004;
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}