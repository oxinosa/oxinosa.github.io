function TerminalEffect(){

    this.setText = function (row, index, initObj){
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
                        this.showNext(initObj);
                    }, row.Delay)
                }else {
                    this.showNext(initObj);
                }

            }

        }, row.interval);
    }

    this.showNext = function (initObj) {

        if(initObj.index <= initObj.messageArray.length -1) {
            var _row = initObj.messageArray[initObj.index];
            _row.text += "\n";
            this.setText(_row, 0, initObj);
        } else {

            console.log("Done");
        }
    }

}

