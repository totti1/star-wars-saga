import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ImageCarousel } from "../components"
import carousselData from "../redux/reducers/caroussel"

export default function Home (){

    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    useEffect(() => {
        dispatch(carousselData())
    }, [dispatch]);
    console.log(myData.singleChar.list)
    return(
        <div className="container">
            <h1>Home</h1>
            <ImageCarousel data={myData.carousselData} />
        </div>
    )
}