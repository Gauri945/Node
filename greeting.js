let msg = "Congratulations";
//module.exports = msg;
function greeting(name){
    let msg = "Congratulations" + name;
    return msg;
}
//module.exports=greeting;
export default greeting;