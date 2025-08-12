export function ServicesSection({ title, description, list1, list2 }) {
  return (
    <>
      <section className="services-sec">
        <div className="container">
          <div className="box">
            <div className="coll sm1">
              <h2 className="title-2" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div className="coll sm2">
              <p className="text-1">{description}</p>
              <div className="list-flex">
                <div className="list-text" dangerouslySetInnerHTML={{ __html: list1 }} />
                <div className="list-text" dangerouslySetInnerHTML={{ __html: list2 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
