import {HomePageData} from "../data/HomePageData";
import PropertyCard from "./PropertyCard";
export default function Properties(){
    return(
        <div className="flex flex-wrap gap-12 mx-16 px-16">
            {HomePageData.map((property) => (
                <PropertyCard property = {property}/>
            ))}
        </div>
    )
}