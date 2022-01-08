const Zonasytarifas = (props) => {
    return (
        <div>
            <div className="container-all" id="modal" style="z-index: 1;">
            <div className="popup">
                <div className="img0"></div>
                <a href="#zona" className="btn-close-popup">X</a>
            </div>
        </div>
        <div className="container-all" id="modal1" style="z-index: 1;">
            <div className="popup">
                <div className="img1"></div>
                <a href="#zona" className="btn-close-popup">X</a>
            </div>
        </div>
        <div className="container-all" id="modal2" style="z-index: 1;">
            <div className="popup">
                <div className="img2"></div>
                <a href="#zona" className="btn-close-popup">X</a>
            </div>
        </div>
        <main className="holder">
        <h2>Ciudad Autonoma de Buenos Aires</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error omnis culpa adipisci vitae atque
            assumenda neque tempore minus incidunt odit tenetur ullam ducimus, nulla quibusdam, doloribus vero vel
            iure.</p>
        <h2>Gran Buenos Aires</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eos incidunt quasi ipsam hic accusantium
            quo cumque in reiciendis obcaecati expedita repellendus, tempora fuga molestiae? Accusamus maiores
            expedita nisi tempora?</p>
        <div className="zona">
            <img src="img/Tarifas/zona norte.png" alt="ZonaNorte" width="350px" height="200px"/>      
            <a href="#modal" class="btn-open-popup">Ampliar</a>
            
        </div>
        <div className="zona">
            <img src="img/Tarifas/zona oeste.png" alt="ZonaOeste" width="350px" height="200px"/>
            <a href="#modal1" class="btn-open-popup">Ampliar</a>
        </div>
        <div className="zona">
            <img src="img/Tarifas/zona sur.png" alt="ZonaSur" width="350px" height="200px"/>
            <a href="#modal2" class="btn-open-popup">Ampliar</a>
        </div>
    </main>
    </div>
    );
}

export default Zonasytarifas;