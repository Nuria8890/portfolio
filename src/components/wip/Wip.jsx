import "@/styles/layout/Wip.scss";

function wip() {
  return (
    <>
      <main className="section">
        <article className="section__mobile">
          <div className="section__mobile__line-top"></div>
          <h1 className="section__mobile__text">
            Work <br /> In <br /> Progress
          </h1>
          <div className="section__mobile__line-bottom"></div>
        </article>
      </main>
      <footer className="footerWip">
        <p className="footer__text">made by NuriaCD 🐜</p>
      </footer>
    </>
  );
}

export default wip;
