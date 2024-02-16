
import './button.css';



function Button(props) {

    

    return (
        <>
            <button className="btn" onClick={props.onClick} >
                {props.name}
            </button>
        </>
    )
    
}



export default Button;
