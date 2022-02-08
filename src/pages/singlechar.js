import React,{ useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadSingleCharacter } from "../redux/reducers/singleChar";
import { LinearProgress, IconButton, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { FilmReviewCard } from "../components";
import axios from "axios";
import "./styles/singleChar.css"
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as Scroll from 'react-scroll';
import { prepare } from "../redux/reducers/lastVisited";


let scroll = Scroll.animateScroll;

/* eslint-disable no-alert, no-console */
export default function SingleChar (){
    const [filmsloaded, setFilmsloaded] = useState(false)
    const [movies, setMovies] = useState([])
    let { id } = useParams();
    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    // const trackButton = useRef();

    useEffect(() => {
        if(parseInt(id) >= 17){
            id= parseInt(id)+1 
        }
        dispatch(loadSingleCharacter(id))
        
    }, [dispatch]);

    const { list } = myData.singleChar
    
    const getLevel = () => {
        dispatch(prepare({id:id, charData:list}))
        if(list.films){
            let promiseArray = list.films.map( url=> axios.get(url) );
            Promise.all( promiseArray )
            .then(
                results => {
                const gistsDescriptions = results.map( el => el.data );
                setFilmsloaded(true)
                setMovies(gistsDescriptions)
                
                }
            )
            .catch(console.log)
            localStorage.setItem("singleCharId", JSON.stringify(list))
            scroll.scrollToBottom();
        }
        
    }

    let navigate = useNavigate();
    
    if(myData.singleChar.loading === false){

        return(
            <div>
                <IconButton 
                    sx={{
                        position: 'absolute',
                        height: 50,
                        width: 50,
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                        marginTop: 2,
                        left: 50
                        
                    }}
                    onClick={()=> navigate(-1)}
                >
                    <ArrowBackIcon />
                </IconButton>
                <div className="bg-img">
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 36, fontWeight: 'bold' }}>
                        Let me Introduce you to,
                    </Typography>
                    <Typography gutterBottom variant="h4" sx={{ fontSize: 30, fontWeight: 'bold' }}>
                        {list.name}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Birth Year: {list.birth_year}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Gender: {list.gender}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Eye Color: {list.eye_color}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Hair Color: {list.hair_color}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Skin Color: {list.skin_color}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Height: {list.height}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 800 }} gutterBottom>
                        Mass: {list.mass}
                    </Typography>
                    <IconButton 
                        aria-label="arrow" 
                        sx={{color: 'white', fontSize: 50, marginTop: 10 }}
                        onClick={()=> getLevel()}
                    >
                        <KeyboardArrowDownTwoToneIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className="container" style={{ "margin": "auto"}} >
                    <Typography 
                        gutterBottom 
                        variant="h4" 
                        sx={{ fontSize: 28, fontWeight: 'bold', margin: 5 }}
                    >
                        Movies Featured in,
                    </Typography>
                    <div className="row">
                        {filmsloaded ? 
                            movies.map((item, index)=>{
                            return (
                                <div className="col-md-3">
                                    <FilmReviewCard
                                        avatar={item.title.slice(0,1)}
                                        title={item.title}
                                        date={item.release_date}
                                        description={item.opening_crawl}
                                    />
                                </div>
                                )
                        }) : <LinearProgress /> }
                    </div>
                    
                </div>
                
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}
/* eslint-enable no-alert */