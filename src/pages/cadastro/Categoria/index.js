import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import PageTemplate from '../../../components/PageTemplate';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  // useState('Test') : creates a new state to hold category name.
  //      It returns an array with state value(Test) and a function
  //      to set the state value later.
  //
  // [categorias, setCategorias] : deconstruct the array into two
  //      variables, categorias keep the state value and
  //      setCategorias holds keep the function to set state value
  const [categorias, setCategorias] = useState([{}]);

  const valoresIniciais = {
    titulo: '',
    desc: '',
    cor: '#000',
  };

  const { valoresForm, handleChange, clearForm } = useForm(valoresIniciais);

  // useEffect: runs a code on every component update, only if the second
  //            argument doesn't exist. Otherwise if it is a empty array
  //            it will run once.
  useEffect(() => {
    // Simulates a fetch()
    // setTimeout(() => {
    //   setCategorias(
    //     [...categorias,
    //       'Back End',
    //     ],
    //   );
    // }, 4 * 1000);
    //

    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (resp) => {
        const jsonResp = await resp.json();
        setCategorias([
          ...jsonResp,
        ]);
      });
  }, []);

  return (
    <>
      <PageTemplate>
        <h1>Cadastro de Categorias</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          setCategorias(
            [...categorias,
              valoresForm],
          );

          clearForm();
        }}
        >

          <FormField
            label="Título da Categoria"
            type="text"
            value={valoresForm.titulo}
            name="titulo"
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            value={valoresForm.desc}
            name="desc"
            onChange={handleChange}
          />

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

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
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
