import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import Stylesheet from './Buttons.module.scss';;
const ArrowButton= ({text,path})=> {
    return(
        <div className={Stylesheet.btn}>
            <Link to={`${path}`}>{text}</Link>
            <BsArrowRight />
        </div>
    );
};
ArrowButton.defaultProps ={
   text:"test btn",
   path:"/",
};
export {ArrowButton} ;