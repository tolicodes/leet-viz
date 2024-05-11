import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeDisplayProps {
    code: string;
    highlightLine?: number;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, highlightLine }) => {
    const lineProps = (lineNumber: number) => {
        console.log({
            lineNumber
        })
        return ({
            style: { display: 'block', background: lineNumber === highlightLine ? 'yellow' : 'transparent' }
        })
    };

    return (
        <SyntaxHighlighter
            language="typescript"
            style={vscDarkPlus}
            wrapLines={true}
            showLineNumbers
            lineProps={lineNumber => lineProps(lineNumber)}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeDisplay;