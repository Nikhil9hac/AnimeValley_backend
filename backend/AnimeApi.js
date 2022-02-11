import got from 'got';
import jsdom from "jsdom"
const { JSDOM } = jsdom;

export const displayAnime=async()=>{
    const DisplayAnimeList=[]
    try {
        const response=await got('https://gogoplay1.com');
        const data=new JSDOM(response.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               DisplayAnimeList.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           DisplayAnimeList[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            DisplayAnimeList[index].date=val.textContent.trim();
        })
        return DisplayAnimeList
    } catch (error) {
        console.log(error)
    }
}
export const popularAnime=async()=>{
    const PopularAnimeList=[];
    try {
        const response=await got("https://ww1.gogoanime2.org/popular");
        const data =new JSDOM(response.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               PopularAnimeList.push({img:"https://ww1.gogoanime2.org/"+val.src})
           }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
            PopularAnimeList[index].name=val.textContent.trim();
         })
         data.window.document.querySelectorAll(".released").forEach((val,index)=>{
             PopularAnimeList[index].date=val.textContent.trim();
         })

         return PopularAnimeList
    } catch (error) {
        console.log(error)
    }
}
export const animeMovie=async()=>{
    const AnimeMovieList=[];
    try {
        const response=await got('https://gogoplay1.com/movies');
        const data=new JSDOM(response.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               AnimeMovieList.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           AnimeMovieList[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            AnimeMovieList[index].date=val.textContent.trim();
        })
        return AnimeMovieList
    } catch (error) {
        console.log(error)
    }
}
export const ongoingSeries=async()=>{
    const OngoingSeriesList=[];
    try {
        const response=await got('https://gogoplay1.com/ongoing-series');
        const data=new JSDOM(response.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               OngoingSeriesList.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           OngoingSeriesList[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            OngoingSeriesList[index].date=val.textContent.trim();
        })
        return OngoingSeriesList;
    } catch (error) {
        console.log(error)
    }
}
export const Genres=async(anime)=>{
    const GenresAnimeContainer=[]
    try {
        const response=await got(`https://www.animefreak.site/anime/genre/${anime}`);
        const data=new JSDOM(response.body);
        data.window.document.querySelectorAll('img').forEach((val,index)=>{
            if (index!=0) {
                GenresAnimeContainer.push({img:"https:"+val.src})
            }
        })
        data.window.document.querySelectorAll(".ani-name").forEach((val,index)=>{
            GenresAnimeContainer[index].add=val.textContent.trim()
        })
        return GenresAnimeContainer;
    } catch (error) {
        console.log(error)
    }
}