# Bibliotecas e justificativas

Esse projeto foi criado utilizando [Create React App](https://github.com/facebook/create-react-app).

Este repositório contém o <i>frontend challenge</i>, feito em ReactJS e utiliza as seguintes bibliotecas:

* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
  <p>Apesar de possuir apenas uma página, essa biblioteca foi escolhida pensando na possibilidade de adicionar fácilmente novas rotas ao projeto.</p>
* [pigeon-maps](https://github.com/mariusandra/pigeon-maps)
  <p>Essa biblioteca foi escolhida para ser utilizada no componente que possui mapa, devido a sua facilidade de instalação e utlização sem precisar de nenhum tipo de *access token*</p>
* [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)
  <p>Essa biblioteca foi escolhida por ser um *wrapper* de uma biblioteca muito famosa do JavaScript, o chartjs. Ela é de fácil instalação e utilização.</p>
* [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline)
  <p>Essa biblioteca foi escolhida para fazer parte do componente de *timeline* para que não fosse necessário reimplementar algo que já existia e atendia as necessidades do projeto </p>


# Rodando o projeto

Para que esse projeto funcione corretamente é necessário:

Clonar ou baixar o projeto, após isso instalar as dependências:
<br><i>npm install</i>

Em seguida é necessário iniciar o servidor do ReactJs:
<br><i>npm start</i>

E pronto, agora é só acessar http://localhost:3000.

# Resultado

<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/homescreen.png" width="800" heigh="530" />
<p>

# Dados utilizados

Os dados utilizados para alimentar os componentes encontram-se no arquivo [mock.js](https://github.com/moromisato/frontend-challenge/blob/master/src/mock.js)

# Componentes

## *IdentificationCard*
É o cartão de identificação, e mostra as informações básicas do cliente
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/identification_card.png" width="400" heigh="265" />
<p>

## *OpportunitiesCard*
Cartão das oportunidades do cliente: ganhas, perdidas, abertas e descartadas
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/opportunities_card.png" width="400" heigh="265" />
<p>
  
## *BaseIndicator*
O BaseIndicator é um componente base utilizado tanto no *OpportunitiesCard* quanto no *FinancialSecurityCard*, ele permite mostrar indicadorer de duas formas diferentes.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/base_indicator.png" width="200" heigh="132" />
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/baset_indicator_alternative.png" width="200" heigh="132" />
<p>
 
 ## *SalesCard*
Cartão que exibe as informações de venda, ele mostra a linha das vendas realizadas e também uma linha de predição para o próximo mês, os valores mostrados são randômicos.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/sales_card.png" width="400" heigh="265" />
<p>


## *LocationCard*
Cartão responsável por mostrar a localização do cliente, componente simples e que possibilita dar *zoom* no mapa.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/location_card.png" width="400" heigh="265" />
<p>
  
## *CreditLimitCard*
Componente responsável por mostrar o limite de crédito concedido e disponível do cliente.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/credit_limits_card.png" width="400" heigh="265" />
<p>

## *FinancialSecurityCard*
Componente responsável por mostrar os títulos financeiros do cliente, ele também usufrui do *BaseIndicator*
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/financial_securities_card.png" width="400" heigh="265" />
<p>


## *ActivitiesCard*
Componente responsável por mostrar as atividades do cliente, independente de quantas categorias de atividade ele tenha, ele também possui um campo de pesquisa que pode ser utilizado para filtrar as atividades, para filtrar por categorias é necessário clicar nas mesmas que se encontram abaixo do campo de busca.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/activities_card.png" width="400" heigh="265" />
<p>

## *SmallIndicator*
Esse componente é utilizado na parte de filtragem de atividades por categoria e se encontra abaixo do campo de pesquisa.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/small_indicator.png" width="400" heigh="265" />
<p>

## *AcitivityDescription*
Componente renderizado dentro das categorias de atividades.
<p align="center">
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/activity_description.png" width="400" heigh="265" />
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/activity_description_2.png" width="400" heigh="265" />
<img src="https://github.com/moromisato/frontend-challenge/blob/master/src/screenshots/activity_description_3.png" width="400" heigh="265" />
<p>






## *SmallIndicator*









