// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function FormatTimeString(TimeString) {
                var splitTimeString = TimeString.split(/\s*\-\s*/g);
                var year = splitTimeString[0];
                var month = splitTimeString[1];
                var day = splitTimeString[2];
                var time = splitTimeString[3];
                var timeNoMS = time.split(/\s*\.\s*/g)[0];
                var monthWord;

                switch (month) {
                    case '01':
                        monthWord = 'January';
                        break;
                    case '02':
                        monthWord = 'February';
                        break;
                    case '03':
                        monthWord = 'March';
                        break;
                    case '04':
                        monthWord = 'April';
                        break;
                    case '05':
                        monthWord = 'May';
                        break;
                    case '06':
                        monthWord = 'June';
                        break;
                    case '07':
                        monthWord = 'July';
                        break;
                    case '08':
                        monthWord = 'August';
                        break;
                    case '09':
                        monthWord = 'September';
                        break;
                    case '10':
                        monthWord = 'October';
                        break;
                    case '11':
                        monthWord = 'November';
                        break;
                    case '12':
                        monthWord = 'December';
                        break;
                }
                return (monthWord + ' ' + day + ', ' + year + ':\n' + timeNoMS);
            }
            TcHmiProject1.FormatTimeString = FormatTimeString;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('FormatTimeString', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.FormatTimeString);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);