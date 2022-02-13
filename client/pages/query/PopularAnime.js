import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import GenresList from "../../components/GenresList";
import Image from "next/image";

export const getServerSideProps=async()=>{
    try {
        const res=await fetch("/popularAnime",{
            method:"post"
        })
        const data=await res.json()
        return{
            props:{
                data
            },
        }
    } catch (error) {
        console.log(error)
    }
}
const animePageDirect=(data)=>{
    console.log(data.replaceAll(" ","%20"));
    location.href=`/query/anime/${data}`

}
const PopularAnime = ({data}) => {
    return (
        <>
   <div className="container">
       <Navbar1/>
       <div className="searchContainer">
           <div className="searchBox">
                <input id="animeInput" type="text" name="userAnime"  placeholder="Search" onKeyUp={event=>{if (event.key=="Enter") {
                    animePageDirect(event.target.value);
                }}}></input>
           </div>
            </div>
   </div>
   <div className="animeContainer2">
     <main>
     <div className="displayAnimeContainer">
           {data.map((val)=>{
               return(
                   <div className="anime_card" key={val.name}>
                       <div className="anime_image">
                            <Image src={val.img} width="100px" height="100px" alt={val.name}></Image>
                       </div>
                       <div className="anime_desc">
                           <p className="anime_title">{val.name}</p>
                           <p className="anime_date">{val.date}</p>
                       </div>
                   </div>
               )
           })}
       </div>
     </main>
     <aside>
         <h1 className="genres">Genres</h1>
         <GenresList/>
     </aside>
   </div>
        </>
    )
}

export default PopularAnime;
