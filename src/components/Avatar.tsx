import selfie from '../assets/selfie.jpg'

function Avatar() {
    return (
        <div className="sm:pb-10 md:p-10">
            <img src={selfie} className="w-50 sm:w-60 md:w-80 rounded-full border-2 border-black"/>
        </div>
    )
}

export default Avatar;