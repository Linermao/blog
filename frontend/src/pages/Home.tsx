import { styles } from '@/utils/styles/styles';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Home/Hero';
import Blog from '@/components/Home/Blog';

function Home (){
    return (
        <>
            <div className={styles.backgroundColor}>
                <Navbar />
                <Hero />
            </div>
            <div className='mt-10'>
                <Blog />
            </div>
        </>
    )
}

export default Home;