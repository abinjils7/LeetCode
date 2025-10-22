var longestCommonPrefix = function(strs) {
  let prefix = strs[0] || "";
  for (let word of strs)
    while (!word.startsWith(prefix))
      prefix = prefix.slice(0, -1);
  return prefix;
};

