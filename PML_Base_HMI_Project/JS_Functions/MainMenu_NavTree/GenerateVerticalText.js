// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GenerateVerticalText(Text) {
                var i;
                resultText = '';
                var array;

                array = Text.split("");

                for (i = 0; i < array.length; i++) {
                    resultText = resultText + array[i] + '\n';
                }
                return resultText;
            }
            TcHmiProject1.GenerateVerticalText = GenerateVerticalText;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GenerateVerticalText', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GenerateVerticalText);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);