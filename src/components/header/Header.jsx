import logo from "../../imgs/lapiz.png"
import "../../styleComponents/header.css"

function Head() {
    return (
        <header>
            <div className="contenedorHeader">
                <img src={logo} alt="logo" className="logo" />
                <h1>Gestor de tareas!</h1>
            </div>
        </header>
    )
};

export default Head;