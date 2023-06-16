import MenuItem from "./MenuItem";
import AppLauncherIcon from "./AppLauncherIcon";
import Avatar from "./Avatar";
import "../Styles/Header.css"

const Header = () => {
    return (
        <div style={{display: "flex",padding:"10px",justifyContent:"flex-end"}}>
            
            <div style={{display:"flex", gap:'10px', }}>
            <MenuItem title = {"Gmail"}/>
            <MenuItem title = {"Images"}/>
            <AppLauncherIcon/>
            <Avatar/>
            </div>
        </div>

    )
}

export default Header;