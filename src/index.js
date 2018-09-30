module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
  let a=0;
  let b=0;
  let c=0;
  let d=0;
  let e=0;
  let f=0;
  let g=0;
  let h=0;
  let j=0;

  for (var i = 0; i < arr.length; i++) {
    if(arr[i]=='(') a++;
    if(arr[i]==')') a--;
    if(arr[i]=='{') b++;
    if(arr[i]=='}') b--;
    if(arr[i]=='[') c++;
    if(arr[i]==']') c--;
    if(arr[i]=='1') d++;
    if(arr[i]=='2') d--;
    if(arr[i]=='3') e++;
    if(arr[i]=='4') e--;
    if(arr[i]=='5') f++;
    if(arr[i]=='6') f--;
    if(arr[i]=='7') g++;
    if(arr[i]=='8') h++;
    if(arr[i]=='|') j++;
    if(a<0 || b<0 || c<0 || d<0 || e<0 || f<0) {
      return false;
      break;
    }
  }
  if(a==0 && b==0 && c==0 && d==0 && e==0 && f==0 && g%2==0 && h%2==0 && j%2==0) return true;
  
}
