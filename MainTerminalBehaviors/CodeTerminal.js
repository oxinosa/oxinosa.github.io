var codeControl;

var sequencerCode = [
    {text:"", interval:0},
    {text:"INITIATING TERMINAL 2", interval:50},
    {text:"-----------------------------", interval:20},
    {text:"console.log('Hello World!');", interval:30},
    {text:"function MakeDiv(){ ", interval:30},
    {text:"   alert('Jaja');", interval:30},
    {text:"}", interval:30},
    {text:"console.log('Hello World!');", interval:30},
    {text:"function MakeDiv(){ ", interval:30},
    {text:"   alert('Jaja');", interval:30},
    {text:"}", interval:30, code:"Highlightcode()"}

];

function Highlightcode(){
    hljs.highlightBlock(document.getElementById("msg-codeTerminal"));
}

function StartCodeTerminal(){
    var init2 = {
        messageArray:sequencerCode,
        index:0,
        domTargetId:"msg-codeTerminal"
    };
    codeControl = new TerminalEffect().showNext(init2);
}
