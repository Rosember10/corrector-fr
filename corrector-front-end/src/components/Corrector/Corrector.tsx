import { useEffect, useState } from "react";
import './Corrector.css';
import franceLogo from '../../assets/france.png';

import {FaTrash} from 'react-icons/fa';

import {BiSolidCopy} from 'react-icons/bi';
import {BsCheckSquareFill} from 'react-icons/bs';


function Corrector() {
    const URL_API = 'https://apichecker.rosemberg.dev/api/checker';

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<string>("");
    const [classCorriger,setClassCorriger] = useState<string>("button_corriger-off");
    const [isValid,setIsValid] = useState<boolean>(false);

    useEffect(()=>{
        if(inputValue.length>=3 ){
             setIsValid(false) 
             setClassCorriger("button_corriger")
        } else {
            setIsValid(true)
            setClassCorriger("button_corriger-off")
        }

    },[inputValue])


    const correctValue = () => {
        let valueToCorrect = {
            "text": inputValue
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const requestOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(valueToCorrect)
        }
        console.log(requestOption.body);

        fetch(URL_API, requestOption)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.content);
                setOutputValue(data.content);

            })
    }

    const deleteText = () => {
        setInputValue('');
        setOutputValue('');
    }



    return (
        <main>
            <article>
                <div className="icon_language">
                    <img src={franceLogo} alt="france logo" width='30px' />
                    <span>Français </span>
                </div>
                <div className="corrector">
                    <div className="corrector_input">
                        <textarea
                            value={inputValue}
                            name="text"
                            id="text"
                            cols={30}
                            rows={5}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Saisissez ou collez votre texte ici pour corriger son orthographe ou sa grammaire..." />
                        <div className="corrector_input_actions">
                            <span className="label_limit"> {inputValue.length}/1000 Limite</span>
                            <div className="corrector_input--buttons">
                                <button
                                    onClick={deleteText}>
                                    <span className="button_delete">
                                        Effacer <FaTrash  />
                                    </span>
                                </button>
                                
                                <button
                                    disabled={isValid}
                                    onClick={correctValue}>
                                    <span className={classCorriger}>
                                        Corriger <BsCheckSquareFill/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="corrector_output">
                        <textarea
                            value={outputValue}
                            name="text"
                            id="text-output"
                            cols={30}
                            rows={5}
                        />
                        <div className="corrector_output-actions">
                            <button onClick={() => navigator.clipboard.writeText(outputValue)} >
                                <span className="button_copy">
                                    copier <BiSolidCopy/>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Corrector