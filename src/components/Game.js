import React from "react";
const styles = {
    imgDiv: {
        display: "inline-block",
    },
    imageWrapper: {
        textAlign: "center"
    }
}
const Game = props => {
    const reRender = (char) => {
        // check if char has already been clicked
        // set char.clicked to true
        // randomize order & redisplay
    };

    const charsRenderd = () => props.characters.map(char => (
        <div style={styles.imgDiv} role="img" aria-label="click item" className="click-item m-2">
            <img key={char.id} alt={char.name} src={char.image} onClick={() => reRender(char)}></img>
        </div>
    ));
    return (
        <div style= {styles.imageWrapper}>
            {charsRenderd()}
        </div>

    )
};

export default Game;