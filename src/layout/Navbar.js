import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAirbnb} from "@fortawesome/free-brands-svg-icons/faAirbnb";
import { FaUser } from "react-icons/fa";
import {MdLanguage} from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_STATE} from "../store/reducers/UserActionReducer";
import {logOutAction} from "../store/actions/UserActions";

export default function Navbar(){
    const dispatch = useDispatch();
    const fetchData = useSelector(store=>store.user)
    console.log(fetchData)

    const logOut = () =>{
        dispatch(logOutAction())
    }

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
                    <div className="flex items-center mr-2">
                      <FaUser className="text-blue-600 ml-2"/>
                        {fetchData.fetchState === FETCH_STATE.FETCHED ?
                            <div className="flex">
                                <p>Hosgeldin {fetchData.user.name}</p>
                                <p className="mx-2">/</p>
                                <span onClick={logOut}>Log Out</span>
                                <Link to="/property">
                                   <span>Property Ekle</span>
                                </Link>
                            </div>
                            :
                            <div className="flex">
                              <Link to="/login">
                                <p>Login</p>
                              </Link>
                               <p className="mx-2">/</p>
                                <Link to="/signup">
                                  <p>Register</p>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}