import React, { useState } from "react";
import ReusableSection from "../../Components/Cards/reuse";
import { Box } from "@mui/material";
import image1 from "../../Assets/Png/Frame 604.png";
import image2 from "../../Assets/Png/Frame 608.png";
import image3 from "../../Assets/Png/Frame 609.png";
import image4 from "../../Assets/Png/Frame 610.png";
import image5 from "../../Assets/Png/g27cq4-500x500 1.png";
import image6 from "../../Assets/Png/g92-2-500x500 1.png";
import image7 from "../../Assets/Png/ak-900-01-500x500 1.png";
import image8 from "../../Assets/Png/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";

const MainComponent = () => {
  const initialWishlist = [
    { name: "Gucci duffle bag", price: 960, originalPrice: 1160, badge: "-35%", image: image1 },
    { name: "RGB liquid CPU Cooler", price: 1960, image: image2 },
    { name: "GP11 Shooter USB Gamepad", price: 550, image: image3 },
    { name: "Quilted Satin Jacket", price: 750, image: image4 },
  ];

  const initialFeatured = [
    { name: "ASUS FHD Gaming Laptop", price: 960, originalPrice: 1160, badge: "-35%", image: image5, rating: 4.5, reviews: 65 },
    { name: "IPS LCD Gaming Monitor", price: 1160, image: image6, rating: 4.5, reviews: 65 },
    { name: "HAVIT HV-G92 Gamepad", price: 560, badge: "NEW", image: image7, rating: 4.5, reviews: 65 },
    { name: "AK-900 Wired Keyboard", price: 200, image: image8, rating: 4.5, reviews: 65 },
    { name: "Gaming Mouse", price: 80, image: image2, rating: 4.5, reviews: 32 },
    { name: "Headset with Mic", price: 220, image: image3, rating: 4.8, reviews: 54 },
    { name: "Ergonomic Chair", price: 500, image: image4, rating: 4.7, reviews: 45 },
    { name: "Portable SSD", price: 300, image: image1, rating: 4.6, reviews: 40 },
  ];

  const [wishlistProducts, setWishlistProducts] = useState(initialWishlist);
  const [allFeaturedProducts, setAllFeaturedProducts] = useState(initialFeatured);
  const [showAll, setShowAll] = useState(false);

  const displayedFeaturedProducts = showAll
    ? allFeaturedProducts
    : allFeaturedProducts.slice(0, 4);

  // Handle delete from wishlist
  const handleDeleteFromWishlist = (index) => {
    setWishlistProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle add to wishlist
  const handleAddToWishlist = (index) => {
    const productToMove = allFeaturedProducts[index];
    setWishlistProducts((prev) => [...prev, productToMove]);
    setAllFeaturedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <ReusableSection
        title={`Wishlist (${wishlistProducts.length})`}
        buttonText="Move All To Bag"
        products={wishlistProducts}
        actionIcon="delete"
        onActionClick={handleDeleteFromWishlist}
      />
      <ReusableSection
        title="Just For You"
        buttonText={showAll ? "See Less" : "See All"}
        products={displayedFeaturedProducts}
        actionIcon="eye"
        onActionClick={handleAddToWishlist}
        onButtonClick={() => setShowAll(!showAll)}
        mt={14}
      />
    </Box>
  );
};

export default MainComponent;
