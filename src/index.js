module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  if (str.length %2 != 0) return false;
  else{
    let err = [];
      for(let i = 0; i<str.length; i++){
        for(let j = 0; j< bracketsConfig.length; j++){ 
          if(str[i] == bracketsConfig[j][1] && err[err.length-1] == bracketsConfig[j][0]) err.pop();
          else if(str[i] === bracketsConfig[j][0]) err.push(str[i]);
        }  
      }
      if (err.length == 0) return true; 
      else return false; 
  }
}
