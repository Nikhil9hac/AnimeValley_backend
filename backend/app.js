import express from "express";
import {displayAnime,popularAnime,animeMovie,ongoingSeries} from "./AnimeApi.js";
const app=express();
const port=8000;

app.post("/displayAnime",async(req,res)=>{
    try {
        res.status(200).send(await displayAnime())
    } catch (error) {
        console.log(error)
    }
})
app.post("/popularAnime",async(req,res)=>{
    res.status(200).send(await popularAnime())
})
app.post("/animeMovie",async(req,res)=>{
    res.status(200).send(await animeMovie())
})
app.post("/ongoingAnime",async(req,res)=>{
    res.status(200).send(await ongoingSeries())
})

app.listen(port,()=>{
    console.log('listening ......')
})