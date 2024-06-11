window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function isScriptAlreadyIncluded(src) {
  return document.querySelectorAll(`script[src="${src}"]`).length > 0;
}

function loadScript(src) {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
}

const jquerySrc = 'https://code.jquery.com/jquery-3.6.0.min.js';
const customLibSrc = 'https://cdn.jsdelivr.net/gh/nrzmalik/nrzXoom/script.js';

loadScript(jquerySrc);
loadScript(customLibSrc);

}

window.Script2 = function()
{
  window.speechSynthesis.cancel();
toggleSpeechRecognition();
}

window.Script3 = function()
{
  speakResponse();
}

window.Script4 = function()
{
  window.speechSynthesis.cancel();
}

window.Script5 = function()
{
  window.speechSynthesis.cancel();
toggleSpeechRecognition();
}

window.Script6 = function()
{
  window.speechSynthesis.cancel();
toggleSpeechRecognition();
}

window.Script7 = function()
{
  ExportChat();
}

};
