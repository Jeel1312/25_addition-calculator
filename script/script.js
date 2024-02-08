function sum() {
    let a = document.getElementById("fn").value;
    let b = document.getElementById("sn").value;
    let c = Number(a)+Number(b);
    document.getElementById("sum").innerHTML= "The sum of "+a+" and "+b+ " is : "+c; 
}
