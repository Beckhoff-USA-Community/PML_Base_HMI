// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function CollapseAllDescendants(TreeDef, sName) {
                var depth = TcHmi.Functions.TcHmiProject1.GetDepthByName(TreeDef, sName);

                var levels = TcHmi.Functions.TcHmiProject1.GetAllExpandedLevels();
                var i;
                if (levels.length) {
                    for (i = 0; i < levels.length; i++) {
                        if (levels[i].getAttribute('nav-tree-depth') > depth) {
                            TcHmi.Functions.TcHmiProject1.CollapseLevel(levels[i].id);
                        }
                    }
                    document.getElementById(sName + '_Level').style.left = '0px';
                    document.getElementById(sName + '_Level.SideBar').style.width = '0px';
                    TcHmi.Functions.TcHmiProject1.DragParents(TreeDef, sName);
                }
                
            }
            TcHmiProject1.CollapseAllDescendants = CollapseAllDescendants;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('CollapseAllDescendants', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.CollapseAllDescendants);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);