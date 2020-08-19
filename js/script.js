//To display some text
       // alert("Welcome to javascript");
       // alert("Chiroma just said wow");
        
        //
        //document.write("My name is Omobowale");
    
        //console.log("This is another text");
        document.getElementById("header").innerHTML= "<p style='background-color:red'>This is the header</p>";
        
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("main").style.fontSize = "40px";
        
        //get the button and attach an event to it
        document.getElementById("showbutton").onclick = function (){
            
            //alert("It is working");
            //get the password input and change the type to text
            document.getElementById("password").type = "text";
            
        }
        
        //get the button and attach an event to it
        document.getElementById("switchbutton").onclick = function (){
            
            //change the image
            //first get the image and change the src
            document.getElementById("image").src = "images/bulbon.png";
            
            //change the text on the button
            document.getElementById("switchbutton").innerText = "turn off";
            
        }
        