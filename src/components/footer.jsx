import twitter from "/src/assets/Twitter-Icon.png"
import ig from "/src/assets/Instagram-Icon.png"
import github from "/src/assets/Github-Icon.png"
export default function Footer(){
    return(
        <footer>
            <a href="https://twitter.com/paulsujay999" target="_blank"><img src={twitter} alt="" /></a>
            <a href="https://www.instagram.com/its_sujay2001/" target="_blank"><img src={ig} alt="" /></a>
            <a href="https://github.com/dev-sujay" target="_blank"><img src={github} alt="" /></a>
        </footer>
    )
}