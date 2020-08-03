import React, { useEffect, useState } from 'react';

import PageTempalte from '../../components/PageTemplate';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepo from '../../repositories/categories';

// import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepo.getAllCategoriesWithVideos()
      .then((categWithVideos) => {
        // console.log(categWithVideos);
        setDadosIniciais(categWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageTempalte paddingAll={0}>
      { dadosIniciais.length === 0 && <div>Loading...</div>}

      { dadosIniciais.map((categ, idx) => {
        if (idx === 0) {
          return (
            <div key={categ.id}>
              <BannerMain
                videoTitle={categ.videos[0].titulo}
                url={categ.videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />
              <Carousel
                ignoreFirstVideo
                category={categ}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categ.id}
            category={categ}
          />
        );
      }) }

      { dadosIniciais.length >= 1 && (
        <>

        </>
      ) }

    </PageTempalte>
  );
}

export default Home;
