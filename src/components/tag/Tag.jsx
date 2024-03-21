import React from "react";
import "./Tag.scss";

function Tag({tag}) {
    return (
        <div className="tag">
            <p>{tag}</p>
        </div>
    )
}

export default Tag;