import '../styles/components/pages/Home.css'
const Home = (props) => {
    return (
        <main className="holder">            
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>¡¡Bienvenidos!!</h2>
                    <p>Sean bienvenidos a la pagina de servicio de motomensajería Ouroboros. Prestamos servicio para todo el ambito de la ciudad de Buenos Aires.</p>
                    <p>Nuestro servicio es de puerta a puerta. Sientanse libres de explorar la pagina para conocer nuestra historia y nuestros servicios. Ante cualquier duda, pueden contactarnos en la seccion "contacto". No olviden revizar en la seccion "novedades" para obtener información actualizada. </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">¡¡Simplemente Excelente!!</span>
                        <span className="autor">Jessica Dávila - VivirSinHumo.com</span>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Home;