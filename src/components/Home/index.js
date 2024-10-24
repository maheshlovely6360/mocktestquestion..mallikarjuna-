import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes that get you Noticed</h1>
        <img
          src="https://assets.ccbp.in/fronted/react-js/nxt-trend-home-img.png"
          alt="dressess to be noticed"
          className="home-mobile-image"
        />
        <p className="home-description">
          Fashion is a part of the daily air and it does not quite help that it
          changes all the time.Clothes have always been a maker of the era and
          we are in a revolution.Your fashion makes you been seen and heard that
          way you are. So, celebrates the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://apis.ccbp.in/fronted/react-js/nxt-trendz-home-img.png"
        alt="dressess to be noticed"
        className="home-desktop-imh"
      />
    </div>
  </>
)

export default Home
