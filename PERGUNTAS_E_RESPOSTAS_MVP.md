# Perguntas e Respostas — MVP do Catálogo de Filmes

## Integrantes

- Gustavo Ferreira Rigaud
- Antônio Pedro Roriz

## 1. Tela de listagem

### 1. Como ficou a estrutura do componente de card de filme? Ele foi feito para ser reutilizado em outros pontos do app?

O componente `MovieCard` recebe os dados do filme e uma função `onPress` por propriedades. Ele mostra o pôster, o título e a nota do filme. Como não depende diretamente da tela inicial, pode ser reutilizado em outras partes do aplicativo.

### 2. De onde vêm os dados exibidos na lista?

Os dados vêm da API pública Studio Ghibli API. A requisição não é feita diretamente na tela. Ela fica centralizada na função `getMovies`, localizada em `src/services/api.ts`. A tela inicial apenas chama essa função e recebe os filmes.

### 3. O que acontece na tela enquanto os dados ainda estão sendo carregados?

Enquanto a API responde, a tela mostra um indicador de carregamento e a mensagem “Carregando filmes...”. Assim, o usuário entende que o aplicativo está buscando os dados.

## 2. Navegação e tela de detalhes

### 4. Qual biblioteca de navegação foi usada e como os dados são passados?

Foi utilizada a biblioteca React Navigation, junto com o Native Stack. Ao tocar em um card, o objeto do filme selecionado é enviado como parâmetro para a rota `Details`.

### 5. A tela de detalhes busca novamente os dados na API?

Não. A tela de detalhes reaproveita o objeto recebido da tela inicial. Essa decisão evita uma nova requisição, reduz o tempo de espera e diminui o consumo de internet.

### 6. É possível voltar sem perder o estado da lista?

Sim. A navegação em pilha mantém a tela inicial na pilha enquanto a tela de detalhes está aberta. Ao voltar, a lista continua disponível sem precisar carregar os dados novamente e mantém a posição de rolagem.

## 3. Tratamento de estados

### 7. O que o usuário vê se a API demorar ou se a requisição falhar?

Se a API demorar, aparece um indicador de carregamento com a mensagem “Carregando filmes...”. Se ocorrer uma falha, aparece a mensagem “Não foi possível carregar os filmes” e um botão para tentar novamente.

### 8. Foi implementada uma forma de tentar novamente?

Sim. O botão “Tentar novamente” chama novamente a função `loadMovies`. Isso é importante porque celulares podem perder a conexão temporariamente ou alternar entre Wi-Fi e dados móveis.

## 4. Testes manuais do MVP

### 9. Em quais ambientes o aplicativo foi testado?

O aplicativo foi testado no navegador Web em um computador Windows e em um iPhone utilizando o Expo Go. No navegador, os cards ficaram maiores e com mais espaço disponível. No iPhone, o conteúdo ficou mais compacto, mas continuou legível e funcional.

### 10. Quais bugs ou comportamentos inesperados foram encontrados?

Não foram encontrados erros no fluxo final de listagem, detalhes e retorno. Durante o desenvolvimento, foi necessário configurar os tipos do Jest no `tsconfig.json`, pois os comandos de teste apareciam como não reconhecidos no VS Code. O problema foi corrigido adicionando o tipo `jest`. Também foi criada uma função para apresentar a duração dos filmes em horas e minutos.

### 11. Por que testar em mais de um ambiente é importante?

Um aplicativo híbrido pode apresentar diferenças de tamanho, espaçamento, navegação e desempenho entre Web, Android e iOS. Testar em mais de um ambiente ajuda a encontrar problemas que podem não aparecer em apenas uma plataforma.

## 5. Teste automatizado simples

### 12. Qual ferramenta de teste foi usada?

Foi utilizado o Jest com o `jest-expo`. O Jest foi escolhido por ser uma ferramenta conhecida, bem documentada e recomendada na documentação do Expo. O `jest-expo` facilita a configuração dos testes em projetos Expo.

### 13. O que exatamente o teste verifica?

O teste verifica a função `formatRuntime`, responsável por transformar a duração recebida da API em um texto mais fácil de entender. Foram testados três casos: 124 minutos, 60 minutos e um valor inválido. O teste não verifica a navegação, a conexão real com a API nem a aparência das telas.

### 14. Qual é a diferença entre o teste automatizado e os testes manuais?

O teste automatizado garante que a função de formatação devolve os resultados esperados sempre que for executada. Os testes manuais verificam o funcionamento completo do aplicativo, incluindo interface, carregamento, toque nos cards, navegação e retorno à lista.

## 6. Documentação e commit

### 15. O que foi acrescentado ao README nesta etapa?

Foram acrescentadas informações sobre o MVP, as telas implementadas, a navegação, os estados de carregamento e erro, o botão de tentar novamente, os ambientes utilizados nos testes e o teste automatizado com Jest. Essas informações permitem que outra pessoa entenda o estado atual do projeto e saiba como executá-lo e testá-lo.

### 16. O que esse commit representa em relação ao commit anterior?

O commit anterior representava o setup e a estrutura inicial do projeto. O novo commit representa o MVP funcional, com consumo da API, listagem, detalhes, navegação, tratamento de estados e teste automatizado. O grupo considera o aplicativo um MVP utilizável porque o fluxo principal está completo e funcionando.

### 17. Qual seria o próximo problema técnico ou funcional a resolver?

O próximo passo mais importante seria adicionar busca e filtros para facilitar a localização dos filmes. Também seria interessante implementar cache local, permitindo visualizar os últimos dados carregados mesmo quando o aparelho estiver sem internet.

## Resultado dos testes

### Teste automatizado

- Ferramenta: Jest com jest-expo
- Suítes executadas: 1
- Testes executados: 3
- Resultado: 3 testes aprovados

### Testes manuais

- Web no Windows: aprovado
- iPhone com Expo Go: aprovado
- Fluxo listagem → detalhes → voltar: aprovado
- Estado da lista após voltar: mantido