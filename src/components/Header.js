import React from 'react';

const styles = {
    header: {
        backgroundColor: "#e9ecef",
        color: "#373737"
    },
    a: {
        textDecoration: "none",
        color: "#373737"
 
    },
    ul: {
        listStyle: "none"
    },
    li: {
        display: "inline-block",
        textAlign: "center",
        width: "33.3%"
    },
    h1: {
        fontSize: "2.4em"
    }
}

const Header = (props) => {
    return (
        <nav style={styles.header} className="navbar">
            <ul style={styles.ul} className="row mx-auto">
                <li className="col-md-5" style={styles.li}><h1 style={styles.h1}><a style={styles.a} href="/">Game of Thrones</a></h1></li>
                <li className="col-md-4" style={styles.li}>{props.topMessage}</li>
                <li className="col-md-3" style={styles.li}>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>

        </nav>
    )
}

export default Header;
