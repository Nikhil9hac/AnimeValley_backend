import Link from "next/link"
import { useState } from "react"
import Head from "next/head";
const Navbar1 = () => {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <title>AnimeValley</title>
        </Head>
            <nav>
                <div className="website_title">
                    <p className="title">AnimeValley</p>
                </div>
                <div className="page_link_list">
                    <ul className='page_list'>
                        <li className='page_link'>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li className='page_link'>
                            <Link href="/query/OngoingAnime"><a>Ongoing-Anime</a></Link>
                        </li>
                        <li className='page_link'>
                            <Link href="/query/PopularAnime"><a>Popular-Anime</a></Link>
                        </li>
                        <li className='page_link'>
                            <Link href='/query/AnimeMovie'><a>Anime-Movie</a></Link>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <button className="hamburger_button"><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar1
