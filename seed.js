const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://enekaken:<Moranma1/27921>@cluster0-x3i24.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
  });



const suggestionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productname: String,
  productprice: Number,
  productimgurl: String,
  productid: Number,
  producturl: String,
  producttype: {
    collection: String, //ABC, commision, metal vent tech, city swat, surge
    category: String, // clothes, accessories
    gender: String, //women, mens, girls
    subcategory: String //joggers, shorts, bags, yoga mats, underswear, swimsuit, swim trunks
  },
  activitytype: String, //training, yoga, running, on the move, gym, tennis, golf, thermal
  bestseller: Boolean //yes or no
});



const Suggestionsdata = mongoose.model('Suggestionsdata', suggestionsSchema);


const mensjogger = [
  'Textured Tech Jogger',
  'ABC Jogger 30"',
  'ABC Jogger 30"' ,
  'City Sweat Jogger French Terry 29"',
  'Surge Jogger 29"',
  'ABC Jogger Shorter 28" Online Only',
  'ABC Jogger Tall 32" Online Only',
  'ABC Jogger Skinny Online Only',
  'ABC Jogger Canvas',
  'Surge Jogger Shorter 27" Online Only',
  'Surge Jogger Tall 31" Online Only',
  'City Sweat Jogger (Tall)',
  'In Mind Pant 30',
  'City Sweat Jogger French Terry 27" Shorter Online Only',
  'City Sweat Pant Slim',
  'At Ease Jogger',
  'ABC Jogger Light',
  'Intent Jogger Shorter Online Only',
  'Engineered Warmth Jogger',
  'License to Train Jogger 29"',
  'Intent Jogger 30"',
  'Refract Jogger 29" lululemon lab'
  ];

const prices = [
  '88',
  '98',
  '118',
  '128',
  '138',
  '148'
];

const malefilename = [
  'LM5A04S_014033_1.webp',
  'LM5A39S_032798_1.webp',
  'LM5A60S_044354_1.webp',
  'LM5A71S_1966_1.webp',
  'LM5543S_034268_1.webp',
  'LM5556S_032476_1.webp',
  'LM5569S_1966_1.webp',
  'LM5574S_032476_1.webp',
  'LM5585T_0001_1.webp',
  'LM5603S_0001_1.webp',
  'LM5642S_038068_1.webp',
  'LM5654S_028849_1.webp',
  'LM5689S_032894_1.webp',
  'LM5709S_032476_1.webp',
  'LM5720T_026083_1.webp',
  'LM5730S_0001_1.webp',
  'LM5745S_0001_1.webp',
  'LM5918S_032476_1.webp',
  'LM5922T_030700_1.webp',
  'LM5942S_032798_1.webp',
  'LM5951S_031311_1.webp'
];

const mens_pants_subcategory = [
  'trousers',
  'joggers',
  'sweatpants',
  'tights',
];

const gender = 'male'
const subcategory = 'joggers'
//const mensnurl = path.join('https://luluproject.s3-us-west-1.amazonaws.com', 'make', 'joggers', malefilename)
// 'https://luluproject.s3-us-west-1.amazonaws.com/male/joggers/LM5543S_034268_1.webp'
// const url = path.join('https://luluproject.s3-us-west-1.amazonaws.com', 'male', 'joggers', 'LM5543S_034268_1.webp')
const womens_pants_subcategory = [
  'leggings',
  'capris',
  'sweatpants',
  'joggers',
  'trousers'
];
const womenspants = [
  'Align Pant 25" Diamond Dye',
  'Ebb to Street Tight Wash',
  'Wunder Train High-Rise Tight 25"',
  'Wunder Train High-Rise Crop 21"',
  'Align Crop 21" Diamond Dye',
  'Ready To Rulu Pant 29"',
  'Dance Studio Jogger',
  'On the Fly Jogger Luxtreme 25"',
  'LA Sweat Pant 26"',
  'Align Pant 28" Diamond Dye',
  'Align Jogger 28"',
  'Align Pant II 25"',
  'Align Pant 28"',
  'Align Crop21"',
  'Align Super-High Rise Pant 28"',
  'Wunder Under High-Rise Tight 28" Full-On Luxtreme',
  'Invigorate High-Rise Tight 25"',
  'Fast and Free Tight II 25" Non-Reflective Nulux',
  'Wunder Under High-Rise Tight 28" Luxtreme',
  'Invigorate High-Rise Tight 25" Diamond Dye',
  'Fast and Free Crop II 19" Non-Reflective',
  'Wunder Under High-Rise Tight 25" Full-On Luon',
  'Wunder Train High-Rise Tight 25" Diamond Dye',
  'In Movement Tight 25" Everlux',
];
const womensfilename = [
  'LW5BPJS_0001_1.webp',
  'LW5BSZS_042629_1.webp',
  'LW5BT2S_034135_1.webp',
  'LW5BTES_042628_1.webp',
  'LW5BXOS_026950_1.webp',
  'LW5BXQS_034115_1.webp',
  'LW5BY3S_042629_1.webp',
  'LW5CGPS_043753_1.webp',
  'LW5CIFS_034135_1.webp',
  'LW5COUS_043990_1.webp',
  'LW5CQAS_034135_1.webp',
  'LW5CQDS_043619_1.webp',
  'LW5CQMS_019223_1.webp',
  'LW5CQSS_045102_1.webp',
  'LW5CQVS_043990_1.webp',
  'LW5CR9S_043989_1.webp',
  'LW5DADS_047310_1.webp',
  'LW6AVIS_034135_1.webp',
  'LW6BDES_043991_1.webp',
  'LW6BFBS_042628_1.webp',
];
//const womenurl = path.join('https://luluproject.s3-us-west-1.amazonaws.com', gender, womens_pants_subcategory, womensfilename);

/*
const womensitem = new Suggestionsdata({
  _id: new mongoose.Schema.Types.ObjectId,
  productname: womenspants,
  productprice: prices,
  productimgurl: womenurl,
  productid: womensfilename,
  producttype: {
    subcategory: womens_pants_subcategory
  },
});

const mensitem = new Suggestionsdata({
  _id: new mongoose.Schema.Types.ObjectId,
  productname: mensjogger,
  productprice: prices,
  productimgurl: mensnurl,
  productid: malefilename,
  producttype: {
    subcategory: mens_pants_subcategory
  },
});
*/

//mensJoggerObj = mensjogger.map(name => {
  // const malobj = new Suggestionsdata({
  //   _id: new mongoose.Types.ObjectId,
  //   productname: mensjogger[0],
  //   productprice: prices[Math.floor(Math.random() * prices.length)],
  //   productid: malefilename[Math.floor(Math.random() * malefilename.length)],
  //   productimgurl: `https://luluproject.s3-us-west-1.amazonaws.com/male/joggers/${malefilename[Math.floor(Math.random() * malefilename.length)]}`,
  //   producttype: {
  //     subcategory: mens_pants_subcategory[Math.floor(Math.random() * mens_pants_subcategory.length)]
  //   },
  // });
  //})

  const malobj = new Suggestionsdata({
    _id: new mongoose.Types.ObjectId,
    productname: 'test product name',
    productprice: '123',
    productid: 'abc123',
    productimgurl: 'https://luluproject.s3-us-west-1.amazonaws.com/male/joggers//LW5DADS_047310_1.webp',
    producttype: {
      subcategory: 'joggers'
    },
  });