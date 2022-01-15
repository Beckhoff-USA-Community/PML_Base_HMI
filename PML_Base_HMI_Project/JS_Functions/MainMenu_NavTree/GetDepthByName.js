// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GetDepthByName(TreeDef, sName) {
                var i;

                for (i = 0; i < TreeDef.length; i++) {
                    if (TreeDef[i].sName == sName) {
                        return TreeDef[i].nDepth;
                    }
                }
                return;
            }
            TcHmiProject1.GetDepthByName = GetDepthByName;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GetDepthByName', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GetDepthByName);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);