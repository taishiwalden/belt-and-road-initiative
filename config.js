// this is for the scrollytelling map

var config = {
    style: "mapbox://styles/taishiwalden/ckzovzbqj000714qnd5m3cdcm", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "The Belt and Road Initiative", //TODO
    subtitle: "The Impacts of the World’s Largest Infrastructure Project", //TODO
    byline: "By Taishi Walden, Dave Moleske, Nate Constan", //TODO
    footer: "©2022 Taishi Walden, Dave Moleske, Nate Constan",
    showMarkers: false,
    theme: "light",
    alignment: "left",
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: "48d352fe5c88b29680f9ce8d7a233191",
            title: "Introduction",
            description:
                "The Belt and Road Initiative (BRI) is a global infrastructure development strategy initiated by the People's Republic of China (PRC) in 2013 to invest in nearly 70 countries and international organizations.",
            location: {
                center: [72.823, 23.852],
                zoom: 2.26,
                pitch: 0,
                bearing: 0,
            },
        },

        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "5c76ad75992aaac989465955479e2fb4",
            title: "Beijing",
            description:
                "China’s President Xi Jinping unveiled The Initiative, officially stating that the BRI aims to 'promote the connectivity of Asian, European and African continents and their adjacent seas, establish and strengthen partnerships among the countries along the Belt and Road, set up all-dimensional, multi-tiered and composite connectivity networks, and realize diversified, independent, balanced and sustainable development in these countries.'",
            location: {
                center: [115.443, 40.054],
                zoom: 6.86,
                pitch: 0,
                bearing: 0,
            },
        },

        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "7ba8dfb2d8196a463676254236476581",
            title: "The New Silk Road",
            description: "Add text here about Xian and the start of the New Silk Road",
            location: {
                center: [103.706, 36.704],
                zoom: 4.98,
                pitch: 14.5,
                bearing: 67.16,
            },
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "9e34f44c4e4aa2afecbf0e85c16e72af",
            title: "The New Silk Road",
            description: "Add text here",
            location: {
                center: [35.41312, 31.84679],
                zoom: 11.48,
                pitch: 60,
                bearing: -109.6,
            },
        },
    ],
};
