/* 
Skript slouží k vypsání maximální délky všech polí na stránce (podle atributu maxLength).
Skript spusťte z vývojářské konzole (F12) v libovolném moderním prohlížeči.

Script to write out the maximum lenght of all text and textarea fields on a webpage (webform) - based on maxLength attribute. 
Run the script from the developer console (F12) of any modern browser.
 */

//nejdříve vyzobe ze stránky všechna textová pole a textové oblasti
//first, it selects all text fields and textarea fields from the document
var inputs = document.querySelectorAll("input[type=text], textarea");

//funkce pro vytažení id pole a maximální délky pole
//function to get maxLength for a single id

function getMaxLenghtByIds(id) {
    var x = document.getElementById(id).maxLength;
    var y = document.getElementById(id).id;
    console.log(y + ": " + x);
};

// cyklus, který spustí funkci getMaxLenghtByIds pro jednotlivé elementy v poli inputs
// loop to iterate the array of the selected fields and write out their ids and maxLength value

var i;

for (i = 0; i < inputs.length; i++) {
    if (inputs[i].id != null && inputs[i].id != '') {
        if (inputs[i].maxLength > 1 && inputs[i].maxLength != '') {

            getMaxLenghtByIds(inputs[i].id);
        }
    }
}
