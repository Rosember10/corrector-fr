import './Info.css';
import laravelLogo from '../../assets/logo/laravel.png'
import apiLogo from '../../assets/logo/api.png'
import gptLogo from '../../assets/logo/gpt.png'
import reactLogo from '../../assets/logo/react.png'
import typescriptLogo from '../../assets/logo/typescript.png'
import figmaLogo from '../../assets/logo/figma.png'

export default function(){
    return (
        <section className="info">
            <h2>Technologies utilisées</h2>
            <p>Pour cette plateforme de correction grammaticale en français, nous avons utilisé une combinaison de technologies modernes</p>
            <div className='info_tecnologies'>
                <div className='design'>
                    <h3>Design</h3>
                    <div className='design_logo'>
                        <img src={figmaLogo} alt="figma" />
                        <span>Figma</span>
                    </div>
                </div>
                <div className='frontend'>
                    <h3>Front-End</h3>
                    <div className="frontend_logo">
                        <div className='logo'>
                            <img src={reactLogo} alt="" />
                            <span>react</span>
                        </div>
                        <div className='logo'>
                            <img src={typescriptLogo} alt="" />
                            <span>Typescript</span>
                        </div>
                    </div>
                </div>
                <div className='backend'>
                <h3>Back-End</h3>
                    <div className="backend_logo">
                        <div className='logo'>
                            <img src={laravelLogo} alt="" />
                            <span>Laravel</span>
                        </div>
                        <div className='logo'>
                            <img src={apiLogo} alt="" />
                            <span>API</span>
                        </div>
                        <div className='logo'>
                            <img src={gptLogo} alt="" />
                            <span>OpenAI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}