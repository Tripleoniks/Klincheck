
import "./customButton.scss"

const CustomButton = ({children, printReceipt}) => {
    return ( 
        <button  className={`${ printReceipt ? 'inverted' : ''} custom-button `}>
        {children}
    </button>
     );
}
 
export default CustomButton;