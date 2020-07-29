import React from 'react';
import PageTemplate from '../../../components/PageTemplate'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroVideo() {
    return(
        <>
            <PageTemplate>
                <h1>Cadastro de Vídeos</h1>

                <Link to='/cadastro/categoria'>
                    Cadastro de Categoria
                </Link>
            </PageTemplate>
        </>
    );
}

export default CadastroVideo;
