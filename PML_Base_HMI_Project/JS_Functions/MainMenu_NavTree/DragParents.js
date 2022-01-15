// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function DragParents(TreeDef, Self) {
                var parent = TcHmi.Functions.TcHmiProject1.GetParentByName(TreeDef, Self);
                if (parent != '') {
                    var left = parseInt(document.getElementById(Self + '_Level').style.left) + 35;
                    document.getElementById(parent + '_Level').style.left = left + 'px';
                    TcHmi.Functions.TcHmiProject1.DragParents(TreeDef, parent);
                }
            }
            TcHmiProject1.DragParents = DragParents;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('DragParents', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.DragParents);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);