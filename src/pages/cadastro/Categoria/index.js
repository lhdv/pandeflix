import React from 'react';
import PageTemplate from '../../../components/PageTemplate'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria() {
    return(
        <>
            <PageTemplate>
                <h1>Cadastro de Categorias</h1>

                <Link to='/'>
                    Home
                </Link>
            </PageTemplate>
        </>
    );
}

export default CadastroCategoria;
