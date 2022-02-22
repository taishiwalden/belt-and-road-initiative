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
                "The Belt and Road Initiative (BRI) is a global infrastructure development strategy initiated by the People's Republic of China (PRC) in 2013 to invest in nearly 70 countries and international organizations." +
                "<br>" +
                "<br>" +
                "China’s President Xi Jinping unveiled The Initiative, officially stating that the BRI aims to 'promote the connectivity of Asian, European and African continents and their adjacent seas, establish and strengthen partnerships among the countries along the Belt and Road, set up all-dimensional, multi-tiered and composite connectivity networks, and realize diversified, independent, balanced and sustainable development in these countries.'",
            location: {
                center: [104.402, 33.993],
                zoom: 3.6,
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
                center: [116.837, 40.301],
                zoom: 6.86,
                pitch: 0,
                bearing: 0,
            },
        },

        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "7ba8dfb2d8196a463676254236476581",
            title: "The First Intifada",
            description:
                "The First Intifada, or First Palestinian Intifada, was a sustained series of Palestinian protests and violent riots in the West Bank, Gaza Strip, and within Israel. The protests were against the Israeli occupation of the West Bank and Gaza that had begun twenty years prior, in 1967.",
            location: {
                center: [34.50321, 31.52424],
                zoom: 12.15,
                pitch: 14.5,
                bearing: 67.16,
            },
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
            id: "9e34f44c4e4aa2afecbf0e85c16e72af",
            title: "Home Invasions by the Israeli Defense Forces",
            description:
                "Many of the soldiers recall the practice of home invasions during their time in the IDF, in which soldiers would intrude into Palestinian homes in the occupied Palestinian territories (OPT) by force and without permission. Israel views their actions not as invasions, but as legitimate entries into homes performed in accordance with the law as part of their sovereign right to protect their citizens",
            location: {
                center: [35.41312, 31.84679],
                zoom: 11.48,
                pitch: 60,
                bearing: -109.6,
            },
        },
    ],
};
