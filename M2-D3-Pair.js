const destinations = [
    {
        name: "Dubai",
        price:2000,
        nights: 2,
        hotel: "4 star",
        imgUrl: "image/dubai.jpg        "
    },
    {
        name: "Dublin",
        price:3000,
        nights: 4,
        hotel: "3 star",
        imgUrl: "image/dublin.jpg"
    },
    {
        name: "Hamburg",
        price:5000,
        nights: 3,
        hotel: "4 star",
        imgUrl: "image/hamburg.jpg"
    },
    {
        name: "London",
        price:3000,
        nights: 4,
        hotel: "5 star",
        imgUrl: "image/london.jpg"
    },
    {
        name: "Venice",
        price:2000,
        nights: 5,
        hotel: "3 star",
        imgUrl: "image/venice.jpg"
    }
]

// Ex 4) Implement the "Deal of the Week" section. In this section you'll display 4 destinations.
//          In this section you should have:
//             - 4 destinations per row when the screen is very large
//             - 3 destinations per row when you are on a tablet (or a smaller window)
//             - 2 destinations per row when you are on a small screen
const dealWeekTbl = function(){
    let container = document.querySelector("#dealWeekTbl");
    let row = container.querySelector("#dealWeekRow");
    document.addEventListener("DOMContentLoaded", () => {
        const output = [];
        destinations.forEach((destination) => {
            output.push(
            `<div class="col col-6 col-md-4 col-lg-3">
                <img src="${destination.imgUrl}" alt="${destination.name} width="100" height="100" class = "pt-2">
                <a href="#"><h4>${destination.name}</h4></a>
                <p class="mb-0">${destination.nights} Nights</p>
                <p class="pt-0">Price: ${destination.price}</p>
            </div>`
            );
        });
        row.innerHTML = output.join("");
    });
}

dealWeekTbl()

//Ex 5) Implement the "Welcome Summer" section. In this section you'll propose 6 destinations
// In this section you should have:
// - 6 destinations per row when the screen is very large
// - 3 destinations per row when you are on a tablet (or a smaller window)
// - 2 destinations per row when you are on a small screen