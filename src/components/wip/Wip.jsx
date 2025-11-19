import "@/styles/layout/wip/Wip.scss";
import Spinner from "./Spinner";

function wip() {
  return (
    <>
      <section className="wip">
        <article className="wip__mobile">
          <div className="wip__mobile__line-top"></div>
          <div>
            <Spinner />
          </div>

          <div className="wip__mobile__line-bottom"></div>
        </article>

        <article className="wip__desktop">
          <div className="wip__desktop__screen">
            <div className="wip__desktop__screen__line-around">
              <Spinner />
            </div>
          </div>
          <div className="wip__desktop__line-bottom"></div>
        </article>
      </section>
    </>
  );
}

export default wip;
