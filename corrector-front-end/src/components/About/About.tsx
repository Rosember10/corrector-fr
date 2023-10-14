import './About.css'
import Typed from '../Typed/Typed'
import gramm from '../../assets/gramm.png';


export default function About() {

    return (
        <section className='about'>
            <h2>Laissez-moi être la touche finale à chaque phrase que vous écrivez.</h2>
            <div className="about_text">
                <p>     
                    <Typed text="Salut, Je suis ici pour t'aider " delay={150} infinite />  
                    <span id='pipe' > | </span> 
                </p> 
                <img src={gramm} alt="" />
            </div>
        </section>
    )
}