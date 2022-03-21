(function() {
    "use strict";
    let el = function(element) {
        if(element.charAt(0) === "#") {
            return document.querySelector(element);
        }
        return document.querySelectorAll(element);
    };
});

let viewer = el("#viewer"),
equals = el("equals"),
nums = el(".main-num"),
ops = el("operator"),
theNum = "",
oldNum = "",
resultNum,
operator;