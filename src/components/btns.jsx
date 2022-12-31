import email from "/src/assets/email.png"
import linkedin from "/src/assets/linkedin.png"
export default function Btns() {
    return (
        <div className="btns">
            <a href="mailto:sujaypaul@mail.com" className="btn email-btn" target="_blank">
                <img src={email} alt="" />
                <h5>Email</h5>
            </a>
            <a href="https://www.linkedin.com/in/sujay-paul-998566216/" className="btn linkedin-btn" target="_blank">
                <img src={linkedin} alt="" />
                <h5>Linkedin</h5>
            </a>
        </div>
    )
}