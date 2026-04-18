const tierInfo = {
  s:{label:"S Tier"},
  a:{label:"A Tier"},
  b:{label:"B Tier"},
  c:{label:"C Tier"},
  classics:{label:"Classics"}
};

const animeData = [
  {
    title:"Cowboy Bebop",
    tier:"s",
    year:1998,
    genre:["Sci-Fi"],
    cover:"images/cowboybepop.png",
    description:"A neo-noir space Western about a group of bounty hunters that are traveling across the galaxy on their ship, The Bepop catching criminals for money to stay afloat."
  },
  {
    title:"Akira",
    tier:"classics",
    year:1988,
    genre:["Cyberpunk"],
    cover:"images/Akira.jpeg",
    description:"Follow biker gang leader Shotaro Kaneda as he tries to save his fried Tetsuo Shima who develops psychic powers after a motorcycle accident."
  },
  {
  title: "Angel's Egg",
  tier: "classics",
  year: 1985,
  genre: ["Art House", "Fantasy"],
  cover: "images/AngelsEgg.jpg",
  description: "A young girl protecting a large, mysterious egg in a gothic, desolate, and submerged city. Barely any voice dialogue story told with deep themes and visuals. "
},
{
  title: "Dallos",
  tier: "classics",
  year: 1983,
  genre: ["Sci-Fi", "Mecha"],
  cover: "images/Dallos.jpg",
  description: "One of the first OVAs ever made, About a violent revolt by 3rd generation lunar miners against an oppressive government in the late 21st century."
},
{
  title: "Angel Cop",
  tier: "classics",
  year: 1989,
  genre: ["Action", "Cyberpunk"],
  cover: "images/Angelcop.jpeg",
  description: "Ultra-violent cyberpunk about a police task force fighting against communist terrorists."
},
{
  title: "Wicked City",
  tier: "classics",
  year: 1987,
  genre: ["Horror", "Supernatural"],
  cover: "images/wickedcity.jpeg",
  description: "Dark adult anime blending demons, extreme body horror, action, one of the most memorable intro sequence in the history of anime and noir atmosphere."
},
{
  title: "Bubblegum Crisis",
  tier: "classics",
  year: 1987,
  genre: ["Cyberpunk", "Action"],
  cover: "images/bgcrisis.jpeg",
  description: "8 episode OVA series about the Knight Sabers, four women in powered hardsuits, fighting androids created by the Genom Corporation with a legendary 80s Streets of Rage style Synth-Rock soundtrack."
},
{
  title: "Vampire Hunter D",
  tier: "classics",
  year: 1985,
  genre: ["Horror", "Fantasy"],
  cover: "images/Vampirehunterd.jpg",
  description: "Gothic, post-apocalyptic OVA about a half-human, half-vampire who roams a futuristic wasteland in 12,090 AD hunting technologically advanced vampire nobles & monsters."
},
{
  title: "Megazone 23",
  tier: "classics",
  year: 1985,
  genre: ["Sci-Fi", "Mecha"],
  cover: "images/megazone23.jpeg",
  description: "Cyberpunk OVA about Shogo Yahagi a biker in Tokyo who soons discovers his city is just a simulation after acquiring a secret transforming prototype motorcycle."
},
{
  title: "City Hunter",
  tier: "classics",
  year: 1987,
  genre: ["Action", "Comedy"],
  cover: "images/cityhunter.jpeg",
  description: "Following Ryo Saeba, a legendary, ladies man who is also a hitman on his journey to clean up crime, or wait is it the other way around?"
},
{
  title: "Saint Seiya: Knights of the Zodiac",
  tier: "classics",
  year: 1986,
  genre: ["Battle Shonen", "Fantasy"],
  cover: "images/saintseiya.jpeg",
  description: "Story focuses on five young warriors called Saints, who wear magical constellation-based armor called Cloths."
},
{
  title: "Maple Town",
  tier: "classics",
  year: 1986,
  genre: ["Slice of Life", "Kids"],
  cover: "images/mapletown.jpeg",
  description: "Very wholesome series centering on the adventures of Patty Rabbit and her family in a 1920's style town inhabited by many different kinds of animals aimed towards children."
},

{
  title: "Golden Boy",
  tier: "classics",
  year: 1995,
  genre: ["Comedy", "Ecchi"],
  cover: "images/goldenboy.jpeg",
  description: "OVA about a perverted but genius drifter named Kintaro Oe, who takes on odd jobs while learning life lessons in hilarious ways."
},
{
  title: "Gunsmith Cats",
  tier: "classics",
  year: 1995,
  genre: ["Action", "Crime"],
  cover: "images/gunsmithcats.jpeg",
  description: "3 episode OVA about Chicago bounty hunters Rally and Minnie-May who run a gun shop, take on criminals with guns, cars, and explosives."
},
{
  title: "Castle in the Sky",
  tier: "classics",
  year: 1986,
  genre: ["Adventure", "Fantasy"],
  cover: "images/cits.jpeg",
  description: "A young boy and girl search for a legendary floating city while pursued by pirates and the military."
},
{
  title: "Dr. Slump: Arale-chan",
  tier: "classics",
  year: 1981,
  genre: ["Comedy", "Slice of Life"],
  cover: "images/arale.jpeg",
  description: "A Akira Toriyama Comedy anime about a quirky inventor and his super-strong robot girl Arale."
},
{
  title: "Ranma 1/2",
  tier: "classics",
  year: 1989,
  genre: ["Comedy", "Martial Arts"],
  cover: "images/ranma.jpeg",
  description: "A martial artist cursed to transform when splashed with water navigates chaotic relationships and fights."
},
{
  title: "Armored Trooper VOTOMS",
  tier: "classics",
  year: 1983,
  genre: ["Mecha", "War"],
  cover: "images/atvotoms.jpg",
  description: "Gritty, grounded mecha series focusing on a lone soldier nicknamed Bottoms, caught in conspiracies and war."
},

{
  title: "Berserk",
  tier: "s",
  year: 1997,
  decade: "1990s",
  genre: ["Dark Fantasy", "Action"],
  cover: "images/berserk.jpeg",
  description: "Brutal medieval story of Guts, a lone warrior fighting fate, demons, friendship, and betrayal."
},
{
  title: "Attack on Titan",
  tier: "s",
  year: 2013,
  decade: "2010s",
  genre: ["Action", "Drama"],
  cover: "images/AOT.jpg",
  description: "Humanity fights for survival against giant humanoid Titans in a brutal, evolving war. It stars Eren Yeager, who joins the elite Survey Corps to fight after a catastrophic event at his hometown."
},
{
  title: "Bleach",
  tier: "s",
  year: 2004,
  decade: "2000s",
  genre: ["Battle Shonen", "Supernatural"],
  cover: "images/bleach.jpg",
  description: "Ichigo Kurosaki gains the powers of a soul reaper, a god of death from Rukia Kuchiki to protect humanity from the evil spirits called Hollows."
},
{
  title: "One Piece",
  tier: "s",
  year: 1999,
  decade: "1990s",
  genre: ["Adventure", "Battle Shonen"],
  cover: "images/onepiece.jpg",
  description: "Legendary pirate adventure following Monkey D. Luffy whose body gained rubber properties after eating the Devil Fruit. He then travels the world fighting against the government and rival pirates with his crew to achieve his dream of becoming the King of Pirates."
},
{
  title: "Naruto",
  tier: "s",
  year: 2002,
  decade: "2000s",
  genre: ["Battle Shonen", "Action"],
  cover: "images/naruto.jpg",
  description: "A young ninja strives to become the strongest and earn recognition from his village."
},
{
  title: "Death Note",
  tier: "s",
  year: 2006,
  decade: "2000s",
  genre: ["Psychological", "Thriller"],
  cover: "images/deathnote.webp",
  description: "A genius student named Light Yagami gains the power to kill with a notebook called the Death Note and challenges justice and lead detective L himself. Leading to one of the greatest high stakes games of cat and mouse in history."
},
{
  title: "Dragon Ball",
  tier: "classics",
  year: 1986,
  decade: "1980s",
  genre: ["Adventure", "Comedy"],
  cover: "images/dragonball.jpg",
  description: "Young tailed martial artist Goku explores Earth to find seven wish-granting Dragon Balls alongside teenage genius Bulma with them making many more friends and enemies on the way."
},
{
  title: "Dragon Ball Z",
  tier: "classics",
  year: 1989,
  decade: "1980s",
  genre: ["Battle Shonen", "Action"],
  cover: "images/DBZ.jpg",
  description: "Goku's second journey with freinds to protect Earth from invaders, less comedy and more focus on Iconic battles, power levels, and transformations that defined anime globally."
},
{
  title: "Dragon Ball GT",
  tier: "b",
  year: 1996,
  decade: "1990s",
  genre: ["Adventure", "Action"],
  cover: "images/DBGT.jpg",
  description: "Exclusive non sequel to Dragon ball Z with Goku being reverted back to a child by the Black Star Dragon Balls."
},
{
  title: "Goblin Slayer",
  tier: "a",
  year: 2018,
  decade: "2010s",
  genre: ["Dark Fantasy", "Action"],
  cover: "images/goblinslayer.webp",
  description: "A grim fantasy focused on a warrior obsessed with exterminating goblins. But you soon come to learn why he is so obsessed with eliminating their kind, and that his motifs are indeed justified."
},
{
  title: "Golgo 13",
  tier: "classics",
  year: 1983,
  decade: "1980s",
  genre: ["Action", "Crime"],
  cover: "images/golgo13.jpg",
  description: "Legendary assassin Duke Togo takes on high-profile kills with precision. Follow his journey as he takes up contracts and completes them."
},
{
  title: "Hajime no Ippo",
  tier: "s",
  year: 2000,
  decade: "2000s",
  genre: ["Sports", "Drama"],
  cover: "images/HJI.jpg",
  description: "Underdog boxing story with strong character growth and intense fights. Starring Ippo's journey as a normal fisherman and a kid who was once bullied all the way to becoming a World Champion."
},
{
  title: "High Score Girl",
  tier: "b",
  year: 2018,
  decade: "2010s",
  genre: ["Romance", "Comedy"],
  cover: "images/hiscore.jpg",
  description: "Arcade-era love story centered around competitive gaming culture and show the growth of games and consoles and the moment shared by them and a nostalgic feeling of when these systems first released and joys that came with them."
},
{
  title: "Initial D",
  tier: "s",
  year: 1998,
  decade: "1990s",
  genre: ["Racing", "Action"],
  cover: "images/initiald.jpg",
  description: "Street racing anime famous for its drifting battles and eurobeat soundtrack. Following Takumi Fujiwara's journey into street racing following his father's Bunta legendary reputation of defending the Akina course from challengers."
},
{
  title: "JoJo's Bizarre Adventure",
  tier: "s",
  year: 2012,
  decade: "2010s",
  genre: ["Action", "Supernatural"],
  cover: "images/jojo.jpg",
  description: "Following the Joestar family and their adventures with each starring a different family member, in a Stylized multi-generational series with unique powers, poses, and creativity."
},
{
  title: "Jujutsu Kaisen",
  tier: "s",
  year: 2020,
  decade: "2020s",
  genre: ["Action", "Supernatural"],
  cover: "images/JJK.jpg",
  description: "The story of Yuji Itadori who to save his friends, swallows a cursed object which causes him to become the host of the powerful, King of Curses Ryomen Sukuna. This begins his journey as a Jujutsu Sorcerer. Some of the best combat scenes I have ever seen hands down."
},

{
  title: "Neon Genesis Evangelion",
  tier: "classics",
  year: 1995,
  decade: "1990s",
  genre: ["Mecha", "Psychological"],
  cover: "images/NGE.jpg",
  description: "A deeply psychological mecha series exploring trauma, identity, and human connection. Often described as the deconstruction to the Mech genre. "
},
{
  title: "Legend of the Galactic Heroes",
  tier: "classics",
  year: 1988,
  decade: "1980s",
  genre: ["Sci-Fi", "War"],
  cover: "images/lotgh.jpeg",
  description: "Massive space opera focused on political conflict, war strategy, and ideology."
},
{
  title: "Rurouni Kenshin",
  tier: "classics",
  year: 1996,
  decade: "1990s",
  genre: ["Samurai", "Action"],
  cover: "images/Rkenshin.jpg",
  description: "A legendary wandering swordsman Kenshin seeks redemption in Meiji-era Japan after a violent past of murder with no remorse."
},
{
  title: "Grave of the Fireflies",
  tier: "classics",
  year: 1988,
  decade: "1980s",
  genre: ["Drama", "War"],
  cover: "images/GOTF.jpg",
  description: "Heartbreaking story of two siblings struggling to survive during WWII in Japan."
},
{
  title: "Slam Dunk",
  tier: "classics",
  year: 1993,
  decade: "1990s",
  genre: ["Sports", "Comedy"],
  cover: "images/slamdunk.jpg",
  description: "A red haired delinquent named Sakuragi, joins a basketball team and unexpectedly grows into a serious player."
},
{
  title: "Trigun",
  tier: "classics",
  year: 1998,
  decade: "1990s",
  genre: ["Action", "Sci-Fi"],
  cover: "images/trigun.jpg",
  description: "Space Western following Gunslinger Vash the Stampede who has acquired a $60 Billion dollar bounty for accidental destruction of properties and whole cities, as he hides a tragic past behind his goofy personality."
},
{
  title: "Tomorrow's Joe",
  tier: "classics",
  year: 1970,
  decade: "1970s",
  genre: ["Sports", "Drama"],
  cover: "images/tjoe.jpg",
  description: "Joe Yabuki's journey from a orphaned slum dog to a professional boxer. Influential boxing anime about struggle, growth, and the harsh realities of life."
},
{
  title: "Perfect Blue",
  tier: "classics",
  year: 1997,
  decade: "1990s",
  genre: ["Psychological", "Thriller"],
  cover: "images/perfectblue.jpg",
  description: "Mima Kirigoe, a J-pop idol who leaves her music career to become an actress, only to be stalked by an obsessed fan and haunted by a ghost of her past persona, leading to a psychotic break where she loses her grip on reality."
},
{
  title: "Sailor Moon",
  tier: "classics",
  year: 1992,
  decade: "1990s",
  genre: ["Magical Girl", "Romance"],
  cover: "images/smoon.jpg",
  description: "A group of magical girls called Sailor Guardians as they fight evil to protect the Earth and Moon King while balancing everyday life and friendship."
},
{
  title: "Mobile Suit Gundam",
  tier: "classics",
  year: 1979,
  decade: "1970s",
  genre: ["Mecha", "War"],
  cover: "images/MSGundam.jpg",
  description: "The origin of real-robot mecha, focusing on war, politics, and human cost. Follows 15 year old Amuro ray who is forced to pilot an experimental RX-78-2 Gundam."
},

{
  title: "D.Gray-man",
  tier: "a",
  year: 2006,
  decade: "2000s",
  genre: ["Action", "Supernatural"],
  cover: "images/dgman.jpg",
  description: "Allen Walker and fellow exorcists fights against the Millenium Earl nd his machine monsters called Akuma's that are made from human souls led to sacrifice by deceit. "
},
{
  title: "Darker than Black",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Action", "Sci-Fi"],
  cover: "images/dthanblack.jpeg",
  description: "Contractors with supernatural powers operate in a shadowy, noir-like world."
},
{
  title: "Gintama",
  tier: "s",
  year: 2006,
  decade: "2000s",
  genre: ["Comedy", "Action"],
  cover: "images/gintama.jpeg",
  description: "Absurd comedy mixed with serious arcs set in a sci-fi Edo-era world. Following Gintoki a lazy ex-samurai who runs Odd Jobs with Shinpachi, and Kagura to pay rent in a Sci-fi world where swords are banned."
},
{
  title: "Inuyasha",
  tier: "a",
  year: 2000,
  decade: "2000s",
  genre: ["Fantasy", "Adventure"],
  cover: "images/inuyasha.png",
  description: "Kagome a modern era schoolgirl is transported to the feudal era of japan and then teams up with a half-demon named Inuyasha. Together with friends, they start a journey to reover the shattered Shikon jewel."
},
{
  title: "Chrome Shelled Regios",
  tier: "b",
  year: 2009,
  decade: "2000s",
  genre: ["Sci-Fi", "Action"],
  cover: "images/Regios.jpg",
  description: "Post-apocalyptic academy setting with enhanced fighters battling monsters. Following Layfon Alseif, a mysterious transfer student with a hidden legendary past who is forced to join the Military Arts Platoon."
},
{
  title: "Ninja Kamui",
  tier: "b",
  year: 2024,
  decade: "2020s",
  genre: ["Action", "Revenge"],
  cover: "images/kamui.webp",
  description: "A former ninja named Joe Higan seeks revenge against the clan that destroyed his life by brutally murdering his family."
},
{
  title: "Samurai 7",
  tier: "a",
  year: 2004,
  decade: "2000s",
  genre: ["Samurai", "Sci-Fi"],
  cover: "images/samurai7.jpeg",
  description: "A poor rice village hires a team of seven samurai to protect their rice harvest from dangerous cyborg bandits sent from an corrupt empire."
},
{
  title: "Desert Punk",
  tier: "b",
  year: 2004,
  decade: "2000s",
  genre: ["Action", "Comedy"],
  cover: "images/dpunk.jpg",
  description: "A highly skilled bounty hunter named Kanta Mizuno but known as the Demon of the Desert survives in a harsh desert world with grit and humor."
},
{
  title: "Mushishi",
  tier: "s",
  year: 2005,
  decade: "2000s",
  genre: ["Supernatural", "Slice of Life"],
  cover: "images/mushishi.jpg",
  description: "Quiet, atmospheric stories about mysterious lifeforms and human nature. Based around a wandering Mushi Master named Ginko who travels, studies, and cures mysterious ethereal lifeforms called Mushi from the illnesses different species causes upon humans."
},
{
  title: "Vinland Saga",
  tier: "s",
  year: 2019,
  decade: "2010s",
  genre: ["Historical", "Action"],
  cover: "images/vinland.png",
  description: "A brutal Viking tale of revenge, war, personal growth, and philosophical journey of redemption for the main character Thorfinn."
},
{
  title: "Afro Samurai",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Action", "Samurai"],
  cover: "images/afro.webp",
  description: "Samurai named Afro seeks revenge to kill the fighter holding the #1 headband after watching the man slaughter his father in battle, who was the former #1 headband owner."
},
{
  title: "Air Gear",
  tier: "b",
  year: 2006,
  decade: "2000s",
  genre: ["Sports", "Action"],
  cover: "images/airgear.jpg",
  description: "The story follows Ikki Minami as he enters the violent world of competitive, high speed battles known as Parts Wars aiming to become one of the Top Storm Riders."
},
{
  title: "Black Cat",
  tier: "c",
  year: 2005,
  decade: "2000s",
  genre: ["Action", "Adventure"],
  cover: "images/bcat.jpg",
  description: "A former assassin named Train Heartnet known as Black Cat leaves his past behind but is pulled back into conflict by his obsessive former colleague Creed."
},
{
  title: "Blue Exorcist",
  tier: "b",
  year: 2011,
  decade: "2010s",
  genre: ["Supernatural", "Action"],
  cover: "images/bex.jpg",
  description: "A boy discovers he is Satan's son and trains as an exorcist mastering his blue flames in hopes to defeat his father."
},
{
  title: "Chainsaw Man",
  tier: "s",
  year: 2022,
  decade: "2020s",
  genre: ["Action", "Horror"],
  cover: "images/cman.webp",
  description: "Denji, a poor desperate young man inherits his devil dog pochita's chainsaw powers when a job goes wrong and becomes a human-devil chainsaw man hybrid.  "
},
{
  title: "My Hero Academia",
  tier: "a",
  year: 2016,
  decade: "2010s",
  genre: ["Superhero", "Action"],
  cover: "images/mha.jpg",
  description: "A powerless boy named Deku enters a world of heroes by inheriting the power of the top hero, All Might, and strives to become the greatest."
},
{
  title: "Cyber City Oedo 808",
  tier: "classics",
  year: 1990,
  decade: "1990s",
  genre: ["Cyberpunk", "Action"],
  cover: "images/ccoedo.jpg",
  description: "Three Criminals Sengoku, Gogul, and Benten, turned enforcers carry out dangerous missions in a cyberpunk future to reduce their 300 year prison sentences, and placed on a type of house arrest with a explosive collars if they try to abandon their task or flee."
},
{
  title: "Fate/Zero",
  tier: "a",
  year: 2011,
  decade: "2010s",
  genre: ["Action", "Fantasy"],
  cover: "images/fatezero.jpg",
  description: "Depicting the 4th Holy Grail War, Mages summon heroic spirits to fight in a deadly battle royale for the Holy Grail."
},
{
  title: "Fractale",
  tier: "c",
  year: 2011,
  decade: "2010s",
  genre: ["Sci-Fi", "Adventure"],
  cover: "images/Fractale.jpg",
  description: "A boy Clain rescues a girl named Phryne and becomes deeply involved in a conspiracy when Phyrne leaves behind a special avatar named Nessa."
},
{
  title: "Gad Guard",
  tier: "c",
  year: 2003,
  decade: "2000s",
  genre: ["Sci-Fi", "Mecha"],
  cover: "images/gadguard.jpg",
  description: "A delivery boy Hajiki Sanada lives in an impoverished, futuristic city called Night Town. Until discovering a Gad device which transform into a human like robot called a Techode that reacts to his emotions."
},
{
  title: "Hunter x Hunter (1999)",
  tier: "classics",
  year: 1999,
  decade: "1990s",
  genre: ["Adventure", "Battle Shonen"],
  cover: "images/1999.jpg",
  description: "Original adaptation of Gon's story to become a hunter and find his father Ging, with darker tone following Gon on his journey to find his father."
},
{
  title: "Hunter x Hunter",
  tier: "s",
  year: 2011,
  decade: "2010s",
  genre: ["Adventure", "Battle Shonen"],
  cover: "images/2011.png",
  description: "Modern adaptation of Gon's story to become a hunter and find his father Ging, with deep arcs, strategic battles, and strong character writing."
},
{
  title: "Ninja Scroll",
  tier: "classics",
  year: 1993,
  decade: "1990s",
  genre: ["Action", "Samurai"],
  cover: "images/ninjascroll.jpg",
  description: "A wandering swordsman battles supernatural ninjas in a violent feudal Japan."
},
{
  title: "Mad Bull 34",
  tier: "classics",
  year: 1990,
  decade: "1990s",
  genre: ["Action", "Crime"],
  cover: "images/madbull.jpg",
  description: "Over-the-top cop OVA following Sleepy the Legend Estes and Eddie Ban at NYPD'S 34th precinct and known for its extreme violence and absurd action."
},
{
  title: "Phantom: Requiem for the Phantom",
  tier: "s",
  year: 2009,
  decade: "2000s",
  genre: ["Action", "Drama"],
  cover: "images/protp.jpg",
  description: "Zwei, a Japanese tourist brainwashed by the Inferno crime syndicate into becoming a top, memory-wiped assassin. Together with his mentor, the amnesiac elite killer Ein, he struggles to regain his identity while surviving a violent, high-stakes underworld conflict."
},

{
  title: "Mobile Suit Gundam Wing",
  tier: "classics",
  year: 1995,
  decade: "1990s",
  genre: ["Mecha", "Action"],
  cover: "images/msgw.jpg",
  description: "Five Gundam pilots wage war against oppressive forces in a political sci-fi conflict."
},
{
  title: "Claymore",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Dark Fantasy", "Action"],
  cover: "images/claymore.jpg",
  description: "Warriors infused with demon power fight monsters while struggling with their own humanity."
},
{
  title: "Basilisk",
  tier: "c",
  year: 2005,
  decade: "2000s",
  genre: ["Action", "Historical"],
  cover: "images/basilisk.jpg",
  description: "Two rival ninja clans clash in a deadly battle fueled by politics and tragedy."
},
{
  title: "Code Geass",
  tier: "s",
  year: 2006,
  decade: "2000s",
  genre: ["Mecha", "Psychological"],
  cover: "images/cgeass.png",
  description: "A genius strategist gains the power to command anyone and leads a rebellion with his overall goal being to cause World Peace in the most unorthodox method that still ends up working perfectly."
},
{
  title: "Dragon Ball Super",
  tier: "b",
  year: 2015,
  decade: "2010s",
  genre: ["Battle Shonen", "Action"],
  cover: "images/dbs.jpg",
  description: "Continuation of Dragon Ball with new transformations and multiverse battles. The true continuation of the series after Z with GT being marked as non-canon now."
},
{
  title: "Fairy Tail",
  tier: "b",
  year: 2009,
  decade: "2000s",
  genre: ["Fantasy", "Battle Shonen"],
  cover: "images/fairytale.jpg",
  description: "A guild of wizards takes on missions powered by friendship and teamwork."
},
{
  title: "Gunslinger Girl",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Drama", "Action"],
  cover: "images/ggirl.jpg",
  description: "Young terminally ill, or traumatized girls turned into cyborg assassins by the governments Social Welfare Agency, struggle with identity and morality."
},
{
  title: "Kill la Kill",
  tier: "a",
  year: 2013,
  decade: "2010s",
  genre: ["Action", "Comedy"],
  cover: "images/killlakill.jpg",
  description: "Over-the-top action and style-driven battles about Ryuko Matoi a schoolgirl searching for her father's killer, with strong themes of rebellion."
},
{
  title: "Space Dandy",
  tier: "a",
  year: 2014,
  decade: "2010s",
  genre: ["Sci-Fi", "Comedy"],
  cover: "images/spacedandy.jpg",
  description: "Episodic space adventures about Dandy who hunts rare aliens for profit with his crew, with wild creativity and shifting tones."
},
{
  title: "Mob Psycho 100",
  tier: "a",
  year: 2016,
  decade: "2010s",
  genre: ["Action", "Supernatural"],
  cover: "images/mp100.png",
  description: "A psychic boy learns emotional growth while dealing with overwhelming power."
},
{
  title: "Frieren: Beyond Journey's End",
  tier: "s",
  year: 2023,
  decade: "2020s",
  genre: ["Fantasy", "Drama"],
  cover: "images/frieren.jpg",
  description: "A long-lived elf reflects on time, relationships, and life after the hero's journey."
},
{
  title: "The Rising of the Shield Hero",
  tier: "b",
  year: 2019,
  decade: "2010s",
  genre: ["Fantasy", "Isekai"],
  cover: "images/shero.jpg",
  description: "A betrayed hero Naofumi, a 20 year old college student who was summoned to another world as the shield hero rises from nothing in a hostile world. After being shunned and exiled of a falsely accused crime."
},
{
  title: "Dr. Stone",
  tier: "a",
  year: 2019,
  decade: "2010s",
  genre: ["Sci-Fi", "Adventure"],
  cover: "images/drstone.jpg",
  description: "A genius Senku Ishigami rebuilds civilization using science after humanity is petrified 3700 years prior."
},
{
  title: "Steins;Gate",
  tier: "s",
  year: 2011,
  decade: "2010s",
  genre: ["Sci-Fi", "Thriller"],
  cover: "images/steinsgate.jpg",
  description: "Time travel experiment by mad scientist Okabe spirals into a high-stakes psychological thriller."
},
{
  title: "Accel World",
  tier: "c",
  year: 2012,
  decade: "2010s",
  genre: ["Sci-Fi", "Action"],
  cover: "images/aworld.jpg",
  description: "A bullied, overweight, teen enters a virtual battle world to escape reality."
},
{
  title: "Sword Art Online",
  tier: "b",
  year: 2012,
  decade: "2010s",
  genre: ["Isekai", "Action"],
  cover: "images/sartonline.jpg",
  description: "10,000 Players are trapped in a virtual game where death has real consequences by the developer. If they die in the game they die in real life."
},
{
  title: "Black Clover",
  tier: "b",
  year: 2017,
  decade: "2010s",
  genre: ["Battle Shonen", "Fantasy"],
  cover: "images/bclover.jpg",
  description: "Asta a magicless boy in a world where magic is everything, strives to become the Wizard King."
},
{
  title: "Log Horizon",
  tier: "a",
  year: 2013,
  decade: "2010s",
  genre: ["Isekai", "Strategy"],
  cover: "images/lhorizon.jpeg",
  description: "30,000 Players trapped in an MMO after an update gone wrong build a society and strategy-based survival."
},
{
  title: "Angel Beats!",
  tier: "a",
  year: 2010,
  decade: "2010s",
  genre: ["Drama", "Supernatural"],
  cover: "images/angelbeats.jpeg",
  description: "Students in the afterlife confront regrets and find closure from the cruel lives they lived."
},
{
  title: "Btooom!",
  tier: "b",
  year: 2012,
  decade: "2010s",
  genre: ["Action", "Survival"],
  cover: "images/btom.jpeg",
  description: "Top Ranked Players are forced into a real-life battle royale based on a video game where they must kill each other to survive."
},
{
  title: "Elfen Lied",
  tier: "b",
  year: 2004,
  decade: "2000s",
  genre: ["Horror", "Drama"],
  cover: "images/elied.jpg",
  description: "A violent/psychological story of discrimination, trauma, and human cruelty."
},
{
  title: "Great Teacher Onizuka",
  tier: "classics",
  year: 1999,
  decade: "1990s",
  genre: ["Comedy", "Drama"],
  cover: "images/gto.jpeg",
  description: "A former delinquent becomes a teacher and changes students' lives for the better despite his unconvetional methods and perverted nature."
},
{
  title: "Needless",
  tier: "c",
  year: 2009,
  decade: "2000s",
  genre: ["Action", "Sci-Fi"],
  cover: "images/needless.jpeg",
  description: "50 years after WWIII, isolated black spots produced Over-the-top battles between powered individuals called Needless, in a ruined world."
},
{
  title: "One Punch Man",
  tier: "s",
  year: 2015,
  decade: "2010s",
  genre: ["Action", "Comedy"],
  cover: "images/opm.jpg",
  description: "A Overpowered hero defeats enemies in one punch and struggles with chronic boredom due to the lack of challenge."
},
{
  title: "Kuroko's Basketball",
  tier: "a",
  year: 2012,
  decade: "2010s",
  genre: ["Sports", "Drama"],
  cover: "images/kuroko.jpg",
  description: "A team of skilled players aims to become the best in high school basketball."
},
{
  title: "Kaze no Stigma",
  tier: "c",
  year: 2007,
  decade: "2000s",
  genre: ["Action", "Supernatural"],
  cover: "images/kaze.jpg",
  description: "Kazuma Yagami A wind user returns to his clan of fire users after being cast out 4 years ago."
},
{
  title: "Tokyo Ghoul",
  tier: "b",
  year: 2014,
  decade: "2010s",
  genre: ["Horror", "Action"],
  cover: "images/tghoul.jpg",
  description: "A college student becomes a half-ghoul and struggles between two worlds."
},
{
  title: "Deadman Wonderland",
  tier: "b",
  year: 2011,
  decade: "2010s",
  genre: ["Action", "Horror"],
  cover: "images/dwonderland.jpg",
  description: "A boy is imprisoned in a deadly amusement park prison after being framed for murdering his entire class."
},
{
  title: "Gurren Lagann",
  tier: "s",
  year: 2007,
  decade: "2000s",
  genre: ["Mecha", "Action"],
  cover: "images/gurren.jpeg",
  description: "Explosive mecha series about breaking limits and defying fate despite humanity being forced underground by the Spiral King."
},
{
  title: "Yu Yu Hakusho",
  tier: "classics",
  year: 1992,
  decade: "1990s",
  genre: ["Battle Shonen", "Supernatural"],
  cover: "images/yuyu.jpg",
  description: "Yusuke a 14 year old delinquent dies saving a child and then becomes a spirit detective fighting supernatural threats."
},
{
  title: "Samurai Champloo",
  tier: "a",
  year: 2004,
  decade: "2000s",
  genre: ["Action", "Samurai"],
  cover: "images/champloo.jpg",
  description: "A waitress Fuu and two other unlikely swordsman, Mugen and Jin, go on a stylish Edo-era journey blending hip-hop culture and sword fights."
},
{
  title: "Soul Eater",
  tier: "a",
  year: 2008,
  decade: "2000s",
  genre: ["Action", "Supernatural"],
  cover: "images/souleater.webp",
  description: "Students train to fight and collect 99 evil souls in a uniquely styled world."
},
{
  title: "MAR (MÄR)",
  tier: "c",
  year: 2005,
  decade: "2000s",
  genre: ["Fantasy", "Adventure"],
  cover: "images/mar.jpg",
  description: "A boy named Ginta is transported to a fantasy world and fights using magical artifacts to defend the land against the returning Chess Piece Army."
},
{
  title: "Gun x Sword",
  tier: "c",
  year: 2005,
  decade: "2000s",
  genre: ["Mecha", "Action"],
  cover: "images/gxs.jpg",
  description: "A wandering man named Van seeks revenge for the death of his fiancee on their wedding day in a desert world with giant robots."
},

{
  title: "Big O",
  tier: "classics",
  year: 1999,
  decade: "2000s",
  genre: ["Crime", "Action"],
  cover: "images/bigo.jpg",
  description: "Follows Roger Smith, a professional negotiator in Paradigm City a metropolis town where resident suffer from amnesia as everyone has lost their memories 40 years prior to the start of the series."
},

{
  title: "Monster",
  tier: "s",
  year: 2004,
  decade: "2000s",
  genre: ["Psychological", "Thriller"],
  cover: "images/monster.jpeg",
  description: "A brilliant neurosurgeon doctor named Kenzo Tenma hunts down a former patient in Germany who becomes a serial killer."
},
{
  title: "Black Lagoon",
  tier: "a",
  year: 2006,
  decade: "2000s",
  genre: ["Action", "Crime"],
  cover: "images/black_lagoon.webp",
  description: "Modern pirates carry out dangerous missions in a lawless world."
},
{
  title: "FLCL",
  tier: "classics",
  year: 2000,
  decade: "2000s",
  genre: ["Sci-Fi", "Comedy"],
  cover: "images/flcl.jpg",
  description: "Chaotic coming-of-age story about 12 year old Naota Nandaba whose life is disrupted with surreal action and energy caused by an eccentric alien named Haruko Haruhara."
},
{
  title: "Ergo Proxy",
  tier: "a",
  year: 2006,
  decade: "2000s",
  genre: ["Sci-Fi", "Psychological"],
  cover: "images/ergo_proxy.jpg",
  description: "Dark philosophical journey in a dystopian future investigating the Cogito virus which gives sentient souls to robots."
},
{
  title: "Paranoia Agent",
  tier: "a",
  year: 2004,
  decade: "2000s",
  genre: ["Psychological", "Mystery"],
  cover: "images/paranoia_agent.jpg",
  description: "A mysterious attacker named Lil Slugger triggers strange events across the city."
},
{
  title: "Texhnolyze",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Sci-Fi", "Dark"],
  cover: "images/texhnolyze.jpg",
  description: "Bleak cyberpunk story about power, control, and decay. Following Ichise, a prizefighter in the crumbling underground city of Lux."
},
{
  title: "Serial Experiments Lain",
  tier: "classics",
  year: 1998,
  decade: "1990s",
  genre: ["Cyberpunk", "Psychological"],
  cover: "images/lain.jpg",
  description: "A girl becomes entangled in a mysterious digital network named The Wired after receiving an email from a dead classmate."
},
{
  title: "Ping Pong the Animation",
  tier: "a",
  year: 2014,
  decade: "2010s",
  genre: ["Sports", "Drama"],
  cover: "images/ping_pong.jpg",
  description: "Unique art style and powerful character storytelling about childhood friends Peco and Smile through table tennis."
},
{
  title: "Devilman Crybaby",
  tier: "s",
  year: 2018,
  decade: "2010s",
  genre: ["Action", "Horror"],
  cover: "images/devilman_crybaby.jpg",
  description: "Tragic story of demons and humanity with intense themes. Following teenager Akira Fudo, who merges with a demon to fight a hidden race of demons reawakening to take over Earth."
},
{
  title: "Kaiji",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Psychological", "Gambling"],
  cover: "images/kaiji.png",
  description: "High-stakes gambling anime about survival and desperation. Following Kaiji Ito a hopeless, unemployed gambles who falles into massive debt after being tricked by a former coworker."
},
{
  title: "Terror in Resonance",
  tier: "a",
  year: 2014,
  decade: "2010s",
  genre: ["Thriller", "Drama"],
  cover: "images/zankyou_no_terror.jpg",
  description: "Two boys carry out terrorist acts in Tokyo with deeper motives."
},
{
  title: "Dororo",
  tier: "a",
  year: 2019,
  decade: "2010s",
  genre: ["Samurai", "Action"],
  cover: "images/dororo.jpg",
  description: "A cursed boy reclaims his body parts from demons due to his fathers pact."
},
{
  title: "Noragami",
  tier: "a",
  year: 2014,
  decade: "2010s",
  genre: ["Supernatural", "Action"],
  cover: "images/noragami.png",
  description: "Yato a homeless, minor god of calamity tries to gain followers and purpose by taking odd jobs for 5 yen."
},
{
  title: "Akudama Drive",
  tier: "b",
  year: 2020,
  decade: "2020s",
  genre: ["Cyberpunk", "Action"],
  cover: "images/akudama_drive.jpg",
  description: "A group of elite criminals are forced into a dangerous heist mission."
},
{
  title: "Odd Taxi",
  tier: "s",
  year: 2021,
  decade: "2020s",
  genre: ["Mystery", "Drama"],
  cover: "images/odd_taxi.webp",
  description: "A taxi driver gets caught in a web of crime and secrets."
},
{
  title: "Ranking of Kings",
  tier: "a",
  year: 2021,
  decade: "2020s",
  genre: ["Fantasy", "Adventure"],
  cover: "images/ranking_of_kings.jpg",
  description: "A deaf prince proves his strength in a harsh world."
},
{
  title: "Made in Abyss",
  tier: "s",
  year: 2017,
  decade: "2010s",
  genre: ["Adventure", "Dark"],
  cover: "images/made_in_abyss.jpg",
  description: "Riko an orphan dives into a massive, deadly and mysterious pit called the Abyss to find her mother."
},
{
  title: "Re:Zero",
  tier: "s",
  year: 2016,
  decade: "2010s",
  genre: ["Isekai", "Psychological"],
  cover: "images/rezero.webp",
  description: "A boy relives death repeatedly in another world."
},
{
  title: "Konosuba",
  tier: "b",
  year: 2016,
  decade: "2010s",
  genre: ["Comedy", "Isekai"],
  cover: "images/konosuba.jpeg",
  description: "A dysfunctional party goes on absurd adventures."
},
{
  title: "Overlord",
  tier: "c",
  year: 2015,
  decade: "2010s",
  genre: ["Isekai", "Fantasy"],
  cover: "images/overlord.jpg",
  description: "A player becomes trapped as an overpowered undead ruler."
},
{
  title: "Haibane Renmei",
  tier: "a",
  year: 2002,
  decade: "2000s",
  genre: ["Drama", "Mystery"],
  cover: "images/haibane_renmei.jpg",
  description: "Quiet, emotional story about angels-like beings searching for purpose."
},
{
  title: "Now and Then, Here and There",
  tier: "a",
  year: 1999,
  decade: "1990s",
  genre: ["Drama", "War"],
  cover: "images/now_and_then_here_and_there.jpeg",
  description: "A brutal isekai exploring war, survival, and humanity."
},
{
  title: "Kino's Journey",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Adventure", "Philosophical"],
  cover: "images/kinos_journey.jpg",
  description: "A traveler visits strange countries, each with unique rules."
},
{
  title: "Dennou Coil",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Sci-Fi", "Mystery"],
  cover: "images/dennou_coil.jpg",
  description: "Kids explore augmented reality worlds with hidden dangers."
},
{
  title: "Kaiba",
  tier: "a",
  year: 2008,
  decade: "2000s",
  genre: ["Sci-Fi", "Psychological"],
  cover: "images/kaiba.avif",
  description: "Memory and identity explored in a surreal sci-fi setting where memroies are digitized and bodies are replaceable commodities."
},
{
  title: "The Tatami Galaxy",
  tier: "s",
  year: 2010,
  decade: "2010s",
  genre: ["Comedy", "Psychological"],
  cover: "images/tatami_galaxy.png",
  description: "A college student's life resets as he chases the perfect path in 4 parallel, looping realities."
},
{
  title: "Parasyte",
  tier: "s",
  year: 2014,
  decade: "2010s",
  genre: ["Horror", "Action"],
  cover: "images/parasyte.jpg",
  description: "A teen shares his body with a parasite species that consumes human flesh and fights others like it."
},
{
  title: "91 Days",
  tier: "a",
  year: 2016,
  decade: "2010s",
  genre: ["Crime", "Drama"],
  cover: "images/91_days.jpg",
  description: "Mafia revenge story following the Vanetti crime family set during Prohibition."
},
{
  title: "House of Five Leaves",
  tier: "a",
  year: 2010,
  decade: "2010s",
  genre: ["Samurai", "Drama"],
  cover: "images/house_of_five_leaves.png",
  description: "Slow, character-driven samurai story about Akitsu Masanosuke a timid, masterless samurai who finds work as a bodyguard for Yaichi, leader of a kidnapper gang, with unique art style."
},
{
  title: "Erased",
  tier: "a",
  year: 2016,
  decade: "2010s",
  genre: ["Mystery", "Thriller"],
  cover: "images/erased.jpeg",
  description: "A man travels back in time to prevent childhood tragedies."
},
{
  title: "Shigurui",
  tier: "b",
  year: 2007,
  decade: "2000s",
  genre: ["Samurai", "Drama"],
  cover: "images/shigurui.jpg",
  description: "Extremely brutal samurai drama about rivalry and obsession."
},
{
  title: "Gungrave",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Action", "Crime"],
  cover: "images/gungrave.jpg",
  description: "Mafia story that turns supernatural, focused on loyalty and betrayal following Brandon Heat and Harry Macdowell as they rise through the ranks of a crime syndicate named Millennion."
},
{
  title: "Boogiepop Phantom",
  tier: "a",
  year: 2000,
  decade: "2000s",
  genre: ["Psychological", "Horror"],
  cover: "images/boogiepop_phantom.jpg",
  description: "Fragmented storytelling about urban legends and psychological horror."
},
{
  title: "RahXephon",
  tier: "b",
  year: 2002,
  decade: "2000s",
  genre: ["Mecha", "Drama"],
  cover: "images/rahxephon.jpg",
  description: "Mecha series with heavy emotional and mysterious elements following 17 year old artist Ayato Kamina who defends against the Mulians, an alien race."
},
{
  title: "Wolf's Rain",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Adventure", "Drama"],
  cover: "images/wolfs_rain.jpg",
  description: "Wolves disguised as humans search for paradise in a dying world."
},
{
  title: "Noein",
  tier: "b",
  year: 2005,
  decade: "2000s",
  genre: ["Sci-Fi", "Drama"],
  cover: "images/noein.webp",
  description: "Parallel worlds collide in a complex sci-fi story."
},
{
  title: "Princess Tutu",
  tier: "a",
  year: 2002,
  decade: "2000s",
  genre: ["Fantasy", "Drama"],
  cover: "images/princess_tutu.webp",
  description: "Fairy tale story with deep narrative twists."
},
{
  title: "Tekkonkinkreet",
  tier: "a",
  year: 2006,
  decade: "2000s",
  genre: ["Drama", "Action"],
  cover: "images/tekkonkinkreet.webp",
  description: "Two street kids survive in a chaotic city."
},
{
  title: "Redline",
  tier: "s",
  year: 2009,
  decade: "2000s",
  genre: ["Racing", "Action"],
  cover: "images/redline.webp",
  description: "Insane high-speed race with some of the best animation ever."
},
{
  title: "Mind Game",
  tier: "a",
  year: 2004,
  decade: "2000s",
  genre: ["Experimental", "Comedy"],
  cover: "images/mind_game.webp",
  description: "Wild, surreal film about life, death, and second chances."
},
{
  title: "Time of Eve",
  tier: "a",
  year: 2008,
  decade: "2000s",
  genre: ["Sci-Fi", "Drama"],
  cover: "images/time_of_eve.webp",
  description: "Explores human relationships with androids."
},
{
  title: "Canaan",
  tier: "b",
  year: 2009,
  decade: "2000s",
  genre: ["Action", "Thriller"],
  cover: "images/canaan.webp",
  description: "A mercenary gets caught in a biological warfare conflict."
},
{
  title: "Moribito",
  tier: "a",
  year: 2007,
  decade: "2000s",
  genre: ["Fantasy", "Adventure"],
  cover: "images/moribito.webp",
  description: "A spear-wielding bodyguard protects a prince with a mysterious fate."
},
{
  title: "Eureka Seven",
  tier: "a",
  year: 2005,
  decade: "2000s",
  genre: ["Mecha", "Romance"],
  cover: "images/eureka_seven.webp",
  description: "Coming-of-age story mixed with mecha battles and rebellion."
},
{
  title: "Planetes",
  tier: "a",
  year: 2003,
  decade: "2000s",
  genre: ["Sci-Fi", "Drama"],
  cover: "images/planetes.webp",
  description: "Realistic space story about debris collectors."
},
{
  title: "Bartender",
  tier: "b",
  year: 2006,
  decade: "2000s",
  genre: ["Slice of Life", "Drama"],
  cover: "images/bartender.webp",
  description: "A bartender helps people through their problems one drink at a time."
},
{
  title: "Aria the Animation",
  tier: "a",
  year: 2005,
  decade: "2000s",
  genre: ["Slice of Life", "Fantasy"],
  cover: "images/aria.webp",
  description: "Relaxing gondola life on a terraformed Mars."
},
{
  title: "Gankutsuou",
  tier: "a",
  year: 2004,
  decade: "2000s",
  genre: ["Drama", "Sci-Fi"],
  cover: "images/gankutsuou.webp",
  description: "Stylized retelling of The Count of Monte Cristo."
},
{
  title: "Aoi Bungaku Series",
  tier: "b",
  year: 2009,
  decade: "2000s",
  genre: ["Drama", "Psychological"],
  cover: "images/aoi_bungaku.webp",
  description: "Adaptations of classic Japanese literature."
},
{
  title: "Ping Pong Club",
  tier: "c",
  year: 1995,
  decade: "1990s",
  genre: ["Comedy", "Ecchi"],
  cover: "images/ping_pong_club.webp",
  description: "Crude, chaotic comedy centered around a ping pong club."
}
];

