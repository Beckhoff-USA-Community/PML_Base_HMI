// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GetAllExpandedLevels() {
               return $("div[data-tchmi-target-user-control='Controls/NavTree_Level.usercontrol'], [collapsed='false']").get();
            }
            TcHmiProject1.GetAllExpandedLevels = GetAllExpandedLevels;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GetAllExpandedLevels', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GetAllExpandedLevels);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);