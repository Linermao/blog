import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';

const MarkdownRenderer = ({ input="" }) => {

    return (
      <div className="">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} 
                       rehypePlugins={[rehypeHighlight, rehypeKatex]}
                       className="prose prose-code:bg-gray-600 max-w-2xl p-4"
        >
            {input}
        </ReactMarkdown>
      </div>
    );
};

export default MarkdownRenderer;
