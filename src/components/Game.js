import React from "react";
const styles = {
    imgDiv: {
        display: "inline-block",
        cursor: "pointer"
    },
    imageWrapper: {
        textAlign: "center"
    }
}
const Game = props => {
    const newState = { ...props.state };

    const reRender = (char) => {
        // check if char has already been clicked
        if (char.clicked === true) {
            // Tell user they lost  
            newState.topMessage = "You guessed incorrectly, play again!";

            //Reset game
            // if score is greater than topScore , set topScore to score
            console.log('score: ', newState.score)
            console.log('score: ', newState.topScore)
            if (newState.score > newState.topScore) {
                newState.topScore = newState.score;
                console.log("test")
            }
            newState.score = 0;
            for (let i = 0; i < newState.characters.length; i++) {
                newState.characters[i].clicked = false;
            }
            charsRendered();

        } else {
            char.clicked = true;
            newState.score++;
            newState.topMessage = "You guessed correctly!";
            charsRendered();
        }
        props.changeState(newState);
    };
    //Render clickable images Randomly
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    const charsRendered = () => {
        newState.characters = shuffle(newState.characters);
        return(
        newState.characters.map(char => (
            <div key={char.id} style={styles.imgDiv} role="img" aria-label="click item" className="click-item m-2">
                <img alt={char.name} src={char.image} onClick={() => reRender(char)}></img>
            </div>
        )));
    }
    return (
        <div style={styles.imageWrapper}>
            {charsRendered()}
        </div>

    )
};

export default Game;