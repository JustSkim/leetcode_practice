var combinationSum2 = function (candidates, target) {
    candidates.sort((v1, v2) => v1 - v2);
  
    function dfs(deep, path, sum, result) {
      // 结果
      if (sum === target) {
        result.push([].concat(path));
        return;
      }
  
      // 剪枝
      if (sum > target) {
        return;
      }
  
      for (let i = deep; i < candidates.length; i++) {
        // 剪枝
        if (candidates[i] > target) {
          continue;
        }
        // 剪枝
        // 打头元素不能相同，不然重复
        if (i > deep && candidates[i] === candidates[i - 1]) {
          continue;
        }
        path.push(candidates[i]);
        dfs(i + 1, path, sum + candidates[i], result);
        path.pop();
      }
    }
  
    const result = [];
    dfs(0, [], 0, result);
    return result;
  };
