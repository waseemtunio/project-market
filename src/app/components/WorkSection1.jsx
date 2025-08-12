import Image from "next/image";
export function WorkSection1() {
  return (
    <>
      <section className="work-sec1">
        <div className="container-w1">
          <div className="img-text-box">
            <div className="img-box">
              <video src={`/video/video2.mp4`} width="100%" height="auto" muted autoPlay loop playsInline className="video-element" />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>drone videography</span>
              </h2>
              <p className="text-1">
                Stunning aerial visuals that elevate your brand presence and bring services to life — perfect
                <br /> for real estate, construction, tourism, and local marketing.
              </p>
              <ul>
                <li>Before/after property flyovers</li>
                <li>Business intro reels</li>
                <li>Short-form social video clips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="work-sec1">
        <div className="container-w1">
          <div className="img-text-box">
            <div className="img-box">
              <Image src={`/images/seo.webp`} width={1240} height={700} alt="alt" />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>seo & performance</span>
              </h2>
              <p className="text-1">Visual reports, keyword strategy snapshots, and web performance improvements that show the value of smart, technical SEO.</p>
              <ul>
                <li>Before/after rankings or traffic screenshots</li>
                <li>Speed audit improvements</li>
                <li>SEO dashboard previews</li>
                <li>Schema/technical markup results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container">
          <div className="sm-flex sm1">
            <div className="call sm1">
              <div className="img-text-box">
                <div className="img-box">
                  <Image src={`/images/ecommerch.webp`} width={400} height={600} alt="alt" />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>e-commerce</span>
                  </h2>
                  <p className="text-1">E-commerce website design and development</p>
                </div>
              </div>
            </div>
            <div className="call sm2">
              <div className="img-text-box">
                <div className="img-box">
                  <Image src={`/images/wordpress.webp`} width={760} height={345} alt="alt" />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>wordpress</span>
                  </h2>
                  <p className="text-1">Wordpress website design and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container-w2">
          <div className="img-text-box">
            <div className="img-box">
              <Image src={`/images/shopify.webp`} width={880} height={372} alt="alt" />
            </div>
            <div className="content">
              <h2 className="title-4">
                <span>shopify</span>
              </h2>
              <p className="text-1">Shopify website design and development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-sec1">
        <div className="container">
          <div className="sm-flex sm2">
            <div className="call sm1">
              <div className="img-text-box">
                <div className="img-box">
                  <Image src={`/images/webflow.webp`} width={400} height={209} alt="alt" />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>webflow</span>
                  </h2>
                  <p className="text-1">Webflow website design and development</p>
                </div>
              </div>
            </div>
            <div className="call sm2">
              <div className="img-text-box">
                <div className="img-box">
                  <Image src={`/images/wix.webp`} width={760} height={427} alt="alt" />
                </div>
                <div className="content">
                  <h2 className="title-4">
                    <span>wix</span>
                  </h2>
                  <p className="text-1">Wix website design and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
