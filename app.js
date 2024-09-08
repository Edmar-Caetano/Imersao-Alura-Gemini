function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    const regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(campoPesquisa)) {
        section.innerHTML = "<p>Digite apenas caracteres alfanuméricos.</p>"
        return
    }

    // if (campoPesquisa == "") {
    //     section.innerHTML = "<p>Nada foi encontrado</p>"
    //     return
    // }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    const textoInformado = campoPesquisa.toLowerCase();
    let textoMinusculoTitulo = "";
    let textoMinusculoDescricao = "";
    let textoMinusculoTags = "";

    // Itera sobre cada dado da lista
    for (let dado of dados) {
        textoMinusculoTitulo = dado.titulo.toLowerCase();
        textoMinusculoDescricao = dado.descricao.toLocaleLowerCase();
        textoMinusculoTags = dado.tags.toLocaleLowerCase();
        if (textoMinusculoTitulo.includes(textoInformado) ||
            textoMinusculoDescricao.includes(textoInformado)  ||
            textoMinusculoTags.includes(textoInformado)) {
            // Cria uma nova div para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}