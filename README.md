# 都道府県別の総人口推移グラフを表示するReactアプリケーション

## Try the demo


### Try the demo [here!]()

## Requirements

- [RESAS(地域経済分析システムAPI)](https://opendata.resas-portal.go.jp/)の「都道府県一覧」からAPIを取得する。
- APIレスポンスから都道府県一覧のチェックボックスを動的に生成する。
- 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する。
- 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する。
  - ⚠️グラフはサードパーティ製のグラフライブラリを用いて描画すること。ex) [Recharts](https://recharts.org/en-US/)
- Google Chrome最新版で正しく動くこと。
- PC/スマートフォン表示に対応すること(レスポンシブデザイン)対応 
  - ⚠️Google Chromeの検証ツールで確認できればよい。
- ESLintとPrettierを適切に設定すること。
- styleは自分で記述し、CSS・UIフレームワークなどは原則使用しないこと。 
  - ⚠️chartライブラリ内包のstyle、リセット系のCSSライブラリについてはこの限りではない。
  - ⚠️css-in-jsやcss-modules、sassなどのエコシステムの利用を妨げるものではなく、あくまでcssの記述力を測る趣旨に留まる。
- セキュリティを考慮してコードを記述すること
- ソースコードはGitで管理し、作成したソースコードはGitHubにアップロードすること。
- Netlify / GitHub Pages / Firebase hosting / Vercel 等のホスティングサービスにデプロイし、インターネット経由で閲覧できる状態にすること。
- アプリのコンポーネント粒度の設計、Gitコミットメッセージやコミット粒度、ドキュメンテーション等もレビュー対象となる。
- チーム開発を意識してコードを記述すること。

## Advance Requirements
- TypeScriptで記述
- テストケース/テストコードを作成。

## 提出方法
- GitHubのpublicリポジトリのURL

## 提出時のRequirements
- 課題の取り組み開始から完了までに要した合計時間
- これまでの総合的なプログラミング歴
- これまでのWEBフロントエンドプログラミング歴

## コードを書く前の計画

### ① UI design
#### PC版
![image](https://user-images.githubusercontent.com/48965717/133037776-e4b0a1e1-f6f2-40bd-aa2c-c3fe0f112b45.png)

#### SP版
![image](https://user-images.githubusercontent.com/48965717/133038071-c63cf3c4-7776-4eaa-ae4f-fe7f4fcf9b3e.png)

#### 最小単位コンポーネント 
![image](https://user-images.githubusercontent.com/48965717/133038213-c3aeabc5-4fda-4068-ad3a-5e26e24d9002.png)

### [figma で見てみる](https://www.figma.com/file/aHPXqjFZXc6HdQh67M5Fwv/%E9%83%BD%E9%81%93%E5%BA%9C%E7%9C%8C%E5%88%A5%E3%81%AE%E7%B7%8F%E4%BA%BA%E5%8F%A3%E6%8E%A8%E7%A7%BB%E3%82%B0%E3%83%A9%E3%83%95?node-id=0%3A1)

### ②　コンポーネントの構造について
1. elements
- 最小単位のコンポーネント　ex) Heading1, Heading2, Option, LineChart
- DOM要素のみで構成（ほかファイルに依存してはならない）
- marginは持たない

2. modules
- DOM要素+複数のelementで構成 ex) OptionList
- margin は持たない

3. compositions
- DOM要素+modules+elementで構成 ex) OptionGroup(Heading2+OptionList)
- DOM要素+compositions+elementで構成　ex)AppMain(OptionGroup+LineChart)
- marginは持たない

4. layout
- compositionsやmodules内のレイアウト ex) FlexBox
- marginは持たない

5. pages
- 全てのコンポーネントが組み合わさり最終的なアプリケーションになる ex) App

### ③　大まかな開発の流れ
![image](https://user-images.githubusercontent.com/48965717/133038353-d4b68a66-800a-4fa3-ba29-0efc901a029d.png)

1. 環境構築 </br>
2. コンポーネント毎にブランチを切りイシュードリブンな開発でコンポーネントを実装。</br>
3. コンポーネント実装時にはStroyBook+Jest+react-testing-libraryを使用し、TDDを意識しながらコンポーネント開発にフォーカスする。</br>
4. 出来上がったコンポーネントはcomponentsブランチにPRをだす。</br>
5. 全てのコンポーネントがcomponentsブランチにマージされた時に最終的なアプリケーションを完成させるブランチを切る。</br>
6. 完成後にmainブランチにPRをだし、問題ない場合マージをする。</br>
7. Firebase Hostingにデプロイ。</br>
8. 動作異常の有無を確認する。問題の規模によってはブランチを切り修正。</br>

### ④ 主に使う開発技術
- [react](https://reactjs.org/) 
- [typescript](https://www.typescriptlang.org/) 
- [emotion](https://emotion.sh/docs/introduction)
- [recharts](https://recharts.org/en-US/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [storybook](https://storybook.js.org/)
- [jest](https://jestjs.io/docs/tutorial-react)　
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)　
- [GitHub Actions](https://github.com/features/actions)
- [Firebase](https://firebase.google.com/?hl=en)
