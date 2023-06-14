const axios = require("axios");

const CITIES = [
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Adelaide",
  "Perth",
  "Hobart",
  "Darwin",
];

const main = async () => {
  console.log("Hello World");
  console.log("CITIES", CITIES);

  const fetchGeos = CITIES.map((name) =>
    axios
      .get("https://api.openweathermap.org/geo/1.0/direct", {
        params: {
          q: `${name}, Australia`,
          limit: 1,
          appid: "2466213f21b4b723d341e00a430a7673",
        },
      })
      .then((response) => response.data)
  );

  const result = await Promise.all(fetchGeos);
  result.forEach((item) => console.log(item[0].name, item[0].lat, item[0].lon));
};

main();

//https://api.openweathermap.org/geo/1.0/direct?q=Melbourne,%20Australia&limit=5&appid=2466213f21b4b723d341e00a430a7673

// return
// const a = [
//   {
//     name: "Melbourne",
//     local_names: {
//       el: "Μελβούρνη",
//       pl: "Melbourne",
//       kn: "ಮೆಲ್ಬೋರ್ನ್",
//       es: "Melbourne",
//       lt: "Melburnas",
//       mi: "Poipiripi",
//       de: "Melbourne",
//       zh: "墨爾本/墨尔本",
//       en: "Melbourne",
//       mk: "Мелбурн",
//       sr: "Мелбурн",
//       ko: "멜버른",
//       uk: "Мельбурн",
//       fi: "Melbourne",
//       fr: "Melbourne",
//       ru: "Мельбурн",
//       he: "מלבורן",
//       hi: "मॆल्बोर्न्",
//       ja: "メルボルン",
//       sv: "Melbourne",
//       is: "Melbourne",
//       eo: "Melburno",
//       ar: "ملبورن",
//       oc: "Melbourne",
//       mr: "मेलबर्न",
//     },
//     lat: -37.8142176,
//     lon: 144.9631608,
//     country: "AU",
//     state: "Victoria",
//   },
//   {
//     name: "Melbourne",
//     local_names: {
//       en: "Melbourne",
//       ja: "メルボーン",
//       ru: "Мельбурн",
//       uk: "Мелборн",
//     },
//     lat: 28.106471,
//     lon: -80.6371513,
//     country: "US",
//     state: "Florida",
//   },
//   {
//     name: "Melbourne",
//     lat: 41.9430186,
//     lon: -93.1030319,
//     country: "US",
//     state: "Iowa",
//   },
//   {
//     name: "Melbourne",
//     lat: -37.8141705,
//     lon: 144.9655616,
//     country: "AU",
//     state: "Victoria",
//   },
//   {
//     name: "Melbourne CP",
//     local_names: { en: "Melbourne CP" },
//     lat: 52.8228134,
//     lon: -1.4283564,
//     country: "GB",
//     state: "England",
//   },
// ];
