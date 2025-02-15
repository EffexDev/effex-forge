import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials({ flexDirection = "row"}) {
    return(
        <div className={`flex flex-${flexDirection} w-30 justify-evenly`}>
            <a href="https://github.com/EffexDev"><GitHubIcon /></a>
            <a href="https://x.com/EffexForge" ><XIcon /></a>
            <a href="https://www.instagram.com/thesmoothdescent/?next=%2F" ><InstagramIcon /></a>
        </div>
    )
}

export default Socials;