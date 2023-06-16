const Footer = () => {
    return (
        <div style={{backgroundColor:"lightgray"}}>
            <p style={{borderBottom:"1px solid gray",backgroundColor:"lightgray", marginTop:"250px",padding:"10px", color:"gray"}}>Kanada</p>
            <div style={{display:"flex",backgroundColor:"lightgray", flexDirection:"row",gap:"600px",padding:"2px",}}>
                <nav>
               <ul style={{color:"gray", gap:"10px",listStyle:"none",backgroundColor:"lightgray", display:"flex", justifyContent:"flex-start",paddingRight:"30px"}}>
                <li> Maka</li>
                <li>Advertising</li>
                <li>Business </li>
                <li>How Search Works</li>   
                </ul>
                </nav>
                <nav>
                <ul style={{color:"gray", display:"flex", backgroundColor:"lightgray",justifyContent:"flex-end",gap:"10px",paddingLeft:"120px", listStyle:"none"}}>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Ka mu nma</li>
                </ul>
                </nav>
            </div>
        </div>
    )
}
// whiteSpace:"nowrap"
export default Footer;