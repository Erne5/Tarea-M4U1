import '../styles/components/pages/Nosotros.css'
const Nosotros = (props) => {
    return (
        <main className="holder">
            <div className="Historia">
                <h2>Nuestra Historia</h2>
                <p>La historia de esta pequeña empreza da inicio un 9 de agosto de 2017 con un solo muchacho decidido a prestar un servicio de entrega de productos comercializados por su esposa.</p>
                <p>Con el transcurrir de los meses, y al implementar toda su responsabilidad y vocación de servicio, pronto los clientes comenzaron a buscar un motomensajero que sea de confianza y servicial, y a requerir sus servicios para viajes de indole personal y/o profecional. Es asi que con el paso de los años, mas motomensajeros se fueron sumando a este emprendimiento, expandiendo más nuestra area de trabajo y con ello, nuestra calidad de servicio.</p>
            </div>
            <div className="motovehiculos">
                <h2>Nuestros Motovehículos</h2>
                <div className="staff">
                    <div className="situacion">
                        <h5>Seguimiento GPS</h5>
                        <h6>Vocación de Servicio</h6>
                        <p>Nos impulsa la necesidad de mejorar nuestro servicio dia a dia. Es importante para nosotros tu confianza, es por eso que disponemos de geo-localización GPS para que puedas seguir el trayecto de tu producto cuando desées.</p>
                        <img src="img/er.png" alt="controles"/>
                    </div>
                    <div className="situacion">
                        <h5>Papeles Siempre al Día</h5>
                        <h6>Responsavilidad</h6>
                        <p>Porque para nosotros, la responsabilidad es uno de los valores más importantes a la hora de salir a la calle, contamos con todos los papeles, seguros, licencias y reglamentaciones exigidas por el Gobierno de la Ciudad y provincial.</p>
                        <img src="img/MY543GY7DBHTTAZM2FMJHDTSZ4.jpg" alt="controles"/>
                    </div>                    
                    <div className="situacion">
                        <h5>Mantenimiento del motovehiculo</h5>
                        <h6>Profecionalismo</h6>
                        <p>La seguridad de nuestros mensajeros a la hora de realizar viajes, es crucial para garantizar el mejor servicio. Es por este motivo que toda nuestra flota exige y cuenta con los mejores estándares de mantenimiento.</p>
                        <img src="img/Servicios/CC_2787259_e9e5e657720c4f81b0415761c2c6b90a_otros_que_fallo_mas_tonto_4.jpg" alt="controles"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Nosotros;