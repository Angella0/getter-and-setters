var kiosk={
fruit:"mango,mango,mango,mango",

    get fruitB(){
        return '${this.fruit}';
    },
    set fruitB(value){
        [this.fruit]=value;

    } 
};
console.log(kiosk);
