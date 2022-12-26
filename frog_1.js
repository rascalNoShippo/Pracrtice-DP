// N 個の足場があります。 足場には 1,2,…,N と番号が振られています。 各 i (1 ≤ i ≤ N) について、足場 i の高さは h_i​ です。
// 最初、足場 1 にカエルがいます。 カエルは次の行動を何回か繰り返し、足場 N まで辿り着こうとしています。
// 足場 i にいるとき、足場 i + 1 または i + 2 へジャンプする。 このとき、ジャンプ先の足場を j とすると、コスト∣h_i ​− h_j​∣ を支払う。
// カエルが足場 N に辿り着くまでに支払うコストの総和の最小値を求めてください。

// N は省略
function flog_1(arrHeight){
  var N = arrHeight.length;
  arrHeight.unshift(undefined);
  var cost_to = [undefined, 0, arrHeight[2] - arrHeight[1]];
  var current = 1;
  for(var i = 3; i <= N; i++){ // i段へ行くコストの最小を計算
    var next_1 = Math.abs(arrHeight[i] - arrHeight[i - 1]);
    var next_2 = Math.abs(arrHeight[i] - arrHeight[i - 2]);
    if(next_1 < next_2){
      cost_to.push(cost_to[i - 1] + next_1);
    }else{
      cost_to.push(cost_to[i - 2] + next_2);
    }
  }
  return cost_to.pop();
}

WScript.Echo(flog_1([30,10,60,10,60,50]));