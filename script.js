function length()
{
    let count=String(document.getElementById ("text").value)
    let length=count.length;
    document.getElementById("demo").innerHTML=length; 
}
function Slice()
{
    let count=String(document.getElementById("text-slice").value);
    let a=Number(document.getElementById("First-slice").value);
    let b=Number(document.getElementById("Last-slice").value);
    let c=count.slice(a,b);
    document.getElementById("demo2").innerHTML=c;
}
function substring()
{
    let count=String(document.getElementById("text-substring").value);
    let a=Number(document.getElementById("First-substring").value);
    let b=Number(document.getElementById("Last-substring").value);
    let c=count.substring(a,b);
    document.getElementById("demo3").innerHTML=c;
}
function replace()
{
    let count=String(document.getElementById("text-replace").value);
    let a=String(document.getElementById("current word").value);
    let b=String(document.getElementById("replace word").value);
    let c=count.replace(a,b);
    document.getElementById("demo4").innerHTML=c;
}
function replaceall()
{
    let count=String(document.getElementById("text-replace all").value);
    let a=String(document.getElementById("current-word").value);
    let b=String(document.getElementById("replace-word").value);
    let c=count.replaceAll(a,b);
    document.getElementById("demo5").innerHTML=c;
}
function uppercase()
{
    let count=String(document.getElementById("text-case").value);
    let a=count.toUpperCase();
    document.getElementById("demo6").innerHTML=a;
}
function lowercase()
{
    let count=String(document.getElementById("text-case").value);
    let a=count.toLowerCase();
    document.getElementById("demo7").innerHTML=a;
}
function concat()
{
    let a=String(document.getElementById("First-name").value);
    let b=String(document.getElementById("last-name").value);
    let c=a.concat("",b);
    document.getElementById("demo8").innerHTML=c
}
function trim()
{
    let a=String(document.getElementById("text-trim").value);
    let b=a.trim();
    document.getElementById("demo9") .innerHTML=b;
}
function padstart()
{
    let count=String(document.getElementById("textpad").value);
    let a=Number(document.getElementById("padword").value);
    let b=String(document.getElementById("padtext").value);
    let c=count.padStart(a,b);
    document.getElementById("demo11").innerHTML=c;
}
function padend()
{
    let count=String(document.getElementById("textpad").value);
    let a=Number(document.getElementById("padword").value);
    let b=String(document.getElementById("padtext").value);
    let c=count.padEnd(a,b);
    document.getElementById("demo11").innerHTML=c;
}

