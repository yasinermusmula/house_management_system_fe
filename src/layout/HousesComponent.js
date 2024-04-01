import { FaHouse } from "react-icons/fa6";
import {FaHome, FaMountain} from "react-icons/fa";
import {useState} from "react";
import {DummyData} from "../data/DummyData"
export default function HousesIcon() {
    const handleSelectFilter = (filter) => {
        // Filtre seçildiğinde yapılacak işlemleri buraya yazabilirsiniz
        console.log('Seçilen Filtre:', filter);
    };
        return (
            <div className="flex flex-wrap items-center space-x-4 m-5">
                {DummyData.map((data) => (
                <button
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg border bg-white"
                >
                    {data.property}
                    <span className="ml-2">{data.name}</span>
                </button>
                    ))
                }
            </div>
        )
}