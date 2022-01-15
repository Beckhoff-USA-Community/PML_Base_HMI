// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function CollapseLevel(LevelID) {
                $("[id='" + LevelID + "']").css('left', "-350px");
                if (document.getElementById(LevelID + '.SideBar') != null) {
                    document.getElementById(LevelID + '.SideBar').style.width = "0px";
                    document.getElementById(LevelID + '.SideBar').setAttribute('collapsed', 'true');
                }
                
                setTimeout(function () {
                    if ($("[id='" + LevelID + "']").attr('collapsed') == 'true') {
                        $("[id='" + LevelID + "']").hide();
                    }
               }, 350);
            }
            TcHmiProject1.CollapseLevel = CollapseLevel;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
        Functions.registerFunctionEx('CollapseLevel', 'TcHmi.Functions.TcHmiProject1', TcHmiProject1.CollapseLevel);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);