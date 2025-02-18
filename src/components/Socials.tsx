import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';
import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials({ flexDirection = "row"}) {
    return(
        <div className={`flex flex-${flexDirection} w-30 justify-evenly`}>
            <a href="https://github.com/EffexDev"><GitHubIcon /></a>
            {/* <a href="https://x.com/EffexForge" ><XIcon /></a> */}
            <a href="https://www.facebook.com/profile.php?id=61572436185675" ><Facebook /></a>
            <a href="https://www.instagram.com/effexforge/" ><InstagramIcon /></a>
        </div>
    )
}

export default Socials;