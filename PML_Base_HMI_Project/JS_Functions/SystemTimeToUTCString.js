// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function SystemTimeToUTCString(TimeString, ResultString) {
                var splitTimeString = TimeString.split(/\s*\-\s*/g);
                var year = splitTimeString[0];
                var month = splitTimeString[1];
                var day = splitTimeString[2];
                var time = splitTimeString[3];
                var timeNoMS = time.split(/\s*\.\s*/g)[0];
                var monthWord;


                
                ResultString.Common.Text = (year + '-' + month + '-' + day + 'T' + time);
                return
            }
            TcHmiProject1.SystemTimeToUTCString = SystemTimeToUTCString;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('SystemTimeToUTCString', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.SystemTimeToUTCString);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);