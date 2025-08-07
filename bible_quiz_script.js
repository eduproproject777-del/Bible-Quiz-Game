// Bible Quiz Game JavaScript
let currentStory = '';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let answered = false;
let currentPage = 0;
let storyPages = [];

// Bible Story Questions Database
const bibleStories = {
    noah: {
        title: "Noah's Ark",
        icon: "fas fa-rainbow",
        storyText: [
            "Long ago, there was a man named Noah who loved God very much. Noah was different from other people because he always tried to do what was right and good. God saw that Noah was a righteous man and decided to tell him something very important.",
            "God told Noah that the world had become very wicked. People were doing bad things and not following God's ways. God was sad about this and decided to send a great flood to clean the earth. But God wanted to save Noah and his family because they were good people.",
            "God gave Noah very specific instructions. He told Noah to build a huge boat called an ark. This ark would be 450 feet long, 75 feet wide, and 45 feet tall - that's as big as a football field! God told Noah exactly how to build it with three decks and rooms for all the animals.",
            "Noah worked very hard building the ark. It took him and his three sons - Shem, Ham, and Japheth - many years to complete it. People probably laughed at Noah for building such a big boat when there was no water nearby, but Noah trusted God and kept working.",
            "When the ark was finished, God told Noah to gather two of every kind of animal - a male and a female. This included lions, elephants, giraffes, birds, fish, and even tiny insects! God also told Noah to gather food for all the animals and his family.",
            "Noah's family went into the ark: Noah, his wife, their three sons, and their wives. That's eight people total. Then all the animals came in pairs. The Bible says that God brought the animals to Noah, and they went into the ark peacefully.",
            "After everyone was safely inside, God closed the door of the ark. Then the rain began to fall. It rained for 40 days and 40 nights without stopping! The water rose higher and higher until it covered the highest mountains. The whole world was covered with water!",
            "The ark floated on the water for 150 days. Inside, Noah and his family took care of all the animals. They fed them, cleaned their spaces, and made sure they were comfortable. It must have been quite a job taking care of so many animals!",
            "Finally, the rain stopped and the water began to go down. Noah sent out a dove to see if it could find dry land. The first time, the dove came back because there was nowhere to land. After seven days, Noah sent the dove again, and this time it came back with an olive leaf!",
            "After waiting another week, Noah sent the dove out again, and this time it didn't come back. This meant it had found a place to live on dry land. When Noah was 601 years old, God told him it was safe to leave the ark. Noah, his family, and all the animals came out onto the dry ground.",
            "Noah was so thankful to God for keeping them safe that he built an altar and offered sacrifices to God. God was pleased and made a beautiful promise to Noah. He said He would never again destroy the earth with a flood, and He gave Noah a sign of this promise - a beautiful rainbow in the sky!",
            "Every time we see a rainbow, we can remember God's promise to Noah and to us. The rainbow reminds us that God keeps His promises and that He loves us very much. Noah lived for 350 more years after the flood, and his family grew to become many nations."
        ],
        questions: [
            {
                question: "What did God ask Noah to build?",
                options: ["A house", "An ark (big boat)", "A tower", "A temple"],
                correct: 1,
                explanation: "God asked Noah to build an ark - a huge boat that was 450 feet long, 75 feet wide, and 45 feet tall!"
            },
            {
                question: "How many people were saved in the ark?",
                options: ["4 people", "6 people", "8 people", "12 people"],
                correct: 2,
                explanation: "Noah, his wife, their three sons (Shem, Ham, Japheth), and their wives - 8 people total were saved!"
            },
            {
                question: "How many days and nights did it rain during the flood?",
                options: ["7 days", "40 days and nights", "100 days", "1 year"],
                correct: 1,
                explanation: "It rained for 40 days and 40 nights without stopping! That's a lot of rain!"
            },
            {
                question: "What animals did Noah take on the ark?",
                options: ["Only dogs and cats", "Two of every kind", "Only farm animals", "Only birds"],
                correct: 1,
                explanation: "Noah took two of every kind of animal - male and female - to repopulate the earth!"
            },
            {
                question: "How long did the ark float on the water?",
                options: ["40 days", "100 days", "150 days", "200 days"],
                correct: 2,
                explanation: "The ark floated on the water for 150 days before the water began to go down!"
            },
            {
                question: "What did Noah send out to find dry land?",
                options: ["A raven", "A dove", "A pigeon", "An eagle"],
                correct: 1,
                explanation: "Noah sent out a dove to see if it could find dry land. The dove came back with an olive leaf!"
            },
            {
                question: "What did God send as a sign of His promise after the flood?",
                options: ["A star", "A rainbow", "A dove", "A cloud"],
                correct: 1,
                explanation: "God sent a beautiful rainbow as a sign that He would never flood the earth again!"
            },
            {
                question: "What did Noah do when he got off the ark?",
                options: ["He went to sleep", "He built an altar", "He went fishing", "He planted a garden"],
                correct: 1,
                explanation: "Noah built an altar and offered sacrifices to thank God for keeping them safe!"
            },
            {
                question: "How old was Noah when he left the ark?",
                options: ["500 years old", "601 years old", "650 years old", "700 years old"],
                correct: 1,
                explanation: "Noah was 601 years old when God told him it was safe to leave the ark!"
            },
            {
                question: "What does the rainbow remind us of?",
                options: ["Rain is coming", "God's promise", "The flood", "Animals"],
                correct: 1,
                explanation: "The rainbow reminds us of God's promise to never flood the whole earth again!"
            }
        ]
    },
    david: {
        title: "David and Goliath",
        icon: "fas fa-music",
        storyText: [
            "David was a young shepherd boy who lived in Bethlehem. He was the youngest of eight brothers and spent his days taking care of his father's sheep. David loved God very much and often played his harp and sang songs of praise to God while watching the sheep.",
            "One day, David's father Jesse asked him to take food to his three oldest brothers who were soldiers in King Saul's army. The Israelites were at war with the Philistines, and the two armies were camped on opposite hills, ready for battle.",
            "When David arrived at the camp, he heard a loud voice shouting challenges. It was Goliath, a giant Philistine warrior who was over 9 feet tall! Goliath wore heavy armor and carried a huge spear. He was terrifying to look at.",
            "Goliath was challenging the Israelites to send someone to fight him one-on-one. He shouted, 'Send me a man to fight! If he wins, we will be your servants. If I win, you will be our servants!' Goliath did this every morning and evening for 40 days.",
            "All the Israelite soldiers were afraid of Goliath. Even King Saul, who was very tall himself, was scared. No one wanted to fight the giant. But David was different. He trusted God and wasn't afraid.",
            "David asked the soldiers, 'Who is this Philistine that he should defy the armies of the living God?' David's older brother Eliab got angry and said, 'Why did you come here? You should be taking care of the sheep!' But David insisted on fighting Goliath.",
            "When King Saul heard about David's courage, he called for him. Saul said, 'You cannot fight Goliath. You are just a boy, and he has been a warrior since his youth.' But David told Saul about how God had helped him protect his sheep from lions and bears.",
            "David said, 'The Lord who delivered me from the paw of the lion and the paw of the bear will deliver me from the hand of this Philistine.' Saul was impressed by David's faith and gave him permission to fight, but he tried to give David his own armor.",
            "David tried on Saul's armor, but it was too big and heavy for him. He took it off and said, 'I cannot go in these because I am not used to them.' Instead, David took his shepherd's staff, his sling, and five smooth stones from a stream.",
            "As David walked toward Goliath, the giant laughed and made fun of him. Goliath said, 'Am I a dog that you come at me with sticks?' He cursed David and said, 'Come here, and I'll give your flesh to the birds and wild animals!'",
            "But David was not afraid. He said to Goliath, 'You come against me with sword and spear and javelin, but I come against you in the name of the Lord Almighty, the God of the armies of Israel, whom you have defied.'",
            "David ran toward Goliath, took a stone from his bag, put it in his sling, and swung it around. The stone flew through the air and hit Goliath right in the forehead! The giant fell face down on the ground.",
            "David ran to Goliath, took the giant's own sword, and cut off his head. When the Philistines saw that their champion was dead, they turned and ran away! The Israelite army chased them and won a great victory.",
            "King Saul was amazed and asked his commander, 'Whose son is this young man?' The commander didn't know, so Saul sent for David. David told the king that he was the son of Jesse from Bethlehem.",
            "From that day on, David became famous throughout Israel. People sang songs about him: 'Saul has slain his thousands, and David his tens of thousands.' David's victory showed that with God's help, even a young boy can do great things!"
        ],
        questions: [
            {
                question: "What was David's job before fighting Goliath?",
                options: ["A soldier", "A shepherd", "A farmer", "A blacksmith"],
                correct: 1,
                explanation: "David was a shepherd who took care of his father's sheep in Bethlehem!"
            },
            {
                question: "How tall was Goliath the giant?",
                options: ["6 feet tall", "9 feet tall", "12 feet tall", "15 feet tall"],
                correct: 1,
                explanation: "Goliath was over 9 feet tall - that's as tall as a basketball hoop!"
            },
            {
                question: "What weapon did David use to fight Goliath?",
                options: ["A sword", "A spear", "A sling and stones", "A bow and arrow"],
                correct: 2,
                explanation: "David used a sling and five smooth stones - simple tools that God blessed!"
            },
            {
                question: "How many stones did David take with him?",
                options: ["3 stones", "5 stones", "7 stones", "10 stones"],
                correct: 1,
                explanation: "David took five smooth stones from a stream, though he only needed one!"
            },
            {
                question: "Where did David hit Goliath with the stone?",
                options: ["His chest", "His forehead", "His arm", "His leg"],
                correct: 1,
                explanation: "The stone hit Goliath right in the forehead and he fell down!"
            },
            {
                question: "How many days did Goliath challenge the Israelites?",
                options: ["7 days", "20 days", "40 days", "100 days"],
                correct: 2,
                explanation: "Goliath challenged the Israelites every morning and evening for 40 days!"
            },
            {
                question: "Why did David think he could beat Goliath?",
                options: ["He was strong", "He had armor", "God was with him", "He was fast"],
                correct: 2,
                explanation: "David trusted that God was with him and would help him win!"
            },
            {
                question: "What did David do with Goliath's sword?",
                options: ["He kept it", "He cut off Goliath's head", "He gave it to Saul", "He threw it away"],
                correct: 1,
                explanation: "David used Goliath's own sword to cut off the giant's head!"
            },
            {
                question: "What happened when the Philistines saw Goliath was dead?",
                options: ["They attacked", "They ran away", "They surrendered", "They fought harder"],
                correct: 1,
                explanation: "When the Philistines saw their champion was dead, they turned and ran away!"
            },
            {
                question: "What did people sing about David after his victory?",
                options: ["He was brave", "He was strong", "Saul has slain thousands, David tens of thousands", "He was young"],
                correct: 2,
                explanation: "People sang: 'Saul has slain his thousands, and David his tens of thousands!'"
            }
        ]
    },
    moses: {
        title: "Moses and the Red Sea",
        icon: "fas fa-water",
        storyText: [
            "Moses was born in Egypt during a very difficult time. The Israelites, God's chosen people, were slaves in Egypt, and the Egyptian king (Pharaoh) was very cruel to them. When Moses was a baby, Pharaoh ordered that all Israelite baby boys should be killed.",
            "Moses' mother was very brave and clever. She put baby Moses in a basket made of reeds and placed it in the Nile River, hoping someone would find him and save his life. Moses' sister Miriam watched from a distance to see what would happen.",
            "God had a special plan for Moses. Pharaoh's daughter came to the river to bathe and found the basket with baby Moses inside. She felt sorry for him and decided to keep him as her own son. Miriam came forward and offered to find a nurse for the baby - which was actually Moses' own mother!",
            "Moses grew up in Pharaoh's palace as an Egyptian prince. He had the best education and lived in luxury. But Moses never forgot that he was an Israelite. One day, when he was grown up, he saw an Egyptian beating an Israelite slave.",
            "Moses was so angry that he killed the Egyptian and buried him in the sand. The next day, he saw two Israelites fighting and tried to stop them. One of them said, 'Are you going to kill me like you killed the Egyptian?' Moses realized his secret was out and ran away to the desert.",
            "Moses went to live in the land of Midian, where he married a woman named Zipporah and became a shepherd. He lived there for 40 years, taking care of his father-in-law's sheep. One day, while tending the sheep, Moses saw something amazing.",
            "Moses saw a bush that was on fire, but it wasn't burning up! This was very strange. When he went closer to look, God spoke to him from the burning bush. God said, 'Moses, take off your sandals, for you are standing on holy ground.'",
            "God told Moses that He had seen the suffering of the Israelites in Egypt and wanted to rescue them. God said, 'I am sending you to Pharaoh to bring my people out of Egypt.' Moses was afraid and made many excuses, but God promised to be with him.",
            "Moses went back to Egypt with his brother Aaron. They went to Pharaoh and said, 'The Lord says: Let my people go!' But Pharaoh was stubborn and refused. Instead, he made the Israelites work even harder, making them build buildings without straw.",
            "God sent ten terrible plagues on Egypt to show Pharaoh His power. The water turned to blood, frogs covered the land, there were swarms of insects, and many other disasters. But Pharaoh's heart was hard, and he still wouldn't let the Israelites go.",
            "The final plague was the worst. God said that the firstborn son of every Egyptian family would die. But God told the Israelites to put lamb's blood on their doorposts, and the angel of death would pass over their houses. This is why it's called Passover.",
            "After this terrible plague, Pharaoh finally let the Israelites go. But as soon as they left, he changed his mind and sent his army to chase them. The Israelites were trapped between the Red Sea and the Egyptian army. They were very afraid.",
            "Moses told the people, 'Do not be afraid. Stand firm and you will see the deliverance the Lord will bring you today.' Then God told Moses to raise his staff over the sea. God sent a strong wind that parted the waters of the Red Sea!",
            "The Israelites walked through the sea on dry ground, with walls of water on both sides! It was like walking through a giant hallway made of water. When all the Israelites were safely across, God told Moses to stretch out his hand again.",
            "The waters came back together, drowning the entire Egyptian army that was chasing them. The Israelites were completely safe! They sang songs of praise to God, led by Moses' sister Miriam, who played a tambourine and danced.",
            "This amazing miracle showed God's great power and love for His people. The Israelites were finally free from slavery in Egypt and on their way to the Promised Land that God had prepared for them."
        ],
        questions: [
            {
                question: "What did Moses' mother do to save his life?",
                options: ["She ran away", "She hid him", "She put him in a basket in the river", "She gave him away"],
                correct: 2,
                explanation: "Moses' mother put him in a basket made of reeds and placed it in the Nile River!"
            },
            {
                question: "Who found baby Moses in the river?",
                options: ["His mother", "Pharaoh's daughter", "His sister", "A shepherd"],
                correct: 1,
                explanation: "Pharaoh's daughter found the basket with baby Moses and decided to keep him!"
            },
            {
                question: "Where did Moses live for 40 years after leaving Egypt?",
                options: ["Canaan", "Midian", "Babylon", "Jerusalem"],
                correct: 1,
                explanation: "Moses lived in the land of Midian, where he became a shepherd!"
            },
            {
                question: "What did Moses see that was on fire but not burning up?",
                options: ["A tree", "A bush", "A house", "A mountain"],
                correct: 1,
                explanation: "Moses saw a burning bush that wasn't being consumed by the fire!"
            },
            {
                question: "What did God tell Moses to take off at the burning bush?",
                options: ["His hat", "His coat", "His sandals", "His staff"],
                correct: 2,
                explanation: "God said, 'Take off your sandals, for you are standing on holy ground.'"
            },
            {
                question: "How many plagues did God send on Egypt?",
                options: ["5 plagues", "7 plagues", "10 plagues", "12 plagues"],
                correct: 2,
                explanation: "God sent ten terrible plagues on Egypt to show Pharaoh His power!"
            },
            {
                question: "What did God use to part the Red Sea?",
                options: ["A strong wind", "A big machine", "Magic", "A bridge"],
                correct: 0,
                explanation: "God sent a strong wind that parted the waters of the Red Sea!"
            },
            {
                question: "What happened to the Egyptian army?",
                options: ["They turned back", "They got lost", "The sea closed on them", "They surrendered"],
                correct: 2,
                explanation: "The waters came back together, drowning the entire Egyptian army!"
            },
            {
                question: "Who led the celebration after crossing the Red Sea?",
                options: ["Moses", "Aaron", "Miriam", "Joshua"],
                correct: 2,
                explanation: "Miriam, Moses' sister, played a tambourine and danced to celebrate!"
            },
            {
                question: "What did the Israelites do when they were trapped at the Red Sea?",
                options: ["They fought", "They prayed", "They were afraid", "They surrendered"],
                correct: 2,
                explanation: "The Israelites were very afraid when trapped between the sea and Egyptian army!"
            }
        ]
    },
    daniel: {
        title: "Daniel in the Lion's Den",
        icon: "fas fa-lion",
        storyText: [
            "Daniel was a young man from the royal family of Judah. When he was a teenager, the Babylonian king Nebuchadnezzar conquered Jerusalem and took many Israelites as captives to Babylon. Daniel was one of these captives.",
            "Even though Daniel was far from home and in a foreign land, he never forgot his faith in God. He and his three friends - Shadrach, Meshach, and Abednego - decided they would stay faithful to God no matter what happened.",
            "King Nebuchadnezzar wanted to train some of the young Israelite captives to serve in his palace. He chose Daniel and his friends because they were handsome, intelligent, and well-educated. They were given the best food and education.",
            "But there was a problem. The king's food included meat that had been offered to idols, which was against God's law. Daniel asked if he and his friends could eat only vegetables and water instead. The palace official was worried they would become weak.",
            "Daniel suggested a test: 'Give us vegetables and water for ten days, then compare us to the other young men.' After ten days, Daniel and his friends looked healthier and stronger than all the others! God blessed them for their obedience.",
            "God gave Daniel a special gift - the ability to understand dreams and visions. When King Nebuchadnezzar had a troubling dream, none of his wise men could interpret it. But Daniel, with God's help, was able to tell the king what his dream meant.",
            "The king was so impressed that he made Daniel the ruler over all the wise men in Babylon. Daniel's three friends also received important positions in the government. They all served God faithfully in their new roles.",
            "Years later, a new king named Darius came to power. He liked Daniel very much and planned to put him in charge of the whole kingdom. This made the other officials jealous, and they looked for a way to get Daniel in trouble.",
            "The officials knew that Daniel prayed to God three times every day. They tricked King Darius into making a law that said no one could pray to anyone but the king for thirty days. Anyone who broke this law would be thrown into a den of lions.",
            "Daniel heard about the new law, but he didn't change his habits. He went home, opened his windows facing Jerusalem, and prayed to God three times a day, just as he always had. The officials were watching and caught him praying.",
            "The officials went to King Darius and said, 'Daniel, one of the exiles from Judah, pays no attention to you, Your Majesty, or to the decree you put in writing. He still prays three times a day.' The king was very upset because he liked Daniel.",
            "King Darius tried to find a way to save Daniel, but the law couldn't be changed. Reluctantly, the king ordered Daniel to be thrown into the lion's den. Before Daniel was thrown in, the king said, 'May your God, whom you serve continually, rescue you!'",
            "A stone was placed over the mouth of the den, and the king sealed it with his own signet ring. That night, King Darius couldn't sleep. He was so worried about Daniel that he didn't eat and refused to be entertained.",
            "At the first light of dawn, the king hurried to the lion's den. When he came near, he called out in an anguished voice, 'Daniel, servant of the living God, has your God, whom you serve continually, been able to rescue you from the lions?'",
            "To the king's amazement, Daniel answered, 'May the king live forever! My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight. Nor have I ever done any wrong before you, Your Majesty.'",
            "The king was overjoyed and ordered that Daniel be lifted from the den. Not a scratch was found on him, because he had trusted in his God. Then the king ordered that the men who had falsely accused Daniel be thrown into the lion's den along with their families.",
            "King Darius wrote a letter to all the people in his kingdom, saying, 'I decree that everyone throughout my kingdom should fear and reverence the God of Daniel. For he is the living God and he endures forever; his kingdom will not be destroyed, his dominion will never end.'",
            "Daniel continued to serve God faithfully and lived a long life. He received many visions from God about the future, and he remained a trusted advisor to several kings. His story shows that God protects those who trust in Him."
        ],
        questions: [
            {
                question: "Where was Daniel taken as a captive?",
                options: ["Egypt", "Babylon", "Assyria", "Persia"],
                correct: 1,
                explanation: "Daniel was taken as a captive to Babylon when Jerusalem was conquered!"
            },
            {
                question: "What did Daniel and his friends eat instead of the king's food?",
                options: ["Bread and water", "Vegetables and water", "Fruit and milk", "Fish and rice"],
                correct: 1,
                explanation: "Daniel and his friends ate only vegetables and water to stay faithful to God!"
            },
            {
                question: "How many times a day did Daniel pray?",
                options: ["Once", "Twice", "Three times", "Four times"],
                correct: 2,
                explanation: "Daniel prayed to God three times every day, facing Jerusalem!"
            },
            {
                question: "Why was Daniel thrown into the lion's den?",
                options: ["He was bad", "He prayed to God", "He stole something", "He was lost"],
                correct: 1,
                explanation: "Daniel was thrown in because he prayed to God instead of the king!"
            },
            {
                question: "How many lions were in the den?",
                options: ["1 lion", "3 lions", "Many lions", "No lions"],
                correct: 2,
                explanation: "There were many hungry lions in the den!"
            },
            {
                question: "What did Daniel do in the lion's den?",
                options: ["He fought the lions", "He slept", "He prayed", "He ran around"],
                correct: 1,
                explanation: "Daniel slept peacefully because God protected him!"
            },
            {
                question: "How long was Daniel in the lion's den?",
                options: ["One hour", "One day", "One night", "One week"],
                correct: 2,
                explanation: "Daniel spent one whole night in the lion's den!"
            },
            {
                question: "What happened to Daniel the next morning?",
                options: ["He was hurt", "He was safe", "He was missing", "He was tired"],
                correct: 1,
                explanation: "Daniel was completely safe - not even a scratch! God's angels protected him!"
            },
            {
                question: "What did King Darius do after Daniel was saved?",
                options: ["He punished Daniel", "He wrote a letter praising God", "He ignored Daniel", "He sent Daniel away"],
                correct: 1,
                explanation: "King Darius wrote a letter to all people praising the God of Daniel!"
            },
            {
                question: "What special gift did God give Daniel?",
                options: ["Strength", "Speed", "Understanding dreams", "Magic powers"],
                correct: 2,
                explanation: "God gave Daniel the special gift of understanding dreams and visions!"
            }
        ]
    },
    jesus: {
        title: "Jesus' Miracles",
        icon: "fas fa-heart",
        storyText: [
            "Jesus was born in Bethlehem in a stable because there was no room at the inn. His mother was Mary, and his earthly father was Joseph. Angels announced His birth to shepherds, and wise men from the east came to worship Him, bringing gifts of gold, frankincense, and myrrh.",
            "Jesus grew up in Nazareth with His family. He learned to be a carpenter like His father Joseph. When Jesus was twelve years old, He went to Jerusalem with His parents for the Passover festival. When they were returning home, they realized Jesus was missing.",
            "Mary and Joseph found Jesus in the temple, talking with the religious teachers. Everyone was amazed at His understanding and answers. Jesus said to His parents, 'Didn't you know I had to be in my Father's house?' This showed that even as a child, Jesus knew He had a special mission.",
            "When Jesus was about thirty years old, He began His ministry. He was baptized by John the Baptist in the Jordan River. When Jesus came up out of the water, the heavens opened, and the Holy Spirit came down like a dove. A voice from heaven said, 'This is my Son, whom I love; with Him I am well pleased.'",
            "Jesus' first miracle happened at a wedding in Cana. The wedding party ran out of wine, which would have been very embarrassing for the bride and groom. Jesus' mother Mary asked Him to help. Jesus told the servants to fill six large jars with water.",
            "When the servants poured the water, it had turned into the best wine anyone had ever tasted! This miracle showed Jesus' power and His care for people's happiness. The Bible says this was the first of many signs that revealed His glory.",
            "Jesus traveled throughout Galilee, teaching people about God's love and performing many miracles. He healed people who were sick, blind, deaf, and paralyzed. One day, a man with leprosy came to Jesus and said, 'Lord, if you are willing, you can make me clean.'",
            "Jesus reached out His hand and touched the man, saying, 'I am willing. Be clean!' Immediately the man's leprosy was gone. Jesus told him to go show himself to the priest and offer the sacrifices required by the law of Moses.",
            "Another time, Jesus was teaching in a house that was so crowded that four men couldn't get their paralyzed friend to Jesus. They climbed up on the roof, made a hole, and lowered their friend down to Jesus. Jesus saw their faith and said to the paralyzed man, 'Your sins are forgiven.'",
            "Some religious leaders were upset that Jesus said He could forgive sins. Jesus asked them, 'Which is easier: to say 'Your sins are forgiven,' or to say 'Get up and walk'?'. Then He said to the paralyzed man, 'Get up, take your mat and go home.' The man immediately got up and walked!",
            "One of Jesus' most famous miracles was feeding 5,000 people with just five loaves of bread and two fish. A large crowd had followed Jesus to hear Him teach. When it was getting late, the disciples wanted to send the people away to find food.",
            "Jesus said, 'You give them something to eat.' The disciples found a boy with five small loaves and two fish. Jesus took the food, gave thanks to God, and broke it into pieces. The disciples passed it out to everyone, and everyone had enough to eat!",
            "After everyone was full, the disciples collected twelve baskets of leftover pieces. This miracle showed Jesus' power and His care for people's needs. The people wanted to make Jesus king right then, but He knew that wasn't God's plan.",
            "Another amazing miracle was when Jesus walked on water. After feeding the 5,000, Jesus sent His disciples ahead in a boat while He went to pray. During the night, a strong wind came up, and the disciples were struggling to row the boat.",
            "Jesus came walking on the water toward them. The disciples were terrified, thinking He was a ghost. Jesus said, 'Take courage! It is I. Don't be afraid.' Peter said, 'Lord, if it's you, tell me to come to you on the water.' Jesus said, 'Come.'",
            "Peter got out of the boat and walked on the water toward Jesus. But when he saw the wind, he was afraid and began to sink. He cried out, 'Lord, save me!' Jesus immediately reached out His hand and caught him, saying, 'You of little faith, why did you doubt?'",
            "Jesus also showed great love for children. People were bringing little children to Jesus for Him to place His hands on them and pray. The disciples tried to send them away, but Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'",
            "Jesus placed His hands on the children and blessed them. This shows that Jesus loves children and wants them to come to Him. He said that we should have childlike faith - trusting God completely, just like children trust their parents.",
            "All of Jesus' miracles showed His power and His love for people. They proved that He was the Son of God, sent to save us from our sins. Jesus didn't just perform miracles to show off - He did them to help people and show God's love.",
            "The greatest miracle of all was when Jesus died on the cross for our sins and rose from the dead three days later. This miracle gives us hope of eternal life with God. Jesus' miracles show us that nothing is impossible with God!"
        ],
        questions: [
            {
                question: "Where was Jesus born?",
                options: ["Nazareth", "Bethlehem", "Jerusalem", "Jericho"],
                correct: 1,
                explanation: "Jesus was born in Bethlehem in a stable because there was no room at the inn!"
            },
            {
                question: "What was Jesus' first miracle?",
                options: ["Healing a blind man", "Walking on water", "Turning water into wine", "Feeding 5000 people"],
                correct: 2,
                explanation: "Jesus' first miracle was turning water into wine at a wedding in Cana!"
            },
            {
                question: "How many people did Jesus feed with just 5 loaves and 2 fish?",
                options: ["1000 people", "3000 people", "5000 people", "10000 people"],
                correct: 2,
                explanation: "Jesus fed 5000 people with just 5 loaves of bread and 2 fish!"
            },
            {
                question: "What did Jesus do to help the blind man see?",
                options: ["He gave him medicine", "He touched his eyes", "He prayed", "He used magic"],
                correct: 1,
                explanation: "Jesus touched the blind man's eyes and he could see!"
            },
            {
                question: "How did Jesus walk on water?",
                options: ["He wore special shoes", "He used a boat", "He had God's power", "He swam"],
                correct: 2,
                explanation: "Jesus walked on water because He had God's power!"
            },
            {
                question: "What did Jesus say about children?",
                options: ["They should be quiet", "The kingdom of heaven belongs to them", "They should work hard", "They should go away"],
                correct: 1,
                explanation: "Jesus said, 'Let the little children come to me, for the kingdom of heaven belongs to such as these.'"
            },
            {
                question: "What happened when Jesus was baptized?",
                options: ["Nothing", "The Holy Spirit came like a dove", "It rained", "He disappeared"],
                correct: 1,
                explanation: "The Holy Spirit came down like a dove and a voice from heaven spoke!"
            },
            {
                question: "What did Jesus do for the paralyzed man?",
                options: ["He ignored him", "He forgave his sins and healed him", "He gave him money", "He sent him away"],
                correct: 1,
                explanation: "Jesus forgave the man's sins and then healed him so he could walk!"
            },
            {
                question: "What did Jesus say to Peter when he was sinking in the water?",
                options: ["Swim harder", "You of little faith, why did you doubt?", "Goodbye", "Help yourself"],
                correct: 1,
                explanation: "Jesus said, 'You of little faith, why did you doubt?' and caught Peter!"
            },
            {
                question: "What is the greatest miracle Jesus performed?",
                options: ["Walking on water", "Rising from the dead", "Feeding 5000", "Healing the blind"],
                correct: 1,
                explanation: "The greatest miracle was when Jesus died for our sins and rose from the dead!"
            }
        ]
    },
    joseph: {
        title: "Joseph's Dreams",
        icon: "fas fa-star",
        storyText: [
            "Joseph was the eleventh son of Jacob, and he was his father's favorite. Jacob loved Joseph more than all his other sons because Joseph was born to him in his old age. Jacob made Joseph a beautiful coat of many colors, which made his brothers very jealous.",
            "Joseph was a good boy who always tried to do what was right. He helped his father take care of the sheep and was honest about everything. But his brothers didn't like him because their father showed him special favor.",
            "One night, Joseph had a dream. He dreamed that he and his brothers were binding sheaves of grain in the field. Suddenly, his sheaf stood up, and his brothers' sheaves gathered around it and bowed down to his sheaf.",
            "Joseph told his brothers about the dream, and they became even more angry with him. They said, 'Do you intend to reign over us? Will you actually rule us?' The brothers hated Joseph even more because of his dreams and what he said.",
            "Joseph had another dream. This time, he dreamed that the sun, moon, and eleven stars were bowing down to him. He told this dream to his father and brothers. His father scolded him, saying, 'What is this dream you had? Will your mother and I and your brothers actually come and bow down to the ground before you?'",
            "Joseph's brothers were so jealous that they plotted to kill him. One day, when they were tending the sheep far from home, they saw Joseph coming toward them. They said to each other, 'Here comes that dreamer! Come now, let's kill him and throw him into one of these cisterns.'",
            "But Reuben, the oldest brother, didn't want to kill Joseph. He said, 'Let's not take his life. Don't shed any blood. Throw him into this cistern here in the wilderness, but don't lay a hand on him.' Reuben planned to rescue Joseph later.",
            "When Joseph arrived, his brothers stripped him of his beautiful coat and threw him into an empty cistern (a deep well). As they sat down to eat, they saw a caravan of Ishmaelite traders coming from Gilead on their way to Egypt.",
            "Judah, another brother, said, 'What will we gain if we kill our brother and cover up his blood? Come, let's sell him to the Ishmaelites and not lay our hands on him; after all, he is our brother, our own flesh and blood.'",
            "The brothers agreed and sold Joseph to the Ishmaelites for twenty shekels of silver. The traders took Joseph to Egypt and sold him to Potiphar, one of Pharaoh's officials, the captain of the guard.",
            "Even though Joseph was a slave in a foreign land, God was with him. Potiphar noticed that Joseph was successful in everything he did, so he put Joseph in charge of his entire household. Joseph was trustworthy and hardworking.",
            "But trouble came when Potiphar's wife tried to tempt Joseph to do wrong. Joseph refused, saying, 'How then could I do such a wicked thing and sin against God?' Potiphar's wife was angry and falsely accused Joseph of trying to hurt her.",
            "Potiphar believed his wife and put Joseph in prison. But even in prison, God was with Joseph. The prison warden put Joseph in charge of all the prisoners, and Joseph was successful in everything he did.",
            "While in prison, Joseph met two of Pharaoh's officials who had been thrown into prison. They both had strange dreams, and Joseph, with God's help, was able to interpret their dreams. He told one man he would be restored to his position and the other would be executed.",
            "Two years later, Pharaoh himself had troubling dreams. He dreamed of seven fat cows being eaten by seven thin cows, and seven healthy heads of grain being eaten by seven thin heads of grain. None of Pharaoh's wise men could interpret the dreams.",
            "The official who had been restored remembered Joseph and told Pharaoh about him. Pharaoh sent for Joseph, who interpreted the dreams: 'Seven years of great abundance are coming throughout the land of Egypt, but seven years of famine will follow them.'",
            "Joseph also gave Pharaoh advice: 'Let Pharaoh appoint commissioners over the land to take a fifth of the harvest during the seven years of abundance. They should collect all the food of these good years and store it for the famine.'",
            "Pharaoh was so impressed with Joseph's wisdom that he put him in charge of all Egypt, second only to Pharaoh himself. Joseph was given a new name, Zaphenath-Paneah, and was married to Asenath, the daughter of a priest.",
            "During the seven years of abundance, Joseph stored up huge amounts of grain. When the famine came, it affected not only Egypt but also the surrounding countries, including Canaan where Joseph's family lived.",
            "Joseph's brothers came to Egypt to buy grain. They didn't recognize Joseph, but he recognized them. Joseph tested his brothers to see if they had changed. He accused them of being spies and demanded that they bring their youngest brother Benjamin.",
            "When the brothers returned with Benjamin, Joseph was overcome with emotion. He revealed his identity to them, saying, 'I am Joseph! Is my father still living?' The brothers were terrified, but Joseph said, 'Don't be afraid. You intended to harm me, but God intended it for good.'",
            "Joseph forgave his brothers and invited his entire family to come live in Egypt. Pharaoh was happy to welcome them and gave them the best land in Egypt. Joseph's dreams had come true - his brothers and even his father bowed down to him.",
            "Joseph lived to be 110 years old and saw his great-grandchildren. Before he died, he told his family, 'God will surely come to your aid and take you up out of this land to the land he promised on oath to Abraham, Isaac and Jacob.'",
            "Joseph's story shows us that God can use even bad situations for good. What Joseph's brothers meant for harm, God used to save many lives. Joseph remained faithful to God throughout his life, and God blessed him abundantly."
        ],
        questions: [
            {
                question: "What did Joseph's father give him that made his brothers jealous?",
                options: ["A sword", "A coat of many colors", "A horse", "A ring"],
                correct: 1,
                explanation: "Jacob gave Joseph a beautiful coat of many colors, which made his brothers jealous!"
            },
            {
                question: "What did Joseph dream about that made his brothers angry?",
                options: ["Stars bowing to him", "Sheaves of grain bowing", "Animals bowing", "People bowing"],
                correct: 1,
                explanation: "Joseph dreamed that his brothers' sheaves of grain bowed to his sheaf!"
            },
            {
                question: "What did Joseph's brothers do to him?",
                options: ["They hugged him", "They sold him", "They gave him gifts", "They played with him"],
                correct: 1,
                explanation: "Joseph's brothers were jealous and sold him to traders for twenty shekels of silver!"
            },
            {
                question: "Where did Joseph end up working?",
                options: ["In a palace", "In Egypt", "In a farm", "In a shop"],
                correct: 1,
                explanation: "Joseph was taken to Egypt and sold to Potiphar, one of Pharaoh's officials!"
            },
            {
                question: "What happened when Joseph refused Potiphar's wife?",
                options: ["He was praised", "He was promoted", "He was put in prison", "He was given a reward"],
                correct: 2,
                explanation: "Potiphar's wife falsely accused Joseph, and he was put in prison!"
            },
            {
                question: "What special gift did God give Joseph?",
                options: ["Strength", "Speed", "Understanding dreams", "Magic powers"],
                correct: 2,
                explanation: "God gave Joseph the special gift of understanding dreams!"
            },
            {
                question: "What did Pharaoh dream about?",
                options: ["Cows and grain", "Lions and sheep", "Birds and fish", "Mountains and rivers"],
                correct: 0,
                explanation: "Pharaoh dreamed of seven fat cows being eaten by seven thin cows, and grain!"
            },
            {
                question: "What did Joseph become in Egypt?",
                options: ["A farmer", "A soldier", "A governor", "A teacher"],
                correct: 2,
                explanation: "Joseph became governor of all Egypt, second only to Pharaoh himself!"
            },
            {
                question: "What did Joseph do when his brothers came to Egypt?",
                options: ["He ignored them", "He punished them", "He forgave them", "He ran away"],
                correct: 2,
                explanation: "Joseph forgave his brothers and invited his family to live in Egypt!"
            },
            {
                question: "How old did Joseph live to be?",
                options: ["80 years old", "100 years old", "110 years old", "120 years old"],
                correct: 2,
                explanation: "Joseph lived to be 110 years old and saw his great-grandchildren!"
            }
        ]
    }
};

// Book-like page transition system
function showStory(storyKey) {
    currentStory = storyKey;
    storyPages = bibleStories[storyKey].storyText;
    currentPage = 0;
    
    document.getElementById('storyModalTitle').textContent = bibleStories[storyKey].title;
    showStoryPage();
    
    const modal = new bootstrap.Modal(document.getElementById('storyModal'));
    modal.show();
}

function showStoryPage() {
    const storyBody = document.getElementById('storyModalBody');
    const pageNumber = currentPage + 1;
    const totalPages = storyPages.length;
    
    storyBody.innerHTML = `
        <div class="story-page">
            <div class="page-header">
                <span class="page-number">Page ${pageNumber} of ${totalPages}</span>
            </div>
            <div class="story-content">
                <p>${storyPages[currentPage]}</p>
            </div>
            <div class="page-navigation">
                ${currentPage > 0 ? '<button class="btn btn-secondary" onclick="previousPage()">Previous Page</button>' : ''}
                ${currentPage < storyPages.length - 1 ? '<button class="btn btn-primary" onclick="nextPage()">Next Page</button>' : ''}
                ${currentPage === storyPages.length - 1 ? '<button class="btn btn-success" onclick="startQuizFromStory()">Start Quiz</button>' : ''}
            </div>
        </div>
    `;
}

function nextPage() {
    if (currentPage < storyPages.length - 1) {
        currentPage++;
        showStoryPage();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showStoryPage();
    }
}

function startQuizFromStory() {
    selectStory(currentStory);
    const modal = bootstrap.Modal.getInstance(document.getElementById('storyModal'));
    modal.hide();
}

// Game Functions
function startQuiz() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('storySelection').style.display = 'block';
}

function selectStory(storyKey) {
    currentStory = storyKey;
    questions = bibleStories[storyKey].questions;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    
    document.getElementById('storySelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    
    questionContainer.innerHTML = `
        <h3 class="mb-4">
            <i class="${bibleStories[currentStory].icon} me-2"></i>
            Question ${currentQuestionIndex + 1} of ${questions.length}
        </h3>
        <h4 class="mb-4">${question.question}</h4>
        <div class="row">
            ${question.options.map((option, index) => `
                <div class="col-md-6 mb-3">
                    <button class="btn option-btn w-100" onclick="selectAnswer(${index})" id="option${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </button>
                </div>
            `).join('')}
        </div>
        <div id="explanation" class="mt-4" style="display: none;">
            <div class="alert alert-info">
                <i class="fas fa-lightbulb me-2"></i>
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        </div>
    `;
    
    updateScore();
    updateProgress();
}

function selectAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const question = questions[currentQuestionIndex];
    const correct = question.correct;
    
    // Disable all buttons
    for (let i = 0; i < question.options.length; i++) {
        const button = document.getElementById(`option${i}`);
        button.disabled = true;
        
        if (i === correct) {
            button.classList.add('correct');
        } else if (i === selectedIndex && i !== correct) {
            button.classList.add('incorrect');
        }
    }
    
    // Show explanation
    document.getElementById('explanation').style.display = 'block';
    
    // Update score
    if (selectedIndex === correct) {
        score++;
        showCorrectAnimation();
    } else {
        showIncorrectAnimation();
    }
    
    updateScore();
    
    // Show next button
    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
        document.getElementById('finishBtn').style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    answered = false;
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    loadQuestion();
}

function finishQuiz() {
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let icon = '';
    
    if (percentage >= 90) {
        message = 'Excellent! You know this story very well! 🌟';
        icon = 'fas fa-crown';
    } else if (percentage >= 70) {
        message = 'Great job! You did really well! 👍';
        icon = 'fas fa-star';
    } else if (percentage >= 50) {
        message = 'Good effort! Keep learning! 📚';
        icon = 'fas fa-thumbs-up';
    } else {
        message = 'Keep practicing! You\'ll get better! 💪';
        icon = 'fas fa-heart';
    }
    
    document.getElementById('resultContent').innerHTML = `
        <div class="mb-4">
            <i class="${icon}" style="font-size: 4rem; color: #ffd700;"></i>
        </div>
        <h3 class="mb-3">${message}</h3>
        <h4 class="mb-3">Your Score: ${score} out of ${questions.length}</h4>
        <h5 class="mb-4">That's ${percentage}% correct!</h5>
        <div class="progress mb-3" style="height: 25px;">
            <div class="progress-bar bg-success" style="width: ${percentage}%">${percentage}%</div>
        </div>
        <p class="mb-0">Story: <strong>${bibleStories[currentStory].title}</strong></p>
    `;
    
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
}

function updateScore() {
    document.getElementById('currentScore').textContent = score;
    document.getElementById('totalQuestions').textContent = questions.length;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function showCorrectAnimation() {
    // Add a simple animation for correct answers
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        questionContainer.style.animation = '';
    }, 500);
}

function showIncorrectAnimation() {
    // Add a simple animation for incorrect answers
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        questionContainer.style.animation = '';
    }, 500);
}

function playAgain() {
    const resultModal = bootstrap.Modal.getInstance(document.getElementById('resultModal'));
    resultModal.hide();
    selectStory(currentStory);
}

function chooseNewStory() {
    const resultModal = bootstrap.Modal.getInstance(document.getElementById('resultModal'));
    resultModal.hide();
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('storySelection').style.display = 'block';
}

function showLeaderboard() {
    alert('Leaderboard feature coming soon! 🏆');
}

function showHelp() {
    alert('How to play:\n\n1. Choose a Bible story you want to learn about\n2. Read each question carefully\n3. Click on the answer you think is correct\n4. See your score at the end!\n\nHave fun learning about Bible stories! 📖✨');
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
    // Add some fun sound effects (optional)
    console.log('Bible Quiz Game loaded! 🎮📖');
}); 