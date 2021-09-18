# 都道府県別の総人口推移グラフを表示するReactアプリケーション

## Try the demo

![Sep-17-2021 13-24-08](https://user-images.githubusercontent.com/48965717/133849256-699ed34b-3f96-46e7-b0c3-f159d3cc2808.gif)

### 🖥デモはこちらです→[here!](https://historical-population-graph.web.app/)
### 📕StoryBookで作成したコンポーネント集はこちらです→[here!](https://www.chromatic.com/library?appId=6144f1a5e52e66003a3f4c12&branch=main)

## Requirements
✅　→　満たしている <br>
🌀　→　満たしているがもっと良くできる(知識不足) <br>
❓　→　自分では完全に満たしているかどうか判断できない
- ✅　[RESAS(地域経済分析システムAPI)](https://opendata.resas-portal.go.jp/)の「都道府県一覧」からAPIを取得する。
- ✅　APIレスポンスから都道府県一覧のチェックボックスを動的に生成する。
- ✅　都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する。
- ✅　人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する。
  - ㊟グラフはサードパーティ製のグラフライブラリを用いて描画すること。ex) [Recharts](https://recharts.org/en-US/) 
- ✅　Google Chrome最新版で正しく動くこと。　
- ✅　PC/スマートフォン表示に対応すること(レスポンシブデザイン)対応 
  - ㊟Google Chromeの検証ツールで確認できればよい。 
- ✅　ESLintとPrettierを適切に設定すること。 
- ✅　styleは自分で記述し、CSS・UIフレームワークなどは原則使用しないこと。 
  - ㊟chartライブラリ内包のstyle、リセット系のCSSライブラリについてはこの限りではない。 
  - ㊟css-in-jsやcss-modules、sassなどのエコシステムの利用を妨げるものではなく、あくまでcssの記述力を測る趣旨に留まる。 
- ❓　セキュリティを考慮してコードを記述すること　→　自分がやったことはRESAS API keyの環境変数化のみです。
- ✅　ソースコードはGitで管理し、作成したソースコードはGitHubにアップロードすること。　
- ✅　Netlify / GitHub Pages / Firebase hosting / Vercel 等のホスティングサービスにデプロイし、インターネット経由で閲覧できる状態にすること。　
- ✅　アプリのコンポーネント粒度の設計、Gitコミットメッセージやコミット粒度、ドキュメンテーション等もレビュー対象となる。　
- ✅　チーム開発を意識してコードを記述すること。　

## Advance Requirements
- ✅　TypeScriptで記述　
- 🌀　テストケース/テストコードを作成。　

## 提出方法
- GitHubのpublicリポジトリのURL→ **https://github.com/tommytommychopper/historical-population-change-graph**

## 提出時のRequirements
- 課題の取り組み開始から完了までに要した合計時間→**30時間**(デザイン+コンポーネント設計+環境構築+コーディング)　㊟READMEの作成時間は考慮していません。
- これまでの総合的なプログラミング歴→**2年と半年**
- これまでのWEBフロントエンドプログラミング歴→**1年**

## コードを書く前の計画

### ① UI design
#### PC版
![image](https://user-images.githubusercontent.com/48965717/133037776-e4b0a1e1-f6f2-40bd-aa2c-c3fe0f112b45.png)

#### SP版
![image](https://user-images.githubusercontent.com/48965717/133873354-97f71e10-300e-4693-a154-7eaaefe9620b.png)

#### 最小単位コンポーネント 
![image](https://user-images.githubusercontent.com/48965717/133038213-c3aeabc5-4fda-4068-ad3a-5e26e24d9002.png)

### 🎨[figmaで見てみる](https://www.figma.com/file/aHPXqjFZXc6HdQh67M5Fwv/%E9%83%BD%E9%81%93%E5%BA%9C%E7%9C%8C%E5%88%A5%E3%81%AE%E7%B7%8F%E4%BA%BA%E5%8F%A3%E6%8E%A8%E7%A7%BB%E3%82%B0%E3%83%A9%E3%83%95?node-id=0%3A1)

### ②　コンポーネントの構造について
1. elements
- 最小単位のコンポーネント　ex) Heading, CheckBox, CustomLineChart
- DOM要素のみで構成（ほかファイルに依存してはならない）
- marginは持たない

2. modules
- DOM要素+複数のelementで構成 ex)　CheckBoxList
- margin は持たない

3. compositions
- DOM要素+modules+elementで構成 ex) CheckBoxGroup(Heading+CheckBoxList)
- DOM要素+compositions+elementで構成　ex)MainApp(CheckBoxGroup+LineChart)
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

## 学んだこと
個人的にコンポーネントの雛形の自動作成ツールとして使用した[hygen](https://www.hygen.io/)は各ファイルの配置場所、名前やimportのスペルミス、書き忘れなど簡単なミスをなくす事ができ物凄く役に立ちました✨　これからも引続き使っていきたいと思うツールになりました。<br>
![Sep-17-2021 18-21-16](https://user-images.githubusercontent.com/48965717/133867476-f62edd97-c58e-42ae-ae81-5c3cad067169.gif)

#### どんなプロジェクトで使用するべき？
- ファイル構成が複雑化している
- 複数のファイルで同じ記述をしなければいけない→ボイラープレート化できる
- プロジェクトが長い期間を経て成長(grow)していきそうな見込みがある

こんな条件を1つでも満たしたプロジェクトであれば大活躍できると思っています👍

## 難しかったこと

難しいなと思ったことは開発チームのみんなが快適にストレスなく作業していくためには何が必要で何を取り入れていけば開発力が上がるのかということを取捨選択していく過程が難しいと感じました。

#### なぜ自分はそれが難しいと感じたのか？
２つ理由があると思っています。
- まず１つ目は、開発経験をより良くするためのツール（静的解析ツールやコードフォーマターなど)が持っている全ての機能を取り入れたからベスト（快適、効率的）💯というそんな簡単な話では無いからです。取り入れすぎると逆に開発経験を悪くするツールになってしまい、本質を見失ってしまいます。チーム開発力ダウンです😱
- 2つ目は、一緒に働いている仲間への感情理解力の低さからくるものだと思っています。なぜなら、仲間の立場に立って物事を見る事ができるようになると仲間が必要としている事、必要になりそうな事ことを予想できて、その問題を解決、または手助けする事ができるツールなどを素早く判断し取り入れていく事ができるからです。<br>

結論としてはチーム開発の知見がまだまだ乏しいです。。場数を増やして克服できるように頑張ります😤💪

#### なぜ自分はストレスなく気持ちよく仲間に作業させてあげたいの、したいの？

素晴らしいプロダクトは良きチーム、環境から生まれると思っているからです。

## これから学習していきたいこと

- [chromatic](https://www.chromatic.com/)の[Github Actionツール](https://github.com/chromaui/action)を使いstorybookのbuildからdeployまでを自動化させたい。また自分だけかもしれないが、storybookのbuildからdeployまでは時間を要する作業なので、どうしたら所要時間を短く(spped up)できるかに時間を確保して勉強していきたい。　<br>
実際に今回のコンポーネント集をbuildからdeployまでのプロセスで13分を要しました。
![image](https://user-images.githubusercontent.com/48965717/133866091-dfdffd71-0159-4dc0-bd27-c88b5f9a8823.png)

- テストを書いて開発するサイクル(テストを書く→failする→passするためのコードを書いていく→リファクタリング)は掴めてきたのですが、テストに関する技術の知見が浅すぎるため、レベルの低いテストコードになってしまっているのでテスト技術の知見を深めて適材適所で正しいテストを行える人材になるためにも時間をとって学習していきたいと思っています。特に[cypress](https://www.cypress.io/)などのE2Eテストは非常に興味深い。。<br>

## 最後に
何かご不明点、間違っている点があれば、どうぞご指摘ください🙏 とてもありがたいです。<br>
最後まで読んでいただき、ありがとうございました！<br>
