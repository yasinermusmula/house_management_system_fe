import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAirbnb} from "@fortawesome/free-brands-svg-icons/faAirbnb";
import { FaUser } from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div className="flex justify-between m-8">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faAirbnb} className="text-red-500"/>
              <Link to="/">airbnb</Link>
            </div>
            <div className="flex justify-around">
                <p className="pr-4">Konaklama Yerleri</p>
                <p className="pr-4">Deneyimler</p>
                <p >Cevrim içi deneyimler</p>
            </div>
            <div className="flex items-center">
                <p className="pr-4">Evinizi Airbnb'ye Taşıyın</p>
                <MdLanguage className="mt-1"/>
                <div className="flex items-center">
                 <Link to="/login">
                   <div className="flex items-center mr-2">
                     <FaUser className="text-blue-600 ml-2"/>
                     <p>Login</p>
                   </div>
                 </Link>
                  <p className="mr-2">/</p>
                </div>
                  <Link to="/signup">Register</Link>
            </div>
        </div>
    )
}