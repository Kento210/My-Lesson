# AR.jsでお試しAR
加藤さんに見せるために簡単に作ったレポジトリです</br>
参考：[AR.js の世界へようこそ！ ３歩でわかる お手軽 拡張現実](https://qiita.com/dsudo/items/58718e9e3c870e6b92e6)

### 使い方
1. index.htmlを開きます
1. markerをカメラで読み取るだけ

### 作り方
1. 3dデータをfbxで取ってきます（最終的にglTFに変換できるなら何でもok）
1. `changeClTF/FBX2glTF-darwin-x64`を使用してglTFに変換します
1. [AR.js studio](https://ar-js-org.github.io/studio/)に行きます
1. Marker-basedを選択
1. 使用するMakerと変換してzipした3Dデータを入れます
1. Exportして完成！

### `FBX2glTF-darwin-x64`の使い方
1. お使いのpcに実行ファイルである`FBX2glTF-darwin-x64`をダウンロードしてください
1. `./FBX2glTF-darwin-x64 xxx.fbx`で変換できます
1. xxx_outで出力されますが、glTFファイル以外も必須なので、そのファイルごとzipして使いましょう