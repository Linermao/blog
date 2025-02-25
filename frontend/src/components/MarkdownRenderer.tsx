import { useEffect, useState } from 'react';

import frontMatter from 'front-matter';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';

const MarkdownRenderer = ({ input="" }) => {

  const { body } = frontMatter(input); // Extract front matter and body

  return (
    <div className="">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} 
                     rehypePlugins={[rehypeHighlight, rehypeKatex]}
                     className="prose max-w-2xl p-4"
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
