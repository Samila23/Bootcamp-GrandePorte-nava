function mascara(src, mask) {
					
	var i = src.value.length;
	var saida = "#";
	var texto = mask.substring(i)
	var aux = 0;
	console.log("i="+i);
	console.log("saida="+saida);
	console.log("texto="+texto);
	console.log("texto.substr(aux, 1)="+texto.substr(aux, 1));
	console.log("-------------------------");
	
	while (aux<=i && texto.substr(aux, 1) != saida) {
	   console.log("texto.substr(aux, 1)="+texto.substr(aux, 1));
	   console.log("aux="+aux);
	   src.value += texto.substr(aux, 1);
	   aux++;
}
console.log("saiu do laço");
}
function PessoaJuridicaFisica(tipo){
	if(tipo == 'fisica'){
		document.getElementById("id_cpf").style.display = "inline";
		document.getElementById("id_cnpj").style.display = "none";
		document.getElementById("Preencimento_id_cnpj").value = null;
	}
	if(tipo == 'juridica'){
		document.getElementById("id_cnpj").style.display = "inline";
		document.getElementById("id_cpf").style.display = "none";
		document.getElementById("Preencimento_id_cpf").value = null;
	}

}
function CalcularTroco(tipo){
var valorCompra   = parseInt(document.getElementById("ValorCompra").value);
var valorRecebido = parseInt(document.getElementById("ValorRecebido").value);
var name          = document.getElementById("name").value;
var troco;

/*if(name == null || name == ""){
	alert("O campo Nome precisa ser preenchido corretamente");
}
if(!(name == NaN)){
	alert("O campo Nome não pode conter números");
}
if(valorCompra.value == null || valorCompra.value == ""){
	alert("Campo: Valor compra não pode ser vazio");
}
if(valorRecebido.value == null || valorRecebido.value == ""){
	alert("Campo: Valor recebido não pode ser vazio");
}
*/
if(valorCompra > valorRecebido){
	alert("O valor recebido precisa ser superior ao valor da sua compra.");
}
else
	if(valorCompra <= valorRecebido){
		troco = valorRecebido - valorCompra;
		document.getElementById("MostrarTroco").innerHTML= "Troco: R$ " + troco;

		document.getElementById("AdicionarNovaCompraouFinalizar").style.display = "inline";

		if(tipo == 'Calcular'){
			document.getElementById("Calcular").style.display = "none";
			document.getElementById("Limpar").style.display = "inline";
		}
	}
}
function experienciaBoaouRuim(tipo){

if (tipo == 'Sim'){
	document.getElementById("AdicionarNovaCompraouFinalizar").style.display = "none";
	document.getElementById("NaoIncluirNovoItem").style.display = "none";
	document.getElementById("FinalizandoCompra").style.display = "inline";
	document.getElementById("BotoesEnviarCalcular").style.display = "none";
	
}
if (tipo == 'Nao'){
	document.getElementById("AdicionarNovaCompraouFinalizar").style.display = "none";
	document.getElementById("IncluirItem").style.display = "inline";
	document.getElementById("IncluirItemOpcoesSimNao").style.display = "inline";
	document.getElementById("FinalizandoCompra").style.display = "none";
	document.getElementById("BotoesEnviarCalcular").style.display = "none";
}
}
function FinalizarOuInserir(tipo){
if(tipo == 'Sim'){
	document.getElementById("InserNovoItem").style.display = "inline";
	document.getElementById("NaoIncluirNovoItem").style.display = "none";
}
if(tipo == 'Nao'){
	document.getElementById("NaoIncluirNovoItem").style.display = "inline";
	document.getElementById("InserNovoItem").style.display = "none";
}
}
function NovoItem(){
var x = document.getElementById("ValorDoItemNovo").value;
var vetor = [];
var retorno = vetor.push(x);
console.log(vetor);
document.getElementById("MostrarValoraPagar").innerHTML = "Novo valor a pagar : R$ " + vetor.pop();
}
function limpar(tipo){
if(tipo == 'Limpar'){
			document.getElementById("Calcular").style.display = "inline";
			document.getElementById("Limpar").style.display = "inline";  
}
document.getElementById("AdicionarNovaCompraouFinalizar").style.display = "none";
document.getElementById("MostrarTroco").innerHTML= null;
document.getElementById("ValorCompra").value= null;
document.getElementById("ValorRecebido").value= null;
document.getElementById("name").value= null;
document.getElementById("cep").value= null;

}