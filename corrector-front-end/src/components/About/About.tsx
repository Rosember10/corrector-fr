import './About.css'
import Typed from '../Typed/Typed'
import gramm from '../../assets/gramm.png';
import gramm2 from '../../assets/gramm2.png';
import gramm3 from '../../assets/gramm3.png';

export default function About() {

    return (
        <article className='about'>
            <div className="about_text">
                <p>Laissez-moi être la touche finale à chaque phrase que vous écrivez.</p>
                <p> - <Typed text=" Je suis ici pour t'aider " delay={100} infinite /></p>
                <p className='about_name'>Mon nom est gramm </p>
            </div>
            <img src={gramm} alt="" />
        </article>
        

    )
}