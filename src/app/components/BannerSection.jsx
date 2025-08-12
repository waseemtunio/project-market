export function BannerSection({ title, bgImg }) {
  return (
    <>
      <section id="sm-bg-text-sec" className="sm-bg-text-sec" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay"></div>
        <div className="text-cont">
          <h2 className="title-3 text-center">{title}</h2>
        </div>
      </section>
    </>
  );
}
/* 
public/images/banner.jpg
*/
