import React, { useRef } from "react";
import Navbar1 from "../../../../components/Navbar1";
import Navbar2 from "../../../../components/Navbar2";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async ({ query }) => {
    const anime = query.User.toLowerCase().replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").replaceAll(".", "").replaceAll(":-", "-");
    const Episode = query.episode;
    const res = await fetch(`/video/anime/${anime}/${Episode}`, {
        method: "post"
    })
    const res1 = await fetch(`/eps/anime/${anime}`, {
        method: "post"
    })
    const res2 = await fetch(`/search/anime/${anime}`, {
        method: "post"
    })
    const data = await res.json()
    const data1 = await res1.json()
    const data2 = await res2.json()
    return {
        props: {
            data,
            anime,
            data1,
            data2
        }
    }
}
const animePageDirect = (data) => {
    console.log(data.replaceAll(" ", "%20"));
    location.href = `/query/anime/${data}`

}

const User = ({ data, anime, data1, data2 }) => {
    const userIframe = useRef(null)
    const con = () => {
        console.log(userIframe.current)
    }
    return <>
        <Head>
            <title>naruto</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        </Head>
        <div className="container">
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
        <div className="play_container">
            <div className="iframe_container">

                <iframe id="playerframe" ref={userIframe} onClick={con()} src={data[0]} style={{ width: "50%", height: "100%" }} allowFullScreen="true" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div className="episode_list">
                    <ul className="episode_number">
                        {Array.from(Array(data1[0].Episode), (e, i) => {
                            return <>
                                <li key={i+1}>
                                    <Link href={`/query/watch/user/${anime}?episode=${i + 1}`}>
                                        <a>
                                            <p>{i + 1}</p>
                                        </a>
                                    </Link>
                                </li>
                            </>
                        })}
                    </ul>

                </div>
            </div>
            <div className="related_anime">
                <p className="similiar">Related to your search</p>
                <hr></hr>
                {data2.slice(1,11).map((val) => {
                    return (
                        <Link href={`/query/watch/${val.name}`} key={val.name}>
                            <a>
                                <div className="user_anime_card" key={val.name}>
                                    <div className="user_anime_image">
                                        <Image src={val.img} width="100px" height="100px" alt={val.name}></Image>
                                    </div>
                                    <div className="user_anime_desc">
                                        <p className="user_anime_title">{val.name}</p>
                                        <p className="user_anime_date">{val.date}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>

    </>;
};
export default User;
