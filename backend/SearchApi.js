import got from 'got';
import jsdom from "jsdom"
const { JSDOM } = jsdom;

export const searchAnime=async(anime)=>{
    const serachAnimeList=[]
    try {
        const res=await got(`https://ww1.gogoanime2.org/search/${anime}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if (index!=0 && index<25) {
                serachAnimeList.push({img:"https://ww1.gogoanime2.org/"+val.src})
            }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
            if (index<24) {
                    serachAnimeList[index].name=val.textContent.trim();
            }
        })
        data.window.document.querySelectorAll(".released").forEach((val,index)=>{
            if (index<24) {
                    serachAnimeList[index].date=val.textContent.trim();
            }
        })
        return serachAnimeList;
        
    } catch (error) {
        console.log(error)
    }
}
searchAnime()