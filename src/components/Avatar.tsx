import selfie from '../assets/selfie.jpg'

function Avatar() {
    return (
        <img src={selfie} className="w-50 h-fit sm:w-80 rounded-full border-2 border-black"/>
    )
}

export default Avatar;