const path = require('path')

module.exports = {
  // 子の中に書いたものがwebpackの監視対象となる
  entry: {
    // エントリーポイントを記述
    bundle: './src/index.ts',
  },
  output: {
    // バンドルしたものをどこに出力するか
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    // どこのファイルが変わったらホットリロードするかを決める
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
}
