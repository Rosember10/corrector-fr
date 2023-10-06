import { useState } from "react";

function Corrector() {
    const URL_API = 'https://apichecker.rosemberg.dev/api/checker';

    const [inputValue, setInputValue] = useState<string>("")
    const [outputValue, setOutputValue] = useState<string>("")


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
                <span>Français</span>
                <div className="corrector_input">
                    <textarea
                        value={inputValue}
                        name="text"
                        id="text"
                        cols={30}
                        rows={5}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Saisissez ou collez votre texte ici pour corriger son orthographe ou sa grammaire..." />
                    <div className="corrector_input--actions">
                        <span> {inputValue.length}/100 Limite</span>
                        <div className="corrector_input-buttons">
                            <button className="button_delete"
                                onClick={deleteText}
                            >
                                Effacer</button>
                            <button className="button_correct"
                                onClick={correctValue}>Corriger</button>
                        </div>
                    </div>
                </div>
                <div className="corrector_output">
                    <div>{outputValue} </div>
                    <button className="button_copy" onClick={()=>navigator.clipboard.writeText(outputValue)} >Copier</button>
                </div>
            </article>
        </main>
    );
}

export default Corrector