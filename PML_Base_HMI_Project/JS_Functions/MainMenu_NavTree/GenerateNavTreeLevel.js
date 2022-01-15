/// <reference path="GetParentByName.js" />
/// <reference path="GetChildrenByName.js" />
// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function GenerateNavTreeLevel(TreeDef, TopModuleName) {
               
                let levelID = TopModuleName + '_Level';
                
                if ($("[id='" + levelID + "']").length) {
                    $("[id='" + levelID + "']").show();
                } else {
                    var level = TcHmi.ControlFactory.createEx(
                        'tchmi-user-control-host',
                        levelID,
                    {
                        'data-tchmi-target-user-control' : 'Controls/NavTree_Level.usercontrol',
                        'data-tchmi-top': 5,
                        'data-tchmi-left': -345,
                        'data-tchmi-width': 350,
                        'data-tchmi-top-unit': '%',
                        'data-tchmi-left-unit': 'px',
                        'data-tchmi-width-unit': 'px',
                        'data-tchmi-height-mode': 'Content',
                        'data-tchmi-zindex': 40,
                        'data-tchmi-class-names': ['navtree-level', 'animate-all-properties'],
                        'data-tchmi-TreeDef': TreeDef,
                        'data-tchmi-TopModuleName': TopModuleName,
                        'collapsed': 'true',
                        'nav-tree-depth': TcHmi.Functions.TcHmiProject1.GetDepthByName(TreeDef, TopModuleName)
                    },
                    TcHmi.Controls.get('Desktop')
                    );
                }
                setTimeout(function () { document.getElementById(levelID).style.left = "0px"; document.getElementById(levelID).setAttribute('collapsed', 'false'); }, 1);
            }
            TcHmiProject1.GenerateNavTreeLevel = GenerateNavTreeLevel;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('GenerateNavTreeLevel', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.GenerateNavTreeLevel);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);