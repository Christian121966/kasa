import "./textCollapse.scss";

export default function textCollapse({text}) {


    if (Array.isArray(text)) {
      return (
        <div className="collapse-content">
            <ul>
                    { text.map((item, index) => 
                        <li key={index}>
                            {item}
                        </li>
                    )}
            </ul>
        </div>

        );
    }
    return (
        <div className="collapse-content">
            <div>{text}</div>
        </div>      
    );
}