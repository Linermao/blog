import { styles } from '../utils/styles';

import Navbar from '../components/Navbar';
import MarkdownRenderer from '../components/MarkdownRenderer';

import apiMd from "../posts/Test/Test.md?raw";

function Blog (){
    return (
        <>
            <Navbar />

            <div className={` h-screen`}>

                <MarkdownRenderer input={apiMd}/>
            </div>
        </>
    )
}

export default Blog;