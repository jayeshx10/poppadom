var btn  = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");     
var outputDiv = document.querySelector("#output");    
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){        
    return serverURL + "?" + "text=" + input 
}

function errorHandler(error){  
    console.log("Error occured: ",error);
    alert("Something wrong with the server. Try again after sometime");
}

function clickHandler() {     
    var inputText = txtInput.value ; 
 
    fetch(getTranslationURL(inputText)) 
    .then(response => response.json()) 
    .then(json => {
        var translatedText = json.contents.translated;  
        outputDiv.innerText =  translatedText ; 
    })
    .catch(errorHandler)  
};

btn.addEventListener("click", clickHandler); 