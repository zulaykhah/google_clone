import googlePNG5 from "../components/Images/googlePNG5.png"
import SearchBar from "./SearchBar";
import LanguageLinks from "./LanguageLinks";
const SearchSection = () => {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
            
            <img  src={googlePNG5} alt="google logo" style= {{height:"200px",width:"350px",}}/>
            </div>
            <SearchBar/>
            <LanguageLinks/>
            </div>
        
    )   
}
// style={{display:"flex", justifyContent:"center"}}
export default SearchSection;