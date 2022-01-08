const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Principal</Link></li>
                    <li><Link to="/Zonasytarifas">Zonas y Tarifas</Link></li>
                    <li><Link to="/Servicios">Servicios</Link></li>
                    <li><Link to="/Galeria">Galeria</Link></li>
                    <li><Link to="/Nosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    <li><Link to="/Novedades">Novedades</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;