import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScheduleTable from '../components/ScheduleTable'

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
            <p className="subtitle">- ラーメン二郎ハッカソン"ジロッカソン"インスパイア企画 -</p>
            <p className="description">
              2020年6月5日（金）20:00　〜　2020年6月7日（日）20:00
            </p>
          </div>
        </div>

        <div className="grid">

          <div className="section-wh">
            <p className="title">
              趣旨
            </p>
            <p className="description">
              ジロリアンによるジロリアンのための二郎に捧げるハッカソンイベントの"インスパイア企画"です。
              コロナ禍とニンニクの強烈な臭いの関係で会場の確保が難しいため、オンラインでハッカソンを実施いたします。
              2020年、ジロッカソンの"インスパイア"イベントとして、GoNativeCodeが企画・運営をいたします。
              当日は、運営チームによる実況生放送を行う予定です。豪華ゲストが来るかもしれない…！？
              そして、企業スポンサー＆個人スポンサー募集中！
              場合によっては景品が豪華になる…かも！？！
            </p>
          </div>
          <div className="section-bl">
            <p className="title">
              概要
            </p>
            <p className="description">

            </p>
          </div>

          <div className="section-wh">
            <p className="title">
              参加資格
            </p>
            <p className="description">
              
            </p>
          </div>

          <div className="section-bl">
            <p className="title">
              参加者スケジュール
            </p>
            <div className="description">
              <ScheduleTable />
            </div>
          </div>

          <div className="section-bl">
            <p className="title">
              「ハッカソン二郎オンライン」参加者スケジュール
            </p>
            <p className="description">
              
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
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .hero .title {
          font-size: 4rem;
          margin: 0;
        }
        .hero .subtitle {
          font-size: 2rem;
        }
        .hero .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }
        .section-wh .title,
        .section-bl .title {
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          padding-top: 1rem;
          padding-bottom: 1rem;                
        }
        .description {
          font-size: 1.1rem;
          text-align: center;
        }

        .bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          background-image: url("/ramen_bk.jpg");
        }
        .section-bl {
          background-color: rgba(0,0,0,0.5);
          color: #ffffff;
          margin: 0;
        }
        .section-wh {
          background-color: rgba(255,255,255,0.5);
          color: #000000;
          width: 100vw;
        }

        .grid {
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
