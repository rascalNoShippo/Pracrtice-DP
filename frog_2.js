// N 個の足場があります。 足場には 1,2,…,N と番号が振られています。 各 i (1 ≤ i ≤ N) について、足場 i の高さは h_i​ です。
// 最初、足場 1 にカエルがいます。 カエルは次の行動を何回か繰り返し、足場 N まで辿り着こうとしています。
// 足場 i にいるとき、足場 i + 1 , i + 2 , ... , i + K のいずれかへジャンプする。 このとき、ジャンプ先の足場を j とすると、コスト∣h_i ​− h_j​∣ を支払う。
// カエルが足場 N に辿り着くまでに支払うコストの総和の最小値を求めてください。

// N は省略
function flog_2(K, arrHeight) {
  var N = arrHeight.length;
  arrHeight.unshift(undefined);
  var cost_to = [undefined, 0];
  for (var i = 2; i <= N; i++) { // i段へ行くコストの最小を計算
    var next = [Infinity];
    for (var j = 1; j <= Math.min(i - 1, K); j++) { // i-j段からi段へ向かう
      var diff = Math.abs(arrHeight[i] - arrHeight[i - j]);
      next.push(diff + cost_to[i - j]); //i-j段からi段へ向かうコスト + i-j段までの最小コスト
    }
    cost_to.push(Math.min.apply(null, next));
  }
  return cost_to.pop();
}

WScript.Echo(flog_2(4,[40,10,20,70,80,10,20,70,80,60]));