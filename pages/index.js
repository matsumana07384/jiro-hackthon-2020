import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HashTag from '../components/hashtag'

export default function Home() {
  return (
    <div className="container bg">
      <Head>
        <title>「ハッカソン二郎オンライン」 - ラーメン二郎ハッカソン"ジロッカソン"インスパイア企画 -</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="「ハッカソン二郎オンライン」 - ラーメン二郎ハッカソン ジロッカソン インスパイア企画 -" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="「ハッカソン二郎オンライン」 - ラーメン二郎ハッカソン ジロッカソン インスパイア企画 -" />
        <meta property="og:description" content="" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div className="hero">
          <div className="titleSection">
            <h1 className="title">
              ハッカソン<br></br>
              二郎オンライン
            </h1>
            <p className="subtitle">
              - ラーメン二郎ハッカソン"ジロッカソン"<br></br>
              インスパイア企画 -
            </p>
            <div className="textBlock">
              <p className="text">
                2020年6月5日（金）20:00<br></br>
                 〜 <br></br>
                2020年6月7日（日）20:00
              </p>
              <p className="text">@online</p>
            </div>
            <div>
              <p className="status">\ 審査中 /</p>
              <div className="text">
                <iframe width="312" height="176" src="https://live.nicovideo.jp/embed/lv326378738" scrolling="no" frameborder="1"><a href="https://live.nicovideo.jp/watch/lv326378738">ハッカソン二郎オンライン</a></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="section white" id="about">
            <p className="title">
              概要
            </p>
            <p className="description">
              ジロリアンによるジロリアンのための二郎に捧げるハッカソンイベントの"インスパイア企画"です。
              コロナ禍とニンニクの強烈な臭いの関係で会場の確保が難しいため、オンラインでハッカソンを実施いたします。
              2020年、ジロッカソンの"インスパイア"イベントとして、GoNativeCodeが企画・運営をいたします。
              当日は、運営チームによる実況生放送を行う予定です。豪華ゲストが来るかもしれない…！？
              そして、企業スポンサー＆個人スポンサー募集中！
              場合によっては景品が豪華になる…かも！？！<br></br>優勝賞品は、ニンニク1年分です！
            </p>
          </div>
          <div className="section black" id="theme">
            <p className="title">
              開発テーマ
            </p>
            <p className="description">
              今回のハッカソンは「ジロッカソン」のインスパイアということで、テーマはそのまま拝借して「二郎ライフを楽しく／便利にするアプリケーション」とします！<br></br>
              「ラーメン二郎（や二郎インスパイア系と呼ばれるラーメン）」と「テクノロジー」が絡んだものであればなんでもOK！本当に便利なアプリを作るのはもちろん、使って楽しいアプリもよし、はたまた近頃持ち帰りも盛んな物理二郎を素材にするのもいいかもしれません。（食べ物は粗末に扱わず美味しく食べましょう。）
              </p>
          </div>
          <div className="section white" id="qualification">
            <p className="title">
              参加資格
            </p>
            <div>
              <p>ラーメン二郎を愛するエンジニアの方ならどなたでも</p>
              <ul className="list">
                <li>個人でもチームでもご参加頂けます</li>
                <li>当日、お誘いあわせの上でチームを組んでいただいても構いません</li>
              </ul>
            </div>
          </div>
          <div className="section black" id="rule">
            <p className="title">
              ルール
            </p>
            <div className="description">
              <ul className="list">
                <li>
                今回のハッカソンはオンライン上で行います。参加に際しては本イベントページでの録を推奨いたしますが、期間が長いため、必須とはしないものとします。基本的には参加者へのDMにて情報をお送りしますが、Twitterのハッシュタグ「 <HashTag />」や <a href="https://gonativecode.connpass.com/event/173348/" target="_blank" rel="noopener noreferrer">イベントページ</a>等でも情報を発信し、参加登録されていない方でも確認いただけるよう努めてまいります。
                </li>
                <li>開発期間は6/5（金）20:00から6/7（日）17:00の45時間とします。この時間には発表用の資料制作の時間を含みます。期間中でご都合の良い時に開発いただければ構いません。また各自で適切に睡眠を取ってください。スケジュールについては<a href="https://gonativecode.connpass.com/event/173348/" target="_blank" rel="noopener noreferrer">イベントページ</a>を合わせてご覧ください。
                </li>
                <li>
                希望される方のチーム編成については、各々にてお願いいたします。その際はハッシュタグ「 <HashTag /> 」をご活用いただければと思います。
                </li>
                <li>
                開発中も、随時Twitterのハッシュタグ「 <HashTag /> 」をご活用いただき、進捗報告やお昼ご飯の共有などでいただき盛り上げていただけますと助かります。
                </li>
                <li>
                  発表会は6/7（日）17:00から、ビデオ会議ツール「<a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">zoom</a>」をもちいて行うものとします。また、作品の状況の確認のため、同日12:00-15:00にエントリーの時間を設けます。また、開発いただいた上で発表会の時間にご予定があるなど、発表会にご参加いただけない方は、資料をご用意いただければ代理にて作品のご紹介をさせていただきます。詳細については6日（土）中に改めてご案内いたします。
                </li>
                <li>
                  7日（日）にはYouTube Liveを用いた生放送を予定しております。また、作品の発表会や審査結果発表も同放送内で行う予定です。詳細については7日（日）に改めてご案内いたします。
                </li>
                <li>
                  イベント規模が小さいことから、審査については部門ごとの賞などは設けず、総合的な審査を行い、最優秀の作品を1作品と、入賞を数作品選出する予定です。審査基準については、「アイデアの内容」と「使用している技術」の両側面を考慮するよう努めますが、テーマの性質上、「アイデアの内容」、特に「面白さ/斬新さ」の面の比重を大きくした審査となります。
                </li>
                <li>
                  優勝された方には個別にご連絡をし、優勝商品の「ニンニク1年分」を手配いたします。原則としてお受け取りください。
                </li>
                <li>
                当日の状況にもよりますが、生放送終了後にご希望の方でzoomを用いたオンライン懇親会を行いたいと考えています。ぜひご参加いただけますと嬉しいです。
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </main>

      <Footer />


      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }
        p {
          margin: 0;
        }
        .hero {
          background-color: rgba(0,0,0,0.5);
          color: #ffffff;
          padding: 3rem 0;
          width: 100vw;
        }
        table {
          margin: 0 auto;
        }
        .black table th {
          background-color: #000;
        }
        .black table th,
        .black table td {
          padding: 1em 10px 1em 1em;
          border: 1px solid #bbb;
        }
        .white table th {
          background-color: #fff;
        }
        .white table th,
        .white table td {
          padding: 1em 10px 1em 1em;
          border: 1px solid #000;
        }


        .hero .title {
          font-size: 4rem;
          margin: 0;
        }
        .hero .subtitle {
          font-size: 2rem;
        }
        .hero .textBlock {
          margin-top: 1rem;
        }
        .hero .text {
          font-size: 1.2rem;
        }
        .hero .button {
          margin-top: 1rem;
        }
        .description {
          font-size: 1.1rem;
          text-align: center;
          padding: 1vh 15vw 5vh 15vw;
          margin: 0 auto 0 auto;
        }
        ul li {
          text-align: left;
        }

        .bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          background-image: url("/ramen_bk.jpg");
        }
        .section {
          scroll-padding-top: 60px;
          margin: 0;
        }
        .black {
          background-color: rgba(0,0,0,0.5);
          color: #ffffff;
        }
        .white {
          background-color: rgba(255,255,255,0.5);
          color: #000000;
        }
        .section .title {
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          padding-top: 1rem;
          padding-bottom: 1rem;                
        }
        .section .title::before  {
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: contain;
          content: '';
          display: inline-block;
          width: 2rem;
          height: 1.5rem;
        }    
        .list {
          text-align: left;
          display: inline-block;        }
        .list >li {
          margin: 1rem;
        }
        .list >li:first-child{
          maring-top: 0;
        }
        .white .title::before {
          background-image: url("/garlic_black.png");
        }
        .black .title::before {
          background-image: url("/garlic_white.png");
        }
        .status {
          color: #C6161E;
          font-size: 1.5rem;
          margin-top: 1rem;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          scroll-padding-top: 60px;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
