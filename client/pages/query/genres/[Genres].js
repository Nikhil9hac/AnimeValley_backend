import Navbar1 from "../../../components/Navbar1";
import Image from "next/image";
import Navbar2 from "../../../components/Navbar2";
import GenresList from "../../../components/GenresList";

// export const getStaticPaths=async()=>{
//     return{
//         paths:[{
//             params:{Genres:"Adventure"},
//             params:{Genres:"Action"},
//             params:{Genres:"Cars"},
//             params:{Genres:"Comedy"},
//             params:{Genres:"Demons"},
//             params:{Genres:"Drama"},
//             params:{Genres:"Fantasy"},
//             params:{Genres:"Game"},
//             params:{Genres:"Harem"},
//             params:{Genres:"Historical"},
//             params:{Genres:"Horror"},
//             params:{Genres:"Kids"},
//             params:{Genres:"Magic"},
//             params:{Genres:"Martial-Arts"},
//             params:{Genres:"Military"},
//             params:{Genres:"Music"},
//             params:{Genres:"Mystery"},
//             params:{Genres:"Police"},
//             params:{Genres:"Psychological"},
//             params:{Genres:"Romance"},
//             params:{Genres:"Samurai"},
//             params:{Genres:"Sci-Fi"},
//             params:{Genres:"Shounen"},
//             params:{Genres:"Space"},
//             params:{Genres:"Sports"},
//             params:{Genres:"Super-Power"},
//             params:{Genres:"Supernatural"},
//             params:{Genres:"Thriller"},
//             params:{Genres:"Vampire"},
            
//         }],
//         fallback:true
//     }
// }
export const getServerSideProps=async({query})=>{
    const user=query.Genres.toLowerCase().replace("-","%20");;
    const res=await fetch(`/genres/${user}`,{
        method:"post"
    })
    const data=await res.json()
    return{
        props:{
            data
        }
    }
}
const animePageDirect=(data)=>{
    console.log(data.replaceAll(" ","%20"));
    location.href=`/query/anime/${data}`

}
const Genres= ({data}) => {
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
   <div className="animeContainer">
     <main>
     <div className="displayAnimeContainer">
     {data && data.map((val)=>{
               return(
                   <div className="anime_card" key={val.name}>
                       <div className="anime_image">
                            <Image src={val.img} width="100px" height="100px" alt={val.name}></Image>
                       </div>
                       <div className="anime_desc">
                           <p className="anime_title">{val.add}</p>
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

export default Genres