import Navbar1 from "../../../components/Navbar1"
import Navbar2 from "../../../components/Navbar2"
import Image from "next/image"
import Link from "next/link";

const animePageDirect = (data) => {
    console.log(data.replaceAll(" ", "%20"));
    location.href = `/query/anime/${data}`

}
export const getServerSideProps = async ({ query }) => {
    const anime = query.Watch;
    const userAnime = anime.toLowerCase().replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").replaceAll(".", "").replaceAll(":-", "-")
    const res = await fetch(`/info/anime/${userAnime}`, {
        method: "post"
    })
    const data = await res.json();
    return {
        props: {
            data,
            anime
        }
    }
}
const Watch = ({ data, anime }) => {
    return (
        <>
            <div className="container">
                {console.log(data)}
        <Navbar1/>
                <div className="searchContainer">
                    <div className="searchBox">
                        <input id="animeInput" type="text" name="userAnime" placeholder="Search" onKeyUp={event => {
                            if (event.key == "Enter") {
                                animePageDirect(event.target.value);
                            }
                        }}></input>
                    </div>
                </div>
            </div>
           <div className="anime_info_container">
           <div className="anime_info">
                <div className="leftside">
                        <Image src={data[0].img} height="1000px" width="1000px" alt={data[0].name}></Image>
                </div>
                <div className="rightside">
                    <div className="name"><span>Name:</span> {data[0].name}</div>
                    <div className="plot"><span>Story:</span>{data[0].plot.replaceAll("Plot Summary:","")}</div>
                    <div className="genre"><span>Genre:</span>{data[0].genres.replaceAll("Genre:","")}</div>
                    <div className="released"><span>Released:</span>{data[0].status.replaceAll("Released:","")}</div>
                </div>
            </div>
                <div className="button_container">
                    <button className="play"><Link href={`/query/watch/user/${anime}?episode=${1}`}><a>Play</a></Link></button>
                </div>
           </div>
        </>
    )
}

export default Watch
