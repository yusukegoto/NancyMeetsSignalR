NancyMeetsSignalR
==================

Nancyが `/content/index.html` やjsとcssを配布し, SirnalRがWebSockerを提供しています.

Nancyはデフォルトで `exe` のあるディレクトリの `/Content` を静的ファイルとして公開しているので、ビルド後に `bin` にコピーするようにしています.

リッスンアドレスをすべてにしたい場合は `localhost` を `*` に書き換えて管理者権限でアプリを実行する必要があります.