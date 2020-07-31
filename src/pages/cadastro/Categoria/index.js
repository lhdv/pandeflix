import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageTemplate from '../../../components/PageTemplate';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  // useState('Test') : creates a new state to hold category name.
  //      It returns an array with state value(Test) and a function
  //      to set the state value later.
  //
  // [categorias, setCategorias] : deconstruct the array into two
  //      variables, categorias keep the state value and
  //      setCategorias holds keep the function to set state value
  const [categorias, setCategorias] = useState(['Test']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    desc: 'Descrição Inicial',
    cor: '#000',
  };

  const [valoresForm, setValoresForm] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValoresForm({
      ...valoresForm,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValor(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return (
    <>
      <PageTemplate>
        <h1>Cadastro de Categorias</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          setCategorias(
            [...categorias,
              valoresForm.nome],
          );
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            value={valoresForm.nome}
            name="nome"
            onChange={handleChange}
          />

          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={valoresForm.desc}
                name="desc"
                onChange={handleChange}
              />
            </label>
          </div> */}

          <FormField
            label="Cor"
            type="color"
            value={valoresForm.cor}
            name="cor"
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        <ul>
          {categorias.map((categoria) => (
            <li key={categoria}>{ categoria }</li>
          ))}
        </ul>

        <Link to="/">
          Home
        </Link>
      </PageTemplate>
    </>
  );
}

export default CadastroCategoria;
