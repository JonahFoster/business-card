import twitter from './assets/TwitterIcon.svg'
import github from './assets/GitHubIcon.svg'
import instagram from './assets/InstagramIcon.svg'

export default function Footer() {
    return (
        <div className="card">
            <footer>
            <a href="https://twitter.com/thejonahfoster" target='_blank' rel="noreferrer"><img src={twitter}/></a>
            <a href="https://github.com/JonahFoster" target='_blank' rel="noreferrer"> <img src={github}/></a>
            <a href="https://www.instagram.com/thejonahfoster/" target='_blank' rel="noreferrer"> <img src={instagram}/></a>
            </footer>
        </div>
    )
}