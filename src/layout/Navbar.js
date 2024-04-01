import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAirbnb} from "@fortawesome/free-brands-svg-icons/faAirbnb";

export default function Navbar(){
    return(
        <div className="flex justify-between m-8">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faAirbnb} className="text-red-500"/>
              <p>airbnb</p>
            </div>
            <div className="flex justify-around">
                <p className="pr-4">Konaklama Yerleri</p>
                <p className="pr-4">Deneyimler</p>
                <p >Cevrim içi deneyimler</p>
            </div>
            <div className="flex">
                <p className="pr-4">Evinizi Airbnb'ye Taşıyın</p>
                <p className="pr-4">Language</p>
                <p>Login</p>
            </div>
        </div>
    )
}