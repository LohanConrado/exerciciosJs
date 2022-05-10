let students = [
    Lohan = {
    name:"Lohan",
    age:24,
    score:100,
},
    Naiara = {
    name:"Naiara",
    age:24,
    score:89,
},
Paulo = {
    name:"Paulo",
    age:24,
    score:50,
}]

let arrayLength = (students.length - 1)

console.log(students)

/* Noob way to do it
for (let position = 0; position <= (arrayLength) ;position++){
    if(alunos[position].nota >= 90 && alunos[position].nota <= 100 ){
        console.log(`A nota de ${alunos[position].name} foi alterada com sucesso para: A`)
        alunos[position].nota = "A"
    }
    else if(alunos[position].nota < 90 && alunos[position].nota >= 80){
        console.log(`A nota de ${alunos[position].name} foi alterada com sucesso para: B`)
        alunos[position].nota = "B"
    }
    else if(alunos[position].nota < 80 && alunos[position].nota >= 70){
        console.log(`A nota de ${alunos[position].name} foi alterada com sucesso para: C`)
        alunos[position].nota = "C"
    }
    else if(alunos[position].nota < 70 && alunos[position].nota >= 60){
        console.log(`A nota de ${alunos[position].name} foi alterada com sucesso para: D`)
        alunos[position].nota = "D"
    }
    else if(alunos[position].nota < 60 && alunos[position].nota >= 0){
        console.log(`A nota de ${alunos[position].name} foi alterada com sucesso para: F`)
        alunos[position].nota = "F"
    }
}
*/

function scoreConverter(score,students){
        
    let scoreA = score >= 90 && score <= 100
    let scoreB = score < 90 && score >= 80
    let scoreC = score < 80 && score >= 70
    let scoreD = score < 70 && score >= 60
    let scoreF = score < 60 && score >= 0

    if(scoreA){
        score = "A"
        console.log(`${students} score changed to ${score}`)
        }
    else if(scoreB){
        score = "B"
        console.log(`${students} score changed to ${score}`)
    }
    else if(scoreC){
        score = "C"
        console.log(`${students} score changed to ${score}`)
    }
    else if(scoreD){
        score = "D"
        console.log(`${students} score changed to ${score}`)
    }
    else if(scoreF){
        score = "F"
        console.log(`${students} score changed to ${score}`)
    } 
    else {
        console.log("Nota inválida")
    }
    }
    
    for (let position = 0; position <= (arrayLength) ;position++){
        scoreConverter(students[position].score, students[position].name)
    }
