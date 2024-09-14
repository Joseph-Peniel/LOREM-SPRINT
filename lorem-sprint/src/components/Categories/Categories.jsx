import "./Categories.css"; 
import { Categories } from "../../data";
import desktop from '../../assets/images/desktop.svg' 

const CategoriesComponent = () => {
    return (
        <div className='categories'>
            <h3>Top Categories</h3>
            <div className='categories-box'>
                <ul className='Section'>
                    {Categories.map((cat) => (
                        <li key={cat.id}>
                            <img src={cat.image} alt={cat.title} />
                            <div className='coursesCat'>
                                <h5>{cat.title}</h5>
                                <h6>{cat.courses}</h6>
                            </div>
                        </li>
                    ))}
                    <li key='4' className="cat4">
                        <img
                            src={desktop}
                            alt='desktop-
                        avatar'
                        />
                        <div className='coursesCat'>
                            <h5>Engineering Architecture</h5>
                            <h6>3234+ courses</h6>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesComponent;
