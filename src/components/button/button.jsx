
import './button.css';

function Button(props) {

    return (
        <>
            <label>Click for {props.action} :</label>
            <button className="btn" >
                {props.name}
            </button>
        </>
    )
    
}

export default Button;
