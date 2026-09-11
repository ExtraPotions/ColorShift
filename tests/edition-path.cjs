const path=require('node:path');module.exports=file=>path.basename(file)==='colorshift-anywhere.user.js'?file:path.join('test-results','editions',path.basename(file));
