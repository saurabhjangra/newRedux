import Mongoose from 'mongoose';
import Promise from 'bluebird';
Mongoose.Promise = Promise;

const conn = Mongoose.createConnection('mongodb://localhost:27017/viator');

const schema = new Mongoose.Schema({
    supplierName: { type: String, },
    currencyCode: { type: String, },
    catIds: { type: Array, default: [] },
    subCatIds: { type: Array, default: [] },
    webURL: { type: String },
    specialReservationDetails: { type: String },
    panoramaCount: { type: Number },
    merchantCancellable: { type: Boolean },
    bookingEngineId: { type: String },
    onRequestPeriod: { type: Number },
    primaryGroupId: {},
    pas: { type: String },
    available: { type: Boolean },
    productUrlName: { type: String },
    primaryDestinationUrlName: { type: String },
    voucherRequirements: { type: String },
    tourGradesAvailable: { type: Boolean },
    hotelPickup: { type: Boolean },
    userPhotos: { type: Array, default: [] },
    reviews: { type: Array, default: [] },
    videos: { type: String },
    tourGrades: { type: Array, default: [] },
    ageBands: { type: Array, default: [] },
    bookingQuestions: { type: Array, default: [] },
    passengerAttributes: { type: String },
    highlights: { type: String },
    salesPoints: { type: Array, default: [] },
    ratingCounts: { type: Object },
    termsAndConditions: { type: String },
    maxTravellerCount: { type: Number },
    itinerary: { type: String },
    destinationId: { type: Number, required: true },
    inclusions: { type: Array, default: [] },
    voucherOption: { type: String },
    applePassSupported: { type: Boolean },
    additionalInfo: { type: Array, default: [] },
    productPhotos: { type: Array, default: [] },
    departureTime: { type: String },
    departurePoint: { type: String },
    departureTimeComments: { type: String },
    city: { type: String },
    operates: { type: String },
    allTravellerNamesRequired: { type: Boolean },
    mapURL: { type: String },
    returnDetails: { type: String },
    specialOffer: { type: String },
    exclusions: { type: Array, default: [] },
    description: { type: String },
    location: { type: String },
    country: { type: String },
    region: { type: String },
    shortDescription: { type: String },
    duration: { type: String },
    specialReservation: { type: Boolean, default: false },
    price: { type: Number },
    supplierCode: { type: String },
    translationLevel: { type: Number },
    priceFormatted: { type: String },
    rrp: { type: Number },
    rrpformatted: { type: String },
    onSale: { type: Boolean },
    videoCount: { type: Number },
    rating: { type: Number },
    thumbnailHiResURL: { type: String },
    photoCount: { type: Number },
    reviewCount: { type: Number },
    primaryDestinationId: { type: Number },
    primaryDestinationName: { type: String },
    thumbnailURL: { type: String },
    merchantNetPriceFrom: { type: Number },
    merchantNetPriceFromFormatted: { type: String },
    savingAmount: { type: Number },
    savingAmountFormated: { type: String },
    specialOfferAvailable: { type: Boolean, default: false },
    shortTitle: { type: String, required: true },
    essential: { type: String },
    admission: { type: String },
    title: { type: String, required: true },
    code: { type: String, required: true }
},
    { timestamps: true, versionKey: false }
);

schema.virtual('ID').get(function () { return this.code; });

export default conn.model('productDetail', schema, 'productdetail');