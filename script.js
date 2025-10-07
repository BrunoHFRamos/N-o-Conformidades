const nao_conformidades = [];

function cadastrar() {
  const nome_fornecedor = document.getElementById("nome_fornecedor").value;
  const seq_numeracao = document.getElementById("seq_numeracao").value;
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value;

  // validação simples
  if (!nome_fornecedor || !seq_numeracao || !descricao || !data) {
    alert("⚠️ Preencha todos os campos antes de cadastrar!");
    return;
  }

  // cria o objeto de não conformidade
  const nao_conformidade = {
    nome_fornecedor,
    seq_numeracao,
    descricao,
    data
  };

  // adiciona no array
  nao_conformidades.push(nao_conformidade);

  // limpa os campos
  document.getElementById("nome_fornecedor").value = "";
  document.getElementById("seq_numeracao").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("data").value = "";

  alert("✅ Não Conformidade cadastrada com sucesso!");
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  nao_conformidades.forEach((nc, i) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
${i + 1}. Nome do Fornecedor: ${nc.nome_fornecedor}
Sequência de numeração: ${nc.seq_numeracao}
Descrição: ${nc.descricao}
Data: ${nc.data}
`;
    lista.appendChild(div);
  });
}
