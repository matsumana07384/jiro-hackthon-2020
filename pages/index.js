import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '@material-ui/core/Button';

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
            <p className="date">
              2020年6月5日（金）20:00<br></br>
              〜<br></br>
              2020年6月7日（日）20:00
            </p>
            <p>@online</p>
            <p className="button">
              <a href="https://gonativecode.connpass.com/event/173348/" target="_blank" rel="noopener noreferrer">
                <Button variant="contained" size="large">参加する</Button>
              </a>
            </p>
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
            テーマは改めて当日発表します。あとはジロリアンの皆さんが欲しいもの、使いたいものを自由に創って頂きます。一日でアイデア出しから実装、発表資料の作成までをすべて行って頂きます。Webアプリ、スマホアプリ、ツール等、何をどこでどう作るかは参加者のみなさんの自由です。開発部門は、アイデアと制作物の完成度で審査がされます。
            </p>
          </div>

          <div className="section white" id="qualification">
            <p className="title">
              参加資格
            </p>
            <p className="description">
              ラーメン二郎を愛するエンジニアの方ならどなたでも
              <ul>
                <li>個人でもチームでもご参加頂けます</li>
                <li>チーム参加の場合は、申込時にアンケートにて、チーム名をご記入ください。</li>
                <li>チーム参加の場合でも、全メンバー必ず本フォームからお申込をお願いいたします。</li>
                <li>個人参加の方は原則個人での開発となります。当日、お誘いあわせの上でチームを組むことも可能です。</li>
              </ul>  
            </p>
          </div>
          <div className="section black" id="schedule">
            <p className="title">
              参加者スケジュール
            </p>
            <div className="description">
              <table>
                <tr>
                  <th>日にち</th>
                  <th>時間</th>
                  <th>内容</th>
                </tr>
                <tr>
                  <td rowspan="2">2020年6月5日（金）</td>
                  <td>20:00-20:30</td>
                  <td>オープニング・詳細発表</td>
                </tr>
                <tr>
                  <td>20:30-</td>
                  <td>開発開始</td>
                </tr>
                <tr>
                  <td>2020年6月6日（土）</td>
                  <td>20:00-20:30</td>
                  <td>終日開発</td>
                </tr>
                <tr>
                  <td　rowspan="5">2020年6月7日（日）</td>
                  <td>12:00-15:00</td>
                  <td>発表会エントリー受付</td>
                </tr>
                <tr>
                  <td>17:00</td>
                  <td>開発終了</td>
                </tr>
                <tr>
                  <td>17:00-19:00</td>
                  <td>発表会</td>
                </tr>
                <tr>
                  <td>19:00-19:30</td>
                  <td>審査時間（休憩）</td>
                </tr>
                <tr>
                  <td>19:00-19:30</td>
                  <td>オンライン飲み会（任意参加）</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="section white" id="live">
            <p className="title">
              生配信スケジュール
            </p>
            <p className="description">
            <table>
                <tr>
                  <th>日にち</th>
                  <th>時間</th>
                  <th>内容</th>
                </tr>
                <tr>
                  <td　rowspan="5">2020年6月7日（日）</td>
                  <td>15:00-15:30</td>
                  <td>イベント概要のおさらい</td>
                </tr>
                <tr>
                  <td>15:30-17:00</td>
                  <td>TBD</td>
                </tr>
                <tr>
                  <td>17:00-19:00</td>
                  <td>発表会（1チーム/1個人 5分程度）</td>
                </tr>
                <tr>
                  <td>19:00-19:30</td>
                  <td>TBD</td>
                </tr>
                <tr>
                  <td>19:00-21:00</td>
                  <td>結果発表・表彰・講評、エンディング</td>
                </tr>
              </table>
            </p>
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
        .hero .date {
          line-height: 1.5;
          font-size: 1.2rem;
          margin-top: 1rem;
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
        .white .title::before {
          background-image: url("/garlic_black.png");
        }
        .black .title::before {
          background-image: url("/garlic_white.png");
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
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
