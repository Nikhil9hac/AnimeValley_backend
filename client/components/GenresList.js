import Link from "next/link"
const GenresList = () => {
    return (
        <div className='genres_container'>
            <ul className='genres_list'>
                <Link href="/query/genres/Action"><a><li>Action</li></a></Link>
                <Link href="/query/genres/Comedy"><a><li>Comedy</li></a></Link>
                <Link href="/query/genres/Demons"><a><li>Demons</li></a></Link>
                <Link href="/query/genres/Adventure"><a><li>Adventure</li></a></Link>
                <Link href="/query/genres/Drama"><a><li>Drama</li></a></Link>
                <Link href="/query/genres/Fantasy"><a><li>Fantasy</li></a></Link>
                <Link href="/query/genres/Game"><a><li>Game</li></a></Link>
                <Link href="/query/genres/Harem"><a><li>Harem</li></a></Link>
                <Link href="/query/genres/Hentai"><a><li>Hentai</li></a></Link>
                <Link href="/query/genres/Historical"><a><li>Historical</li></a></Link>
                <Link href="/query/genres/Horror"><a><li>Horror</li></a></Link>
                <Link href="/query/genres/Kids"><a><li>Kids</li></a></Link>
                <Link href="/query/genres/Magic"><a><li>Magic</li></a></Link>
                <Link href="/query/genres/Martial-Arts"><a><li>Martial Arts</li></a></Link>
                <Link href="/query/genres/Military"><a><li>Military</li></a></Link>
                <Link href="/query/genres/Cars"><a><li>Cars</li></a></Link>
                <Link href="/query/genres/Music"><a><li>Music</li></a></Link>
                <Link href="/query/genres/Mystery"><a><li>Mystery</li></a></Link>
                <Link href="/query/genres/Police"><a><li>Police</li></a></Link>
                <Link href="/query/genres/Psychological"><a><li>Psychological</li></a></Link>
                <Link href="/query/genres/Romance"><a><li>Romance</li></a></Link>
                <Link href="/query/genres/Samurai"><a><li>Samurai</li></a></Link>
                <Link href="/query/genres/Sci-Fi"><a><li>Sci-Fi</li></a></Link>
                <Link href="/query/genres/Shounen"><a><li>Shounen</li></a></Link>
                <Link href="/query/genres/Space"><a><li>Space</li></a></Link>
                <Link href="/query/genres/Sports"><a><li>Sports</li></a></Link>
                <Link href="/query/genres/Super-Power"><a><li>Super Power</li></a></Link>
                <Link href="/query/genres/Supernatural"><a><li>Supernatural</li></a></Link>
                <Link href="/query/genres/Thriller"><a><li>Thriller</li></a></Link>
                <Link href="/query/genres/Vampire"><a><li>Vampire</li></a></Link>
            </ul>
        </div>
    )
}

export default GenresList
