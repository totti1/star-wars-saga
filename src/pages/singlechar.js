import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadSingleCharacter } from "../redux/reducers/singleChar";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from "@mui/material";
import { FilmReviewCard } from "../components";
import axios from "axios";
import { loadFilms } from "../redux/reducers/films";
// import { LetterAvatars } from "../components";


export default function SingleChar (){

    let { id } = useParams();
    const films = [];
    const dispatch = useDispatch()
    const myData = useSelector(state => state)
    const isFirstUpdate = useRef(true);
    useEffect(() => {
        if(parseInt(id) >= 17){
            id= parseInt(id)+1
        }
        dispatch(loadSingleCharacter(id))
        if (isFirstUpdate.current) {
            console.log(myData.singleChar.list.films)
            isFirstUpdate.current = false;
            return;
        }
        // for(let i of myData.singleChar.list.films){
        //     dispatch(loadFilms(id))
        //     axios.get(i)
        //     .then(res => {
        //         const persons = res.data;
        //         console.log(persons)
        //     })
        // }
    }, [dispatch]);
    // useEffect(() => {
    //     if (isFirstUpdate.current) {
    //     isFirstUpdate.current = false;
    //     return;
    //     }

    //     console.log('componentDidUpdate');
    // });

    const { list } = myData.singleChar
    if(myData.singleChar.loading === false){
        // for(let i of list.films){
        //     loadFilms(id)
        //     axios.get(i)
        //     .then(res => {
        //         const persons = res.data;
        //         films.push(persons)
        //         // setFilms(res.data)
                
        //     })
        // }
        // console.log(myData.films)
        return(
            <div className="container">
                <h2>Let me Introduce you to,</h2>
                <div className="row">
                    <div className="col-md-3">
                        <Paper 
                            elevation={8} 
                            sx={{ 
                                // minHeight: '80vh', 
                                maxWidth: 345, 
                                margin:'auto', 
                                display: 'flex', 
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: 3
                            }}>
                            <Typography gutterBottom variant="h4">{list.name}</Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Birth Year: {list.birth_year}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Gender: {list.gender}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Eye Color: {list.eye_color}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Hair Color: {list.hair_color}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Skin Color: {list.skin_color}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Height: {list.height}
                            </Typography>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                Mass: {list.mass}
                            </Typography>
                            
                        </Paper>
                    </div>
                    <div className="col-md-8">
                        {films.map((item, index)=>{
                            console.log(films)
                            if(!films){
                                console.log(films)
                                return <LinearProgress />
                            }
                            else{
                                console.log(films)
                                return <FilmReviewCard />
                            }
                        })}
                        
                    </div>
                </div>
                
            </div>
        )
        
    }
    else{
        return <LinearProgress />
    }
}