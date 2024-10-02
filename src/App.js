import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import 
// const heading=React.createElement(
// "h1",{id : "heading"},
//  "Hello World from  React!");

// const root=ReactDOM.createRoot(
// document.getElementById("root"));
// root.render(heading);


// const parents = React.createElement(
    //     "div", { id: "parent" },
//     [React.createElement(
//         "div", { id: "child" },
//         [React.createElement(
    //             "h1", {}, "Hi! This is a Namaste JavaScript Playlist Tutorial"
//         ),React.createElement(
//             "h2", {}, "I'm a h2 tag!")]
//     ),React.createElement(
//         "div", { id: "child2" },
//         [React.createElement(
    //             "h1", {}, "I'm a h1 tag!"
    //         ),React.createElement(
//             "h2", {}, "I'm a h2 tag!")]
//     )]
// );

// React element
// const heading=<h1 className="head">Namaste react Using JSX</h1>
// // console.log(heading);

// const title1=<h1>Namaste react element</h1>

// const Title2 = ()=>(
    //     <h1>Namaste React Functional Component called</h1>
    // );
    
    // // React Functional component
    // const HeadingComponent=()=>(
//     <div id="container">
//         {/* element called */}
//         {heading} 
//         {/* element called       */}
//         {title1}        
//         {/* function called */}
//         <Title2/>   
//         {/* functional call method 2   */}
//         {Title2()}     
//         {/* {console.log("xyz")}; */}
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// )

// const Header=()=>{
    //     return(
        //         <div className="header">
        //             <div className="logo-container">
        //                 <img className="logo" src="https://www.logodesign.net/logo/smoking-burqer-with-lettuce-3624ld.png" />
        //             </div>
        //             <div className="nav-items">
        //                 <ul>
        //                     <li>Home</li>
        //                     <li>About Us</li>
        //                     <li>Contact Us</li>
        //                     <li>Cart</li>
        //                 </ul>
//             </div>
//         </div>
//     );
// }

// const RestaurantCard = (props) =>{
    //     const {resData}=props;
    //     const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime}=resData?.info;
    //     return (
        //         <div className="res-card">
        //             <img className="res-logo"
        //             alt="res-logo" 
        //             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        //             resData.info.cloudinaryImageId}/>
        //             <h3>{name}</h3>
        //             <h4>{cuisines.join(", ")}</h4>
        //             <h4>{avgRating} stars</h4>
        //             <h4>{resData.info.sla.deliveryTime} minutes</h4>
        //         </div>
        //     );
        // }
        
        // const resObj=
        {
            // "info": {
                //     "id": "239435",
        //     "name": "La Pino'z Pizza",
        //     "cloudinaryImageId": "tolejbnae10pq0udbavn",
        //     "locality": "New delhi",
        //     "areaName": "Rohini",
        //     "costForTwo": "₹350 for two",
        //     "cuisines": [
            //       "Pizzas",
        //       "Pastas",
        //       "Italian",
        //       "Desserts",
        //       "Beverages"
        //     ],
        //     "avgRating": 4.3,
        //     "parentId": "4961",
        //     "avgRatingString": "4.3",
        //     "totalRatingsString": "10K+",
        //     "sla": {
        //       "deliveryTime": 19,
        //       "lastMileTravel": 2.1,
        //       "serviceability": "SERVICEABLE",
        //       "slaString": "15-20 mins",
        //       "lastMileTravelString": "2.1 km",
        //       "iconType": "ICON_TYPE_EMPTY"
        //     },
        //     "availability": {
        //       "nextCloseTime": "2024-09-19 05:00:00",
        //       "opened": true
        //     },
        //     "badges": {
            //       "imageBadges": [
                //         {
        //           "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
        //           "description": "Delivery!"
        //         }
        //       ]
        //     },
        //     "isOpen": true,
        //     "type": "F",
        //     "badgesV2": {
        //       "entityBadges": {
        //         "imageBased": {
        //           "badgeObject": [
        //             {
            //               "attributes": {
        //                 "description": "Delivery!",
        //                 "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
        //               }
        //             }
        //           ]
        //         },
        //         "textBased": {
            
        //         },
        //         "textExtendedBadges": {
            
        //         }
        //       }
        //     },
        //     "aggregatedDiscountInfoV3": {
            //       "header": "₹125 OFF",
            //       "subHeader": "ABOVE ₹199",
            //       "discountTag": "FLAT DEAL"
            //     },
            //     "loyaltyDiscoverPresentationInfo": {
                //       "logoCtx": {
                    //         "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                    //       },
                    //       "freedelMessage": "FREE DELIVERY",
        //       "badgeType": "BADGE_TYPE_ONE_LITE"
        //     },
        //     "differentiatedUi": {
        //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        //       "differentiatedUiMediaDetails": {
        //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //         "lottie": {
                  
        //         },
        //         "video": {
            
        //         }
        //       }
        //     },
        //     "reviewsSummary": {
              
        //     },
        //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //     "restaurantOfferPresentationInfo": {
            
        //     },
        //     "externalRatings": {
        //       "aggregatedRating": {
        //         "rating": "3.7",
        //         "ratingCount": "237"
        //       },
        //       "source": "GOOGLE",
        //       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        //     },
        //     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        //   },
        //   "analytics": {
            
        //   },
        //   "cta": {
        //     "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-new-rohini-rest239435",
        //     "type": "WEBLINK"
        //   }
        // }
        
        // const resList=[{
            //             "info": {
                //                               "id": "239435",
                //                               "name": "La Pino'z Pizza",
                //                               "cloudinaryImageId": "tolejbnae10pq0udbavn",
                //                               "locality": "New delhi",
                //                               "areaName": "Rohini",
                //                               "costForTwo": "₹350 for two",
                //                               "cuisines": [
                    //                                 "Pizzas",
                    //                                 "Pastas",
                    //                                 "Italian",
                    //                                 "Desserts",
                    //                                 "Beverages"
                    //                               ],
                    //                               "avgRating": 4.3,
                    //                               "parentId": "4961",
                    //                               "avgRatingString": "4.3",
                    //                               "totalRatingsString": "10K+",
                    //                               "sla": {
                        //                                 "deliveryTime": 19,
                        //                                 "lastMileTravel": 2.1,
                        //                                 "serviceability": "SERVICEABLE",
                        //                                 "slaString": "15-20 mins",
                        //                                 "lastMileTravelString": "2.1 km",
                        //                                 "iconType": "ICON_TYPE_EMPTY"
                        //                               },
                        //                               "availability": {
//                                 "nextCloseTime": "2024-09-19 05:00:00",
//                                 "opened": true
//                               },
//                               "badges": {
//                                 "imageBadges": [
//                                   {
//                                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
//                                     "description": "Delivery!"
//                                   }
//                                 ]
//                               },
//                               "isOpen": true,
//                               "type": "F",
//                               "badgesV2": {
    //                                 "entityBadges": {
//                                   "imageBased": {
    //                                     "badgeObject": [
//                                       {
    //                                         "attributes": {
        //                                           "description": "Delivery!",
        //                                           "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
//                                         }
//                                       }
//                                     ]
//                                   },
//                                   "textBased": {
    
//                                   },
//                                   "textExtendedBadges": {
                                    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "₹125 OFF",
//                                 "subHeader": "ABOVE ₹199",
//                                 "discountTag": "FLAT DEAL"
//                               },
//                               "loyaltyDiscoverPresentationInfo": {
//                                 "logoCtx": {
    //                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
    //                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
//                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                 "differentiatedUiMediaDetails": {
    //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                                   "lottie": {
        
//                                   },
//                                   "video": {
    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
    
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
    
//                               },
//                               "externalRatings": {
    //                                 "aggregatedRating": {
//                                   "rating": "3.7",
//                                   "ratingCount": "237"
//                                 },
//                                 "source": "GOOGLE",
//                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
    
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-new-rohini-rest239435",
    //                               "type": "WEBLINK"
    //                             }
    //                           },
    //                           {
        //                             "info": {
//                               "id": "239856",
//                               "name": "Domino's Pizza",
//                               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/9e05ef2f-b4b1-4aab-835e-0865286f6e88_239856.JPG",
//                               "locality": "Food Court Mall",
//                               "areaName": "Paschim Vihar",
//                               "costForTwo": "₹400 for two",
//                               "cuisines": [
    //                                 "Pizzas",
    //                                 "Italian",
    //                                 "Pastas",
    //                                 "Desserts"
    //                               ],
    //                               "avgRating": 4.5,
    //                               "parentId": "2456",
    //                               "avgRatingString": "4.5",
    //                               "totalRatingsString": "4.6K+",
    //                               "sla": {
//                                 "deliveryTime": 30,
//                                 "lastMileTravel": 1.1,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "25-30 mins",
//                                 "lastMileTravelString": "1.1 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
//                                 "nextCloseTime": "2024-09-19 02:59:00",
//                                 "opened": true
//                               },
//                               "badges": {
                                
//                               },
//                               "isOpen": true,
//                               "type": "F",
//                               "badgesV2": {
    //                                 "entityBadges": {
//                                   "imageBased": {
                                    
//                                   },
//                                   "textBased": {
                                    
//                                   },
//                                   "textExtendedBadges": {
    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "ITEMS",
//                                 "subHeader": "AT ₹189"
//                               },
//                               "loyaltyDiscoverPresentationInfo": {
    //                                 "logoCtx": {
//                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
    //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                 "differentiatedUiMediaDetails": {
//                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                   "lottie": {
    
//                                   },
//                                   "video": {
                                    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
    
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
                                
//                               },
//                               "externalRatings": {
//                                 "aggregatedRating": {
//                                   "rating": "--"
//                                 }
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
                              
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/dominos-pizza-food-court-mall-paschim-vihar-rest239856",
//                               "type": "WEBLINK"
//                             }
//                           },
//                           {
//                             "info": {
//                               "id": "168043",
//                               "name": "Burger Singh (Big Punjabi Burgers)",
//                               "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
//                               "locality": "Rohini",
//                               "areaName": "Rohini",
//                               "costForTwo": "₹300 for two",
//                               "cuisines": [
    //                                 "American",
    //                                 "Fast Food",
    //                                 "Snacks"
    //                               ],
    //                               "avgRating": 4.2,
    //                               "parentId": "375065",
    //                               "avgRatingString": "4.2",
    //                               "totalRatingsString": "11K+",
    //                               "sla": {
//                                 "deliveryTime": 36,
//                                 "lastMileTravel": 8.6,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "35-40 mins",
//                                 "lastMileTravelString": "8.6 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
    //                                 "nextCloseTime": "2024-09-19 06:00:00",
    //                                 "opened": true
    //                               },
    //                               "badges": {
        
    //                               },
    //                               "isOpen": true,
    //                               "type": "F",
    //                               "badgesV2": {
//                                 "entityBadges": {
    //                                   "imageBased": {
        
    //                                   },
//                                   "textBased": {
    
//                                   },
//                                   "textExtendedBadges": {
    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
//                                 "header": "₹125 OFF",
//                                 "subHeader": "ABOVE ₹299",
//                                 "discountTag": "FLAT DEAL"
//                               },
//                               "differentiatedUi": {
    //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                                 "differentiatedUiMediaDetails": {
        //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                                   "lottie": {
            
//                                   },
//                                   "video": {
    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
    
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
    
//                               },
//                               "externalRatings": {
    //                                 "aggregatedRating": {
        //                                   "rating": "4.0",
        //                                   "ratingCount": "195"
        //                                 },
        //                                 "source": "GOOGLE",
        //                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        //                               },
        //                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        //                             },
        //                             "analytics": {
                              
        //                             },
        //                             "cta": {
//                               "link": "https://www.swiggy.com/city/delhi/burger-singh-big-punjabi-burgers-rohini-rest168043",
//                               "type": "WEBLINK"
//                             }
//                           },
//                           {
//                             "info": {
    //                               "id": "486920",
    //                               "name": "KFC",
    //                               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/3334c8c2-3a17-4531-a91d-fe43776e2df1_486920.JPG",
    //                               "locality": "Pushkar Enclave",
    //                               "areaName": "Paschim Vihar",
    //                               "costForTwo": "₹400 for two",
    //                               "cuisines": [
        //                                 "Burgers",
        //                                 "Rolls & Wraps",
        //                                 "Fast Food"
        //                               ],
        //                               "avgRating": 4.3,
        //                               "parentId": "547",
        //                               "avgRatingString": "4.3",
        //                               "totalRatingsString": "4.7K+",
        //                               "sla": {
//                                 "deliveryTime": 21,
//                                 "lastMileTravel": 3.5,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "20-25 mins",
//                                 "lastMileTravelString": "3.5 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
    //                                 "nextCloseTime": "2024-09-19 05:00:00",
    //                                 "opened": true
    //                               },
    //                               "badges": {
        
//                               },
//                               "isOpen": true,
//                               "type": "F",
//                               "badgesV2": {
    //                                 "entityBadges": {
        //                                   "imageBased": {
            
//                                   },
//                                   "textBased": {
                                    
//                                   },
//                                   "textExtendedBadges": {
                                    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "40% OFF",
    //                                 "subHeader": "UPTO ₹80"
    //                               },
    //                               "loyaltyDiscoverPresentationInfo": {
        //                                 "logoCtx": {
//                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
    //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                                 "differentiatedUiMediaDetails": {
        //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        //                                   "lottie": {
            
        //                                   },
        //                                   "video": {
                                    
        //                                   }
        //                                 }
        //                               },
        //                               "reviewsSummary": {
            
        //                               },
        //                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        //                               "restaurantOfferPresentationInfo": {
            
//                               },
//                               "externalRatings": {
//                                 "aggregatedRating": {
//                                   "rating": "--"
//                                 }
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
    
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/kfc-pushkar-enclave-paschim-vihar-rest486920",
    //                               "type": "WEBLINK"
    //                             }
    //                           },
    //                           {
        //                             "info": {
//                               "id": "585614",
//                               "name": "The Belgian Waffle Co.",
//                               "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
//                               "locality": "Jwala Heri Road",
//                               "areaName": "Paschim Vihar",
//                               "costForTwo": "₹200 for two",
//                               "cuisines": [
    //                                 "Waffle",
    //                                 "Desserts",
    //                                 "Ice Cream"
    //                               ],
    //                               "avgRating": 4.4,
    //                               "veg": true,
    //                               "parentId": "2233",
    //                               "avgRatingString": "4.4",
    //                               "totalRatingsString": "1.0K+",
    //                               "sla": {
        //                                 "deliveryTime": 31,
        //                                 "lastMileTravel": 2.1,
        //                                 "serviceability": "SERVICEABLE",
        //                                 "slaString": "30-35 mins",
        //                                 "lastMileTravelString": "2.1 km",
        //                                 "iconType": "ICON_TYPE_EMPTY"
        //                               },
        //                               "availability": {
            //                                 "nextCloseTime": "2024-09-19 05:00:00",
            //                                 "opened": true
            //                               },
            //                               "badges": {
                //                                 "imageBadges": [
//                                   {
//                                     "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
//                                     "description": "Delivery!"
//                                   },
//                                   {
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                                     "description": "pureveg"
    //                                   }
    //                                 ]
    //                               },
    //                               "isOpen": true,
    //                               "type": "F",
    //                               "badgesV2": {
        //                                 "entityBadges": {
//                                   "imageBased": {
    //                                     "badgeObject": [
        //                                       {
            //                                         "attributes": {
//                                           "description": "Delivery!",
//                                           "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
//                                         }
//                                       },
//                                       {
    //                                         "attributes": {
//                                           "description": "pureveg",
//                                           "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                         }
//                                       }
//                                     ]
//                                   },
//                                   "textBased": {
    
//                                   },
//                                   "textExtendedBadges": {
                                    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "20% OFF",
    //                                 "subHeader": "UPTO ₹50"
    //                               },
//                               "loyaltyDiscoverPresentationInfo": {
    //                                 "logoCtx": {
//                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
    //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                                 "differentiatedUiMediaDetails": {
        //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                   "lottie": {
    
//                                   },
//                                   "video": {
                                    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
    
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
                                
//                               },
//                               "externalRatings": {
    //                                 "aggregatedRating": {
//                                   "rating": "--"
//                                 }
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
    
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/the-belgian-waffle-co-jwala-heri-road-paschim-vihar-rest585614",
    //                               "type": "WEBLINK"
    //                             }
    //                           },
    //                           {
//                             "info": {
    //                               "id": "9948",
    //                               "name": "Subway",
    //                               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d286e422-8f57-4563-8db4-a59f7a23a2fc_9948.jpg",
    //                               "locality": "Chaudhary Balbir Singh Marg",
    //                               "areaName": "Paschim Vihar",
    //                               "costForTwo": "₹350 for two",
    //                               "cuisines": [
        //                                 "Fast Food",
//                                 "Salads",
//                                 "Snacks",
//                                 "Desserts",
//                                 "Beverages"
//                               ],
//                               "avgRating": 4.3,
//                               "parentId": "2",
//                               "avgRatingString": "4.3",
//                               "totalRatingsString": "27K+",
//                               "sla": {
    //                                 "deliveryTime": 28,
    //                                 "lastMileTravel": 2.1,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "25-30 mins",
//                                 "lastMileTravelString": "2.1 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
    //                                 "nextCloseTime": "2024-09-19 05:45:00",
    //                                 "opened": true
    //                               },
    //                               "badges": {
        //                                 "imageBadges": [
            //                                   {
//                                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
//                                     "description": "Delivery!"
//                                   }
//                                 ],
//                                 "textExtendedBadges": [
    //                                   {
        //                                     "iconId": "guiltfree/GF_Logo_android_3x",
        //                                     "shortDescription": "options available",
        //                                     "fontColor": "#7E808C"
        //                                   }
        //                                 ]
        //                               },
        //                               "isOpen": true,
        //                               "type": "F",
        //                               "badgesV2": {
            //                                 "entityBadges": {
//                                   "imageBased": {
//                                     "badgeObject": [
    //                                       {
        //                                         "attributes": {
//                                           "description": "Delivery!",
//                                           "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
//                                         }
//                                       }
//                                     ]
//                                   },
//                                   "textBased": {
    
//                                   },
//                                   "textExtendedBadges": {
    //                                     "badgeObject": [
//                                       {
    //                                         "attributes": {
        //                                           "description": "",
//                                           "fontColor": "#7E808C",
//                                           "iconId": "guiltfree/GF_Logo_android_3x",
//                                           "shortDescription": "options available"
//                                         }
//                                       }
//                                     ]
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "15% OFF",
    //                                 "subHeader": "UPTO ₹80"
    //                               },
    //                               "loyaltyDiscoverPresentationInfo": {
        //                                 "logoCtx": {
//                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
    //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                                 "differentiatedUiMediaDetails": {
//                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                   "lottie": {
                                    
//                                   },
//                                   "video": {
    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
                                
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
    
//                               },
//                               "externalRatings": {
//                                 "aggregatedRating": {
    //                                   "rating": "--"
    //                                 }
    //                               },
    //                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //                             },
    //                             "analytics": {
        
    //                             },
    //                             "cta": {
        //                               "link": "https://www.swiggy.com/city/delhi/subway-chaudhary-balbir-singh-marg-paschim-vihar-rest9948",
        //                               "type": "WEBLINK"
        //                             }
        //                           },
        //                           {
            //                             "info": {
                //                               "id": "455910",
                //                               "name": "Burger King",
                //                               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/155c7c68-c64d-4cb9-9756-ab5ae83b39c3_455910.jpg",
                //                               "locality": "State Bank Nagar",
                //                               "areaName": "Paschim Vihar",
                //                               "costForTwo": "₹350 for two",
                //                               "cuisines": [
                    //                                 "Burgers",
                    //                                 "American"
                    //                               ],
                    //                               "avgRating": 4.4,
                    //                               "parentId": "166",
                    //                               "avgRatingString": "4.4",
                    //                               "totalRatingsString": "7.1K+",
                    //                               "sla": {
                        //                                 "deliveryTime": 24,
                        //                                 "lastMileTravel": 3.9,
                        //                                 "serviceability": "SERVICEABLE",
                        //                                 "slaString": "20-25 mins",
                        //                                 "lastMileTravelString": "3.9 km",
                        //                                 "iconType": "ICON_TYPE_EMPTY"
                        //                               },
                        //                               "availability": {
//                                 "nextCloseTime": "2024-09-19 03:30:00",
//                                 "opened": true
//                               },
//                               "badges": {
    
//                               },
//                               "isOpen": true,
//                               "type": "F",
//                               "badgesV2": {
    //                                 "entityBadges": {
//                                   "imageBased": {
                                    
//                                   },
//                                   "textBased": {
    
//                                   },
//                                   "textExtendedBadges": {
    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
//                                 "header": "ITEMS",
//                                 "subHeader": "AT ₹99"
//                               },
//                               "loyaltyDiscoverPresentationInfo": {
//                                 "logoCtx": {
    //                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
    //                                 },
//                                 "freedelMessage": "FREE DELIVERY",
//                                 "badgeType": "BADGE_TYPE_ONE_LITE"
//                               },
//                               "differentiatedUi": {
//                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                 "differentiatedUiMediaDetails": {
    //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                                   "lottie": {
        
    //                                   },
//                                   "video": {
    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
    
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
                                
//                               },
//                               "externalRatings": {
//                                 "aggregatedRating": {
//                                   "rating": "--"
//                                 }
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
    
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/burger-king-state-bank-nagar-paschim-vihar-rest455910",
    //                               "type": "WEBLINK"
    //                             }
    //                           },
//                           {
    //                             "info": {
        //                               "id": "254192",
//                               "name": "McDonald's",
//                               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/fb0c0d6e-f7a1-4c6c-9bdd-d7e1cb0dd6df_254192.jpg",
//                               "locality": "Sector 10",
//                               "areaName": "Rohini",
//                               "costForTwo": "₹400 for two",
//                               "cuisines": [
    //                                 "American"
    //                               ],
//                               "avgRating": 4.4,
//                               "parentId": "630",
//                               "avgRatingString": "4.4",
//                               "totalRatingsString": "21K+",
//                               "sla": {
    //                                 "deliveryTime": 38,
//                                 "lastMileTravel": 8.6,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "35-40 mins",
//                                 "lastMileTravelString": "8.6 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
    //                                 "nextCloseTime": "2024-09-19 04:30:00",
    //                                 "opened": true
    //                               },
//                               "badges": {
    //                                 "imageBadges": [
        //                                   {
//                                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
//                                     "description": "Delivery!"
//                                   },
//                                   {
    //                                     "imageId": "Rxawards/_CATEGORY-Burger.png",
    //                                     "description": "Delivery!"
    //                                   }
    //                                 ]
    //                               },
    //                               "isOpen": true,
    //                               "type": "F",
//                               "badgesV2": {
//                                 "entityBadges": {
    //                                   "imageBased": {
        //                                     "badgeObject": [
//                                       {
    //                                         "attributes": {
//                                           "description": "Delivery!",
//                                           "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
//                                         }
//                                       },
//                                       {
    //                                         "attributes": {
        //                                           "description": "Delivery!",
        //                                           "imageId": "Rxawards/_CATEGORY-Burger.png"
        //                                         }
        //                                       }
        //                                     ]
        //                                   },
        //                                   "textBased": {
            
//                                   },
//                                   "textExtendedBadges": {
                                    
//                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "ITEMS",
//                                 "subHeader": "AT ₹249"
//                               },
//                               "differentiatedUi": {
//                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                 "differentiatedUiMediaDetails": {
    //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                   "lottie": {
    
//                                   },
//                                   "video": {
    
//                                   }
//                                 }
//                               },
//                               "reviewsSummary": {
                                
//                               },
//                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                               "restaurantOfferPresentationInfo": {
    
//                               },
//                               "externalRatings": {
//                                 "aggregatedRating": {
    //                                   "rating": "--"
    //                                 }
    //                               },
    //                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //                             },
    //                             "analytics": {
        
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/mcdonalds-sector-10-rohini-rest254192",
    //                               "type": "WEBLINK"
    //                             }
    //                           },
    //                           {
        //                             "info": {
//                               "id": "123197",
//                               "name": "Rollsking",
//                               "cloudinaryImageId": "qhgtix4iyy7sd59jb9ek",
//                               "locality": "B Block",
//                               "areaName": "Jail Road",
//                               "costForTwo": "₹250 for two",
//                               "cuisines": [
//                                 "Fast Food",
//                                 "Rolls & Wraps",
//                                 "North Indian",
//                                 "Snacks"
//                               ],
//                               "avgRating": 4.2,
//                               "parentId": "4697",
//                               "avgRatingString": "4.2",
//                               "totalRatingsString": "9.2K+",
//                               "sla": {
//                                 "deliveryTime": 35,
//                                 "lastMileTravel": 6.3,
//                                 "serviceability": "SERVICEABLE",
//                                 "slaString": "35-40 mins",
//                                 "lastMileTravelString": "6.3 km",
//                                 "iconType": "ICON_TYPE_EMPTY"
//                               },
//                               "availability": {
    //                                 "nextCloseTime": "2024-09-19 07:00:00",
    //                                 "opened": true
    //                               },
    //                               "badges": {
        
    //                               },
    //                               "isOpen": true,
    //                               "type": "F",
    //                               "badgesV2": {
        //                                 "entityBadges": {
            //                                   "imageBased": {
                                    
            //                                   },
            //                                   "textBased": {
                                    
            //                                   },
            //                                   "textExtendedBadges": {
                                    
            //                                   }
//                                 }
//                               },
//                               "aggregatedDiscountInfoV3": {
    //                                 "header": "₹125 OFF",
//                                 "subHeader": "ABOVE ₹499",
//                                 "discountTag": "FLAT DEAL"
//                               },
//                               "loyaltyDiscoverPresentationInfo": {
    //                                 "logoCtx": {
        //                                   "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        //                                 },
        //                                 "freedelMessage": "FREE DELIVERY",
        //                                 "badgeType": "BADGE_TYPE_ONE_LITE"
        //                               },
        //                               "differentiatedUi": {
            //                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            //                                 "differentiatedUiMediaDetails": {
                //                                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                //                                   "lottie": {
                                    
                //                                   },
                //                                   "video": {
                                    
                //                                   }
                //                                 }
                //                               },
                //                               "reviewsSummary": {
                                
                //                               },
                //                               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                //                               "restaurantOfferPresentationInfo": {
                    
//                               },
//                               "externalRatings": {
    //                                 "aggregatedRating": {
//                                   "rating": "--"
//                                 }
//                               },
//                               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                             },
//                             "analytics": {
    
//                             },
//                             "cta": {
    //                               "link": "https://www.swiggy.com/city/delhi/rollsking-b-block-jail-road-rest123197",
    //                               "type": "WEBLINK"
    //                             }
    //                           }
    
    //         ]
    
    // const Body= () => {
        //     return (
            //         <div className="body">
            //             <div className="search">Search</div>
            //             <div className="res-container">
//                 {
    //                   resList.map(restaurants=>(
//                   <RestaurantCard key={restaurants.info.id} resData={restaurants}/>)
//                 )}

//             </div>
//         </div>
//     );
// }



const AppLayout=()=>{
    return(
        <Provider store = {appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },

            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path: "/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);