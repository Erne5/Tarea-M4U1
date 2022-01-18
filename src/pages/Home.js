import '../styles/components/pages/Home.css'
const Home = (props) => {
    return (
        <main className="holder">            
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>¡¡Bienvenidos!!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus numquam nostrum
                        provident praesentium nisi esse pariatur excepturi, quia eligendi natus molestiae dolore labore
                        ut
                        fuga corrupti quod voluptates quas!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vero perspiciatis ullam!
                        Praesentium
                        quidem placeat obcaecati quas quod perspiciatis voluptatibus perferendis ex sit aliquam beatae
                        repellendus, modi, officia voluptates magnam.</p>
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