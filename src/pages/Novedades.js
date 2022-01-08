const Novedades = (props) => {
    return (
        <main className="holder">
            <h2>Novedades</h2>
            <div className="novedades">
                <h3>Título</h3>
                <h4>Subtitulo</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolore quaerat sit optio, labore
                    deserunt obcaecati ut beatae nulla voluptates voluptatum. Eveniet facere cupiditate temporibus ad?
                    Aperiam vero laudantium cupiditate.</p>
                <span className="linea"></span>
            </div>
            <div style="margin-bottom: 0.5em;">
                <h2 style="margin-top: 1em;">Videos de Experiencias</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil accusantium eos reprehenderit
                    earum accusamus minus possimus quibusdam sunt voluptatem? Fugit culpa aut tempore fugiat cupiditate,
                    earum nulla vel enim?</p>
            </div>
            <div style="text-align: center; float: left; width: 40%; padding: 1em; margin-top: 0.1em;">
                <h5 className="video">Mix de experiencias MaccMix-Motovlog</h5>
                <iframe width="450" height="300" src="https://www.youtube.com/embed/xw4IXFN9kg4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div style="text-align: center; float: right; width: 40%; padding: 1em; margin-top: 0.1em;">
                <h5 className="video">DataR-Motovlog</h5>
                <iframe width="450" height="300" src="https://www.youtube.com/embed/B1TuetfE72c"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </main>
    );
}

export default Novedades;