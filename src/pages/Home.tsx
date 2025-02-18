import { styles } from '../utils/styles';

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';


function Home (){
    return (
        <>
            <div className={styles.backgroundColor}>
                <Navbar />
                <Hero />
                <About />
                <h1>This is Home page</h1>
            </div>
        </>
    )
}

export default Home;