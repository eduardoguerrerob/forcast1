sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("egb.HTML5Module.controller.View1", {
            onInit: function () {

                const xhr = new XMLHttpRequest();

                // listen for `load` event
                xhr.onload = () => {

                    // print JSON response
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // parse JSON
                        const response = JSON.parse(xhr.responseText);
                        console.log(response);
                    }
                };

                // create a JSON object
                const json = {
                    "features": [2]
                };

                // open request
                xhr.open('POST', 'https://forecast-generous-badger-ep.cfapps.eu10.hana.ondemand.com/predict');

                // set `Content-Type` header
                xhr.setRequestHeader('Content-Type', 'application/json');

                // send rquest with JSON payload
                xhr.send(JSON.stringify(json));
                

       /*
                var url = 'https://forecast-generous-badger-ep.cfapps.eu10.hana.ondemand.com/predict';
                var params = {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify({
                        "features": [0]
                    })
                };


                //fetch(url, params)
                //    .then(response => console.log(response));

                self.addEventListener('fetch', event => event.respondWith(
                    fetch(url, params))
                    .then(response => console.log(response))
                    );
                */


            }
        });
    });
