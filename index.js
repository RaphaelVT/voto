const prompt = require("prompt-sync") ();

const votos = []

while (true) {
    console.log(`
    1 - Criar candidato
    2 - Listar candidato
    3 - Atualizar candidato
    4 - Sair

    `);

    let opcoes = prompt("Selecione a opção: ");
    if (opcoes === "1") {
        let candidato = prompt(`
        
        Digite o número do candidato que deseja:

        1 - Candidato A
        2 - Candidato B
        3 - Candidato C
        4 - Candidato D
        
        Digite abaixo a escolha: `)
        votos.push({candidato})
        console.log(`
        O seu candidato ${candidato}, foi criado com sucesso!`);
    }else if (opcoes === "2") {
        if (votos.length === 0) {
            console.log(`
            Nenhum candidato cadastrado!`);
        } else {
            console.log(`
            Lista dos candidatos: `);
            votos.forEach((item, index) => {
                console.log(`${index +1}. ${item.candidato}`);
            });
        }
    }else if (opcoes === "3") {
        if (votos.length === 0) {
            console.log(`
            Não tem candidato cadastrodo para atualizar!`);
        }else {
            console.log(`Atualizar candidatos: `);
            votos.forEach((item, index) => {
                console.log(`${index + 1}. ${item.candidato}`);
            });
            let indiceAtualizar = prompt(`Digite o número do candidato que deseja atualizar: `)
            indiceAtualizar = parseInt(indiceAtualizar) - 1;
            if (indiceAtualizar >= 0 && indiceAtualizar < votos.length) {
                let novoVoto = prompt(`Digite o voto que deseja alterar: `)
                votos[indiceAtualizar].votos = novoVoto;
                console.log(`Voto atualizado para ${novoVoto} com sucesso!`);
            }else {
                console.log(`Número do voto inválido!`);
            }

        }
    }else if (opcoes === "4") {
        console.log(`Saindo do sistema de votos...`);
        break;
    }else {
        console.log(`Opção inválida, escolha uma opção para votar!`);
    }
}