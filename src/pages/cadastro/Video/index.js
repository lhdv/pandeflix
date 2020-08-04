import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import videosRepo from '../../../repositories/videos';
import categRepo from '../../../repositories/categories';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const categsTitles = categorias.map(({ titulo }) => (titulo));

  const { valoresForm, handleChange } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categRepo.getAll()
      .then((categs) => {
        setCategorias(categs);
      });
  }, []);

  return (
    <>
      <PageTemplate>
        <h1>Cadastro de Vídeos</h1>

        <form onSubmit={(evt) => {
          evt.preventDefault();

          const categPicked = categorias.find((categ) => categ.titulo === valoresForm.categoria);

          videosRepo.create({
            titulo: valoresForm.titulo,
            url: valoresForm.url,
            categoriaId: categPicked.id,
          })
            .then(() => { history.push('/'); });
        }}
        >

          <FormField
            label="Título do Vídeo"
            type="text"
            value={valoresForm.titulo}
            name="titulo"
            onChange={handleChange}
          />
          <FormField
            label="URL"
            type="text"
            value={valoresForm.url}
            name="url"
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            type="text"
            value={valoresForm.categoria}
            name="categoria"
            onChange={handleChange}
            suggestions={categsTitles}
          />
          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastro de Categoria
        </Link>
      </PageTemplate>
    </>
  );
}

export default CadastroVideo;
