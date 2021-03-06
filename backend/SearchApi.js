import got from 'got';
import jsdom from "jsdom"
const { JSDOM } = jsdom;

export const searchAnimeGogo=async(anime)=>{
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
export const searchAnimeAni=async(anime)=>{
    const serachAnimeList=[]
    try {
        const res=await got(`https://gogoplay1.com/search.html?keyword=${anime}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if (index>0) {
                serachAnimeList.push({img:val.src})
            }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
            serachAnimeList[index].name=val.textContent.trim();
        })
       return serachAnimeList;
    } catch (error) {
        console.log(error)
    }
}
export const searchAnimeRush=async(anime)=>{
    const serachAnimeList=[]
    try {
        const res=await got(`https://www.animerush.tv/search.php?searchquery=${anime}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("object").forEach((val)=>{
            serachAnimeList.push({data:val.data})
        })
        data.window.document.querySelectorAll(".search-page_in_box_mid_link h3").forEach((val,index)=>{
            serachAnimeList[index].name=val.textContent.trim();
        })
       return serachAnimeList
    } catch (error) {
        console.log(error)
    }
}
export const InfoAnime=async(anime)=>{
    const AnimeInformation=[];
   try {
    const res=await got(`https://ww1.gogoanime2.org/anime/${anime}`)
    const data=new JSDOM(res.body);
    const anime_img="https://ww1.gogoanime2.org/"+data.window.document.querySelector(".anime_info_body_bg > img").src;
    const anime_name=data.window.document.querySelector("h1").textContent.trim();
    const anime_type=data.window.document.querySelectorAll(".type")[0].textContent.trim();
    const anime_plot=data.window.document.querySelectorAll(".type")[1].textContent.trim();
    const anime_genres=data.window.document.querySelectorAll(".type")[2].textContent.trim();
    const anime_status=data.window.document.querySelectorAll(".type")[3].textContent.trim();
    AnimeInformation.push({img:anime_img,name:anime_name,plot:anime_plot,type:anime_type,genres:anime_genres,status:anime_status})
    return AnimeInformation;
   } catch (error) {
       console.log(error)
   }
}
export const animeVideoAndEpisode=async(anime,ep)=>{
    const videoLink=[]
    try {
        const gogo=await got(`https://ww1.gogoanime2.org/watch/${anime}/${ep}`);
        const gogoWeb=new JSDOM(gogo.body);
        const videoSrc="https://ww1.gogoanime2.org"+gogoWeb.window.document.getElementById("playerframe").src;
        videoLink.push(videoSrc);
        console.log(videoLink)
        return videoLink;
    } catch (error) {
        console.log(error)
    }
}
export const totalEpisode=async(ep)=>{
    let animeInfo=[]
    try {
        const res=await got(`https://ww1.gogoanime2.org/anime/${ep}`);
        const data=new JSDOM(res.body);
        const totalEp=data.window.document.querySelectorAll("#episode_related>li").length;
        animeInfo.push({Episode:totalEp})
        return animeInfo
    } catch (error) {
        console.log(error)
    }
}
export const displayAnimePage=async(pageNum)=>{
    let animePageResult=[]
    try {
        const res=await got(`https://gogoplay1.com/?page=${pageNum}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               animePageResult.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           animePageResult[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            animePageResult[index].date=val.textContent.trim();
        })
         return animePageResult
    } catch (error) {
        console.log(error)
    }
}
export const ongoingAnimePage=async(pageNum)=>{
    let animePageResult=[]
    try {
        const res=await got(`https://gogoplay1.com/ongoing-series?page=${pageNum}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               animePageResult.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           animePageResult[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            animePageResult[index].date=val.textContent.trim();
        })
         return animePageResult
    } catch (error) {
        console.log(error)
    }
}
export const popularAnimePage=async(pageNum)=>{
    let animePageResult=[];
    try {
        const response=await got(`https://ww1.gogoanime2.org/popular/${pageNum}`);
        const data =new JSDOM(response.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index>0){
               animePageResult.push({img:"https://ww1.gogoanime2.org/"+val.src})
           }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
            animePageResult[index].name=val.textContent.trim();
         })
         data.window.document.querySelectorAll(".released").forEach((val,index)=>{
             animePageResult[index].date=val.textContent.trim();
         })
         return animePageResult;
    } catch (error) {
        console.log(error)
    }
}
export const animeMoviePage=async(pageNum)=>{
    let animePageResult=[]
    try {
        const res=await got(`https://gogoplay1.com/movies?page=${pageNum}`);
        const data=new JSDOM(res.body);
        data.window.document.querySelectorAll("img").forEach((val,index)=>{
            if(index!=0){
               animePageResult.push({img:val.src})
             }
        })
        data.window.document.querySelectorAll(".name").forEach((val,index)=>{
           animePageResult[index].name=val.textContent.trim();
        })
        data.window.document.querySelectorAll(".date").forEach((val,index)=>{
            animePageResult[index].date=val.textContent.trim();
        })
         return animePageResult
    } catch (error) {
        console.log(error)
    }
}