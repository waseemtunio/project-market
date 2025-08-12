export function TextCounterSection({ text, paragraph }) {
  return (
    <>
      <section className="sm-center-text-sec">
        <div className="container">
          <div className="text-center">
            <p className="text-3" dangerouslySetInnerHTML={{ __html: text }} />
            <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
        </div>
      </section>
    </>
  );
}
