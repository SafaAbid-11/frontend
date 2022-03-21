import { Link } from 'react-router-dom';
import {BsArrowRight,AiOutlineSearch} from 'react-icons';
const ArrowButton= ({text,path})=> {
    return(
        <div className={Stylesheet.btn}>
            <Link to={`${path}`}>{text}</Link>
            <BsArrowRight />
        </div>
    );
};
export {ArrowButton} ;