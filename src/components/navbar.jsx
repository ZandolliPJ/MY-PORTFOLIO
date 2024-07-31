import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Judith Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1wAajXcgw50-bKJbw-kHbmKlY7apfVOV4__G0byN50lo/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;