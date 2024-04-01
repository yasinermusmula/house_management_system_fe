import {Link} from "react-router-dom";


export default function PropertyCard(props){

    const {property} = props;

    return(
        <div
            key={property.id}
            className="w-[11rem] m-auto hover:shadow-lg hover:transform hover:scale-105 transition duration-300"
        >
            <div className="text-center mb-2">
                    <img
                        src={property.propertyImg}
                        className=" mb-2 cursor-pointer"
                    />

                <h5 className="text-lg font-bold mb-2 text-[#252B42] font-montserrat">
                    {property.firstLocation}
                </h5>
                <div className="justify-center">
                    <p className="text-base font-bold text-[#BDBDBD]">{property.distance}</p>
                    <p className="text-base font-bold ml-2 text-[#23856D]">
                        {property.available}
                    </p>
                </div>
                <p
                    className="bg-blue-500 p-1 text-white font-montserrat"
                >
                    {property.price}TL
                </p>
            </div>
        </div>
    )
}