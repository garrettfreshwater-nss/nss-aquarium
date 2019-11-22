/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

    const fishCollection = [
        { // Array is a Collection
            name: "Bitey",   // KEY: "VALUE", = PAIR
            species: "Piranha",
            location: "South Africa",
            length: 2,
            food: ["seals", "humans"],
            image: "awesome.jpg",
            isFish: true
        },
        {
            name: "Red",
            species: "Red Snapper",
            location: "Gulf of Mexico",
            length: 2,
            food: ["minows", "crustaceans"],
            image: "mad.jpg"
        },
        {
            name: "Sharkey",
            species: "Great White Shark",
            location: "Pacific Ocean",
            length: 25,
            food: ["fish", "humans"]
        },
        {
            name: "Dollie",
            species: "Dolphin",
            location: "Atlantic Ocean",
            length: 5,
            food: ["algae", "crustaceans"],
            image: "newz.jpg"
        },
        {
            name: "Whaley",
            species: "Sperm Whale",
            location: "Antartica",
            length: 200,
            food: ["fish", "crustaceans"],
            image: "awesome.jpg"
        },
        {
            name: "Tina",
            species: "Gold Fish",
            location: "Ocean",
            length: 5,
            food: ["algea"],
            image: "goldie-fish.jpg"
        },
    ]
//immutablity = our core, raw data should be private and hidden.
    export const useFish = () => {
        return fishCollection
    }
// export default fishDataProvider;