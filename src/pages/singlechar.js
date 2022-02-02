import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadSingleCharacter } from "../redux/reducers/singleChar";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';

export default function SingleChar (){

    let { id } = useParams();

    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    useEffect(() => {
        dispatch(loadSingleCharacter(id))
    }, [dispatch]);
    console.log(myData.singleChar.list)

    // console.log(page)

    if(myData.singleChar.loading === false){
        return(
            <div className="container">
                <h1>Single Char</h1>
                <p>{myData.singleChar.list.name}</p>
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}