const prompt = require('prompt-sync')();

   let time = [];
   let loop = true;


   function mostrar_opcoes() {


      console.log ("///////// SISTEMA DE JOGADORES /////////");
      console.log("1. Cadastrar");
      console.log("2. Eliminar jogador");
      console.log("3. Mostrar equipe");
      console.log("4. Cálculo da média da equipe");
      console.log("5. Buscar jogador");
      console.log("6. Atualizar pontuacao");
      console.log("7. Sair");



   }

   function mostrar_equipe() {

      if (time.length === 0) {
         return; 

      }

      for (let i = 0; i < time.length; i++) {

         let jogador = time[i];

         console.log((i + 1) + "." + jogador.nome + " | função: " + jogador.funcao + "| Pontuação: " + jogador.pontuacao);
         console.log("\n");
      }
   
   }


   function cadastrar_jogador() {

      let nome_jogador = prompt("Digite o nome do jogador: ");
      let funcao_jogador = prompt("Digite a função do jogador: ");
      let pontuacao_jogador = Number(prompt("Digite a pontuação do jogador:"));

      if (isNaN(pontuacao_jogador)) {

         console.log("Pontuação inválida.");
         return;

      } else {

         let recruta = {

            nome: nome_jogador,
            funcao: funcao_jogador,
            pontuacao: pontuacao_jogador,


         }

         time.push(recruta);

         console.log ("--------------------------------------------");
         console.log (" usuario " + nome_jogador + " cadastrado.");
         console.log ("--------------------------------------------");
         console.log("\n\n");
        


      }

   }


   function deletar_jogador() {

      if (time.length == 0) {

            console.log("Nenhum jogador cadastrado.");
            return;
      }


      let nome_deletado = prompt ("Digite o nome que você gostaria e deletar: ");
      let index_deletado = -1;

      for (let i = 0; i < time.length; i++) {

         if (time[i].nome === nome_deletado) {

            index_deletado = i;
            break;

         }


      }


      if (index_deletado === -1) {

         console.log ("Jogador não encontrado.");
         console.log ("\n--------------------------------------------");
         return;

      }

      time.splice(index_deletado, 1);
      console.log("Jogador " + index_deletado + "deletado.");
      console.log ("\n--------------------------------------------");

   }

   function media() {

      if (time.length === 0) {

         console.log ("Nenhum jogador encontrado.");
         return;
      }

      let total_pontos = 0;

      for (let i = 0; i < time.length; i++) {

         total_pontos = total_pontos + time[i].pontuacao;
      }

      let media_pontos = total_pontos / time.length;

      console.log ("A pontuação atual do time é: ", media_pontos);


   }

   

   function buscar(nome_desejado) {

      console.log( "buscando por " + nome_desejado + "..." );
      let encontrou_nome = false;

      for(let i = 0; i < time.length; i++) {

         let jogador_Atual = time[i];
        
        
         if (jogador_Atual.nome === nome_desejado) { 

            console.log ( "Jogador encontrado!" );
            
            
            console.log( "nome: " + jogador_Atual.nome + " | Pontos: " + jogador_Atual.pontuacao);

            encontrou_nome = true;
            break;
         }
      }

      if (encontrou_nome === false) {

         console.log( "O jogador " + nome_desejado + " não faz parte da nossa equipe." );

      }

   }


   function atualizar_pontuacao(nome_esperado) {

     console.log( "buscando por " + nome_esperado + "..." );
      let encontrou_nome = false;

      for(let i = 0; i < time.length; i++) {

         let jogador_1 = time[i];
        
        
         if (jogador_1.nome === nome_esperado) { 

            console.log ( "Jogador encontrado!" );

            
            
            console.log( "nome: " + jogador_1.nome + " | Pontos: " + jogador_1.pontuacao);
            let pontos_novos = Number(prompt ("Digite o quanto ele ganhou: "));
            jogador_1.pontuacao += pontos_novos;

            console.log("A nova pontuação dele é de: ", jogador_1.pontuacao);

            encontrou_nome = true;
            break;
        }
      }

      if (encontrou_nome === false) {

         console.log( "O jogador " + nome_esperado + " não faz parte da nossa equipe." );
         
      }


   }
   

   


    while (loop == true) {
      
      mostrar_opcoes();
      let opcao = prompt ("Digite a opção desejada: ");
      
     

      if (opcao === "1") {

         cadastrar_jogador();

      } else if (opcao === "2") {

         deletar_jogador();

      } else if (opcao === "3") {

         mostrar_equipe();


      } else if (opcao === "4") {

         media();

      } else if (opcao === "5") {

         let nome_busca = prompt("Digite o nome do jogador que deseja buscar: ");
         buscar(nome_busca);

      } else if (opcao === "6") {

         let nome_b = prompt("Digite o nome do jogador que deseja alterar pontuacao: ");
         atualizar_pontuacao(nome_b);

         
      } else if (opcao === "7") {

         loop = false;
      }
      
      
      
      else {

         console.log ("\n--------------------------------------------");
         console.log ("\n\nEssa opção não existe.");
         console.log ("\n--------------------------------------------");
         continue;


      }

      
        

    }
