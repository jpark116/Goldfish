
function hide(){
    var x = document.getElementById("lorem")
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display="block";
    }
    

}    

function cartTotal(p1, p2, p3, p4){
    return p1 + p2 + p3 + p4;
}

let result = cartTotal(1, 2, 3, 4);
document.getElementById("total").innerHTML = result;