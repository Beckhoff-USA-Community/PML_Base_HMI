// Keep these lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Place your code here!

        $(document).mousedown(__documentClickHandler);

        function __documentClickHandler(event) {

            let element = event.srcElement || event.target;
            let parents = $(element).parents();
            let found;
            let i;
            let j;
            
            let levels = TcHmi.Functions.TcHmiProject1.GetAllExpandedLevels();
            let clickedALevel = false;

            if (levels.length) {
                for (i = 0; i < levels.length; i++) {
                    target = levels[i].getAttribute('data-tchmi-target-user-control');

                    if (element.getAttribute('data-tchmi-target-user-control') == target) {
                        clickedALevel = true;
                        break;
                    }
                    if (parents) {
                        for (j = 0; j < parents.length; j++) {
                            if (parents[j].getAttribute('data-tchmi-target-user-control') == target) {
                                clickedALevel = true;
                                break;
                            }
                        }
                    }
                }
                if (!clickedALevel) {
                    for (i = 0; i < levels.length; i++) {
                        if (levels[i].getAttribute('collapsed') == 'false') {
                            TcHmi.Functions.TcHmiProject1.CollapseLevel(levels[i].getAttribute('id'));
                        }
                    }
                }
            }
        };
        // ----------------------
    });
})(TcHmi);
