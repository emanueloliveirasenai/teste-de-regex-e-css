function validaForm(){
    
    let nome = document.getElementById('nome');
    if(nome.value === ""){
        alert("Preencha o campo Nome:");
        nome.focus();
        return false;
    } 

    let nascimento = document.getElementById('nascimento');
    if(nascimento.value === ""){
        alert("Preencha o campo Data de Nascimento:");
        nascimento.focus();
        return false;
    }
    
    let cpf = document.getElementById('cpf');
    if(cpf.value === ""){
        alert("Preencha o campo CPF:");
        cpf.focus();
        return false;
    }

    let genero = document.frmcadastro.genero;
    if(genero.value === "#"){
        alert("Preencha o campo Gênero");
        genero.focus();
        return false;
    }
}