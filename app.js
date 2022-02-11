// local reviews data
const reviews = [
    {
        id: 1,
        name: "Girraffe Kun",
        job: "Backend developer",
        img:
            "https://static01.nyt.com/images/2021/04/03/multimedia/03xp-april/merlin_185893383_8e41433f-4a32-4b1e-bf02-457290d0d534-superJumbo.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Kingkong Chan",
        job: "web designer",
        img:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/blog_post/primary_image/features/a-guide-to-monkey-business-the-history-of-king-kong/rev-1-GVK-FP-0002_High_Res_JPEG.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Butterfly Oppa",
        job: "intern",
        img:
            "https://butterfly.ucdavis.edu/sites/g/files/dgvnsk7316/files/styles/sf_hero_banner/public/images/hero_banner/monarch.jpg?h=0e1ba1ca&itok=7GY8q1AR",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Fish Noona",
        job: "the boss",
        img:
            "https://i.ytimg.com/vi/lCSnmqZ1TiE/sddefault.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});