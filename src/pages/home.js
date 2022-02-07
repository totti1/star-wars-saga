import React,{ useState } from "react"
import { ImageCarousel } from "../components"
import carousselData from "../mock/caroussel"
// import carousselData from "../redux/reducers/caroussel"


export default function Home (){

    const [data] = useState(carousselData)
    return(
        <div className="container-fluid">
            <ImageCarousel data={data} />
        </div>
    )
}