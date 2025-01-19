import { useState } from "react"

export const Main = () => {

    const [titles, setTitles] = useState([])
    const [newTitle, setNewTitle] = useState('')


    const handlerSubmit = (e) => {
        e.preventDefault();

        const blog = [newTitle, ...titles]
        setTitles(blog)
        setNewTitle('')
    }

    const deleteTitle = (index) => {
        const filteredTitles = titles.filter(title => title !== titles[index])
        setTitles(filteredTitles)

    }

    const modifyTitle = (index) => {
        const modifiedList = [...titles]
        modifiedList[index] = newTitle;
        setTitles(modifiedList)
        setNewTitle('')

    }

    return (
        <main className="container flex-column">
            <h1>FORM</h1>
            <h2>Per modificare un elemento della lista, inserisci prima il nuovo titolo, seleziona poi dove sostituirlo</h2>
            <form action="#" onSubmit={handlerSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Titolo Blog" aria-label="ciao" aria-describedby="button-addon2" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <button className="btn bg-primary text-white" type="button submit" id="button-addon2">Invia</button>
                </div>
            </form>
            {titles.length < 1 ? <h1>Nessun titolo inserito</h1> : (
                <ul className="list-group">
                    {titles.map((item, index) => (
                        <>
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center ">{item} <i className="fa-solid fa-trash pe-2" onClick={() => deleteTitle(index)}></i><i className="fa-solid fa-pen pe-2" onClick={() => modifyTitle(index)}></i></li>
                        </>
                    ))}
                </ul>
            )}
        </main>
    )
}
