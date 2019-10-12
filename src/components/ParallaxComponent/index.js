import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styles from './parallax.module.scss'
import FinalFormtasy from '../FinalFormtasy'
//Parallax Component 'Helpers'
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class ParallaxComponent extends React.Component {
    render () {
    return (
        <div className={styles.wrapperParallax}> 
            <Parallax pages={1}>
            <ParallaxLayer offset={0} speed={0} factor={1} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
                <ParallaxLayer offset={0} speed={2}>
                    <div className={styles.taglineText}>
                        <h1>DINNER TOGETHER IN 15 MINUTES OR LESS</h1>
                           <h3>Prefare meal kits make it easier for you to enjoy delicious home cooking with the people you love.</h3>
                    </div>
                </ParallaxLayer>
                
                <ParallaxLayer offset={0} speed={.5}>
                    <FinalFormtasy/>
                </ParallaxLayer>
            </Parallax>
        </div>
        )
    }
}

export default ParallaxComponent
