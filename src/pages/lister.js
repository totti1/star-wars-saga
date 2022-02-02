import { useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadData } from "../redux/reducers/peoples";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

export default function Lister (){

    let { id } = useParams();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        window.location=`/${value}`;
    };

    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    useEffect(() => {
        setPage(parseInt(id));
        dispatch(loadData(id))
    }, [dispatch]);
    console.log(myData)

    console.log(page)

    if(myData.peoplesReducer.loading === false){
        return(
            <div className="container">
                <h1>Lister</h1>
                {myData.peoplesReducer.list.results.map((item,index)=>(
                    <li>{item.name}</li>
                ))}
                <Pagination count={9} page={page} onChange={handleChange} />
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}