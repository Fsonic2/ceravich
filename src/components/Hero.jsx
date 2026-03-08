export default function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../assets/slidercaro/slider1.webp" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
            <button className="btn btn-primary"></button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../assets/slidercaro/slider2.webp" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
            <button className="btn btn-primary"></button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../assets/slidercaro/slider3.webp" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
            <button className="btn btn-primary"></button>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}