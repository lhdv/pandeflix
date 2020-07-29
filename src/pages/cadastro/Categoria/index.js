import React from 'react';
import PageTemplate from '../../../components/PageTemplate'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria() {
    return(
        <>
            <PageTemplate>
                <h1>Cadastro de Categorias</h1>
                <form>
                    <label>Nome da Categoria:</label>
                    <input type="text" />

                    <button>Cadastrar</button>
                </form>
                <Link to='/'>
                    Home
                </Link>
            </PageTemplate>
        </>
    );
}

export default CadastroCategoria;
