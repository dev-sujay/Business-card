import photo from "../assets/profile.jpg"
export default function Profile(){
    return (
        <div className="image">
            <img src={photo} alt="profile-photo"/>
        </div>
    )
}