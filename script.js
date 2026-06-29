function compileCode(){

let code=document.getElementById("code").value;
let output="";

let lines=code.split("\n");

for(let line of lines){

line=line.trim();

if(line.startsWith("print ")){
output+=line.substring(6)+"\n";
}

else if(line.startsWith("let ")){
output+="Variable Created\n";
}

else if(line==""){
}

else{
output+="Syntax Error : "+line+"\n";
}

}

document.getElementById("output").innerText=output;

}
