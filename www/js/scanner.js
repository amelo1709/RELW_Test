var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("offline", function () { alert("You're offline") }, false);


    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');


    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

        if (id == 'deviceready') {

            $("#btnScann").on("click", function (e) {

                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if (result.cancelled)
                        {
                            $("#resultado").text("Escaneo Cancelado");
                        }
                        else
                        {

                            $("#resultado").text(result.text);
                            alert("We got a barcode\n" +
                                "Result: " + result.text + "\n" +
                                "Format: " + result.format + "\n" +
                                "Cancelled: " + result.cancelled );
                        }
                        
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    },
                    {
                        preferFrontCamera: false, // iOS and Android
                        showFlipCameraButton: false, // iOS and Android
                        showTorchButton: true, // iOS and Android
                        torchOn: true, // Android, launch with the torch switched on (if available)
                        //prompt: "Place a barcode inside the scan area", // Android
                        prompt: "Enfoque el c\363digo dentro del \341rea de escaneado", // Android
                        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                        //formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                        //orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                        disableAnimations: true, // iOS
                        disableSuccessBeep: false // iOS
                    }
                );
            });

        }

        if (id == 'offline') {
            alert("No tiene acceso a Internet...")
            navigator.app.exitApp();

        }

        console.log('Received Event: ' + id);
    }
};
