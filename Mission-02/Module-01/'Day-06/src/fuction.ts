function add(num1:number,num2:number):number{

return num1+num2

}

console.log(add(2,3))

//Objects

const poorUser={

    name:"Mezba",
    balance:0,

    addBalance(value:number){

        const totalBalance=this.balance+value
        return totalBalance
    }
    
}