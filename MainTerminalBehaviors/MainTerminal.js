var terminalControl;

var sequencer = [
    {text:"", interval:0},
    {text:"INITIATING TERMINAL 2", interval:50},
    {text:"time to move into important stuff captain", interval:10},
    {text:"First, we need a terminal", code:"", interval:30, Delay:300},
    {text:"", code:"makeItNormal()", Delay:500},
    {text:"Kinda, lame for high banana terminal stuffs", interval:10},
    {text:"We need more fancy terminal!!!!", interval:20},
    {text:"INITIATING PROTOCOL OMEGA", interval:75},
    {text:"--------------------------------------", interval:50 },
    {text:"MAKE IT BADASS", interval:50, code:"makeItBadass()", Delay:1000},
    {text:"ok, much better", interval:30},
    {text:"Let's get to work", interval:40, Delay: 1000},
    {text:"", interval:0, code:"clearTerminal()"},
    {text:"", interval:0},
    {text:"1. Create the work space", code:"createTheWorkSpace()" ,interval:30, Delay:100},
    {text:"2. Create a place to write code", code:"createCodeWorkSpace()", interval:30, Delay:100},
    {text:"3. Hide fancy terminal, and start!", code:"hideTerminal()", interval:30, Delay:1000},
    {text:"      BAD ASS TERMINAL", interval:0, code:"EndSession()", Delay:500}

];
function EndSession() {
    StartCodeTerminal();
}

function hideTerminal() {
    var _d = document.getElementById("terminal-right");
    clearTerminal();
    _d.classList.remove("terminal");
    _d.classList.add("hideTerminal");
}

function createCodeWorkSpace() {
    var _d = document.createElement("div");
    _d.classList.add("codeWorkSpace");
    _d.id = "terminalCode";
    var _pre = document.createElement("pre");

    var _span_code = document.createElement("span");
    var _span_indicator = document.createElement("span");

    _span_code.id = "msg-codeTerminal";
    _span_indicator.innerHTML = "_";
    _d.appendChild(_pre);
    _pre.appendChild(_span_code);
    _pre.appendChild(_span_indicator);
    document.body.appendChild(_d);
}

function createTheWorkSpace() {
    document.body.style.backgroundColor = "grey";
}

function clearTerminal(){
    document.getElementById("msg-right").innerHTML = "";
}

function makeItNormal() {
    var _b = document.getElementById("terminal-right");
    _b.classList.remove("terminal-fullScreen");
    _b.classList.add("terminal");
    _b.classList.add("terminal-normal");
}

function newFunction() {
    console.log("whatever");
}


function makeItBadass() {
    var _b = document.getElementById("terminal-right");

    _b.classList.remove("terminal-normal");
    _b.classList.add("badass-terminal");
}

function callbackFunction(){
    console.log("a");
}

function MainTerminal_Start() {
    var init2 = {
        messageArray:sequencer,
        index:0,
        domTargetId:"msg-right"
    };
    terminalControl = new TerminalEffect();
    terminalControl.showNext(init2, callbackFunction);
}


(function(){
    MainTerminal_Start();
})()

