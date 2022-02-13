import Navbar1 from "../../../components/Navbar1";
import Navbar2 from "../../../components/Navbar2";
import GenresList from "../../../components/GenresList";
import Image from "next/image";
import Link from "next/link";
export const getServerSideProps=async({query})=>{
    const userSearch=query.anime;
    const res=await fetch(`/search/anime/${userSearch}`,{
        method:"post"
    })
    const data=await res.json();
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
const anime = ({data}) => {
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
           {data.map((val)=>{
               return(
                <Link href={`/query/watch/${val.name}`} key={val.name}>
                <a>
                <div className="anime_card" >
                       <div className="anime_image">
                            <Image src={val.img} width="100px" height="100px" alt={val.name}></Image>
                       </div>
                       <div className="anime_desc">
                           <p className="anime_title">{val.name}</p>
                           <p className="anime_date">{val.date}</p>
                       </div>
                   </div>
                </a>
                </Link>
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

export default anime;

