import { useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadData } from "../redux/reducers/peoples";
import {LinearProgress} from '@mui/material';
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { MediaCard } from "../components";

export default function Lister (){

    let { id } = useParams();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        window.location=`/list/${value}`;
    };

    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    useEffect(() => {
        setPage(parseInt(id));
        dispatch(loadData(id))
    }, [dispatch]);
    // console.log(myData)

    // console.log(page)
    let countId = 0
    if(page > 1){
        countId= (page*10)-10
    }

    if(myData.peoplesReducer.loading === false){
        return(
            <div className="container">
                <h1>Lister</h1>
                <div className="row">
                    {myData.peoplesReducer.list.results.map((item,index)=>(
                        <div className="col-md-3">
                            <MediaCard 
                                name={item.name}
                                gender={item.gender}
                                height={item.height}
                                birth={item.birth_year}
                                redirectTo={`/single/character/${countId+index+1}`}
                            />
                        </div>
                    ))}
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'center' }} >
                    <Pagination 
                        count={9} 
                        page={page} 
                        onChange={handleChange} 
                        color="secondary"
                        size="large"
                    />
                </div>
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}