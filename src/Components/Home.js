import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import novousuario from "../novousuario.svg";
import blockchain from "../blockchain.svg";
import privatekeys from "../privatekeys.svg";
import mining from "../mining.svg";
import paper from "../paper.svg";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center">
          <h1 className="text-light">Como o Bitcoin funciona?</h1>
          <h2 className="text-muted">
            Essa é uma questão frequentemente rodeada por confusão, então aqui
            está uma explicação breve!
          </h2>
        </div>

        <div className="row m-5">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={novousuario}
              alt="novousuario"
            ></img>
          </div>
          <div className="col text-justify">
            <h4>O essencial para um novo usuário</h4>
            <p>
              Como um novo usuário, você pode{" "}
              <a href="https://bitcoin.org/pt_BR/comecando" target="_blank">
                iniciar
              </a>{" "}
              com Bitcoin sem entender de detalhes técnicos. Depois que instalar
              uma carteira de Bitcoin em seu computador ou telefone celular, ela
              vai gerar seu primeiro endereço de Bitcoin e você pode criar mais
              endereços sempre que precisar. Você pode mostrar seu endereço para
              seus amigos para receber pagamentos ou vice versa. Na verdade, é
              bem parecido com o funcionamento de um e-mail, a única diferença é
              que os endereços de Bitcoin devem ser usados apenas uma vez.
            </p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-justify">
            <h4>Saldo - blockchain</h4>
            <p>
              A blockchain é um livro de registro de contabilidade público
              compartilhado no qual toda a rede Bitcoin confia. Todas transações
              confirmadas são incluídas na cadeia de blocos. Desta forma, as
              carteiras de Bitcoin podem calcular seu saldo disponível e novas
              transações podem ser verificadas para que se possa usar bitcoins
              que são realmente de propriedade de quem está gastando. A
              integridade e ordem cronológica da cadeia de blocos são protegidas
              por{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#criptografia"
                target="_blank"
              >
                criptografia
              </a>
              .
            </p>
          </div>
          <div className="col-md-7">
            <img className="img-fluid" src={blockchain} alt="blockchain"></img>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-6 mr-5">
            <img
              className="img-fluid"
              src={privatekeys}
              alt="privatekeys"
            ></img>
          </div>
          <div className="col text-justify">
            <h4>Transações - chaves privadas</h4>
            <p>
              Uma transação é uma transferência de valor entre carteiras Bitcoin
              que é incluída na block chain. Carteiras Bitcoin mantém uma
              informação secreta chamada{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#chave-privada"
                target="_blank"
              >
                chave privada
              </a>{" "}
              ou semente, que é usada para assinar transações, fornecendo uma
              prova matemática provando que elas vieram do dono da carteira. A{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#assinatura"
                target="_blank"
              >
                assinatura
              </a>{" "}
              também previne que a transação seja alterada por qualquer um
              depois de emitida. Todas as transações são divulgadas entre os
              usuários e normalmente começam a ser confirmadas pela rede nos
              próximos 10 minutos, através de um processo chamado{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#mineracao"
                target="_blank"
              >
                mineração
              </a>
              .
            </p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-justify">
            <h4>Processando - mineração</h4>
            <p>
              A mineração é um sistema de consenso distribuído que serve para{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#confirmacao"
                target="_blank"
              >
                confirmar
              </a>{" "}
              as transações e incluí-las no blockchain. Isso impõe uma ordem
              cronológica no block chain, protege a neutralidade da rede, e
              permite que computadores diferentes concordem sobre o estado do
              sistema. Para serem confirmadas, as transações devem ser incluídas
              em um{" "}
              <a
                href="https://bitcoin.org/pt_BR/vocabulario#bloco"
                target="_blank"
              >
                bloco
              </a>{" "}
              e verificadas pela rede através de regras criptográficas. Essa
              regras previnem que blocos antigos sejam modificados, o que
              provocaria a invalidação dos blocos posteriores. A mineração
              também cria um jogo equivalente à loteria, que previne qualquer
              indivíduo de facilmente adicionar novos blocos consecutivamente no
              block chain. Isto evita que pessoas possam decidir o que incluir
              no block chain ou mudar partes do block chain e assim conseguir
              reverter suas próprias transações.
            </p>
          </div>
          <div className="col-md-6 mr-5">
            <img className="img-fluid" src={mining} alt="mining"></img>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-6 mr-5">
            <img className="img-fluid" src={paper} alt="paper"></img>
          </div>
          <div className="col text-justify">
            <h4>Até onde você está disposto a descobrir?</h4>
            <p>
              Este é somente um resumo muito breve e conciso do sistema. Caso
              queira saber mais a fundo, você pode{" "}
              <a href="https://bitcoin.org/pt_BR/bitcoin-paper" target="_blank">
                ler o documento original{" "}
              </a>
              que descreve o projeto do sistema, ler a{" "}
              <a href="https://developer.bitcoin.org/" target="_blank">
                documentação para programadores
              </a>
              , e explorar a{" "}
              <a href="https://en.bitcoin.it/wiki/Main_Page" target="_blank">
                Wiki de Bitcoin.
              </a>
            </p>
          </div>
        </div>
        <p>Fonte: https://bitcoin.org</p>
      </>
    );
  }
}

export default Home;
