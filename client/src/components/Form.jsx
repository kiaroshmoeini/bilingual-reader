import React from "react";
import "../styles/form.css"

const Form = () => {
    return (
        <>
        <h1>Bilingual Reader</h1>
        <form>
            <textarea className="lang1" cols="70" rows="50"></textarea>
            <textarea className="lang2" cols="70" rows="50"></textarea>
            <button className = "save" type = "submit">Save</button>
        </form>
        </>
    );
};

export default Form;