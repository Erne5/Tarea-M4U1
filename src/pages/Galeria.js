import '../styles/components/pages/Galeria.css'
const Galeria = (props) => {
    return (
        <main className="holder">
            <h2>Galería</h2>
            <span className="linea"></span>
            <section className="galeria">
                <a href="#image1">
                    <img src="img/Galeria/20130423093557_KHZCPE.jpg" alt=""/>
                </a>
                <a href="#image2">
                    <img src="img/Galeria/2018-yamaha-mt-03-eu-night-fluo-action-003.jpg" alt=""/>
                </a>
                <a href="#image3">
                    <img src="img/Galeria/foto 1.jpg" alt=""/>
                </a>
                <a href="#image4">
                    <img src="img/Galeria/foto 4.jpg" alt=""/>
                </a>
                <a href="#image5">
                    <img src="img/Galeria/foto2.jpg" alt=""/>
                </a>
                <a href="#image6">
                    <img src="img/Galeria/foto3.jpg" alt=""/>
                </a>
                <a href="#image7">
                    <img src="img/Galeria/foto5.jpg" alt=""/>
                </a>
                <a href="#image8">
                    <img src="img/Galeria/frenada_emergencia_moto_01.jpg" alt=""/>
                </a>
                <a href="#image9">
                    <img src="img/Galeria/img-quienes.jpg" alt=""/>
                </a>
                <a href="#image10">
                    <img src="img/Galeria/d6856b_b072b031a18349d09efe888057a9415e_mv2.webp" alt=""/>
                </a>
            </section>
            <article className="light-box" id="image1">
                <a href="#image10" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/20130423093557_KHZCPE.jpg" alt=""/>
                <a href="#image2" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image2">
                <a href="#image1" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/2018-yamaha-mt-03-eu-night-fluo-action-003.jpg" alt=""/>
                <a href="#image3" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image3">
                <a href="#image2" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/foto 1.jpg" alt=""/>
                <a href="#image4" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image4">
                <a href="#image3" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/foto 4.jpg" alt=""/>
                <a href="#image5" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image5">
                <a href="#image4" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/foto2.jpg" alt=""/>
                <a href="#image6" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image6">
                <a href="#image5" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/foto3.jpg" alt=""/>
                <a href="#image7" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image7">
                <a href="#image6" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/foto5.jpg" alt=""/>
                <a href="#image8" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image8">
                <a href="#image7" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/frenada_emergencia_moto_01.jpg" alt=""/>
                <a href="#image9" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image9">
                <a href="#image8" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/img-quienes.jpg" alt=""/>
                <a href="#image10" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
            <article className="light-box" id="image10">
                <a href="#image9" className="next"><i className="fas fa-angle-double-left"></i></a>
                <img src="img/Galeria/d6856b_b072b031a18349d09efe888057a9415e_mv2.webp" alt=""/>
                <a href="#image1" className="next"><i className="fas fa-angle-double-right"></i></a>
                <a href="#" className="close">X</a>                
            </article>
        </main>
    );
}

export default Galeria;