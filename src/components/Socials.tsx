import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Socials() {
    return(
        <div className="flex pt-2 sm:pl-2 sm:pt-0 justify-between align-middle">
            <a href="https://github.com/EffexDev" className="pr-5"><GitHubIcon /></a>
            <a href="https://x.com/EffexForge" className="pr-5"><XIcon /></a>
            <a href="https://www.instagram.com/thesmoothdescent/?next=%2F" className="pr-5"><InstagramIcon /></a>
        </div>
    )
}

export default Socials;