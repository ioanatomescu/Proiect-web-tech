function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  
function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
  
function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
  
function f9() {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}
function save(){
    var text=document.getElementById("textarea1").value;
    text=text.replace(/\n/g,"\r\n");
    var blob=new Blob([text],{type:"text/plain"});
    var anchor=document.createElement("a");
    anchor.download="keyboard_lexilogos.txt";
    anchor.href=window.URL.createObjectURL(blob);
    anchor.target="blank";
    anchor.style.display="none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);}
    
    
 