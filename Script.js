/* 
something isn't working here - this only works once even though it should be called
every time the button is clicked... I don't think adding refresh every few seconds
would be a good thing to do though...
*/
function startFunction(){
    if (document.getElementById('credit-panel').style.display='flex') {
        document.getElementById('credit-panel').style.display='none';
    } else {
        document.getElementById('credit-panel').style.display='flex';
    }
}