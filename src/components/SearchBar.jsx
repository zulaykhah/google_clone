const SearchBar = () => {
    return (
        <div style={{display:"flex",justifyContent:"center", }}>
            <div >
            <form>
                <input type="text" placeholder="icon" style={{width:"600px",height:"40px",borderradius:"10px solid gray",marginBottom:"20px"}}/>
                <div style={{display:"flex",flexDirection:"row", gap:"10px", justifyContent:"center",color:"lightgray"}}>
                <button style={{height:"30px",display:"flex",flexDirection:"column",justifyContent:"center",gap:"10px"}}>Iche nko Google</button>
                <button style={{height:"30px",flexDirection:"row"}}>ihouma zurum ahu</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default SearchBar;