# Catálogo de Filmes

Aplicativo desenvolvido com React Native, Expo e TypeScript. O app apresenta uma lista de filmes com pôster, título e nota. Ao selecionar um filme, o usuário é direcionado para uma tela com informações completas.

## Integrantes

- Gustavo Ferreira Rigaud
- Antônio Pedro Roriz

## Funcionalidades

- Listagem de filmes consumidos de uma API
- Exibição de três filmes por fileira
- Card reutilizável com pôster, título e nota
- Navegação entre a tela inicial e a tela de detalhes
- Exibição de sinopse, diretor, produtor, duração e ano
- Indicador de carregamento
- Tratamento de erro na comunicação com a API
- Layout adaptado para Web, Android e iOS

## Tecnologias utilizadas

- React Native
- Expo SDK 57
- TypeScript
- Axios
- React Navigation
- Native Stack Navigator
- Ionicons
- Studio Ghibli API

## Bibliotecas escolhidas

### Navegação

Foram utilizadas as bibliotecas `@react-navigation/native` e `@react-navigation/native-stack`. Elas permitem organizar a navegação entre a tela inicial e a tela de detalhes, possuem boa documentação e são muito utilizadas em projetos React Native.

### Consumo de API

Foi utilizado o `axios`. Ele facilita a realização de requisições HTTP e deixa a configuração da API centralizada e organizada.

### Ícones

Foi utilizada a biblioteca `@expo/vector-icons`, com os ícones Ionicons. Ela possui integração com o Expo e disponibiliza diversos ícones prontos.

### Dependências compatíveis com o Expo

As bibliotecas `react-native-screens`, `react-native-safe-area-context` e `@expo/vector-icons` foram instaladas com `npx expo install`. Esse comando seleciona versões compatíveis com o SDK atual do Expo.

## API utilizada

O projeto utiliza a Studio Ghibli API:

```text
https://ghibliapi.vercel.app/films
```

A API fornece os títulos, pôsteres, imagens, sinopses, notas e outras informações exibidas no aplicativo.

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
│       └── api.ts
├── App.tsx
├── package.json
└── README.md
```

## Organização das pastas

- `components`: componentes reutilizáveis do aplicativo.
- `screens`: telas exibidas ao usuário.
- `services`: configuração e comunicação com a API.
- `navigation`: configuração da navegação entre as telas.
- `assets`: imagens e recursos visuais locais.

## Fluxo de dados

A tela inicial solicita os filmes por meio da função localizada em `services/api.ts`. Os dados recebidos são apresentados pelo componente `MovieCard`. Quando o usuário toca em um card, o filme selecionado é enviado pela navegação para a tela de detalhes.

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

## Estado atual

O projeto foi criado com Expo SDK 57, as bibliotecas foram instaladas em versões compatíveis e a versão Web foi executada sem erros. A listagem, o consumo da API e a navegação para os detalhes foram testados manualmente.