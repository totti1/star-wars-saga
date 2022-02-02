import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadData } from "../redux/peoples";
import LinearProgress from '@mui/material/LinearProgress';
// useEffect


export default function Lister (){
    const dispatch = useDispatch()
    // dispatch(retrieveAllStarWarsChars("1"))
    const myData = useSelector(state => state)
    // console.log(myData)
    // console.log(dispatch(retrieveAllStarWarsChars("5")))
    useEffect(() => {
        dispatch(loadData("1"))
    }, [dispatch]);
    console.log(myData.list.results)
    if(myData.loading === false){
        return(
            <div className="container">
                <h1>Lister</h1>
                {myData.list.results.map((item,index)=>(
                    <li>{item.name}</li>
                ))}
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}