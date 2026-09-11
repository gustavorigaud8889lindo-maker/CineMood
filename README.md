# Catálogo de Filmes

Aplicativo desenvolvido com React Native, Expo e TypeScript. O app apresenta uma lista de filmes com pôster, título e nota. Ao selecionar um filme, o usuário é direcionado para uma tela com informações completas.

## Integrantes

- Gustavo Ferreira Rigaud
- Antônio Pedro Roriz
- Felipe Loureiro

## Funcionalidades

- Listagem de filmes consumidos de uma API
- Exibição de três filmes por fileira
- Card reutilizável com pôster, título e nota
- Navegação entre a tela inicial e a tela de detalhes
- Exibição de sinopse, diretor, produtor, duração e ano
- Formatação da duração em horas e minutos
- Indicador de carregamento
- Tratamento de erro na comunicação com a API
- Botão para tentar novamente após uma falha
- Layout adaptado para Web, Android e iOS

## Tecnologias utilizadas

- React Native
- Expo SDK 57
- TypeScript
- Axios
- React Navigation
- Native Stack Navigator
- Ionicons
- Jest
- Jest Expo
- Studio Ghibli API

## Bibliotecas escolhidas

### Navegação

Foram utilizadas as bibliotecas `@react-navigation/native` e `@react-navigation/native-stack`. Elas permitem organizar a navegação entre a tela inicial e a tela de detalhes, possuem boa documentação e são muito utilizadas em projetos React Native.

### Consumo de API

Foi utilizado o `axios`. Ele facilita a realização de requisições HTTP e deixa a configuração da API centralizada e organizada.

### Ícones

Foi utilizada a biblioteca `@expo/vector-icons`, com os ícones Ionicons. Ela possui integração com o Expo e disponibiliza diversos ícones prontos.

### Testes

Foram utilizados o `Jest` e o `Jest Expo` para executar testes automatizados. O teste criado verifica o funcionamento da função que transforma a duração dos filmes de minutos para horas e minutos.

### Dependências compatíveis com o Expo

As bibliotecas `react-native-screens`, `react-native-safe-area-context` e `@expo/vector-icons` foram instaladas com `npx expo install`. Esse comando seleciona versões compatíveis com o SDK atual do Expo.

## API utilizada

O projeto utiliza a Studio Ghibli API:

https://ghibliapi.vercel.app/films

A API fornece títulos, pôsteres, imagens, sinopses, notas e outras informações exibidas no aplicativo.

## Estrutura do projeto

```text
catalogo-filmes/
├── assets/
├── src/
│   ├── components/
│   │   └── MovieCard.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── MovieDetailsScreen.tsx
│   └── services/
│       ├── __tests__/
│       │   └── movieFormatter.test.ts
│       ├── api.ts
│       └── movieFormatter.ts
├── App.tsx
├── package.json
├── PERGUNTAS_E_RESPOSTAS_MVP.md
└── README.md
```

## Organização das pastas

- `components`: componentes reutilizáveis do aplicativo.
- `screens`: telas exibidas ao usuário.
- `services`: configuração, comunicação com a API e funções auxiliares.
- `navigation`: configuração da navegação entre as telas.
- `assets`: imagens e recursos visuais locais.
- `__tests__`: testes automatizados do projeto.

## Fluxo de dados

A tela inicial solicita os filmes por meio da função localizada em `services/api.ts`. Enquanto os dados estão sendo carregados, o aplicativo apresenta um indicador de carregamento.

Os dados recebidos são apresentados pelo componente reutilizável `MovieCard`. Quando o usuário toca em um card, o filme selecionado é enviado pela navegação para a tela de detalhes.

A tela de detalhes reutiliza as informações recebidas da tela inicial, evitando uma nova requisição à API. Ao voltar para a listagem, o estado da tela é mantido.

Se ocorrer uma falha na comunicação com a API, o aplicativo apresenta uma mensagem de erro e um botão para tentar novamente.

## Teste automatizado

Foi criado um teste automatizado para a função `formatRuntime`, localizada no arquivo `src/services/movieFormatter.ts`.

O teste verifica os seguintes casos:

- Transformação de 124 minutos em `2h 4min`
- Transformação de 60 minutos em `1h`
- Tratamento de uma duração inválida

Para executar os testes:

```bash
npm test
```

O resultado esperado é de uma suíte de testes aprovada, com três testes executados com sucesso.

## Testes manuais

O fluxo principal foi testado nos seguintes ambientes:

- Navegador Web no Windows
- iPhone utilizando o Expo Go

Foram testadas as seguintes ações:

- Carregamento da lista de filmes
- Exibição dos cards em três colunas
- Abertura da tela de detalhes
- Exibição das informações completas
- Retorno para a tela inicial
- Manutenção do estado da listagem
- Exibição do estado de carregamento
- Funcionamento do botão de tentar novamente

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npx expo start
```

Para executar diretamente no navegador:

```bash
npx expo start --web
```

Para executar os testes automatizados:

```bash
npm test
```

## Estado atual

O projeto possui um MVP funcional com listagem de filmes, consumo de API, cards reutilizáveis, navegação, tela de detalhes, indicador de carregamento, tratamento de erro, opção de tentar novamente e teste automatizado.

A aplicação foi testada manualmente na Web e em um iPhone com Expo Go. O fluxo de listagem, detalhes e retorno para a tela inicial está funcionando corretamente.