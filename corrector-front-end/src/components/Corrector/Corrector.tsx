import { useEffect, useState } from "react";
import './Corrector.css';
import franceLogo from '../../assets/france.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
import { BiSolidCopy } from 'react-icons/bi';
import { BsCheckSquareFill } from 'react-icons/bs';
import About from '../About/About'
import Info from "../Info/Info";


function Corrector() {
    console.log("rosemberg.dev");
    
    const URL_API = 'https://apichecker.rosemberg.dev/api/checker';

    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<string>("");
    const [classCorriger, setClassCorriger] = useState<string>("button_corriger-off");
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isValidCopy, setIsValidCopy] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<string>("corrector_output");


    useEffect(() => {
        if (inputValue.length >= 3) {
            setIsValid(false)
            setClassCorriger("button_corriger")
        } else {
            setIsValid(true)
            setClassCorriger("button_corriger-off")
        }
    }, [inputValue])


    useEffect(() => {
        outputValue == "" ? setIsValidCopy(true) : setIsValidCopy(false)
    }, [outputValue])


    const correctValue = () => {
        setIsValidCopy(false)
        setIsLoading("corrector_output loader")
        setOutputValue("Gram est en train de réfléchir...")

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

                if (data.content){
                    console.log(data.content);
                setIsLoading("corrector_output")
                setOutputValue(data.content);
                }
                if(data.error){
                    setIsLoading("corrector_output")
                    setOutputValue(data.error.message);
                }
                

            })
    }

    const deleteText = () => {
        setInputValue('');
        setOutputValue('');
    }


    const copyValue = () => {
        if (outputValue) {
            toast.info('Copier dans le presse-papier!', {
                position: "top-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigator.clipboard.writeText(outputValue)
        }

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
                            <span className="label_limit"> {inputValue.length} / 1000 caractères.</span>
                            <div className="corrector_input--buttons">
                                <button
                                    onClick={deleteText}>
                                    <span className="button_delete">
                                        Effacer <FaTrash />
                                    </span>
                                </button>

                                <button
                                    disabled={isValid}
                                    onClick={correctValue}>
                                    <span className={classCorriger}>
                                        Corriger <BsCheckSquareFill />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isLoading}>
                        <textarea
                            value={outputValue}
                            name="text"
                            id="text-output"
                            cols={30}
                            rows={5}
                            readOnly={true}
                        />
                        <div className="corrector_output-actions">
                            <button disabled={isValidCopy}
                                onClick={copyValue} >
                                <span className="button_copy">
                                    copier <BiSolidCopy />
                                </span>
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </article>
            <About/>
            <Info/>
        </main>
    );
}

export default Corrector