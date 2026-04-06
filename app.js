const { useState, useEffect } = React;

const App = () => {
    const [gameState, setGameState] = useState('lobby'); // lobby, playing, results
    const [players, setPlayers] = useState([{ id: 1, name: 'שחקן 1', score: 0 }, { id: 2, name: 'שחקן 2', score: 0 }]);
    const [currentLetter, setCurrentLetter] = useState('א');
    const [timeLeft, setTimeLeft] = useState(60);
    const [categories, setCategories] = useState(['עיר', 'מדינה', 'חיה', 'צמח']);
    const [answers, setAnswers] = useState({});
    const [leaderboard, setLeaderboard] = useState([{ name: 'דוד', score: 150 }, { name: 'שרה', score: 120 }]);

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setGameState('results');
        }
    }, [gameState, timeLeft]);

    const startGame = () => {
        setGameState('playing');
        setTimeLeft(60);
        setCurrentLetter(String.fromCharCode(1488 + Math.floor(Math.random() * 27))); // Random Hebrew letter
        setAnswers({});
    };

    const handleAnswer = (category, answer) => {
        setAnswers({ ...answers, [category]: answer });
    };

    const submitAnswers = () => {
        // Mock scoring logic
        const score = Object.keys(answers).length * 10;
        setPlayers(players.map(p => ({ ...p, score: p.score + score })));
        setGameState('results');
    };

    return (
        <div className="glassmorphism p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CityCountryHebrew</h1>
                <p className="text-lg text-gray-300 mt-2">משחק ארץ עיר בעברית - תחרות מילים בזמן אמת</p>
            </header>
            
            {gameState === 'lobby' && (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">ברוכים הבאים למשחק!</h2>
                    <p className="mb-6 text-gray-300">הצטרפו למשחק מרובה משתתפים וכתבו מילים לפי קטגוריות עם אות נתונה.</p>
                    <button onClick={startGame} className="bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
                        התחל משחק חדש
                    </button>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2">טבלת המובילים</h3>
                        <ul className="space-y-2">
                            {leaderboard.map((player, index) => (
                                <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                                    <span>{player.name}</span>
                                    <span className="font-bold text-yellow-400">{player.score} נקודות</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            
            {gameState === 'playing' && (
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-300">{currentLetter}</div>
                            <p className="text-gray-400 mt-2">האות הנוכחית</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-400">{timeLeft}</div>
                            <p className="text-gray-400 mt-2">שניות נותרו</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {categories.map(category => (
                            <div key={category} className="bg-gray-800 p-4 rounded-xl">
                                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                                <input
                                    type="text"
                                    placeholder="הכנס תשובה..."
                                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => handleAnswer(category, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <button onClick={submitAnswers} className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-full text-lg transition-transform transform hover:scale-105">
                        שלח תשובות
                    </button>
                </div>
            )}
            
            {gameState === 'results' && (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">תוצאות הסיבוב</h2>
                    <p className="mb-6 text-gray-300">האות הייתה: <span className="font-bold text-blue-300">{currentLetter}</span></p>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">ניקוד שחקנים</h3>
                        <ul className="space-y-2">
                            {players.map(player => (
                                <li key={player.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                                    <span>{player.name}</span>
                                    <span className="font-bold text-green-400">{player.score} נקודות</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={startGame} className="bg-gradient-to-r from-blue-500 to-indigo-400 hover:from-blue-600 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
                        משחק חדש
                    </button>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));