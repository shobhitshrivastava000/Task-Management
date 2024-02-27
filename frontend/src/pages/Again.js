import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
const Again = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchRandomQuote = async () => {
            try {
                const response = await axios.get('https://api.quotable.io/random');
                setQuote(response.data.content);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchRandomQuote();
        const interval = setInterval(fetchRandomQuote, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Start Something With Nice Quotes</h5>
                    <p className="card-text">{quote}</p>
                </div>
            </div>
        </div>
    );
}
export default Again;
