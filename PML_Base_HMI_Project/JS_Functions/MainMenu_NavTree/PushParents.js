///<reference path="GetParentByName.js" />
// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function PushParents(TreeDef, Self) {
               // var done;
               // while (!done) {
                var parent = TcHmi.Functions.TcHmiProject1.GetParentByName(TreeDef, Self);
                if (parent != '') {
                    document.getElementById(parent + '_Level.SideBar').style.width = "35px";
                    var parentHeight = document.getElementById(parent + '_Level').style.height;
                    var parentChildren = TcHmi.Functions.TcHmiProject1.GetChildrenByName(TreeDef, parent);
                    var parentChildrenCount = TcHmi.Functions.TcHmiProject1.GetChildrenCount(parentChildren);
                    var selfChildren = TcHmi.Functions.TcHmiProject1.GetChildrenByName(TreeDef, Self);
                    var selfChildrenCount = TcHmi.Functions.TcHmiProject1.GetChildrenCount(Self);

                    if (parentChildrenCount > selfChildrenCount) {
                        document.getElementById(Self + '_Level').setAttribute('data-tchmi-height-mode', 'Value');
                        document.getElementById(Self + '_Level').style.height = parentHeight;
                    }
                    TcHmi.Functions.TcHmiProject1.PushParents(TreeDef, parent);
                    var left = parseInt(document.getElementById(parent + '_Level').style.left) + 35;
                    document.getElementById(parent + '_Level').style.left = left + 'px';
                }
            }
            TcHmiProject1.PushParents = PushParents;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('PushParents', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.PushParents);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);