const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review = require("../Models/review.js");
const Listing=require("../Models/listing.js");
const {validateReviews, isLoggedIn, isReviewAuthor}=require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Reviews
//Post review Route
router.post("/",isLoggedIn,validateReviews,wrapAsync (reviewController.createReview));

// post delete review
router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;