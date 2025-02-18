import heroBg from '../../assets/herobg.png';

import { styles } from '../../utils/styles';
import Module from '../canvas/Module';

function Hero(){

    return (
        <>
            <section className={`relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center`} style={{backgroundImage: `url(${heroBg})`}}>
                
                {/* Introduction */}
                <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto 
                                ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF]' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Linermao</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I develop 3D visuals, user <br className='sm:hidden' />
                            interfaces and web applications
                        </p>
                    </div>
                </div>

                <Module />







            </section>


        </>
    )
}

export default Hero;