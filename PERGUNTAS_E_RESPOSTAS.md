# Catálogo de Filmes — Perguntas e Respostas

## Integrantes

- Gustavo Ferreira Rigaud
- Antônio Pedro Roriz

## 1. Pesquisa de bibliotecas

### 1. Quais bibliotecas o grupo escolheu?

Para navegação, escolhemos `@react-navigation/native` e `@react-navigation/native-stack`. Para consumir a API, usamos o `axios`. Para os ícones, utilizamos o `@expo/vector-icons`, com os ícones Ionicons.

### 2. Por que escolheram cada uma delas?

O React Navigation foi escolhido porque é muito utilizado em projetos React Native e facilita a passagem entre telas. O Axios foi escolhido porque simplifica as requisições para a API. O Ionicons foi escolhido porque possui vários ícones prontos e funciona bem com o Expo.

### 3. Alguma biblioteca precisa ser instalada com npx expo install?

Sim. `react-native-screens`, `react-native-safe-area-context` e `@expo/vector-icons` foram instaladas com `npx expo install`. Esse comando procura automaticamente versões compatíveis com o SDK do Expo utilizado no projeto.

### 4. Essas bibliotecas são bem mantidas e documentadas?

Sim. Verificamos que elas possuem documentação própria, atualizações e são utilizadas em muitos projetos. O React Navigation e o Expo possuem sites oficiais com exemplos e instruções de instalação. O Axios também possui documentação completa.

### 5. Existe alguma limitação ou ponto de atenção?

É necessário manter as versões das dependências compatíveis com o SDK do Expo. Outro ponto é que o aplicativo depende de internet e da disponibilidade da API para carregar os filmes. Algumas informações fornecidas pela API também estão em inglês.

## 2. Arquitetura do projeto

### 6. Quais telas o app vai ter?

O aplicativo possui uma tela inicial e uma tela de detalhes. A tela inicial mostra pôster, título e nota dos filmes. A tela de detalhes mostra imagem, título, título original, nota, ano, duração, diretor, produtor e sinopse.

### 7. Como os dados vão fluir entre as telas?

A tela inicial busca os dados na API e apresenta cada filme em um card. Quando o usuário toca no card, o objeto do filme selecionado é enviado pela navegação para a tela de detalhes.

### 8. Por que separar o código em pastas?

A separação deixa o projeto mais organizado e facilita a manutenção. A pasta `screens` armazena as telas, `components` guarda partes reutilizáveis e `services` centraliza o acesso à API. Dessa forma, não precisamos deixar todo o código em um único arquivo.

### 9. Quais componentes reutilizáveis foram identificados?

O principal componente reutilizável é o `MovieCard`. Ele recebe as informações de qualquer filme e exibe o pôster, o título e a nota. Também possui a ação usada para abrir os detalhes.

### 10. Onde fica a comunicação com a API?

A comunicação fica centralizada no arquivo `src/services/api.ts`. Isso evita repetir o endereço e a lógica da requisição em várias telas, deixando o código mais fácil de alterar e testar.

## 3. Setup do projeto

### 11. O projeto rodou sem erros?

Sim. Depois da criação e da instalação das bibliotecas, o projeto foi executado na Web com o Expo SDK 57. A lista carregou os filmes e a navegação para os detalhes funcionou corretamente.

### 12. Alguma biblioteca gerou conflito com o SDK do Expo?

Não tivemos conflito de versão. Para evitar problemas, utilizamos `npx expo install` nas dependências ligadas diretamente ao Expo e ao React Native. Assim foram instaladas versões compatíveis com o SDK 57.

## 4. README.md

### 13. Por que documentar as decisões desde o início?

A documentação ajuda o grupo a lembrar quais tecnologias foram escolhidas e como o projeto foi organizado. Ela também evita dúvidas e facilita a continuação do trabalho por qualquer integrante.

### 14. O README seria suficiente para uma pessoa nova entender o projeto?

Sim. O README informa o objetivo do aplicativo, os integrantes, as bibliotecas, a API, as funcionalidades, a estrutura das pastas e os comandos necessários para executar o projeto.

## 5. Primeiro commit

### 15. O que o primeiro commit representa?

O primeiro commit representa o ponto inicial organizado do desenvolvimento. Ele registra a estrutura do projeto, as bibliotecas instaladas, a documentação e a primeira versão funcional do aplicativo.

### 16. Por que começar o versionamento desde já?

Porque o versionamento mantém um histórico das alterações. Se surgir algum erro, podemos comparar as versões ou voltar a um estado anterior. Ele também facilita o trabalho realizado por mais de uma pessoa.

### 17. Quais arquivos ou pastas ficam fora do controle de versão?

A pasta `node_modules` fica fora porque possui muitos arquivos e pode ser recriada com `npm install`. A pasta `.expo` guarda informações locais e temporárias. Também devem ficar fora arquivos de build, configurações particulares do computador e arquivos com senhas ou chaves privadas.