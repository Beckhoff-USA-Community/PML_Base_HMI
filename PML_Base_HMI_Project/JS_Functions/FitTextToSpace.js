// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function FitTextToSpace(Text, Width, Height, Default) {
                let length = Text.length;       //number of characters that need to be displayed
                let temp1 = Width / length;     //number of pixels available per character by width
                temp1 = temp1 * 1.5;            //scale from width to height (rough guesstimate of the aspect ratio of roboto condensed font)
                if (Default > temp1) {

                    let temp2 = Height / temp1;     //see how many 'rows' of text could be made at the current font size value

                    if (temp2 > 5) {              //if there is a lot of vertical space available
                        temp1 = temp1 * 1.4;          //make the font size bigger (this is intended for small labels and buttons, so intentional 3-row text is not expected)
                    }
                    return temp1;                   //return calculated text height in pixels
                } else {
                    return Default;
                }
            }
            TcHmiProject1.FitTextToSpace = FitTextToSpace;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('FitTextToSpace', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.FitTextToSpace);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);