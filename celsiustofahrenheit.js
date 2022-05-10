function convertDegrees(degree){

    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error ('Grau não identificado! Use "F" ou "C"')
    }
    // Fluxo ideal, Fahrenheit to Celsius
    let updatedDegree = degree.toUpperCase().replace("F","")
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign= 'C'

    //Fluxo alternativo C -> F
    if(celsiusExists){
        updatedDegree = degree.toUpperCase().replace("C","")
        formula = celsius => celsius * 9/5 + 32
        degreeSign= 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(convertDegrees("50C"))
} catch (error){
    console.log(error.message)
}