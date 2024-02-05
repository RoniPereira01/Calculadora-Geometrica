function calcularAreaTriangulo(){
   const base = prompt("informe a base do triangulo")
   const Altura = prompt("informe a Altura do triangulo")
   return base * Altura / 2
}
function calcularAreaRetangulo(){
    const base = prompt("informe a base do retangulo")
    const Altura = prompt("informe a Altura do retangulo")
    return base * Altura 
 }
 function calcularAreaQuadrado(){
    const lado = prompt("informe o lado do quadrado")
    return lado * lado 
 }
 function calcularAreatrapezio(){
    const baseMaior = parseFloat( prompt("informe a base maior do trapezio"))
    const baseMenor = parseFloat(prompt("informe a base menor do trapezio"))
    const altura = prompt("informe a base maior do trapezio")
    return (baseMaior + baseMenor) * altura / 2 
 }
 function calcularAreaCirculo(){
    const raio = prompt("informe o raio do circulo")
    return (3.,14 * raio * raio) 
 }

 function exibirMenu(){
    return prompt(
    "Calculadora Geometrica\n"   +
    "1. Calcular area de triangulo\n" +
    "2. Calcular area de retangulo\n" +
    "3. Calcular area de quadrado\n" +
    "4. Calcular area de trapezio\n" +
    "5. Calcular area de circulo\n" +
    "6. Sair\n" 
    )
 }

 function executar(){
    let opcao = ""
    do{
        opcao = exibirMenu()
       let resultado

       switch (opcao){
        case "1":
            resultado =calcularAreaTriangulo()
            break
        case "2":
            resultado =calcularAreaRetangulo()
            break
        case "3":
            resultado =calcularAreaQuadrado()
            break
        case "4":
            resultado =calcularAreatrapezio()
            break
        case "5":
            resultado =calcularAreaCirculo()
            break
        case "6":
            alert("Saindo invalida.")
       }
        if(resultado){
            alert="Resultado :" + resultado
        }
        
    }while (opcao !== "6")
 }

executar()