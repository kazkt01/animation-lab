@keyframe に関して深掘りしたい。
https://qiita.com/kahomorishita/items/35b3a0102f1897fc82f9

リッチに見える要素
１、イラストを使用　 ← これで結構それっぽくなる
２、CSS のアニメーション
３、Js のアニメーションや機能の実装
４、カーソルに追従してアイコンがついてくる。
５、XY 軸以外に Z 軸でのアニメーションがある。
６、素材が飛び出ている感がある。
７、セクションタイトるなどをあえておかない
８、ローディング画面
９、クッキー付き

現状感じていること
・かっこいいだけでみにくいサイトが意外と多い
・やはりデザインもできるようになった方が面白い。
・

参考になるサイト
１、技術を最小限にいい感じのサイトって感じ。
https://rakuyusanso.com/

https://81-web.com/sites/38126

３、シンプル LP
https://81-web.com/sites/38151

４、humberger 　 sp-menu いい感じ みやすさもベスト
https://rprojectjapan.com/

<!-- 課題   -->

１、レスポンシブ対応
contct のデザインをシンプルにするのあり　
⇧ 消したりつけたりするのが複雑になりがち

// 修正案
@keyframes slideAnime {
0% {
opacity: 0;
}
4% {
opacity: 1;
}
20% {
opacity: 1;
}
24% {
opacity: 0;
}
100% {
opacity: 0;
}
}

/_ 各スライドのアニメーションタイミングを均等にずらす _/
.slideimg:nth-of-type(1) {
background-image: url("../assets/img/fuji.jpg");
animation-delay: 0s;
}

.slideimg:nth-of-type(2) {
background-image: url("../assets/img/maiko.jpg");
animation-delay: 5s;
}

.slideimg:nth-of-type(3) {
background-image: url("../assets/img/torii.jpg");
animation-delay: 10s;
}

.slideimg:nth-of-type(4) {
background-image: url("../assets/img/fukei.jpg");
animation-delay: 15s;
}

.slideimg:nth-of-type(5) {
background-image: url("../assets/img/akari.jpg");
animation-delay: 20s;
}
