# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

Uma aplicação capaz de reproduzir músicas dos mais variados artistas e bandas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

  - Fazer login.
  - Pesquisar por uma banda ou um artista.
  - Listar os álbuns disponíveis dessa banda ou desse artista.
  - Visualizar as músicas de um álbum selecionado.
  - Reproduzir uma prévia das músicas do álbum.
  - Favoritar e desfavoritar músicas.
  - Ver a lista de músicas favoritadas.
  - Ver o perfil da pessoa logada.
  - Editar o perfil da pessoa logada.

</details>

<details>
  <summary><strong>Habilidades</strong></summary><br />

- Fazer requisições e consumir dados vindos de uma `API`.

- Utilizar o hook `useEffect`.

- Utilizar o hook `useState`.

- Utilizar o componente `BrowserRouter` corretamente.

- Criar rotas, mapeando o caminho da URL com o componente correspondente via `Route`.

- Utilizar o `Routes` do `React Router Dom`.

- Criar links de navegação na aplicação com o componente `Link`.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

# Requisitos Obrigatórios

## 1. Crie um formulário para identificação
<details><summary>Dentro do componente <code>Login</code>, que deve ser renderizado na rota <code>/</code>, crie um formulário para que a pessoa usuária se identifique com um nome:</summary>

- A rota `/` deve renderizar o componente `Login`.

- Você deve criar um campo para que a pessoa usuária insira seu nome. Este campo deverá ter o atributo `data-testid="login-name-input"`.

- Crie um botão com o texto `Entrar`. Este botão deverá ter o atributo `data-testid="login-submit-button"`.

- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres.

#### Salvando o nome da pessoa usuária

- Ao clicar no botão `Entrar`, utilize a função `createUser` que se encontra no arquivo `src/services/userAPI.ts` para salvar o nome digitado. A função `createUser` espera receber como argumento um objeto com as informações da pessoa e retorna uma `Promise`, que é resolvida quando a informação é salva.

Exemplo de como utilizar a função `createUser`:

```javascript
createUser({ name: "Nome digitado" });
```

> :bulb: *Obs.:* Você verá nos requisitos mais à frente que você poderá passar outras informações para a `createUser`, mas não se preocupe com isso agora. Por enquanto você pode passar somente um objeto com a propriedade `name`.

- Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto `Carregando...` deve aparecer na tela. **:bulb: Dica**: Você precisará dessa mensagem várias vezes no futuro, então é uma boa ideia criar um componente para ela :wink:

- Após a informação ter sido salva, faça um redirect para a rota `/search`.

![requisito-1](./images/requisito1.gif)

</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Ao navegar para a rota `/`, o input e o botão especificados estão presentes.

- O botão só é habilitado se o input de nome tiver três ou mais caracteres.

- Ao clicar no botão habilitado, a função `createUser` da `userAPI` é chamada.

- Ao clicar no botão, a mensagem `Carregando...` é exibida e os dados do usuário são salvos;
</details>

---

## 2. Crie o formulário para pesquisar artistas

Este formulário deve conter um input e um botão para que seja possível pesquisar os álbuns de uma banda ou artista.

- <details><summary> Crie o formulário dentro do componente <code>Search</code>, que deve ser renderizado na rota <code>/search</code>:</summary>

  - A rota `/search` deve renderizar o componente `Search`.

  - Crie um campo para a pessoa digitar o nome da banda ou artista a ser pesquisada. Esse campo deve ter o atributo `data-testid="search-artist-input"`.

  - Crie um botão que será usado para `Pesquisar`. Esse botão deve ter o atributo `data-testid="search-artist-button"`.

  - O botão só deve estar habilitado caso o nome do artista tenha 2 ou mais caracteres.

  ![requisito-2](./images/requisito2.png)
</details>

Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbuns da banda ou artista pesquisada.

- <details><summary> Ao clicar no botão de <code>Pesquisar</code>, limpe o valor do input e faça uma requisição utilizando a função do arquivo <code>services/searchAlbumsAPIs.ts</code>:</summary>

  - :bulb: Lembre-se que essa função espera receber uma string com o nome da banda ou artista.

  - Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.

  - Após receber a resposta da requisição exibir na tela o texto `Resultado de álbuns de: <artista>`, onde `<artista>` é o nome que foi digitado no input.
  - Liste os álbuns retornados:
    - Em cada álbum criar um link para a rota `/album/:id`, onde `:id` é o valor da propriedade `collectionId` de cada Álbum da lista recebida pela API;
    - Este link deve ter o atributo ``data-testid={`link-to-album-${collectionId}`}``.
  > Para que o resultado da API seja exibido mesmo que o usuário acesse outra página e volte para a página de pesquisa, que tal salvar o resultado da API no estado do App? Dessa forma, o estado não será perdido caso a página seja desmontada.
  <br/>
  <details><summary>A API irá retorna um <i>array</i> de objetos. Cada objeto terá a seguinte estrutura:</summary><br />

    ```
      [
        {
          artistId: 12,
          artistName: "Artist Name",
          collectionId: 123,
          collectionName: "Collection Name",
          collectionPrice: 12.25,
          artworkUrl100: "https://url-to-image",
          releaseDate: "2012-03-02T08:00:00Z",
          trackCount: 8,
        },
        {...},
        ...
      ]
    ```
  </details>

  - Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um array vazio. Nesse caso, a mensagem `Nenhum álbum foi encontrado` deverá ser exibida:
  
  <br/>
  <details><summary>Ilustrações</summary><br />
  
  ![requisito-2_1](./images/requisito2_1.gif)
  ![requisito-2_2](./images/requisito2_2.gif)
  </details>
</details>

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Ao navegar para a rota `/search` através do login, o input e o botão estão presentes na tela;

  - O botão está habilitado somente se o input de nome tiver 2 ou mais caracteres.

  - Ao clicar em `pesquisar`, a requisição é feita usando a `searchAlbumsAPI`;

  - Ao clicar no botão, o texto `Resultado de álbuns de: <artista>` aparece na tela e o input é limpo;

  - Ao receber o retorno da API, os álbuns são listados na tela;

  - Caso a API não retorne nenhum álbum, a mensagem `Nenhum álbum foi encontrado` é exibida;

  - Existe um link para cada álbum listado que redirecione para a rota `/album/:id`.
</details>

---

## 3. Crie a lista de músicas do álbum selecionado

Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado.

<details><summary>Crie a lista dentro do componente <code>Album</code>, que é renderizado na rota <code>/album/:id</code>: </summary>

- Ao entrar na página, faça uma requisição utilizando a função `getMusics` do arquivo `src/services/musicsAPI.ts`. Lembre-se que essa função espera receber uma string com o id do álbum.
- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...` na tela.

- Exiba o nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="artist-name"`.

- Exiba o nome do álbum na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="album-name"`.

- Liste todas as músicas do álbum na tela. Para isso, crie um componente chamado `MusicCard` que deverá exibir o nome da música (propriedade `trackName` no objeto recebido pela API) e um player para tocar o preview da música (propriedade `previewUrl` no objeto recebido pela API).

:bulb: **Dica:** Lembre-se que o retorno da função `getMusics`, quando encontra as informações, é um array onde o primeiro elemento é um objeto com informações do álbum e o restante dos elementos são as músicas do álbum.

  - <details><summary>Exemplo de estrutura do retorno da função getMusics:</summary>

    ```js
    [
      {
        artistName: 'Artist Name',
        collectionName: 'Collection Name',
      },
      {
        trackId: 12,
        trackName: 'Track Name 1',
        previewUrl: 'preview-url-1',
        kind: 'song',
      },
      {
        trackId: 13,
        trackName: 'Track Name 2',
        previewUrl: 'preview-url-2',
        kind: 'song',
      },
      {...},
      ...
    ]
    ```


Para tocar o preview, você deve usar a tag `audio` do próprio HTML. Sua implementação é assim:

```html
<audio data-testid="audio-component" src="{previewUrl}" controls>
  <track kind="captions" />
  O seu navegador não suporta o elemento{" "} <code>audio</code>.
</audio>
```

**Importante:** lembre-se de colocar o atributo `data-testid="audio-component"` na tag `audio` de cada música listada.

  ![requisito-3](./images/requisito3.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Se o serviço de `musicsAPI` está sendo chamado;
  - Se é exibido o texto `Carregando...` enquanto a requisição está sendo feita;
  
  - Se o nome da banda ou artista e o nome do álbum são exibidos;
  
  - Se todas músicas retornadas pela API são listadas.
</details>

---

## 4. Crie um componente de cabeçalho

<details><summary>Crie um componente chamado <code>Header</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie esse componente com a tag `header` envolvendo todo seu conteúdo e com o atributo `data-testid="header-component"`;

- Adicione três NavLinks dentro do componente `Header`.

  - O primeiro link deve redirecionar para a rota `/search` e possuir o data-testid `link-to-search`.

  - O segundo link deve redirecionar para a rota `/favorites` e possuir o data-testid `link-to-favorites`.

  - O terceiro link deve redirecionar para a rota `/profile` e possuir o data-testid `link-to-profile`.

- Utilize a função `getUser` presente no arquivo `src/services/userApi.ts` para recuperar o nome da pessoa logada e exiba essa informação na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="header-user-name"`.
- Enquanto estiver aguardando a resposta da `getUser`, exiba apenas a mensagem de `Carregando...`.

Crie um componente chamado `Layout` que deverá renderizar o componente `Header`
- esse layout deverá ser utilizado em uma rota pai de todas as rotas da aplicação, com exceção da página de `Login`.

**⚠️Atenção:** Será necessário o uso do componente `Outlet` da `react-router-dom` para criar o componente `Layout`.

</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Os links de navegação são exibidos no componente `Header`.

- O componente `Layout` faz uso do `Outlet` para renderizar os conteúdos das páginas.

- O componente `Header` não é renderizado na página `/`.

- O componente `Header` é renderizado na página `/search`.

- O componente `Header` é renderizado na página `/album/:id`.

- A função `getUser` é chamada ao renderizar o componente;

- A mensagem de `Carregando...` é exibida ao renderizar o componente e é removida após o retorno da API;

- O nome da pessoa usuária está presente na tela após o retorno da API.

</details>

---

## 5. Crie o mecanismo para adicionar músicas na lista de músicas favoritas

Você já consegue listar as músicas dos álbuns. Nessa etapa você poderá marcar quais são as músicas que você mais gosta.

<details><summary> No componente <code>MusicCard</code>, crie um input do tipo <code>checkbox</code> para marcar as músicas favoritas:</summary>

  - Esse input deve possuir uma label com o atributo ```data-testid={`checkbox-music-${trackId}`}```, onde `trackId` é a propriedade `trackId` do objeto recebido pela API.
  - Caso a musica esteja favoritada, deve ser exibida a imagem `checked_heart.png` dentro da label, caso contrário a imagem `empty_heart.png` deve ser exibida, ambas estão presentes na pasta `src/images`.
  - A imagem deve conter o texto alternativo, `alt`, igual a `favorite`.
  <details><summary><b> Ilustração:</b></summary>

  ![requisito-5](./images/requisito5.png)
  </details><br />
</details>


<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Existe um checkbox para cada música da lista.
  - Ao clicar no checkbox, a imagem do coração muda de preenchido para vazio ou vice-versa.
  - A imagem de coração contém o texto alternativo igual a `favorite`.

</details>

---

# Requisitos bônus

## 6. Faça a requisição para adicionar e remover as músicas favoritas ao clicar no checkbox

- <details><summary> Para adicionar uma música a lista de favoritas, utilize a função <code>addSong</code> da <code>favoriteSongsAPI</code></summary>

  - Ao clicar no checkbox, utilize a função `addSong` da `favoriteSongsAPI`. Você deve passar para essa função um objeto no mesmo formato que você recebe da API `getMusics`:

    <details><summary>Ilustração</summary><br />
    
    ![requisito-6](./images/requisito6.gif)
    </details>
</details><br />

- <details><summary> Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. </summary>

  - Para isso você deve usar a função `removeSong` da `favoriteSongsAPI`. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função `addSong`:

    <details><summary>Ilustração</summary><br />
    
    ![requisito-6_1](./images/requisito6_1.gif)
    </details>
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A função `addSong` é chamada quando algum checkbox é marcado.
  - A função `removeSong` é chamada quando algum checkbox é desmarcado.

</details>

---

## 7. Faça a requisição para recuperar as músicas favoritas

<details><summary> Ao acessar a página do album, faça uma requisição usando a função <code>getFavoriteSongs</code> para atualizar a lista de músicas favoritas:</summary>

- Ao acessar a página de um álbum, faça uma requisição com a função `getFavoriteSongs` da `favoriteSongsAPI`. Essa função retorna um array com as músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.

  ![requisito-7](./images/requisito7.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

  - Ao entrar na página, o número de checkboxes marcados como `checked` é correspondente ao número de músicas que já foram favoritadas;
</details>

---

## 8. Crie a lista de músicas favoritas

<details><summary> Crie a lista dentro do componente <code>Favorites</code>, que é renderizado na rota <code>/favorites</code>.</summary>

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da função `getFavoriteSongs`, utilize o componente `MusicCard` para renderizar a lista de músicas favoritas.

- Nesta página deve ser possível desfavoritar as músicas.

- A lista apenas exibe músicas favoritas, portanto, ao desfavoritar a música deve ser removida da lista.

  ![requisito-8](./images/requisito8.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

- É exibida a lista de músicas favoritas;

- A lista de músicas favoritas é atualizada ao remover uma música da lista.
</details>

---

## 9. Crie a exibição de perfil

<details><summary> Crie a exibição do perfil dentro do componente <code>Profile</code>, que é renderizado na rota <code>/profile</code></summary>

- Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da `getUser`, exiba o nome, o email, a descrição e a imagem da pessoa logada.

- Para exibir a imagem, use a tag HTML `img` com o atributo `data-testid="profile-image"`;

- Crie um link que redirecione para a página de edição de perfil (rota `/profile/edit`). Este link deve ter o texto `Editar perfil`.

  ![requisito-9](./images/requisito9.gif)
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A API `getUser` é usada para recuperar as informações da pessoa logada;

- As informações da pessoa logada são exibidas na tela;

- Foi criado um link para a rota de edição de perfil com o texto `Editar perfil`;

- Ao clicar no link `Editar perfil`, a navegação acontece corretamente.
</details>

---

## 10. Crie o formulário de edição de perfil

<details>
<summary>Crie o formulário de edição de perfil dentro do componente <code>ProfileEdit</code>, que é renderizado na rota <code>/profile/edit</code>.</summary><br />

  * <details><summary> Utilize a função <code>getUser</code> da <code>userAPI</code> para recuperar as informações da pessoa logada: </summary>

    * Enquanto aguarda a resposta da API, exiba a mensagem "Carregando...".
    </details>

  * <details><summary> Após receber as informações da pessoa logada, renderize um formulário já preenchido com os seguintes campos:</summary>

    - Um campo para alterar o nome da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-name"`;

    - Um campo para alterar o email da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-email"`;

    - Um campo para alterar a descrição da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-description"`;

    - Um campo para alterar a foto da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-image"`;

    - Um botão para salvar as informações alteradas. Este botão precisa ter o atributo `data-testid="edit-button-save"`.
    </details>

  * <details><summary>Para poder habilitar o botão de enviar, todos os campos precisam estar preenchidos (não podem estar vazios): </summary>

    * O campo de email, além de não estar vazio também precisa verificar que o email tem um formato válido, ou seja, deve seguir o padrão `test@test.com`.
    
    * O botão de salvar as informações só deve ser habilitado quando todos os campos estiverem válidos, ou seja, todos campos preenchidos e o campo de email com um valor em formato válido.

    * Quando o botão estiver habiltado, utilize a função <code>updateUser</code> da <code>userAPI</code> para atualizar as informações da pessoa usuária. Essa API espera receber um objeto no seguinte formato:
    
      ```
        {
          name: '',
          email: '',
          image: '',
          description: '',
        }
      ```

    * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.
    </details>

  * Ao finalizar o processo de edição, redirecione a pessoa logada para a página de exibição de perfil (rota `/profile`).

  <details><summary><b> Ilustração:</b></summary>

  ![requisito-10](./images/requisito10.gif)
  </details><br />

</details>


<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - É feita a requisição para `getUser` para recuperar as informações da pessoa logada; 

  - O formulário é renderizado já preenchido com as informações da pessoa logada;

  - É possível alterar os valores dos campos;

  - O botão `salvar` é habilitado somente se todos os campos estiverem válidos;

  - As informações são enviadas usando a API `updateUser`;

  - Após salvar as informações a pessoa é redirecionada para a página de exibição de perfil.
</details>

---

<br>

*Exercicíos criado pela [Trybe](htpps:www.betrybe.com/).

<br>
