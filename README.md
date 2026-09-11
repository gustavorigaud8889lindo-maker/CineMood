# Catálogo de Filmes

Aplicativo desenvolvido com React Native, Expo e TypeScript. O app apresenta uma lista de filmes com pôster, título e nota. Ao selecionar um filme, o usuário é direcionado para uma tela com informações completas.

## Integrantes

- Gustavo Ferreira Rigaud
- Antônio Pedro Roriz

## Funcionalidades do MVP

- Listagem de filmes consumidos de uma API;
- Exibição de três filmes por fileira;
- Card reutilizável com pôster, título e nota;
- Navegação entre a tela inicial e a tela de detalhes;
- Exibição de sinopse, diretor, produtor, duração, nota e ano;
- Duração formatada em horas e minutos;
- Indicador de carregamento;
- Tratamento de erro na comunicação com a API;
- Botão para tentar carregar os dados novamente;
- Manutenção do estado da lista ao voltar dos detalhes;
- Layout adaptado para Web, Android e iOS;
- Teste automatizado de uma função isolada.

## Tecnologias utilizadas

- React Native;
- Expo SDK 57;
- TypeScript;
- Axios;
- React Navigation;
- Native Stack Navigator;
- Ionicons;
- Jest;
- jest-expo;
- Studio Ghibli API.

## Bibliotecas escolhidas

### Navegação

Foram utilizadas as bibliotecas `@react-navigation/native` e `@react-navigation/native-stack`. Elas organizam a navegação entre a tela inicial e a tela de detalhes.

O objeto do filme selecionado é enviado como parâmetro para a tela de detalhes. Dessa maneira, não é necessário realizar outra requisição à API.

### Consumo da API

Foi utilizado o `axios`. Ele facilita a realização de requisições HTTP e permite manter a configuração da API centralizada em `services/api.ts`.

### Ícones

Foi utilizada a biblioteca `@expo/vector-icons`, com os ícones Ionicons. Ela possui integração com o Expo e disponibiliza diversos ícones prontos.

### Testes

Foram utilizados o Jest e o `jest-expo`. O teste automatizado verifica a função `formatRuntime`, responsável por transformar a duração recebida da API em horas e minutos.

## API utilizada

O projeto utiliza a Studio Ghibli API:

```text
https://ghibliapi.vercel.app/films
```

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
├── PERGUNTAS_E_RESPOSTAS.md
├── PERGUNTAS_E_RESPOSTAS_MVP.md
└── README.md
```

## Organização das pastas

- `components`: componentes reutilizáveis do aplicativo;
- `screens`: telas exibidas ao usuário;
- `services`: comunicação com a API e funções relacionadas aos dados;
- `navigation`: configuração da navegação entre as telas;
- `assets`: imagens e recursos visuais locais;
- `__tests__`: testes automatizados.

## Fluxo de dados

A tela inicial solicita os filmes por meio da função localizada em `services/api.ts`. Os dados recebidos são apresentados pelo componente `MovieCard`.

Quando o usuário toca em um card, o objeto do filme é enviado pela navegação para a tela de detalhes. A tela de detalhes reaproveita esses dados sem realizar uma nova requisição.

## Estados da interface

Durante a requisição, o aplicativo mostra um indicador e a mensagem “Carregando filmes...”.

Caso a requisição falhe, o aplicativo apresenta uma mensagem de erro e o botão “Tentar novamente”, que realiza uma nova tentativa de comunicação com a API.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npx expo start
```

Execute no navegador:

```bash
npx expo start --web
```

No Windows, caso o PowerShell bloqueie os comandos, utilize:

```powershell
npm.cmd install
npx.cmd expo start
```

## Como executar o teste

```bash
npm test
```

No Windows:

```powershell
npm.cmd test
```

O projeto possui três casos de teste para a função `formatRuntime`:

- Conversão de 124 minutos para `2h 4min`;
- Conversão de 60 minutos para `1h`;
- Tratamento de uma duração inválida.

## Testes manuais

O fluxo listagem → detalhes → voltar foi testado nos seguintes ambientes:

- Navegador Web em computador Windows;
- iPhone utilizando o Expo Go.

Nos dois ambientes, a listagem, a navegação, os detalhes e o retorno à posição da lista funcionaram corretamente.

## Estado atual

O projeto já possui um MVP utilizável. A listagem consome dados reais da API, os cards abrem a tela de detalhes, os estados de carregamento e erro estão tratados e o usuário pode tentar novamente após uma falha.

O teste automatizado foi executado com sucesso, com uma suíte e três testes aprovados.