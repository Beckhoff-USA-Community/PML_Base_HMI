// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GetParentByName(TreeDef, NodeName) {

                var i;
                console.log("ingetparent nodename: " + NodeName)
                
                for (i = 0; i < TreeDef.length; i++) {
                    if (TreeDef[i].sName == NodeName) {
                        if (TreeDef[i].nParent >= 0) {
                            console.log("ingetparent return: " + TreeDef[TreeDef[i].nParent].sName)
                            return TreeDef[TreeDef[i].nParent].sName;
                        }
                    }
                }
                return '';
            }
            TcHmiProject1.GetParentByName = GetParentByName;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GetParentByName', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GetParentByName);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);