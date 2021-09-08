var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var outputTxt = document.querySelector("#outputTxt");
var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error ocurred", error);
    alert("Something went wrong try again after sometime ");
}

function clickHandler() {
    // outputTxt.innerHTML = "afsgfgfgf " + txtInput.value;
    let inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerHTML = translatedText; //output
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);