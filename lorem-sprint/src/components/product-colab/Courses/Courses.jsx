import {products} from "../../../data";
import "./Courses.css";

const Courses = () => {
    return (
        <div className='trendingCourses'>
            <h2>
                Trending Courses <span>For You</span>
            </h2>

            <ul className='Section'>
                {products.map((product) => (
                    <li key={product.id}>
                        <div className='courses'>
                            <img src={product.image} alt={product.name} />
                            <h5>${product.price}</h5>
                            <div className='info'>
                                <h4>
                                    {product.title} : <span>{product.subtitle}</span>
                                </h4>
                                <span>{product.author}</span>
                            </div>
                        </div>
                        <div className='courses'>
                            <img src={product.image} alt={product.name} />
                            <h5>${product.price}</h5>
                            <div className='info'>
                                <h4>
                                    {product.title} : <span>{product.subtitle}</span>
                                </h4>
                                <span>{product.author}</span>
                            </div>
                        </div>
                        <div className='courses'>
                            <img src={product.image} alt={product.name} />
                            <h5>${product.price}</h5>
                            <div className='info'>
                                <h4>
                                    {product.title} : <span>{product.subtitle}</span>
                                </h4>
                                <span>{product.author}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
