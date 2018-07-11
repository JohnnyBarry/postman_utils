function CoreUtils() {
        let utils = {};

        utils.reuseableFunction = (test) => {
            console.log(test);
        };
        
        utils.assertLogs = (logs) => {
            logs.forEach((log) => {
                // find the index of the item in the expectedLog array where the field, code and message match that of a log item.
                const index = expectedLog.findIndex( (item) => {
                    console.log('in function');
                    return item.field === log.jsonKey && item.code === log.code && item.message === log.message;
                });

                console.log('index ' + index);
                if (index !== -1){
                    expectedLog.splice(index, 1);
                }
            });
            return expectedLog.length;
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
