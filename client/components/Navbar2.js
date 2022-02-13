import Link from "next/link"

const Navbar2 = () => {
    return (
        <>
      <div className="widget">
                <ul className="widget_list">
                    <li className="widget_link"><Link href="/disclamier"><a>Disclamier</a></Link></li>
                    <li className="widget_link"><Link href="/policy"><a>Privacy</a></Link></li>
                    <li className="widget_link"><Link href="/report"><a>Report</a></Link></li>
                    <li className="widget_link"><Link href="/sign"><a>Sign-in</a></Link></li>
                </ul>
          </div>
        </>
    )
}

export default Navbar2
