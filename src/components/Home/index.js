import Header from '../Header';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

import './index.css';

const imagesList1 = [
    {
        id: 1,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734095573/Marble-1_wdqbax.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Marble"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734095645/Marble-2_wh1pq7.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Granite"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734095717/Marble-3_vhoyct.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Quartize"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734096721/Marble-4_ovnp5v.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Limestone"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734096736/Marble-5_cfcohn.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Travetine"
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734097629/Marble-6_utmz3d.jpg",
        altText: "Stone Pedia Exclusive",
        name: "Onyx"
    }

]

const imageList2 = [
    {
        id:1,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734100628/Forest-Black-01-_gz2dj8.png",
        altText: "Stone Pedia Exclusive",
        name: "Forest Black"
    },
    {
        id:2,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734100644/Kuppam-Green-Granite-01-_tbqwbn.png",
        altText: "Stone Pedia Exclusive",
        name: "Kuppam Green Granite"
    },
    {
        id:3,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734100659/Forest-Green-Marble-01-_ndmekz.png",
        altText: "Stone Pedia Exclusive",
        name: "Forest Green"
    },
    {
        id:4,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734100672/kaddapah-black-limestone-01-_1_xl1tvv.png",
        altText: "Stone Pedia Exclusive",
        name: "Kaddapah Black"
    }
]

const imageList3 = [
    {
        id:1,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734101919/Rajasthan-Black-Granite-01-Custom_zqvhms.png",
        altText: "Stone Pedia Exclusive",
        name: "Rajasthan Black"
    },
    {
        id:2,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734101934/Kota-Brown-Sandstone-01-_sg0geu.png",
        altText: "Stone Pedia Exclusive",
        name: "Kota Brown sandstone"
    },
    {
        id:3,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734101948/Crystal-Blue-Granite-01-1-1_kl7qrk.png",
        altText: "Stone Pedia Exclusive",
        name: "Crystal Blue Granite"
    },
    {
        id:4,
        image: "https://res.cloudinary.com/demx1ym4x/image/upload/v1734100672/kaddapah-black-limestone-01-_1_xl1tvv.png",
        altText: "Stone Pedia Exclusive",
        name: "Kaddapah Black"
    }
]

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <NavigationBar />
      <div className="content-section">
            <div className="products-container" id="stonePediaExclusive">
                <h1 className="home-category-heading">Stone Pedia Exclusive</h1>
                <div className="stone-pedia-exclusive-images">
                    {imagesList1.map(imageDetails => (
                        <div className="image-container" key={imageDetails.id}>
                            <img src={imageDetails.image} alt={imageDetails.altText} className="image" />
                            <p className='image-name'>{imageDetails.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='products-container' id="bestSellingProducts">
                    <h1 className='home-category-heading'>Best Selling Products</h1>
                    <div className="best-selling-products-images">
                        {imageList2.map(imageDetails => (
                            <div className="image-container" key={imageDetails.id}>
                                <img src={imageDetails.image} alt={imageDetails.altText} className="image" />
                                <p className='image-name'>{imageDetails.name}</p>
                            </div>
                        ))}
                    </div>
            </div>

            <div className='products-container' id="ourPremiumStones">
                <h1 className='home-category-heading'>Our Premium Stones</h1>
                <div className="our-premium-stones-images">
                    {imageList3.map(imageDetails => (
                        <div className="image-container" key={imageDetails.id}>
                            <img src={imageDetails.image} alt={imageDetails.altText} className="image" />
                            <p className='image-name'>{imageDetails.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="why-stone-pedia">
                <h1 className='why-stone-pedia-heading'>Why Stone Pedia?</h1>
                <p className='description'>
                    StonePedia is a leading name in the stone industry, offering a wide
                     range of high-quality stones for all your needs. With a focus on 
                     excellence and customer satisfaction, we strive to provide our customers 
                     with the best products and services. Our dedicated team is committed to 
                     ensuring that every customer is satisfied with their purchase.
                      We are proud to offer a wide range of stones, including marble, 
                      granite, limestone, and more. We also offer a variety of services, 
                      including stone installation, stone maintenance, and stone repair. 
                      We are committed to providing our customers with the best possible 
                      experience. We are proud to offer a wide range of stones, including 
                      marble, granite, limestone, and more. We also offer a variety of services, 
                      including stone installation, stone maintenance, and stone repair. We are 
                      committed to providing our customers with the best possible experience.
                </p>
            </div>
            <div>
                <Footer />
            </div>
      </div>
    </div>
    
  </>
);

export default Home;
