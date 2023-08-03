import React from "react"

const Header = ({ seeMovies }) => {
    return (
        <div className="header">
            <button className="header-btn" onClick={seeMovies}>NickFlix</button>
        </div>
    )
}

export default Header