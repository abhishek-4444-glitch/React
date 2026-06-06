import { Link } from "react-router-dom";

function Header({setSearchTerm}) {
    
    const changecolor = () => {
        document.body.classList.toggle('darkmode');
    };

    return (
        <>
            <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px'}}>
                <img src="" alt="" />
                <input onChange={(e) => setSearchTerm(e.target.value)} style={{padding: '5px', border: '1px solid #ccc', borderRadius: '4px' ,width:'33%'}} type="text" placeholder="Search products..." />
                <nav style={{display: 'flex', gap: '15px' }}>
                    <Link to={"/"}><a>HOME</a></Link>
                    <Link to={"/products"}><a>PRODUCTS</a></Link>
                    <Link to={"/about"}><a>ABOUT</a></Link>
                    <Link to={"/contact"}><a>CONTACT</a></Link>
                    <Link to={"/signin"}><a>SIGN IN</a></Link>
                    <Link to={"/signup"}><a>SIGN UP</a></Link>
                </nav>

            <button onClick={changecolor}>Toggle Dark Mode</button>
            </header>
        </>
    )
}
export default Header;
        