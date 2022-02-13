import express from "express";
import {displayAnime,popularAnime,animeMovie,ongoingSeries,Genres} from "./AnimeApi.js";
import {searchAnime,InfoAnime,totalEpisode,animeVideoAndEpisode} from "./SearchApi.js"
const app=express();
const port=process.env.PORT||8000;

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
app.post("/genres/:id",async(req,res)=>{
    try {
        res.status(200).send(await Genres(req.params.id))
    } catch (error) {
        console.log(error)
    }
})
app.post("/search/anime/:id",async(req,res)=>{
    try {
        res.status(200).send(await searchAnime(req.params.id))
    } catch (error) {
        console.log(error)
    }
})
app.post("/info/anime/:id",async(req,res)=>{
        try {
            res.status(200).send(await InfoAnime(req.params.id))
        } catch (error) {
            console.log(error)
        }
})
app.post("/video/anime/:name/:eps",async(req,res)=>{
    try {
        res.status(200).send(await animeVideoAndEpisode(req.params.name,req.params.eps))
    } catch (error) {
        console.log(error)
    }
})
app.post("/eps/anime/:id",async(req,res)=>{
    try {
       res.send(await totalEpisode(req.params.id))
    } catch (error) {
        console.log(error)
    }
})
if (process.env.NODE_ENV=="production") {
    app.use(express.static("client/build"))
}

app.listen(port,()=>{
    console.log('listening....')
})