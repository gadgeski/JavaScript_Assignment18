const draggableBox = document.getElementById("draggableBox");

let isDragging = false; // ドラッグ中かどうかを示すフラグ
let offsetX, offsetY; // マウスの位置と要素の左上隅のオフセット

// マウスダウンイベント（ドラッグ開始）
draggableBox.addEventListener("mousedown", (e) => {
  isDragging = true;

  // 要素の現在の位置を取得
  const rect = draggableBox.getBoundingClientRect();

  // マウスのクリック位置と要素の左上隅とのオフセットを計算
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  // ドラッグ中にテキスト選択が起きないようにする
  e.preventDefault();

  // ドラッグ開始時は、mousemoveとmouseupイベントをdocumentに追加
  // これにより、要素の外でマウスを動かしてもドラッグが継続される
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

// マウスムーブイベント（ドラッグ中）
function onMouseMove(e) {
  if (!isDragging) return; // ドラッグ中でなければ何もしない

  // 新しい要素の位置を計算
  // マウスの現在の位置からオフセットを引く
  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  // 要素のスタイルを更新して移動させる
  draggableBox.style.left = `${newLeft}px`;
  draggableBox.style.top = `${newTop}px`;
}

// マウスアップイベント（ドラッグ終了）
function onMouseUp() {
  isDragging = false;

  // ドラッグ終了時は、mousemoveとmouseupイベントリスナーを削除
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}
