  // Dados do anunciante 
  const nomeAnuncio1 = ("Liquida Inverno");
  const nomeCliente1 = ("Be One Fashion");

  // data início e término da campnaha
  let dtInicio = new Date('2021,7,10' );
  let dtTermino = new Date('2021,8,10');
  let difference= Math.abs(dtTermino-dtInicio);
  let totalDias = difference/(1000 * 3600 * 24)

  // valor investido por dia
  let investimentoDia =  100;

  // ********************************************************************
  
  
  // relatório de projeção da campanha
  let valorTotalInvestido = (investimentoDia * totalDias);
  let qtdMaximaViews = (valorTotalInvestido * 1000) / 100;
  let qtdMaximaCliques = (qtdMaximaViews * 12) / 100;
  let qtdMaximaCompartilhamentos = (qtdMaximaCliques *3 ) /20;
  

 

console.log('\n Relatorio de Projeção da Campanha \n' +
   '\n Valor Total Investido : ' + (valorTotalInvestido),
   '\n Quantidade Máxima de Visualizações : ' + (qtdMaximaViews),
   '\n Quantidade Máxima de Cliques : ' + (qtdMaximaCliques),
   '\n Quantidade Máxima de Compartilhamentos : ' + (qtdMaximaCompartilhamentos)

);

console.log('\n Dados da sua Campanha \n' + 
  '\n Anúncio : ' + nomeAnuncio1,
  '\n Cliente : ' + nomeCliente1,
  '\n Início : '  + dtInicio,
  '\n Témino : '  + dtTermino,
  '\n Investimento por Dia : ' + 'R$'+ investimentoDia
)

//**********************************************************************************************************************************







