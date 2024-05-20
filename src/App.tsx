// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import problems, { Problem } from './Problems/problems';

const App: React.FC = () => {
    // Grouping problems by difficulty, then by category
    // @ts-ignore   
    const groupedProblems: { [difficulty: string]: { [category: string]: Problem[] } } = problems.reduce((acc, problem) => {
        const { difficulty, category, tags, titleSlug, name, url } = problem;
        if (!difficulty || !category) return acc; // Skip if difficulty or category is undefined
        if (!acc[difficulty]) {
            acc[difficulty] = {};
        }
        if (!acc[difficulty][category]) {
            acc[difficulty][category] = [];
        }
        // @ts-ignore
        acc[difficulty][category].push({ titleSlug, name, tags, url });
        return acc;
    }, {} as { [difficulty: string]: { [category: string]: Partial<Problem[]> } });

    // Render the grouped problems
    const renderGroupedProblems = () => {
        return Object.entries(groupedProblems)
        // Sort by difficulty
        .sort(([difficultyA], [difficultyB]) => difficultyA === 'Easy' ? -1 : difficultyB === 'Easy' ? 1 : 0)
        .map(([difficulty, categories]) => (
            <div key={difficulty}>
                <h2>{difficulty}</h2>
                {Object.entries(categories).map(([category, problems]) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {problems.map((problem) => (
                                <li key={problem.titleSlug}>
                                    <Link to={`/problem/${problem.titleSlug}`}>{problem.name}</Link>
                                    {problem.tags && problem.tags.length > 0 && (
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            Tags: {problem.tags.join(', ')}
                                        </span>
                                    )}
                                    {problem.url && (
                                        <span style={{ marginLeft: '0.5rem' }}>
                                            <a href={problem.url} target="_blank" rel="noopener noreferrer">LeetCode</a>
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        ));
    };
    return (
        <Router>
            <div>
                <h1>LeetCode Visualizer</h1>

                <Routes>

                        <Route
                            key={"index"}
                            path={`/`}
                            element={renderGroupedProblems()}
                        />
               
                    {problems.map((problem) => (
                        <Route
                            key={problem.id}
                            path={`/problem/${problem.titleSlug}`}
                            element={problem.component ? <problem.component /> : null}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
