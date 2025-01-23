class ingred{
    constructor(name,qty,unit){
        this.name = name;
        this.qty = qty;
        this.unit = unit;
    }
}
  let arr = [];
  for(let i =0;i<5;i++){
    arr.push(new ingred("ravi",23,123));
  }
  console.log(arr);