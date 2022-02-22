import '../styles/components/pages/Servicios.css'
const Servicios = (props) => {
    return (
        <main className="holder">
            <h2>Nuestros Servicios</h2>
            <p className='letra'>Nuestro servicio es 100% garantizado (siempre se cumple con el plazo de entrega y de no cumplir, el servicio es gratuito), y de puerta a puerta. Esto quiere decir que cada viaje y su respectivo precio, es tenido en cuenta con el trayecto realizado desde que se retira el producto hasta que se entrega (de punto A a punto B).</p>
            <div className="Servicio">
                <img src="img/Servicios/alergias_ciudad_moto.jpg" alt="lluvia"/>
                <div className="info">
                    <h4>Dias de lluvia</h4>
                    <p>La entrega y retiro de tu paquete está garantizada aún en los días de lluvia. Debido a esto, es que durante estos días, el margen de entrega es absoluto (es decir, que se entrega en el día sin contemplar margen de horarios), y la tarifa aumenta un 50%.</p>
                </div>
            </div>
            <div className="Servicio">
                <img src="img/Servicios/Motos-Potentes-2020.jpg" alt="Largas Distancias"/>
                <div className="info">
                    <h4>Largas Distancias</h4>
                    <p>Los viajes a zonas muy alejadas no es problema para nuestra flota de mensajeros. El unico requisito para garantizar el envío exitoso de tu pedido es hacer la reserva con un día de anticipación.</p>
                </div>
            </div>
            <div className="Servicio">
                <img src="img/Servicios/Yamaha-MT-03-1.jpg" alt="Noche"/>
                <div className="info">
                    <h4>Viajes Nocturnos</h4>
                    <p>¿Necesitas hacer un viaje durante horas de la noche? ¡¡El servicio puede realizarse sin problemas y sin valor adicional!! No olvides hacer tu reserva con anticipación. </p>
                </div>
            </div>
            <div className="Servicio">
                <img src="img/Servicios/star-MercadoFlex-banner-desktop-03.jpg" alt="Flex"/>
                <div className="info">
                    <h4>Envíos Flex</h4>
                    <p>Si tu trabajas con envíos flex, toda nuestra flota cuenta con la aplicación disponible para que puedas seguir tu producto en todo momento.</p>
                </div>
            </div>
        </main>
    );
}

export default Servicios;