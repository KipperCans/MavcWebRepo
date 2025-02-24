
function includeGlobals() {
    globals = document.getElementsByClassName("globals")
    for (i = 0; i < globals.length; i++) {
        element = globals[i];


        // Create an HTTP request with
        // the attribute value as the
        // file name
        file = element.getAttribute("file");

        if (file) {
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
 
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
 
                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute("file");
 
                    includeGlobals();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return;
        }
    }
};
