import React from "react";
import styles from "./CampList.module.css";
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";

const CampList = (props) => {

   

    return (



        <li className={styles.container}>
            <article className={styles.article}>
                <div className={styles.wrapper}>
                    <img src={props.camp.image} alt={props.camp.title} width="430" height="300" />
                    <h2 className={styles.title}>{props.camp.title}</h2>

                    <NavLink className={styles.button}
                        to={{
                            pathname: '/campdetails',
                            state: {
                                details: props.camp
                            }
                        }}> <b>More Details </b> </NavLink>
                    <br />
                    <br />
                    <br />

                </div>

            </article>
        </li>




    );


};
CampList.propTypes = {
    camp: PropTypes.object.isRequired
    

};

export default CampList