import '../styles/components/pages/Zonasytarifas.css'
const Zonasytarifas = (props) => {
    return (
        <main className="holder">
        <h2>Ciudad Autonoma de Buenos Aires</h2>
        <p className='letra'>El servicio en C.A.B.A puede realizarce en el día sin necesidad de reservas o anticipación. La tarifa dentro de esta zona es fija: $300 (trescientos pesos), sin importar la distancia del trayecto.</p>
        <h2>Gran Buenos Aires</h2>
        <p className='letra'>Para el servicio en el conurbano, es necesario realizar un aviso o reserva con un margen minimo de 2hs de antelación. La tarifa del trayecto está sujeta de acuerdo a la zona en la que se va a realizar el viaje. A continuación pueden revizar la lista de precios o simplemente ingresar en la solapa, la zona a la que necesitan realizar el servicio.</p>
        <div className="zona">
            <img src="img/Tarifas/zonanorte.png" alt="ZonaNorte" width="350px" height="200px"/>      
            <a href="#zona1" >Ampliar</a>            
        </div>
        <div className="zona">
            <img src="img/Tarifas/zonaoeste.png" alt="ZonaOeste" width="350px" height="200px"/>
            <a href="#zona2" >Ampliar</a>
        </div>
        <div className="zona">
            <img src="img/Tarifas/zonasur.png" alt="ZonaSur" width="350px" height="200px"/>
            <a href="#zona3" >Ampliar</a>
        </div>
        <article className="light-box" id="zona1">
                <a href="#zona3" className="nextb"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/tarifas/zonanorte.png" alt=""/>
                <a href="#zona2" className="nextb"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="closeb">X</a>                
            </article>
        <article className="light-box" id="zona2">
                <a href="#zona1" className="nextb"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/tarifas/zonaoeste.png" alt=""/>
                <a href="#zona3" className="nextb"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="closeb">X</a>                
            </article>
        <article className="light-box" id="zona3">
                <a href="#zona2" className="nextb"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/tarifas/zonasur.png" alt=""/>
                <a href="#zona1" className="nextb"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="closeb">X</a>                
            </article>
    </main>
    
    );
}

export default Zonasytarifas;