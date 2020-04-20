import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Alex from './components/alex.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Alex}
          nome="Alex Trindade"
          descricao="Me chamo Alex, tenho 27 anos e sou de Campinas-SP. Estudo na Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          itemCadastro="E-mail: "
          conteudo="alex.trindade@live.com"
        />

        <CardPequeno
          imagem="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-address-icon-isolated-on-abstract-background-png-image_1901952.jpg"
          itemCadastro="Endereço: "
          conteudo="Rua dos Pintores, 27 - Vila Prudente"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudante de desenvolvimento FullStack"
        />

        <CardGrande
          imagem="https://potencial-rc.com.br/wp-content/uploads/2015/11/logo-elektro.png"
          nome="Elektro"
          descricao="Auxiliar Administrativo"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          link="https://www.linkedin.com/in/alex-trindade-14450282/"
          imagem="https://image.flaticon.com/icons/png/512/49/49408.png"
          texto="Linkedin"
        />

        <ImagemButton
          link="https://www.instagram.com/alex_2236/"
          imagem="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png?fit=2400%2C2400&ssl=1"
          texto="Instagram"
        />
      </div>
    </div>
  );
}

export default App;
