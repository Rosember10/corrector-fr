import './About.css'
import Typed from '../Typed/Typed'
import gramm from '../../assets/gramm.png';


export default function About() {

    return (
        <section className='about'>
            <h2>Laissez-moi être la touche finale de chaque phrase que vous écrivez.</h2>
            <p>
                "<span className='gramm'>Gramm</span>  est la mascotte virtuelle du site, conçue pour perfectionner la communication en français grâce à la technologie GPT. Il parcourt le texte, corrigeant les fautes d'orthographe avec précision. Gramm transforme chaque erreur en une occasion d'apprendre, faisant du site une ressource précieuse pour maîtriser le français."
            </p>
            <div className="about_text">
                <p>
                    <Typed text="Salut, Je suis ici pour t'aider " delay={150} infinite /> |
                </p>
                <img src={gramm} alt="" />
            </div>
        </section>
    )
}