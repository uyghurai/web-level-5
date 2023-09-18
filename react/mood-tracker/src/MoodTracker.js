// MoodTracker.js
import React, { useState } from 'react';
import './MoodTracker.css';

function MoodTracker() {
    const [currentMood, setCurrentMood] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);

    const handleMoodChange = (event) => {
        setCurrentMood(event.target.value);
    };

    const addMoodToHistory = () => {
        setMoodHistory([...moodHistory, currentMood]);
    };

    const deleteMoodFromHistory = (indexToDelete) => {
        setMoodHistory(moodHistory.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="mood-tracker">
            <h1>Mood Tracker</h1>
            <select value={currentMood} onChange={handleMoodChange}>
                <option value="">Select your mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="excited">Excited</option>
            </select>
            <button onClick={addMoodToHistory}>Add mood to history</button>
            <h2>Mood History:</h2>
            <ul>
                {moodHistory.map((mood, index) => (
                    <li key={index}>
                        <span>{mood}</span>
                        <i
                            className="fas fa-trash-alt trash-icon"
                            onClick={() => deleteMoodFromHistory(index)}
                        ></i>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoodTracker;
