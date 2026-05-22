let alunos = ["Maria", "Jonas"];
function heValido(nome)
{       //trim - remove os espaços em branco da string
    if (nome.trim() !="")

        return true;

    return false;
}
function matricular()
{
let nome = document.getElementById("nome").value;
if (heValido(nome))
    {
alunos.push(nome);
   }
console.log(alunos);
exibeMatriculas()

}
function exibeMatriculas()
{
    let listas = document.getElementById("listas");
      
    listas.innerHTML = ""; // reiniciar o conteudo
    alunos. forEach(e => 
    {
        // gerar a tag <li>Maria</li>
        // += (contatenaçao)
        listas.innerHTML += `<li>${e}</li>`;

    });


}
exibeMatriculas()
