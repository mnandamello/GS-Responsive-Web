function obrigatorio(){

  var Nome = document.formContact.nome;
  var Sobrenome = document.formContact.sobrenome;
  var Nascimento = document.formContact.nascimento;
  var EstadoCivil = document.formContact.estCivil;
  var Tel = document.formContact.telefone;
  var Cel = document.formContact.celular;
  var Email = document.formContact.email;
  var Assunto = document.formContact.assunto;
  var Msg = document.formContact.msg;

  var lista = [Nome, Sobrenome, Nascimento, EstadoCivil, Tel, Cel, Email, Assunto, Msg]

  var feedback = document.getElementById("retorno");

  for (var contador = 0; contador < 9; contador++){
    if (lista[contador].value == ""){
        lista[contador].style.border = "1px solid";
        lista[contador].style.borderColor = "red";
    }else{
        lista[contador]
        lista[contador].style.border = "none";
    }
  }

  for (var contador = 0; contador < 9; contador++){
    if (lista[contador].value == ""){
        feedback.innerHTML = "Preencha os campos obrigatórios.";
        feedback.style.fontSize = "20px";
        return false;
    }
  }

  alert("Sua mensagem foi enviada com sucesso!")
  return true;


}

