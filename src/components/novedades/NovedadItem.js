import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h1 className='titulo'>{title}</h1>
            <h2 className='subtitulo'>{subtitle}</h2>
            <img src={imagen} alt=''/>
            <div className='cuerpo' dangerouslySetInnerHTML={{ __html: body }}/>
            
        </div>
    );
}

export default NovedadItem;