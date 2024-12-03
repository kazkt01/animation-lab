// windowの読込完了イベントを指定
window.onload = function () {
  // 読込中画面を非表示にする
  // 通常すぐに読込完了になってしまうので長めのフェードアウト時間を設定してます
  $("#loading").fadeOut(5000);
};
