
function Header({setSearchTerm}) {
    
    const changecolor = () => {
        document.body.classList.toggle('darkmode');
    };

    return (
        <>
            <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px'}}>
                <img src="" alt="" />
                <input onChange={(e) => setSearchTerm(e.target.value)} style={{padding: '5px', border: '1px solid #ccc', borderRadius: '4px'}} type="text" placeholder="Search products..." />
                <nav style={{display: 'flex', gap: '15px'}}>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Contact</a>
                </nav>

            <button onClick={changecolor}>Toggle Dark Mode</button>
            </header>
        </>
    )
}
export default Header;
        