// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GetChildrenCount(Children) {
                var i;
                for (i = 0; i < Children.length; i++) {
                    if (Children[i] == '') {
                        return i;
                    }
                }
                return Children.length;
            }
            TcHmiProject1.GetChildrenCount = GetChildrenCount;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GetChildrenCount', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GetChildrenCount);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);