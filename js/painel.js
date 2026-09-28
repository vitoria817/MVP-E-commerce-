const fila = document.getElementById("fila");
const inputImagem = document.getElementById("inputImagem");
const btn = document.getElementById("btnCadastrar");

btn.addEventListener("click",function() {
    const nome = document.getElementById("NomeProduto").value;
    const preco = document.getElementById("PrecoProduto").value;
    const categoria = document.getElementById("CategoriaProduto").value;
    const arquivo = inputImagem.files[0];

    if(nome === ""|| preco ==="") {
        alert("Preencha pelo menos o nome e o preço!");
        return;
    }
    const produto = document.createElement("div");
    produto.classList.add("produto");

    // Miniatura
    const img = document.createElement("img");
    if (arquivo) {
        img.src = URL.createObjectURL(arquivo);
    }
    img.alt = nome;
    produto.appendChild(img);

    // Nome e categoria
    const info = document.createElement("div");
    info.classList.add("produto-info");

    const titulo = document.createElement("span");
    titulo.classList.add("produto-nome");
    titulo.textContent = nome;

    const cat = document.createElement("span");
    cat.classList.add("produto-categoria");
    cat.textContent = categoria;

    info.appendChild(titulo);
    info.appendChild(cat);
    produto.appendChild(info);

    // Preço e vendas
    const valores = document.createElement("div");
    valores.classList.add("produto-valores");

    const precoEl = document.createElement("span");
    precoEl.classList.add("produto-preco");
    precoEl.textContent = "R$ " + Number(preco).toFixed(2).replace(".", ",");

    const vendas = document.createElement("span");
    vendas.classList.add("produto-vendas");
    vendas.textContent = "0 vendas";

    valores.appendChild(precoEl);
    valores.appendChild(vendas);
    produto.appendChild(valores);

    fila.appendChild(produto);

    document.getElementById("NomeProduto").value = "";
    document.getElementById("PrecoProduto").value = "";
    document.getElementById("CategoriaProduto").value = "";
    document.getElementById("DescricaoProduto").value = "";
    inputImagem.value = "";
});