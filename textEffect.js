var messageObj2 = [
    {text:"", interval:50},
    {text:"//Lets make some code", interval:50},
    {text:"document.body.style.backgroundColor = '#C0C0C0'", code:"changeBackgroundColor()", interval:50},
    {text:"//Lets move this block down, so we see better", interval:50},
    {text:"moveDown();", code:"movePreDown()", interval:50, Delay:2000},
    {text:"makeShorter();", code:"makeShorter()", interval:50, Delay: 2000},
    {text:"makeFatter();", code:"makeFatter()", interval:50, Delay:2000},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
    {text:"//This is text to test editor", interval:20},
];









function SetText(row, index, initObj){
    var domElement = document.getElementById(initObj.domTargetId);

        setTimeout(function () {

            if (index < row.text.length) {
                domElement.scrollIntoView(false);
                domElement.innerHTML += row.text[index++];
                SetText(row, index, initObj);
            } else {
                eval(initObj.messageArray[initObj.index++].code);

                if(row.Delay) {
                    setTimeout(function(){
                        showNext(initObj);
                    }, row.Delay)
                }else {
                    showNext(initObj);
                }

            }

        }, row.interval);
}

function showNext(initObj) {
    if(initObj.index <= initObj.messageArray.length -1) {
        var _text = initObj.messageArray[initObj.index].text + "\n";
        var _row = initObj.messageArray[initObj.index];
        _row.text += "\n";
        SetText(_row, 0, initObj);
    } else {
        console.log("Done");
    }
}

function start(){
    var initObject = {
        messageArray:messageObj2,
        index:0,
        domTargetId:"msg"
    };
    //showNext(initObject);
    //new TerminalEffect().showNext(initObject);

    //MainTerminal_Start();
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = "#C0C0C0 ";
}

function createDiv() {
    var _div = document.createElement('div');
    _div.classList.add("newDivPosition");
    document.body.appendChild(_div);

}

function movePreDown() {
    var _b = document.getElementById("terminal");
    _b.classList.add("moveToBottom");

}

function makeShorter() {
    var _b = document.getElementById("terminal");
    _b.classList.add("height200px");
}

function makeFatter() {
    var _b = document.getElementById("terminal");
    _b.classList.add("width600px");
}


(function(){
    start();
    //createDiv();
})();