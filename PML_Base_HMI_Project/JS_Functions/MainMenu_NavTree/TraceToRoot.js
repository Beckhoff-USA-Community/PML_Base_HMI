// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function TraceToRoot(TreeDef, NodeName) {
                let i = 0;
                let parents = [];
                let parentsreturn = [];
                let parent;
                console.log(NodeName);
                for (i = 0; i < 15; i++) {
                    parent = TcHmi.Functions.TcHmiProject1.GetParentByName(TreeDef, NodeName);

                    console.log(parent);
                    if (parent != '') {
                        parents[i] = parent;
                        NodeName = parent;
                    } else {
                        for (i = 0; i < parents.length; i++) {
                            parentsreturn[i] = parents[parents.length - 1 - i];
                        }
                        for (i = parents.length; i < 16; i++) {
                            parentsreturn[i] = '';
                        }
                        return parentsreturn;
                    }
                }
            }
            TcHmiProject1.TraceToRoot = TraceToRoot;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('TraceToRoot', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.TraceToRoot);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);