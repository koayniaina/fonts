import mac from '@/public/welcome_hero_endframe__c61x1mv7kgqe_large.jpg'
import souri from '@/public/Mysz-Gamingowa-SteelSeries-Rival-600-12000DPI-RGB-Producent-SteelSeries.jpeg'
import phone from '@/public/APPLE-IPHONE-13-MINI-256GB-KOLORY-GRATISY-PREMIUM-Pamiec-RAM-4-GB.jpeg'
import Image from 'next/image';
export default function Home() {
  return (
    // <div>
    <section className="slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={phone} alt={'mac'} />
            <div className="carousel-caption ">
              <h5>First slide label</h5>
            </div>
          </div>
          <div className="carousel-item">
             <Image src={mac} alt={'mac'} />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={souri} alt={'mac'} />
            <div className="carousel-caption">
              <h5>Third slide label</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
