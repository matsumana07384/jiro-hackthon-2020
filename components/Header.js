
export default function Header() {
  return (
    <>
    <header className="navigation container">
      <div><a href="#about">概要</a></div>
      <div><a href="#theme">開発テーマ</a></div>
      <div><a href="#qualification">参加資格</a></div>
      <div><a href="#rule">ルール</a></div>
    </header>
    <style jsx>{`
      header {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
      }
      .navigation {
        background: #FFFF00;
        color: #C6161E;
        width: 100%;
      }
      .container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        height: 60px;
      }
      header a{
        color: #C6161E;
        display: flex;
        text-decoration: none;
      }
      header a:hover,
      header a:focus,
      header a:active {
        text-decoration: underline;
      }
      header a:visited {
        color: #8a252a;
        opacity: 0.5;
      }
      `}</style>
    </>
  );
}
