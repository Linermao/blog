import { styles } from '@/utils/styles/styles';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from '@/components/Navbar';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PostCard from '@/components/Home/Blog/PostCard';
import Aside from '@/components/Home/Blog/Aside';

import { ArticleType } from '@/utils/type';

const articles: ArticleType[] = [
		{
				id: "1",
				title: "First article",
				date: "2021-08-01",
				tags: ["tag1", "tag2"],
		},
		{
				id: "2",
				title: "Second article",
				date: "2021-08-02",
				tags: ["tag1", "tag3"],
		},
		{
				id: "3",
				title: "Third article",
				date: "2021-08-03",
				tags: ["tag2", "tag3"],
		},
];

function Blog (){
	return (
		<>
			<Navbar />
			<div className='flex justify-center items-center w-full gap-4'>
				<Aside />
				<div className='flex flex-col gap-6 w-[720px]'>
					{articles.length>0 
						? 
						articles.map((item: ArticleType)=>(
							<PostCard key={item.id} article={item}/>
						))
						:
						<div className='text-2xl'>Not find Article</div>
					}
				</div>
			</div>
		</>
	)
}


export default Blog;