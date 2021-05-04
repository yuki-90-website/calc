function add() {
    var a = Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value);
    var an = Number(document.getElementById("n1").value) + " + " + Number(document.getElementById("n2").value) + " = " + a;
    window.alert(an);
    console.log(an);
}
function minus() {
    var m = Number(document.getElementById("n1").value) - Number(document.getElementById("n2").value);
    var an = Number(document.getElementById("n1").value) + " - " + Number(document.getElementById("n2").value) + " = " + m;
    window.alert(an);
    console.log(an);
}
function multi() {
    var mu = Number(document.getElementById("n1").value) * Number(document.getElementById("n2").value);
    var an = Number(document.getElementById("n1").value) + " x " + Number(document.getElementById("n2").value) + " = " + mu;
    window.alert(an);
    console.log(an);
}
function div() {
    var d = Number(document.getElementById("n1").value) / Number(document.getElementById("n2").value);
    var an = Number(document.getElementById("n1").value) + " / " + Number(document.getElementById("n2").value) + " = " + d;
    window.alert(an);
    console.log(an);
}