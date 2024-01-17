const str = prompt ("1,2,3,3,5,9");
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    console.log(this.data.length);
    return this.data.length
  }
  printNumbers() {
    //print the numbers in data
    console.log(this.data);
  }
  odds() {
    //return the odd numbers in data
  }
}
let numcalcs = new Numbers (str)
numcalcs.count() 
numcalcs.printNumbers()
numcalcs.odds()