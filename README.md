# Project Name
remo4gear (nature Remo for Galaxy Gear)

# 概要
[Nature Remo](https://nature.global/jp/top)を[Galaxy Watch](https://www.galaxymobile.jp/galaxy-watch/)で操作できるようにWatch Applicationを作成しました。  
エアコンとテレビ周りの操作は、結構複雑なので、電源ボタンしか動作しません；；  

# 動かし方
1. sourceを`git clone`します  
2. [Tizen Studio](https://developer.tizen.org/development/tizen-studio?langswitch=en)をダウンロードしておきます  
3. 先ほどcloneしたソースをTizen Studioで開きます  
4. config.xmlを開きます  
5. `Tizen`タブ→`Meta Data`のところにNature RemoのAccess Tokenを登録します（RemoのAccessTokenは[こちらから取得](https://home.nature.global/home)）  
6. Garaxy WatchをTizenStudioのDevice Managerで認識させます（[ブログ参照](https://gndrming.amebaownd.com/posts/4915108)）
7. `Run`を実行してGalaxy Watchにアプリをインストール

# あとがき
いろいろとめちゃくちゃですが、、とりあえず動くとは思います。

# Author
kobusan  
homepage: [https://gndrming.amebaownd.com/](https://gndrming.amebaownd.com/)  

# License
MIT [License](https://github.com/kobusan/remo4gear/blob/master/LICENSE)