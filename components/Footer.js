
export default function Footer() {
  return (
    <>
    <footer>
      <div>
        <a href="https://gonativecode.connpass.com/">運営 ： GoNativeCode - 「connpassに、まだないイベントをつくろう！」</a>
      </div>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFF00;
        color: #C6161E;
      }
      footer a {
        color: #C6161E;
        display: flex;
        text-decoration: none;
      }
      footer a:hover,
      footer a:focus,
      footer a:active {
        text-decoration: underline;
      }
      footer a:visited {
        color: #8a252a;
        opacity: 0.5;
      }
      `}</style>
    </>
  );
}
