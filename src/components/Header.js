import React from 'react';

const styles = {
    header: {
        backgroundColor: "#e9ecef",
        color: "#373737",
        justifyContent: "center"
    },
    a: {
        textDecoration: "none",
        color: "#373737"
 
    },
    ul: {
        listStyle: "none",
        textAlign: "center"
    },
    li: {
        display: "inline-block",
        textAlign: "center",
        marginRight: 160
    },
    h1: {
        fontSize: "2.4em"
    }
}

const Header = (props) => {
    return (
        <nav style={styles.header} className="navbar mb-5">
            <ul style={styles.ul} className="ml-0">
                <li key="1" className="" style={styles.li}><h1 style={styles.h1}><a style={styles.a} href="/">Game of Thrones</a></h1></li>
                <li key="2" className="" style={styles.li}>{props.topMessage}</li>
                <li key="3" className="" style={styles.li}>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>

        </nav>
    )
}

export default Header;
