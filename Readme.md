目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

<h1>HTML ファイルの解説</h1>

この HTML ファイルは、ウェブページにドラッグ＆ドロップできる要素を作成するための基本的な構造を定義しています。

<h3>!DOCTYPE html</h3> このドキュメントがHTML5であることを宣言しています。

<h3>html lang="ja"</h3> HTMLドキュメントの開始を示し、ページの言語が日本語であることを指定しています。

<h3>head</h3>

<h3>meta charset="UTF-8"</h3> 文字エンコーディングをUTF-8に設定しています。これにより、日本語が正しく表示されます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> ページの表示領域（ビューポート）を設定しています。これにより、さまざまなデバイスで適切に表示されるようになります。

<h3>title</h3> ウェブブラウザのタブやウィンドウに表示されるページのタイトルを設定しています。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部CSSファイルをこのHTMLに適用することを指定しています。これにより、ページの見た目を制御できます。

<h3>body</h3> ウェブページに表示されるすべてのコンテンツを含みます。

<h3>div class="box"</h3> "例：ドラッグ＆ドロップ"というテキストを含むシンプルなdiv要素です。これは、後述のCSSで特別なスタイルが適用される「箱」の役割を果たします。

<h3>div id="draggableBox"</h3> "ドラッグして移動できちゃう！"というテキストを含むdiv要素です。この要素にはdraggableBoxというIDが設定されており、JavaScriptを使ってドラッグ可能になります。

<h3>br</h3> タグはテキストを改行し、コンテンツを見やすくします。

<h3>script src="script.js"</h3> script.jsという外部JavaScriptファイルをこのHTMLに適用することを指定しています。このファイルが、要素のドラッグ＆ドロップの動きを制御します。

<h1>CSSファイルの解説</h1>

この CSS ファイルは、HTML で定義された要素の見た目と配置をスタイリングしています。

<h3>body スタイル</h3>

- ウェブページの全体的なスタイルを設定しています。

- font-family: Nunito というフォント、もしなければ標準の sans-serif フォントを使用します。

- display: flex;と flex-direction: column;: 子要素を縦に並べ、Flexbox を使って配置を柔軟にします。

- justify-content: center;と align-items: center;: 子要素をページの垂直方向と水平方向の中央に配置します。

- min-height: 100vh;: body 要素の最小の高さをビューポートの高さの 100%に設定し、ページ全体に背景色が行き渡るようにします。

- margin: 0;: デフォルトのマージンを削除します。

- background-color: #faad4f;: 背景色を明るいオレンジ色に設定します。

- color: #333;: テキストの色を濃いグレーに設定します。

- overflow: hidden;: 要素が body の範囲からはみ出しても、スクロールバーが表示されないようにします。

<h3>ドラッグ可能なボックスのスタイル</h3>

- width, height: ボックスのサイズを設定します。

- background-color, color: ボックスの背景色とテキストの色を設定します。

- display: flex;, justify-content: center;, align-items: center;: ボックス内のテキストを中央に配置します。

- font-size, font-weight: テキストのフォントサイズと太さを設定します。

- border-radius: 15px;: ボックスの角を丸くします。

- box-shadow: ボックスに影を付け、立体感を出すことができます。

- cursor: grab;: マウスカーソルがこの要素の上にあるときに、手の形（掴む準備ができている状態）に変わります。

- position: absolute;: この要素を親要素（この場合は body）を基準に自由に配置できるようにします。

- top: calc(50% + 50px);, left: 50%;: ボックスを画面の中央に配置しますが、top は中央より少し下にずらしています。

- transform: translate(-50%, -50%);: top と left が要素の左上隅を基準にしているため、translate を使って要素の中心を正確に指定した位置（この場合は画面中央より少し下）に合わせます。

- user-select: none;: ドラッグ中にテキストが選択されるのを防ぎます。

- transition: box-shadow 0.2s ease;: box-shadow プロパティが変化する際に、0.2 秒かけてスムーズに変化するように設定しています。

- #draggableBox:active: ボックスがアクティブな状態（クリックされている間）のスタイルを定義しています。

- cursor: grabbing;: カーソルが掴んでいる手の形に変わります。

- box-shadow: ドラッグ中に影がより濃く、大きくなります。

<h3>.box スタイル</h3>

- このクラスは、ドラッグ＆ドロップ可能なボックスとは別の、背景にある大きな箱のスタイルを定義しています。

- width, height: ボックスのサイズを設定します。

- margin: 13% auto 0;: 上に 13%のマージン、左右は自動（中央寄せ）、下は 0 のマージンを設定します。

- display: flex;, align-items: center;, justify-content: center;: ボックス内のテキストを中央に配置します。

- color, font-size, font-weight: テキストのスタイルを設定します。

- position: relative;: 疑似要素（::before と::after）をこのボックスを基準に配置できるようにします。

- transition: 0.4s;: この要素のプロパティが変化する際に、0.4 秒かけてスムーズに変化するように設定しています。

- ::before と::after: これらの疑似要素は、.box の角に装飾的なボーダーを作成します。

- 初期状態では、それぞれ左上と右下の角に小さなボーダーが表示されます。

- position: absolute;: 親要素.box を基準に配置されます。

- transition-delay: 0.5s;: ホバーアクションが起こってから 0.5 秒後にこのボーダーの変更が開始されます。

- .box:hover:before, .box:hover::after: .box にマウスがホバーしたときの疑似要素のスタイルを定義しています。

- width: 100%;, height: 100%;: ホバーすると、ボーダーが箱全体を囲むように広がります。

- border-color: ボーダーの色が少し薄くなります。

- transition-delay: 0s;: ホバー中は遅延なしで変化します。

- border-radius: 20px;: ホバーすると、角が丸くなります。

- .box:hover: .box にマウスがホバーしたときのスタイルを定義しています。

- background: rgba(255, 255, 255, 0.1);: 背景色が半透明の白に変わります。

- backdrop-filter: blur(15px);: 背景にある要素をぼかす効果を適用します。

- transition-delay: 0.3s;: ホバーアクションが起こってから 0.3 秒後にこの変更が開始されます。

- border-radius: 20px;: ホバーすると、角が丸くなります。

<h1>JavaScriptファイルの解説</h1>

この JavaScript ファイルは、HTML で定義されたドラッグ可能なボックスを実際に動かすためのロジックを実装しています。

<h3>主要な変数と関数</h3>

- const draggableBox = document.getElementById("draggableBox");: HTML ファイルから ID が draggableBox の要素を取得し、draggableBox という定数に格納しています。この要素がドラッグ＆ドロップの対象となります。

- let isDragging = false;: ドラッグ中かどうかを示すフラグです。初期値は false で、ドラッグが開始されると true になり、終了すると false に戻ります。

- let offsetX, offsetY;: マウスをクリックした位置と、ドラッグ可能な要素の左上隅とのオフセット（ずれ）を保存するための変数です。これによって、要素のどの部分をクリックしても、その位置からドラッグを開始できるようになります。

<h3>イベントリスナーの仕組み</h3>

このスクリプトは、主に 3 つのマウスイベントを利用してドラッグ＆ドロップ機能を実現しています。

- mousedown イベント（ドラッグ開始）:

- draggableBox.addEventListener("mousedown", (e) => { ... });

- draggableBox がクリックされたときに発生します。

- isDragging を true に設定し、ドラッグが開始されたことを示します。

- const rect = draggableBox.getBoundingClientRect();: draggableBox の現在のサイズと画面上の位置を取得します。

- offsetX = e.clientX - rect.left;と offsetY = e.clientY - rect.top;: マウスのクリック位置 (e.clientX, e.clientY) から、draggableBox の左上隅の座標 (rect.left, rect.top) を引くことで、クリックした点が要素の左上隅からどれくらい離れているか（オフセット）を計算します。

- e.preventDefault();: デフォルトのブラウザの動作（例：テキストの選択）を防ぎます。

- document.addEventListener("mousemove", onMouseMove);と document.addEventListener("mouseup", onMouseUp);: マウスダウンイベントが発生したら、ドキュメント全体に対して mousemove と mouseup イベントリスナーを追加します。

これは、ドラッグ中にマウスが draggableBox の範囲外に出た場合でも、ドラッグを継続できるようにするためです。

<h3>mousemove イベント（ドラッグ中）</h3>

- function onMouseMove(e) { ... }

- マウスが移動するたびに発生します。

- if (!isDragging) return;: isDragging が false であれば（ドラッグ中でなければ）、何もしないで処理を終了します。

- const newLeft = e.clientX - offsetX;と const newTop = e.clientY - offsetY;: マウスの現在の位置から、mousedown 時に計算したオフセットを引くことで、draggableBox の新しい左上隅の座標を計算します。これにより、マウスカーソルの位置に合わせて要素が移動します。

- draggableBox.style.left = {newLeft}px`;`と`draggableBox.style.top = `{newTop}px;: 計算された新しい座標を draggableBox のスタイルに適用し、要素を実際に移動させます。

- mouseup イベント（ドラッグ終了）:

- function onMouseUp() { ... }

- マウスボタンが離されたときに発生します。

- isDragging を false に設定し、ドラッグが終了したことを示します。

<h3>document.removeEventListener "mousemove", onMouseMove及び</h3>
   
<h3>document.removeEventListener "mouseup", onMouseUp<h3> ドラッグが終了したので、documentに追加したmousemoveとmouseupイベントリスナーを削除します。

- これにより、不要なイベント処理がバックグラウンドで実行され続けるのを防ぎ、パフォーマンスを向上させます。

- この JavaScript コードは、これらのイベントを連携させることで、ユーザーが要素をドラッグして自由に動かせる機能を実現しています。
