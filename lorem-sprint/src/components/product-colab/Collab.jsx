import "./Collab.css";
import img7 from "../../assets/images/collab.svg";
// import Products from "../../data";

const Collab = () => {
    return (
        <div className='product-collab-section'>
            <div className='container'>
                <div className='collaboration'>
                    <p>In collaboration with</p>
                    <img src={img7} alt='' />
                </div>
                
            </div>
        </div>
    );
};

export default Collab;
