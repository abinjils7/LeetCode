/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
  const g = Array.from({length: n+1},()=>Array(n+1).fill(0));

  for (let [r1,c1,r2,c2] of queries) {
    g[r1][c1]++;
    g[r1][c2+1]--;
    g[r2+1][c1]--;
    g[r2+1][c2+1]++;
  }

  for (let i=0;i<n;i++)
    for (let j=1;j<n;j++)
      g[i][j]+=g[i][j-1];

  for (let j=0;j<n;j++)
    for (let i=1;i<n;i++)
      g[i][j]+=g[i-1][j];

  return g.slice(0,n).map(r=>r.slice(0,n));
};


