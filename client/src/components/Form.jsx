import React, { useState } from "react";
import "../styles/form.css"

const Form = () => {

    const [textLang1 , setTextLang1] = useState("");
    const [textLang2 , setTextLang2] = useState("");

    const onSubmitForm = async (e) =>{
        e.preventDefault(); 
        try {
            const body = { "lang1":textLang1, "lang2":textLang2 };
            const response = await fetch("http://localhost:5000/books", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
            window.location = "/"
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
        <h1>Bilingual Reader</h1>
        <form onSubmit={onSubmitForm}>
            <textarea className="lang1" cols="70" rows="50" value={textLang1} onChange={e =>setTextLang1(e.target.value)}></textarea>
            <textarea className="lang2" cols="70" rows="50" value={textLang2} onChange={e =>setTextLang2(e.target.value)}></textarea>
            <button className = "open" type = "submit">Open</button>
            <button className = "save" type = "submit">Save</button>
            <button className = "delete" type = "submit">Delete</button>
        </form>
        </>
    );
};

export default Form;