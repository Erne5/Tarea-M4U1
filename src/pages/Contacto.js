const Contacto = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email"/>
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="">Comentario</label>
                        <textarea id="comentario"></textarea>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vías de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros...</p>
                <ul>
                    <li>Teléfono:11-53421445</li>
                    <li>E-mail:contacto@ouroboros.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default Contacto;