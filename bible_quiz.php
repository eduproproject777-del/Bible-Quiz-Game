<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Stories Quiz - Fun Learning for Kids!</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            min-height: 100vh;
            /* Add a soft background pattern */
            background-image: url('https://www.transparenttextures.com/patterns/diamond-upholstery.png');
        }
        
        .navbar {
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4) !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .navbar-brand {
            font-size: 1.8rem;
            font-weight: bold;
            color: white !important;
        }
        
        .main-container {
            background: rgba(255, 255, 255, 0.97);
            border-radius: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.18);
            margin: 30px auto;
            padding: 40px 30px 30px 30px;
        }
        
        .story-card {
            background: linear-gradient(135deg, #fffbe6 0%, #ffe0b2 100%);
            border: 3px solid #ffd700;
            border-radius: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            margin-bottom: 30px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            position: relative;
        }
        
        .story-card:hover {
            transform: scale(1.04) rotate(-2deg);
            box-shadow: 0 18px 40px rgba(0,0,0,0.18);
            z-index: 2;
        }
        
        .story-card .card-body {
            padding: 30px 20px 20px 20px;
        }
        
        .story-icon {
            font-size: 3.5rem;
            margin-bottom: 18px;
            color: #ff9800;
            text-shadow: 1px 2px 0 #fffbe6;
        }
        
        .card-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #8b4513;
        }
        
        .card-text {
            font-size: 1.1rem;
            color: #6d4c1b;
        }
        
        .btn-outline-primary {
            border-width: 2px;
            font-weight: bold;
        }
        
        .btn-primary {
            font-weight: bold;
        }
        
        .quiz-container {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            border-radius: 20px;
            padding: 30px;
            margin-top: 20px;
        }
        
        .question-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .option-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 15px 20px;
            margin: 10px 5px;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .option-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .option-btn.correct {
            background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
        }
        
        .option-btn.incorrect {
            background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
        }
        
        .score-display {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .progress-bar {
            height: 20px;
            border-radius: 10px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1.1rem;
            font-weight: bold;
        }
        
        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .welcome-section {
            text-align: center;
            padding: 60px 20px 40px 20px;
            animation: bounceIn 1.2s;
        }
        
        @keyframes bounceIn {
            0% { transform: scale(0.7); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            80% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        
        .welcome-title {
            font-size: 2.5rem;
            color: #8b4513;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .welcome-subtitle {
            font-size: 1.3rem;
            color: #666;
            margin-bottom: 30px;
        }
        
        .bible-icon {
            font-size: 5rem;
            color: #ff9800;
            margin-bottom: 25px;
            text-shadow: 2px 4px 0 #fffbe6;
        }
        
        .result-modal {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .modal-header {
            border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        
        .modal-footer {
            border-top: 2px solid rgba(255,255,255,0.2);
        }
        
        /* Book-like story styling */
        .story-page {
            background: linear-gradient(135deg, #fff9e6 0%, #f5f5dc 100%);
            border-radius: 18px;
            padding: 30px 20px 20px 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            position: relative;
            min-height: 320px;
            margin-bottom: 10px;
        }
        
        .page-header {
            text-align: center;
            margin-bottom: 18px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ffd700;
        }
        
        .page-number {
            font-size: 1.1rem;
            color: #8b4513;
            font-weight: bold;
        }
        
        .story-content {
            font-size: 1.25rem;
            line-height: 1.8;
            color: #333;
            margin-bottom: 20px;
            text-align: justify;
        }
        
        .page-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 18px;
        }
        
        .character-image {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            margin: 0 auto 18px auto;
            display: block;
            border: 4px solid #ffd700;
            box-shadow: 0 5px 15px rgba(0,0,0,0.12);
            background: #fffbe6;
            font-size: 4rem;
            text-align: center;
            line-height: 110px;
        }
        
        /* Page transition animations */
        .story-page {
            animation: pageFlip 0.5s ease-in-out;
        }
        
        @keyframes pageFlip {
            0% { transform: rotateY(0deg); opacity: 1; }
            50% { transform: rotateY(90deg); opacity: 0.5; }
            100% { transform: rotateY(0deg); opacity: 1; }
        }
        
        /* Book binding effect */
        .story-modal .modal-content {
            background: linear-gradient(135deg, #fffbe6 0%, #ffe0b2 100%);
            border: 4px solid #ffd700;
            border-radius: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.18);
        }
        
        .story-modal .modal-header {
            background: linear-gradient(135deg, #ffd700 0%, #fffbe6 100%);
            border-bottom: 3px solid #ffd700;
            border-radius: 30px 30px 0 0;
        }
        
        .story-modal .modal-title {
            color: #8b4513;
            font-size: 2rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        
        .story-modal .character-emoji {
            font-size: 3rem;
            margin-right: 15px;
        }
        
        .story-modal .modal-body {
            background: transparent;
            padding: 0 30px 30px 30px;
        }
        
        .story-modal .progress {
            height: 18px;
            margin-bottom: 18px;
            background: #ffe0b2;
            border-radius: 10px;
        }
        
        .story-modal .progress-bar {
            background: linear-gradient(90deg, #ffd700, #ff9800);
            font-weight: bold;
            color: #8b4513;
        }
        
        /* Character-specific styling */
        .noah-character { background: linear-gradient(135deg, #87ceeb, #4682b4); }
        .david-character { background: linear-gradient(135deg, #ffd700, #daa520); }
        .moses-character { background: linear-gradient(135deg, #32cd32, #228b22); }
        .daniel-character { background: linear-gradient(135deg, #ff6347, #dc143c); }
        .jesus-character { background: linear-gradient(135deg, #ff69b4, #c71585); }
        .joseph-character { background: linear-gradient(135deg, #9370db, #4b0082); }
        /* Accessibility improvements */
        .btn, .option-btn { outline: none !important; }
        .btn:focus, .option-btn:focus { box-shadow: 0 0 0 3px #ffd70055 !important; }
        @keyframes sparkle {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px #ffd700); }
            50% { opacity: 0.5; filter: drop-shadow(0 0 18px #fffbe6); }
        }
        .sparkle { animation: sparkle 1.2s infinite; color: #ffd700; font-size: 2.2rem; vertical-align: middle; }
        @keyframes bounceCard {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px) scale(1.03); }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="fas fa-book-bible me-2"></i>Bible Stories Quiz
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showLeaderboard()">
                            <i class="fas fa-trophy me-1"></i>Leaderboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showHelp()">
                            <i class="fas fa-question-circle me-1"></i>Help
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="main-container">
            <!-- Welcome Section -->
            <div id="welcomeSection" class="welcome-section">
                <div class="bible-icon" aria-label="Bible mascot">
                    <span style="font-size: 4rem;">🦁</span>
                </div>
                <h1 class="welcome-title" id="sparkleTitle">
                    Welcome to Bible Stories Quiz!
                    <span class="sparkle" aria-hidden="true">✨</span>
                </h1>
                <p class="welcome-subtitle">Learn about amazing Bible stories while having fun!</p>
                <button class="btn btn-primary btn-lg" onclick="startQuizWithSound()">
                    <i class="fas fa-play me-2"></i>Start Quiz
                </button>
                <button class="btn btn-warning btn-lg ms-2" onclick="randomStory()">
                    <i class="fas fa-random me-2"></i>Random Story
                </button>
            </div>
            <!-- Fun Fact Section -->
            <div class="text-center my-4" id="funFactSection">
                <div class="alert alert-info d-inline-block" style="font-size:1.1rem; max-width: 500px;">
                    <strong>Did you know?</strong> The Bible is the best-selling book of all time, with over 5 billion copies printed!
                </div>
            </div>

            <!-- Story Selection -->
            <div id="storySelection" style="display: none;">
                <h2 class="text-center mb-4">
                    <i class="fas fa-star me-2"></i>Choose a Bible Story
                </h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card story-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to read and quiz!" style="animation: bounceCard 1.2s infinite alternate;">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-rainbow"></i>
                                </div>
                                <h5 class="card-title">Noah's Ark</h5>
                                <p class="card-text">Learn about Noah, the great flood, and the rainbow promise!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('noah'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('noah');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card story-card">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-music"></i>
                                </div>
                                <h5 class="card-title">David and Goliath</h5>
                                <p class="card-text">Discover how little David defeated the giant Goliath!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('david'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('david');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card story-card">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-water"></i>
                                </div>
                                <h5 class="card-title">Moses and the Red Sea</h5>
                                <p class="card-text">See how God parted the Red Sea for His people!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('moses'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('moses');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card story-card">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-lion"></i>
                                </div>
                                <h5 class="card-title">Daniel in the Lion's Den</h5>
                                <p class="card-text">Learn about Daniel's faith and God's protection!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('daniel'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('daniel');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card story-card">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-heart"></i>
                                </div>
                                <h5 class="card-title">Jesus' Miracles</h5>
                                <p class="card-text">Discover the amazing miracles of Jesus!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('jesus'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('jesus');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card story-card">
                            <div class="card-body text-center">
                                <div class="story-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h5 class="card-title">Joseph's Dreams</h5>
                                <p class="card-text">Follow Joseph's journey from dreams to greatness!</p>
                                <button type="button" class="btn btn-outline-primary mt-2" onclick="showStory('joseph'); event.stopPropagation();">Read the Story</button>
                                <button type="button" class="btn btn-primary mt-2" onclick="selectStory('joseph');">Start Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quiz Container -->
            <div id="quizContainer" class="quiz-container" style="display: none;">
                <div class="score-display">
                    <h3>Score: <span id="currentScore">0</span> / <span id="totalQuestions">0</span></h3>
                    <div class="progress">
                        <div class="progress-bar" id="progressBar" role="progressbar" style="width: 0%"></div>
                    </div>
                </div>

                <div id="questionContainer" class="question-card">
                    <!-- Questions will be loaded here -->
                </div>

                <div class="text-center">
                    <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn" style="display: none;">
                        <i class="fas fa-arrow-right me-2"></i>Next Question
                    </button>
                    <button class="btn btn-primary" onclick="finishQuiz()" id="finishBtn" style="display: none;">
                        <i class="fas fa-flag-checkered me-2"></i>Finish Quiz
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Result Modal -->
    <div class="modal fade" id="resultModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content result-modal">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-trophy me-2"></i>Quiz Results
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <div id="resultContent">
                        <!-- Results will be displayed here -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" onclick="playAgain()">
                        <i class="fas fa-redo me-2"></i>Play Again
                    </button>
                    <button type="button" class="btn btn-light" onclick="chooseNewStory()">
                        <i class="fas fa-book me-2"></i>Choose New Story
                    </button>
                    <button type="button" class="btn btn-success" onclick="shareScore()">
                        <i class="fas fa-share-alt me-2"></i>Share your score
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div id="confetti-container" style="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;display:none;"></div>

    <!-- Story Modal -->
    <div class="modal fade story-modal" id="storyModal" tabindex="-1" aria-labelledby="storyModalTitle" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="character-emoji" id="storyCharacterEmoji" aria-hidden="true"></span>
                    <h5 class="modal-title" id="storyModalTitle"></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="storyModalBody">
                    <!-- Progress bar and story page will be injected here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer" style="background: linear-gradient(90deg, #ffe082 0%, #ffd54f 100%); border-top: 4px solid #ffb300; box-shadow: 0 -2px 12px rgba(0,0,0,0.07); margin-top: 60px;">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 10px 10px 10px;">
            <div style="font-size: 2.2rem; color: #ff9800; margin-bottom: 8px;">
                <i class="fas fa-book-bible" aria-hidden="true"></i>
            </div>
            <div class="footer-verse" style="font-size: 1.15rem; color: #6d4c1b; font-style: italic; margin-bottom: 6px; text-align: center; max-width: 600px;">
                "Train up a child in the way he should go, and when he is old he will not depart from it."<br><span style="font-size: 1rem; color: #8b4513;">- Proverbs 22:6</span>
            </div>
            <div style="font-size: 1.05rem; color: #7b5e2e; margin-bottom: 6px;">Made with <span style="color:#ff9800;">&#10084;&#65039;</span> for all kids and families!</div>
            
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    <script src="bible_quiz_script.js"></script>
    <script>
// Confetti effect
function showConfetti() {
    const confetti = document.getElementById('confetti-container');
    confetti.innerHTML = '';
    confetti.style.display = 'block';
    for (let i = 0; i < 120; i++) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = Math.random() * 100 + 'vw';
        div.style.top = Math.random() * 100 + 'vh';
        div.style.width = '12px';
        div.style.height = '12px';
        div.style.background = `hsl(${Math.random()*360},90%,60%)`;
        div.style.borderRadius = '50%';
        div.style.opacity = 0.8;
        div.style.transition = 'top 2.5s linear, opacity 2.5s linear';
        confetti.appendChild(div);
        setTimeout(() => {
            div.style.top = '110vh';
            div.style.opacity = 0;
        }, 50);
    }
    setTimeout(() => { confetti.style.display = 'none'; }, 2600);
}
// Playful sound effect
function playStartSound() {
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae1b2.mp3');
    audio.play();
}
function startQuizWithSound() {
    playStartSound();
    setTimeout(startQuiz, 400);
}
// Tooltip init
window.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
// Random story
function randomStory() {
    const keys = ['noah','david','moses','daniel','jesus','joseph'];
    const pick = keys[Math.floor(Math.random()*keys.length)];
    showStory(pick);
}
// Share score
function shareScore() {
    const score = document.getElementById('currentScore').textContent;
    const total = document.getElementById('totalQuestions').textContent;
    const story = document.getElementById('storyModalTitle').textContent || '';
    const text = `I scored ${score}/${total} on the Bible Stories Quiz! ${story} Try it: [your site link]`;
    if (navigator.share) {
        navigator.share({ title: 'Bible Stories Quiz', text });
    } else {
        navigator.clipboard.writeText(text);
        alert('Score copied! Share it with your friends!');
    }
}
// Show confetti when quiz is finished
const origFinishQuiz = window.finishQuiz;
window.finishQuiz = function() {
    origFinishQuiz();
    showConfetti();
};
</script>
</body>
</html> 