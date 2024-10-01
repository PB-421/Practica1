const array:number[] = [8,1,4,6,5,9,21,10];




function quicksort(arrayi:number[]): number[] {
    if(arrayi.length<=1){//Asi me aseguro q el array tiene al menos 2 elementos y me evito problemas
        return arrayi
    } else {
    let pivote = arrayi[0];
    let arraym:number[] = []
    let arrayM:number[] = []
    arrayi.forEach((num:number)=> {//nunca tenemos en cuanta en pivote, por lo que la longitud siempre se reducira en -1 cada vez q itero, asi hasta q llegue al caso base
        if(num<pivote){
            arraym.push(num)
        } else if (num>pivote)  {
            arrayM.push(num)
        }
    })
    return quicksort(arraym).concat(pivote).concat(quicksort(arrayM))//Esto devuelve una concatenacion de los menores,pivote y mayores
    }
    
}

console.log(quicksort(array))

