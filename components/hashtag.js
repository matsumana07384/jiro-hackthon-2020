
export default function Hashtag() {
  return (
    <>
      <a className="hashtag" href="https://twitter.com/search?q=%23%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E4%BA%8C%E9%83%8E" target="_blank" rel="noopener noreferrer">#ハッカソン二郎</a>    <style jsx>{`
      .hashtag {
        color: #C6161E;
        text-decoration: none;
      }
      .hashtag :hover,
      footer a:focus,
      footer a:active {
        text-decoration: underline;
      }
      .hashtag a:visited {
        color: #8a252a;
        opacity: 0.5;
      }
      `}</style>
    </>
  );
}
