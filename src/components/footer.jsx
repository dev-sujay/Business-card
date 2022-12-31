import tw from "../assets/tw.png"
import ig from "../assets/ig.png"
import git from "../assets/git.png"

export default function Footer(){
    return(
        <footer>
            <a href="https://twitter.com/paulsujay999" target="_blank"><img src={tw} alt="" /></a>
            <a href="https://www.instagram.com/its_sujay2001/" target="_blank"><img src={ig} alt="" /></a>
            <a href="https://github.com/dev-sujay" target="_blank"><img src={git} alt="" /></a>
        </footer>
    )
}