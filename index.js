const QuoteDisplay = document.querySelector(".Quote");
const ImgDisplay = document.querySelector(".Img");
const lizButton = document.querySelector(".lizBtn");
const jackButton = document.querySelector(".jackBtn");
const kennethButton = document.querySelector(".kennethBtn");

const lizQuotes = [
  "Hey, where are my Sno Balls? I was gonna go to the gym later, so I deserve a treat.",
  "No, it OK. Don’t be cry.",
  "Happy Valentine’s Day, no one!",
  "Realizations are the worst.",
  "What time do you start throwing out donuts?",
  "If reality TV has taught us anything, it's that you can't keep people with no shame down.",
  "Hey, nerds! Who's got two thumbs, speaks limited French, and hasn't cried once today? This moi.",
  "You know I can’t wear green, Jenna! The Clinique lady says I have witch undertones.",
  "I really don't think it's fair for me to be on a jury since I'm a hologram.",
  "Lizzing is a combination of laughing and whizzing.",
  "Lovers... Oh, that word bums me out unless it's between meat and pizza.",
  "There ain't no party like a Liz Lemon party 'cause a Liz Lemon party is mandatory!",
  "God, three weddings in one day, I'm going to be in Spanx for 12 hours. My elastic line is gonna get infected again.",
  "Trying on jeans is my favorite thing. Maybe later I can get a pap smear from an old male doctor.",
  "If I could press a button and five people in the world would die, but I'd get free cable for life, I'd do it.",
  "Why are my arms so weak? It's like I did that pushup last year for nothing!",
];

const lizImages = [
  "images/liz-lemon1.png",
  "images/liz-lemon2.png",
  "images/liz-lemon3.png",
  "images/liz-lemon4.jpg",
  "images/liz-lemon5.jpg",
  "images/liz-lemon6.jpg",
  "images/liz-lemon7.jpg",
  "images/liz-lemon8.png",
  "images/liz-lemon9.jpeg",
];

const jackQuotes = [
  "Come on, Lemon. What do we elites do when we screw up? We pretend it never happened and give ourselves a giant bonus.",
  "Factories provide three things this country desperately needs: jobs, pride, and material for Bruce Springsteen songs.",
  "Every time I meet a new person, I figure out how I’m gonna fight ’em.",
  "I once claimed 'I Am God' during a deposition.",
  "Money can't buy happiness. It IS happiness.",
  "Ambition is the willingness to kill the things you love and eat them to stay alive. Haven’t You Ever Read My Throw Pillow?",
  "I didn't lie, Kenneth. I massaged the truth.",
  "Women who try to do things sure get killed a lot.",
  "The only way you're like Socrates is that you have the body hair of a Greek man.",
  "I love my mother, Lemon, obviously because of Stockholm Syndrome.",
  "My grandfather's purple heart...it's terrible what alcoholism can do to the body.",
  "She's aging, mean, and rich. That sounds Republican to me.",
  "Check out Kim Jong Un's pants. Where's the flood?",
  "Let's set aside how idiotic that plan was, and imagine a world where it actually worked!",
];

const jackImages = [
  "images/jack1.jpg",
  "images/jack2.jpeg",
  "images/jack3.jpg",
  "images/jack4.jpg",
  "images/jack5.jpg",
  "images/jack6.jpg",
  "images/jack7.png",
];

const kennethQuotes = [
  "She isn't a bitch. She's a meanie pants.",
  "I know the Woggles. My eight year old niece walked down the aisle to that song at her wedding.",
  "Oh my, it smells like Grandma's house at Christmas. That's when we found her dead on the toilet.",
  "My father wore this to his high school prom. The theme was Enchantment Under the Jim Crow Laws.",
  "A Parcell man has never been called mister outside of an execution chamber.",
  "I've never crushed anyone, besides accused witches.",
  "He's the best friend I've ever had...tied with everyone I've ever met.",
  "In school, all you learn about Abraham Lincoln is that he was a gay alcoholic.",
  "I don't like to swear sir, but no thank you.",
  "I can talk to animals. Well not talk to 'em. I can take commands from them.",
  "I don't understand what you're saying but I like that it has the word we in it.",
];

const kennethImages = [
  "images/kenneth1.jpg",
  "images/kenneth2.jpg",
  "images/kenneth3.jpg",
  "images/kenneth4.jpg",
  "images/kenneth5.jpeg",
  "images/kenneth6.jpg",
  "images/kenneth7.jpg",
];

function randomLiz(e) {
  e.preventDefault();
  let randomNumberQ = Math.random() * lizQuotes.length;
  let newNumberQ = Math.floor(randomNumberQ);
  let quoteLiz = lizQuotes[newNumberQ];
  QuoteDisplay.innerHTML = quoteLiz;

  let randomNumberImg = Math.random() * lizImages.length;
  let newNumberImg = Math.floor(randomNumberImg);
  let imageLiz = lizImages[newNumberImg];
  ImgDisplay.src = imageLiz;
}

function randomJack(e) {
  e.preventDefault();
  let randomNumberQ = Math.random() * jackQuotes.length;
  let newNumberQ = Math.floor(randomNumberQ);
  let quoteJack = jackQuotes[newNumberQ];
  QuoteDisplay.innerHTML = quoteJack;

  let randomNumberImg = Math.random() * jackImages.length;
  let newNumberImg = Math.floor(randomNumberImg);
  let imageJack = jackImages[newNumberImg];
  ImgDisplay.src = imageJack;
}

function randomKenneth(e) {
  e.preventDefault();
  let randomNumberQ = Math.random() * kennethQuotes.length;
  let newNumberQ = Math.floor(randomNumberQ);
  let quoteKenneth = kennethQuotes[newNumberQ];
  QuoteDisplay.innerHTML = quoteKenneth;

  let randomNumberImg = Math.random() * kennethImages.length;
  let newNumberImg = Math.floor(randomNumberImg);
  let imageKenneth = kennethImages[newNumberImg];
  ImgDisplay.src = imageKenneth;
}

lizButton.addEventListener("click", randomLiz);
jackButton.addEventListener("click", randomJack);
kennethButton.addEventListener("click", randomKenneth);
