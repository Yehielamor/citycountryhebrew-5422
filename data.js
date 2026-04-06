// Mock Data for CityCountryHebrew MVP
const MOCK_DATA = {
    players: [
        { id: 1, name: 'דוד', score: 150, avatar: 'https://via.placeholder.com/40' },
        { id: 2, name: 'שרה', score: 120, avatar: 'https://via.placeholder.com/40' },
        { id: 3, name: 'יוסף', score: 90, avatar: 'https://via.placeholder.com/40' },
        { id: 4, name: 'רחל', score: 75, avatar: 'https://via.placeholder.com/40' }
    ],
    categories: ['עיר', 'מדינה', 'חיה', 'צמח', 'מקצוע', 'פרח'],
    hebrewLetters: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'],
    leaderboard: [
        { rank: 1, name: 'דוד', score: 150, gamesPlayed: 10 },
        { rank: 2, name: 'שרה', score: 120, gamesPlayed: 8 },
        { rank: 3, name: 'יוסף', score: 90, gamesPlayed: 7 },
        { rank: 4, name: 'רחל', score: 75, gamesPlayed: 5 },
        { rank: 5, name: 'אברהם', score: 60, gamesPlayed: 4 }
    ],
    sampleAnswers: {
        'א': { 'עיר': 'אשדוד', 'מדינה': 'אוסטרליה', 'חיה': 'אריה', 'צמח': 'אזוביון' },
        'ב': { 'עיר': 'באר שבע', 'מדינה': 'ברזיל', 'חיה': 'בז', 'צמח': 'בזיליקום' }
    }
};

// Export for use in app.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOCK_DATA;
}