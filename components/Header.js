
export default function Header() {
  return (
    <>
    <header className="navigation container">
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
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
        justify-content: space-around;
        height: 60px;
      }
      `}</style>
    </>
  );
}
