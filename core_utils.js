function CoreUtils() {
        let utils = {};

        utils.reuseableFunction = (test) => {
            console.log(test);
        };

        return utils;  
};

CoreUtils();

   
   

/* loading script to be used at collection level
if (typeof pmutil == "undefined") {
    var url = "https://raw.githubusercontent.com/tarunlalwani/postman-utils/master/pmutils.js";
    if (pm.globals.has("pmutiljs"))
        eval(pm.globals.get("pmutiljs"))
    else {
        console.log("pmutil not found. loading from " + url);
        pm.sendRequest(url, function (err, res) {
            eval(res.text());
            pm.globals.set('pmutiljs', res.text())
        });
    }
}
*/

/* To use the functions wherever you need use below
   eval(pm.globals.get("pmutiljs"))
*/
