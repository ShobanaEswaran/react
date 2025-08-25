import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Logo from "./logo.png";

const Header = () => (
  <div id="header" className="container">
    <div>
      <img
        src={
          "https://raw.githubusercontent.com/ShobanaEswaran/react/refs/heads/main/logo.png"
        }
        className="nav-logo"
        alt="Logo"
      />
    </div>
    <div className="menus">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <div id="footer">
    <div className="container">
      <h4>© 2025 HappyFoodCourt Limited</h4>
    </div>
  </div>
);

const resData = [
  {
    info: {
      id: "16543",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/80ad1717-e8b5-43ec-a636-80e8e0f95e36_16543.JPG",
      locality: "Purasavakkam",
      areaName: "Purasaiwakkam",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.6,
      veg: true,
      parentId: "22",
      avgRatingString: "4.6",
      totalRatingsString: "45K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "3.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-purasavakkam-purasaiwakkam-rest16543",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "453068",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Express Avenue",
      areaName: "Royapettah",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chinese-wok-express-avenue-royapettah-rest453068",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "133885",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/3c805fdd-40db-4bd3-ad18-6ae90f2e8087_133885.JPG",
      locality: "Kilpauk",
      areaName: "Kilpauk",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹98",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/pizza-hut-kilpauk-rest133885",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "726146",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/181571b0-fe99-4af5-88dc-276ba41bcc3b_726146.JPG",
      locality: "Purasawalkam High Road",
      areaName: "Kellys",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹290",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/theobroma-purasawalkam-high-road-kellys-rest726146",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "573354",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_573354.JPG",
      locality: "PAPER MILLS ROAD",
      areaName: "Perambur",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/big-bowl-paper-mills-road-perambur-rest573354",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "855290",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/f3c8143e-b15b-44f5-996f-1055d8059340_855290.JPG",
      locality: "Manickam Road",
      areaName: "Annanagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 05:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/olio-the-wood-fired-pizzeria-manickam-road-annanagar-rest855290",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "638993",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/c201c16d-3023-4d38-8528-f921a7d42aa5_638993.JPG",
      locality: "2ND MAIN ROAD",
      areaName: "ANNA NAGAR",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 6.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 01:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/baskin-robbins-ice-cream-desserts-2nd-main-road-anna-nagar-rest638993",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23742",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4c01669a-f693-4ea9-b6f9-683cc1a5387f_23742.jpg",
      locality: "Kilpauk",
      areaName: "Anna Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "44K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "5.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mcdonalds-kilpauk-anna-nagar-rest23742",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "708880",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b0fe2862-f2b2-4d29-998d-1fdb5cfbbf6d_708880.JPG",
      locality: "Sydenhams Road",
      areaName: "Periyampet",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "4.2K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/kfc-sydenhams-road-periyampet-rest708880",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "391590",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/6fbfb04f-18a0-4d66-b5e4-0b240f23649a_391590.jpg",
      locality: "Sowcarpet",
      areaName: "George Town",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.4",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-belgian-waffle-co-sowcarpet-george-town-rest391590",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "33457",
      name: "Buhari",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/11/bf3eb918-ff7f-4b63-bde6-0cc4caee479b_33457.sss.jpg",
      locality: "Purasawalkam - Buhari",
      areaName: "Purasawalkam",
      costForTwo: "₹600 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "South Indian",
        "Arabian",
        "Barbecue",
        "Seafood",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "164",
      avgRatingString: "4.3",
      totalRatingsString: "74K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/buhari-buhari-purasawalkam-rest33457",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639431",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
      locality: "NEAR GRAND SWEETS",
      areaName: "T NAGAR BAZULLAH RD",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 3.9,
      parentId: "351013",
      avgRatingString: "3.9",
      totalRatingsString: "195",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 16:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/dum-safar-biryani-near-grand-sweets-t-nagar-bazullah-rd-rest639431",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "793801",
      name: "Minus 30",
      cloudinaryImageId: "84dfb731ca567d0cd955a5f33ffeba3a",
      locality: "Chennai Corporation Ward - 58",
      areaName: "Mahaveer Colony EvK sampath",
      costForTwo: "₹280 for two",
      cuisines: [
        "Ice Cream",
        "Desserts",
        "Healthy Food",
        "Waffle",
        "Chocolate",
      ],
      avgRating: 4.7,
      veg: true,
      parentId: "292823",
      avgRatingString: "4.7",
      totalRatingsString: "177",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/minus-30-corporation-ward-58-mahaveer-colony-evk-sampath-rest793801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "257162",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "Mahaveer Colony",
      areaName: "Vepery",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.7,
      veg: true,
      parentId: "236673",
      avgRatingString: "4.7",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-brooklyn-creamery-healthy-ice-cream-mahaveer-colony-vepery-rest257162",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "49823",
      name: "Hot Breads",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/25/0f47ee14-2d3b-4642-be5e-09dc7dc2fddb_49823.jpg",
      locality: "Kilpauk",
      areaName: "Kilpauk",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "470",
      avgRatingString: "4.7",
      totalRatingsString: "6.7K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "277",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/hot-breads-kilpauk-rest49823",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "263145",
      name: "Fruit Shop On Greams Road",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/cbf0b2be-aeeb-4b89-860c-01a80f3a1141_263145.jpg",
      locality: "Kilpauk",
      areaName: "Harleys Road Kilpauk",
      costForTwo: "₹350 for two",
      cuisines: ["Juices", "Beverages", "Desserts"],
      avgRating: 4.7,
      parentId: "401",
      avgRatingString: "4.7",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-26 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/fruit-shop-on-greams-road-kilpauk-harleys-road-kilpauk-rest263145",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395319",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "sorlxznnnlfm4zv5j6sb",
      locality: "Spencer",
      areaName: "Royapettah",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "10761",
      avgRatingString: "4.3",
      totalRatingsString: "539",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 22:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mcdonalds-gourmet-burger-collection-spencer-royapettah-rest395319",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "454924",
      name: "Havmor Havfunn Ice Cream",
      cloudinaryImageId: "49845b494b1e637209b7bd1c7ca184ad",
      locality: "Jagadambal Colony",
      areaName: "Alwarpet",
      costForTwo: "₹400 for two",
      cuisines: ["Ice Cream", "Cakes", "Desserts", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "94570",
      avgRatingString: "4.6",
      totalRatingsString: "224",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/havmor-havfunn-ice-cream-jagadambal-colony-alwarpet-rest454924",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53934",
      name: "Ibaco",
      cloudinaryImageId: "kujznwgh3g3tdqqrmlhu",
      locality: "Vepery",
      areaName: "Vepery",
      costForTwo: "₹800 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.7",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "786",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ibaco-vepery-rest53934",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "383374",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/12a593f5-8d11-4e98-b784-818e1b56a5d9_383374.JPG",
      locality: "Venkatesa Bathan Street",
      areaName: "Purasawalkam",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.7,
      veg: true,
      parentId: "582",
      avgRatingString: "4.7",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-25 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-91d0e574-82bb-42ea-837a-ce5128baf8b4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/kwality-walls-ice-cream-and-more-venkatesa-bathan-street-purasawalkam-rest383374",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    costForTwo,
    locality,
  } = props.resData?.info;
  return (
    <div className="restaurant-card">
      <div className="res-img">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="res-logo"
        />
      </div>
      <div className="res-content">
        <h4>{name}</h4>
        <p>
          {avgRating} - {sla.slaString}
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

const Main = () => (
  <div id="main">
    <div>Search</div>
    <div className="restaurant-cards-container">
      {resData.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
      })}
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
