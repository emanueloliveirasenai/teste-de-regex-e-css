// Função auxiliar para mostrar ou esconder mensagens de erro
function mostrarErro(input, msg) {
    // cria uma div de erro se não existir
    let erroDiv = document.getElementById(`erro-${input.id}`);
    if (!erroDiv) {
        erroDiv = document.createElement('div');
        erroDiv.id = `erro-${input.id}`;
        erroDiv.className = 'erro-msg';
        erroDiv.style.color = 'red';
        erroDiv.style.fontSize = '12px';
        erroDiv.style.marginTop = '2px';
        input.parentNode.insertBefore(erroDiv, input.nextSibling);
    }

    if (msg) {
        input.classList.add('erro');
        erroDiv.textContent = msg;
    } else {
        input.classList.remove('erro');
        erroDiv.textContent = '';
    }
}

// Função principal de validação do formulário
function validaForm() {
    let valido = true;

    // NOME
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '') {
        mostrarErro(nome, 'Preencha o campo Nome');
        valido = false;
    } else {
        mostrarErro(nome, '');
    }

    // NASCIMENTO
    const nascimento = document.getElementById('nascimento');
    if (nascimento.value.trim() === '') {
        mostrarErro(nascimento, 'Preencha o campo Data de Nascimento');
        valido = false;
    } else {
        mostrarErro(nascimento, '');
    }

    // CPF
    const cpf = document.getElementById('cpf');
    if (cpf.value.trim() === '' || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
        mostrarErro(cpf, 'Preencha o campo CPF corretamente (123.456.789-00)');
        valido = false;
    } else {
        mostrarErro(cpf, '');
    }

    // GÊNERO
    const genero = document.querySelector('select[name="genero"]');
    if (genero.value === '#') {
        mostrarErro(genero, 'Selecione um gênero');
        valido = false;
    } else {
        mostrarErro(genero, '');
    }

    // RUA
    const rua = document.getElementById('rua');
    if (rua.value.trim() === '') {
        mostrarErro(rua, 'Preencha o campo Rua');
        valido = false;
    } else {
        mostrarErro(rua, '');
    }

    // NÚMERO
    const numero = document.getElementById('num-casa');
    if (!/^\d{1,5}$/.test(numero.value)) {
        mostrarErro(numero, 'Preencha o campo Número corretamente');
        valido = false;
    } else {
        mostrarErro(numero, '');
    }

    // BAIRRO
    const bairro = document.getElementById('bairro');
    if (bairro.value.trim() === '') {
        mostrarErro(bairro, 'Preencha o campo Bairro');
        valido = false;
    } else {
        mostrarErro(bairro, '');
    }

    // CEP
    const cep = document.getElementById('cep');
    if (!/^\d{5}-\d{3}$/.test(cep.value)) {
        mostrarErro(cep, 'Preencha o campo CEP corretamente (00000-000)');
        valido = false;
    } else {
        mostrarErro(cep, '');
    }

    // CIDADE
    const cidade = document.getElementById('cidade');
    if (cidade.value.trim() === '') {
        mostrarErro(cidade, 'Preencha o campo Cidade');
        valido = false;
    } else {
        mostrarErro(cidade, '');
    }

    return valido;
}

// === FORMATAÇÃO AUTOMÁTICA DO CPF ===
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 3 && valor.length <= 6) {
        valor = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else if (valor.length > 6 && valor.length <= 9) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (valor.length > 9) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2}).*/, '$1.$2.$3-$4');
    }

    e.target.value = valor;
});

// === FORMATAÇÃO AUTOMÁTICA DO CEP ===
const cepInput = document.getElementById('cep');
cepInput.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 5) {
        valor = valor.replace(/(\d{5})(\d{1,3}).*/, '$1-$2');
    }

    e.target.value = valor;
});
