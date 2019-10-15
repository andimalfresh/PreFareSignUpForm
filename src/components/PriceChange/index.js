import React from 'react'
import styles from './PriceChange.module.scss'


const PriceChange = (props) => {
    const products = props.menuItems.map((prods) => {
        return (        
                <div className={styles.menuRow}>
                    <div className="col-sm">
                        <div>
                            {prods.product_name}
                        </div>
                        <div className={styles.priceLine}>
                            Price: {prods.retail_price}
                        </div>
                    </div> 
                    <div className="col-sm">
                        <input placeholder={prods.retail_price} className={styles.inputField} name="retail_price" onChange={props.getPriceData}/>
                    </div>
                    <div className="col-sm">
                        <button id={prods.id} onClick={props.getIdForUpdate}>Change Price</button>
                    </div>
                </div>
              )})
        return (
        <div className={styles.priceChangeMenu}>
            <div className={styles.menuTitle}>
                 Menu Price Change
                 <div className={styles.message}>
                     Click the button below to show menu items and change their prices
                </div>
                 <div className={styles.buttonDiv}>
                    <button onClick={props.handleHiddenForm}>
                        Show Menu
                    </button>
                </div>
            </div>
            <div className={styles.menu} style={props.showHiddenForm ? {display: 'block'} : { display: 'none' }}>
                {products}
            </div>
        </div>
    )
}

export default PriceChange