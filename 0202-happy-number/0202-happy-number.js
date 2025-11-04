/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy=n=>{
  let s=new Set();
  while(n!=1&&!s.has(n))s.add(n),n=[...''+n].reduce((a,d)=>a+d*d,0);
  return n==1;
};

