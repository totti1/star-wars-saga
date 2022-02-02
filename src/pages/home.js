import { useSelector } from "react-redux"
import { ImageCarousel } from "../components"

export default function Home (){

    const myData = useSelector(state => state.carousselData)
    console.log(myData)
    return(
        <div className="container">
            <h1>Home</h1>
            <ImageCarousel data={myData} />
        </div>
    )
}