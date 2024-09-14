import "./Heros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ladyVert from "../../assets/images/lady.png";

import img1 from "../../assets/images/ach.png";

import img5 from "../../assets/images/logo-white 1.png";
import img6 from "../../assets/images/logo (1) 1.png";
// import img7 from "../../assets/images/bg.jpg";

const Heros = () => {
    return (
        <div>
            <div className='hero-section'>
                <div className='container'>
                    <div className='hero-content'>
                        <h3>Welcome to Lorem Sprint</h3>
                        <h1>Learn anything in a new way</h1>
                        <p>
                            Best learning platform to find any topics you need, and get access to a
                            wide range of master course from professionals with latest technologies.
                        </p>
                        <div className='search-navigation'>
                            <input type='text' className='search' placeholder='Search' />

                            <button className='search-icon'>
                                {<FontAwesomeIcon icon={faSearch} />}
                            </button>
                        </div>
                    </div>

                    <div className='lady'>
                        <img src={ladyVert} alt='' />
                    </div>
                </div>
            </div>
            <div className='bizzAch'>
                <div className='achievements'>
                    <img src={img1} alt='' />
                    {/* <img src={img2} alt='' />
                    <img src={img3} alt='' />
                    <img src={img4} alt='' /> */}
                    <p>
                        Over <span>10,000+</span> Enrollment around the world
                    </p>
                </div>
                <div className='courseArch'>
                    <img src={img5} alt='' />
                    <p>More than 45,000 courses</p>
                </div>
                <div className='recomArch'>
                    <img src={img6} alt='' />
                    <p>Learn at your convenience</p>
                </div>

                {/* <div className='wave'>
                    <img src={img7} alt='' />
                </div> */}
            </div>
        </div>
    );
};

export default Heros;
