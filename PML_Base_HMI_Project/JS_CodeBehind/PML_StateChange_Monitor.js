// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();

        // stores the return of the registerConsumer, so we can destroy it onDetached later
        var destroyFunction;



        var destroyAttachEvent = TcHmi.EventProvider.register('PML_StateChange_Display.onAttached', function (e, data) {

            // Every time the event consumer (eventViewer, the textblock) attaches, we want to run the below code
            // So, this should not be destroyed after running once
            //e.destroy();

            // Original code snippet, with some edits, from InfoSys page on regsiterConsumer
            // https://infosys.beckhoff.com/english.php?content=../content/1033/te2000_tc3_hmi_engineering/5124376843.html


            // filter for unconfirmed alarms
            // Any time you want to change the filter, you will need to destroy the return of registerConsumer() and re-register.
            var filter = [
                {
                    path: 'params.eventClassName',
                    comparator: '==',
                    value: 'PackML State Changed'
                }
            ];

            var myMessages = [];

            // function to handle list of events
            function consumeEventList(data) {
                if (data.error === TcHmi.Errors.NONE) {
                    myMessages = data.events;
                    if (myMessages.length == 0) {
                        TcHmi.Controls.get('PML_StateChange_Display').setText("No State Change");
                    } else {
                        TcHmi.Controls.get('PML_StateChange_Display').setText(myMessages[0].text);
                    }
                }
                else {
                    myMessages = [];
                    TcHmi.Controls.get('PML_StateChange_Display').setText("Error Retreiving Message Data");
                }
            }

            // function to handle new and changed incoming events
            function consumeEventSubscription(data) {
                if (data.error !== TcHmi.Errors.NONE) {
                    return;
                }
                if (data.removedByFilter) {
                    myMessages = myMessages.filter(function (alarm) {
                        return alarm.id !== data.event.id;

                    });
                }
                else if (data.changeType === TcHmi.Server.Events.ChangeType.AlarmRaised) {
                    myMessages.push(data.event);
                    TcHmi.Controls.get('PML_StateChange_Display').setText(data.event["text"]);
                }
                else {
                    for (var i = 0; i < myMessages.length; i++) {
                        if (myMessages[i].id === data.event.id) {
                            myMessages[i] = data.event;
                            TcHmi.Controls.get('PML_StateChange_Display').setText(data.event["text"]);
                            break;
                        }
                    }
                }

                if (myMessages.length == 0) {
                    TcHmi.Controls.get('PML_StateChange_Display').setText("No State Change");
                } else {
                    TcHmi.Controls.get('PML_StateChange_Display').setText(myMessages[0].text);
                }
            }

            // register a consumer to receive events
            destroyFunction = TcHmi.Server.Events.registerConsumer(filter, {
                list: consumeEventList,
                subscription: consumeEventSubscription
            });

            if (destroyFunction !== null) {
                console.log('Event subscription has been registered')
            }
        });

        var destroyDetachEvent = TcHmi.EventProvider.register('PML_StateChange_Display.onDetached', function (e, data) {

            // destroys the above registerConsumer - when the eventViewer is detached, we no longer need to be subscribed
            // the events would have no where to go
            destroyFunction();
            console.log('Event subscription has been deregistered')

        });


    });
})(TcHmi);
