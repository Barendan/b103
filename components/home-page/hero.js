import Image from 'next/image'

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.png" 
                alt="An image showing a guy" 
                width={300} 
                height={300} 
            />
            </div>
            <h1>Hi, I am Dan.</h1>
            <p>
                A special blog about all things I wanted to know back when I was teaching how to know about all things circular while moving in an oval relative to the Sun.
            </p>
        </section>
    )
}

export default Hero;