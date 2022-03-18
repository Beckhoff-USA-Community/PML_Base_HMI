// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GetChildrenByName(TreeDef, NodeName) {
                var i;
                var j;
                var children = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
                for (i = 0; i < TreeDef.length; i++) {
                    if (TreeDef[i].sName == NodeName) {
                        for (j = 0; j < TreeDef[i].a_nChildren.length; j++) {
                            if (TreeDef[i].a_nChildren[j] > 0) {
                                
                                children[j] = TreeDef[TreeDef[i].a_nChildren[j]].sName;
                            } else {
                                return children;
                            }
                        }

                    } else if (TreeDef[i].sName == '') {
                        return;
                    }
                }
            }
            TcHmiProject1.GetChildrenByName = GetChildrenByName;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GetChildrenByName', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GetChildrenByName);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);