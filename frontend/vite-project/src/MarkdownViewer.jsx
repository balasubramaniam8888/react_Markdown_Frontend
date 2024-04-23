import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = () => {
    const [markdowns, setMarkdowns] = useState([]);
    
    useEffect(() => {
        fetch('https://react-markdown-viewer-updk.onrender.com/markdowns')
            .then(response => response.json())
            .then(data => setMarkdowns(data));
    }, []);
    
    return (
        <div className='markdown'>
            {markdowns.map((markdown) => (
                <div key={markdown._id}>
                    <h2>{markdown.title}</h2>
                    <ReactMarkdown>{markdown.content}</ReactMarkdown>
                </div>
            ))}
        </div>
    );
};

export default MarkdownViewer;
