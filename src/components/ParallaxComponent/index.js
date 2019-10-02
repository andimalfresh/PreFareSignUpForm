import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styles from './parallax.module.scss'

class ParallaxComponent extends React.Component {
    render () {
    return (
        <div className={styles.wrapperParallax}> 
            <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className={styles.taglineText}>
                        <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className={styles.taglineText}>
                        <h1>DINNER TOGETHER IN 15 MINUTES OR LESS</h1>
                           <h3>Prefare meal kits make it easier for you to enjoy delicious home cooking with the people you love.</h3>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
        )
    }
}

export default ParallaxComponent
