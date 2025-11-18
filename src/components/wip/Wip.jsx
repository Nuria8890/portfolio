import "@/styles/layout/Wip.scss";

function wip() {
  return (
    <div className="screen">
      <main className="wip">
        <article className="wip__mobile">
          <div className="wip__mobile__line-top"></div>
          <h1 className="wip__mobile__text">
            Work <br /> In <br /> Progress
          </h1>
          <div className="wip__mobile__line-bottom"></div>
        </article>

        <article className="wip__desktop">
          <div className="wip__desktop__screen">
            <div className="wip__desktop__screen__line-around">
              <h1 className="wip__desktop__screen__text">
                Work <br /> In <br /> Progress
              </h1>
            </div>
          </div>
          <div className="wip__desktop__line-bottom"></div>
        </article>
      </main>
      <footer className="footerWip">
        <p className="footer__text">made by NuriaCD 🐜</p>
      </footer>
    </div>
  );
}

export default wip;
