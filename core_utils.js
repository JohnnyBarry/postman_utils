function CoreUtils() {
        let utils = {};

        utils.log = (text) => {
            console.log(text);
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
var utils_url = "https://raw.githubusercontent.com/JohnnyBarry/postman_utils/master/core_utils.js";

if (pm.globals.has("coreutils"))
    eval(pm.globals.get("coreutils"))
else {
    console.log("coreutil not found. loading from " + utils_url);
    pm.sendRequest(utils_url, function (err, res) {
        eval(res.text());
        pm.globals.set('coreutils', res.text());
    });
}
*/

/* To use the functions wherever you need use below
   let utils = eval(globals.coreutils);
utils.reuseableFunction('Hi JB from coreUtils');
*/
