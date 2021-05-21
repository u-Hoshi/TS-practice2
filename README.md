# TS 練習用 2

使用しているパッケージの詳細

- typescript：TypeScript を JavaScript に変換するコンパイラ
- ts-loader：WebPack と連動して TypeScript コンパイラを起動
- webpack：複数のファイルを一つにまとめる
- webpack-cli：コマンドラインで webpack を使う
- webpack-dev-server：WebPack のビルド、開発用 Web サーバの起動、ホットリロード(ファイルの変更の自動検知と再読み込み
- eslint-config-prettier：ESLint と Prettier を併用する際に使用
- @typescript-eslint/eslint-plugin：ESLint で TypeScript のチェックを行うプラグイン
- @typescript-eslint/parser：ESLint で TypeScript を解析できるようにする
- husky：Git コマンドをフックに別コマンドを呼び出せる
- lint-stage：commit したファイル(staging にあるファイル)に lint を実行することができる

※tsconfig を作成する際、`tsc --init`ができない場合は`npx tsc --init`で代用する
