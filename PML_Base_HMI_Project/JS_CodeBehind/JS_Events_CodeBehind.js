// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();

        // stores the return of the registerConsumer, so we can destroy it onDetached later
        var destroyFunction;



        var destroyAttachEvent = TcHmi.EventProvider.register('Alarm_Banner_TextBlock.onAttached', function (e, data) {
            
            // Every time the event consumer (eventViewer, the textblock) attaches, we want to run the below code
            // So, this should not be destroyed after running once
            //e.destroy();

            // Original code snippet, with some edits, from InfoSys page on regsiterConsumer
            // https://infosys.beckhoff.com/english.php?content=../content/1033/te2000_tc3_hmi_engineering/5124376843.html


            // filter for unconfirmed alarms
            // Any time you want to change the filter, you will need to destroy the return of registerConsumer() and re-register.
            var filter = [
                {
                    path: 'type',
                    comparator: '==',
                    value: TcHmi.Server.Events.Type.Alarm
                },
                {
                    logic: 'AND'
                },
                {
                    path: 'timeConfirmed',
                    comparator: '==',
                    value: new Date(null)
                }
            ];

            var myAlarms = [];

            // function to handle list of events
            function consumeEventList(data) {
                console.log("ConsumeEventList");
                console.log(data);
                if (data.error === TcHmi.Errors.NONE) {
                    myAlarms = data.events;
                    console.log(myAlarms);
                    if (myAlarms == []) {
                        TcHmi.Controls.get('Alarm_Banner_TextBlock').setText("No Alarms Active");
                    }
                    else {
                        TcHmi.Controls.get('Alarm_Banner_TextBlock').setText(myAlarms[0]["text"]);
                    }
                }
                else {
                    myAlarms = [];
                    TcHmi.Controls.get('Alarm_Banner_TextBlock').setText("Error Retreiving Message Data");
                }
            }

            // function to handle new and changed incoming events
            function consumeEventSubscription(data) {
                console.log("consumeEventSubscription");
                console.log(data);
                if (data.error !== TcHmi.Errors.NONE) {
                    return;
                }
                if (data.removedByFilter) {
                    console.log("removedByFilter");
                    TcHmi.Controls.get('Alarm_Banner_TextBlock').setText("No Alarms Active");
                    console.log("Pre-Filter: ");
                    console.log(myAlarms);
                    myAlarms = myAlarms.filter(function (alarm) {
                        return alarm.id !== data.event.id;
                    });
                    console.log("Post-Filter: ")
                    console.log(myAlarms);
                
                }
                else if (data.changeType === TcHmi.Server.Events.ChangeType.AlarmRaised) {
                    console.log("AlarmRaised");
                    myAlarms.push(data.event);
                    TcHmi.Controls.get('Alarm_Banner_TextBlock').setText(data.event["text"]);
                }
                else {
                    for (var i = 0; i < myAlarms.length; i++) {
                        if (myAlarms[i].id === data.event.id) {
                            myAlarms[i] = data.event;
                            TcHmi.Controls.get('Alarm_Banner_TextBlock').setText(myAlarms[0]["text"]);
                            break;
                        }
                    }
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

        var destroyDetachEvent = TcHmi.EventProvider.register('Alarm_Banner_TextBlock.onDetached', function (e, data) {

            // destroys the above registerConsumer - when the eventViewer is detached, we no longer need to be subscribed
            // the events would have no where to go
            destroyFunction();
            console.log('Event subscription has been deregistered')

        });


    });
})(TcHmi);
