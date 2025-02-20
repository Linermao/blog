import { styles } from '../utils/styles';

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';


function Home (){
    return (
        <>
            <div className={styles.backgroundColor}>
                <Navbar />
                <Hero />
            </div>
        </>
    )
}

export default Home;