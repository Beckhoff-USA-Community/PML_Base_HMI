// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
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
                let j;
                let menus = ['UserMenu', 'SettingsMenu', 'MainMenu', 'CycleControl'];

                for (j = 0; j < menus.length; j++) {
                    
                    let buttonString = menus[j].concat('_ToggleButton');
                    let popoutString = menus[j].concat('_PopoutRegion');
                    let button = TcHmi.Controls.get(buttonString);

                    if (button['__toggleState'] == 'Active') {
                        // If clicking anywhere in the browser that is not on the active popout menu, close it
                        let i;
                        let foundPopout = false;
                        

                        if (element.id == popoutString) {
                            foundPopout = true;
                        } else {
                            for (i = 0; i < parents.length; i++) {
                                if (parents[i].id == popoutString) {
                                    foundPopout = true;
                                    break;
                                }
                            }
                        }

                        if (!foundPopout) {

                            let foundButton = false;

                            if (element.id == buttonString) {
                                foundButton = true;
                            } else {
                                for (i = 0; i < parents.length; i++) {
                                    if (parents[i].id == buttonString) {
                                        foundButton = true;
                                        break;
                                    }
                                }
                            }
                            if (!foundButton) {
                                button.setToggleState('Normal');
                            }
                        }
                    }
                }
            };
        // ----------------------
    });
})(TcHmi);
