import React, { useState } from "react";
import styles from "./ProductList.module.css";
import { NavLink } from 'react-router-dom'

const ProductList = (props) => {



    return (



        <li className={styles.container}>

            <div className={styles.row}>
                <div className={styles.column1}>

                    <img className={styles.iconDetails} src={props.product.image} alt={props.product.title}  />

                </div>
                <div className={styles.column2}>
                    <h2 className={styles.title}>{props.product.title}</h2>
                </div>
                <div className={styles.column3}>
                    <NavLink className={styles.button}
                        to={{
                            pathname: '/productdetails',
                            state: {
                                details: props.product
                            }
                        }}> <b>More Details </b> </NavLink>
                    <br />
                    <br />
                    <br />

                </div>
             </div>



           
        </li>




    );


}

export default ProductList