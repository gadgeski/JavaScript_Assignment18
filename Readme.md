# ドラッグ&ドロップ機能の実装

## 概要

マウスでドラッグして要素を自由に移動できるシンプルな Web アプリケーションです。

## 主な機能

- 黄色いボックスをマウスでドラッグして画面上の任意の場所に移動
- スムーズなドラッグ操作とビジュアルフィードバック
- レスポンシブデザイン

## 学習のポイント

### 1. JavaScript でのドラッグ機能実装

```javascript
// 基本的なイベントハンドリング
mousedown → mousemove → mouseup
```

**重要な概念：**

- `offsetX`, `offsetY`: マウスクリック位置と要素の相対位置を保持
- `isDragging`: ドラッグ状態を管理するフラグ
- `document`レベルでのイベントリスナー追加/削除

### 2. 座標計算の仕組み

```javascript
const newLeft = e.clientX - offsetX;
const newTop = e.clientY - offsetY;
```

- `clientX/Y`: マウスの現在位置
- `getBoundingClientRect()`: 要素の画面上の位置を取得

### 3. CSS による視覚的な改善

- `cursor: grab/grabbing`: ドラッグ可能を示すカーソル
- `user-select: none`: テキスト選択を無効化
- `position: absolute`: 自由な位置指定を可能に
- `transition`: ホバー時のアニメーション効果

### 4. UX 向上のテクニック

- ドラッグ中のテキスト選択防止（`preventDefault()`）
- 要素外でのマウス移動にも対応
- ドラッグ中の影の変化でフィードバック

## ファイル構成

- `index.html`: 基本的な HTML 構造
- `script.js`: ドラッグ機能のロジック
- `style.css`: スタイリングとアニメーション

## 実行方法

HTML ファイルをブラウザで開くだけで動作します。

## 学習効果

- DOM 操作の基礎
- マウスイベントの理解
- CSS position プロパティの活用
- イベントリスナーの適切な管理方法
