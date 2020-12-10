function getQueryVariable(variable) {
    console.log(variable);
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  console.log('Query Variable ' + variable + ' not found');
}
var field = 'caseid';
var url = window.location.href;
if(url.indexOf('?' + field + '=') != -1){
var caseid = getQueryVariable("caseid");
console.log(caseid);
sessionStorage.setItem("caseid",caseid);

}