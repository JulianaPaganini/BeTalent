Este projeto consiste em um componente React que exibe uma tabela interativa com informações de funcionários. O objetivo é criar uma interface funcional, intuitiva e dinâmica, que permita ao usuário visualizar e pesquisar os dados dos funcionários de maneira eficiente. Abaixo, explico em detalhes as decisões tomadas no desenvolvimento deste projeto:

1. Objetivo e Funcionalidade Principal:
O principal objetivo desse componente é listar funcionários em uma tabela, permitindo ao usuário pesquisar por nome ou cargo. Além disso, ao clicar sobre o nome de um funcionário, o componente expande para exibir informações detalhadas, como a foto, cargo, data de admissão e telefone.

2. Utilização de React e Hook:
O React foi escolhido para a construção deste componente, pois ele facilita a criação de interfaces dinâmicas e reativas. Utilizamos os hooks `useState` e `useEffect` para gerenciar o estado do componente e realizar a requisição dos dados da API, respectivamente:
-`useState`: Para controlar o estado de variáveis como a lista de funcionários, o texto da pesquisa, o estado de carregamento, os erros e as linhas expandidas.
-`useEffect`: Para realizar a requisição HTTP e carregar os dados dos funcionários assim que o componente for montado. A API retorna os dados que são exibidos na tabela.

3. Requisição de Dados com Axios:
A biblioteca axios foi utilizada para realizar a requisição à API simulada (endereço `http://localhost:3001/employees`). O axios é uma ferramenta simples e poderosa para fazer chamadas HTTP, e sua utilização facilita o tratamento de erros e a manipulação dos dados obtidos.

4. Filtragem e Pesquisa:
O componente inclui uma barra de pesquisa que permite ao usuário filtrar os funcionários pelo nome ou cargo. Esse filtro é feito de maneira dinâmica, comparando o texto inserido pelo usuário com os dados de cada funcionário. A filtragem é realizada em tempo real, permitindo uma busca rápida e eficiente.

5. Expansão de Detalhes:
Uma funcionalidade importante implementada neste projeto foi a possibilidade de expandir ou contrair uma linha da tabela para mostrar mais detalhes sobre cada funcionário. Quando o usuário clica sobre o nome de um funcionário, a linha se expande para mostrar informações adicionais. Para isso, utilizamos um estado chamado **`expandedRows`**, que mantém o controle de quais linhas estão expandidas. Essa abordagem proporciona uma experiência mais fluida e interativa.

6. Estilização e Layout:
A tabela e os componentes são estilizados utilizando `styled-components`. Esta biblioteca foi escolhida para garantir uma estilização modular e reutilizável, mantendo o código mais organizado e fácil de manter. O uso de `styled-components` também possibilitou a criação de componentes como `TableRow`, `TableCell` e `ArrowButton`, garantindo que o layout fosse responsivo e agradável visualmente.

7. Tratamento de Erros e Carregamento:
O projeto inclui uma gestão de estados de carregamento e erro:
- Enquanto os dados estão sendo carregados, é exibida uma mensagem de "Carregando...".
- Se ocorrer algum erro durante a requisição dos dados, uma mensagem de erro é mostrada ao usuário, garantindo uma comunicação clara sobre o estado da aplicação.

8. Responsividade e Acessibilidade:
Embora a responsividade não tenha sido o foco principal neste primeiro momento, a estrutura e a escolha das bibliotecas, como `styled-components`, facilitam a adaptação do layout para diferentes tamanhos de tela. A ideia é que a tabela possa ser visualizada adequadamente em dispositivos móveis, com uma futura adaptação para exibir as informações detalhadas de forma compacta em telas menores.

Conclusão:
Esse componente foi desenvolvido para demonstrar uma interface limpa, interativa e funcional, permitindo a pesquisa e visualização detalhada das informações dos funcionários de forma eficiente. Utilizamos React para garantir uma experiência dinâmica, e a escolha das bibliotecas e das técnicas de estilização e gestão de estado foi feita para criar um código organizado, de fácil manutenção e com boa performance.



<img src="https://github.com/JulianaPaganini/BeTalent/main/src/assets/projetoBetalent.png"/>

O projeto cumpre com os requisitos básicos de usabilidade e funcionalidade, oferecendo uma interface intuitiva e interativa para o usuário.
