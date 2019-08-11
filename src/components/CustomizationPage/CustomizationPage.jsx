import React from 'react';
import styles from './CustomizationPage.module.css';
import Shop from "../Shop/Shop";
import Personage from "../Personage/Personage";
import {connect} from "react-redux";
import {getCustomizationData, pushSelectThings} from "../../redux/customization-reducer";
import {getEquipment, getPerson, getSelectThing} from "../../redux/selectors";

class CustomizationPage extends React.Component {
    componentWillMount() {
        this.props.getCustomizationData();
    }

    sumPrice(obj, indicator){
        return Object.keys(obj || {}).reduce((sum, current) => {
            return sum + (+obj[current][indicator] || 0);
        }, 0);
    };

    render(){

        return <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.customization}>
                        <div className={`${styles.customization__element} ${styles.shop}`}>
                            <Shop sumPrice={this.sumPrice} {...this.props}/>
                        </div>
                        <div className={`${styles.customization__element} ${styles.personage}`}>
                            <Personage person={this.props.person} selectThings={this.props.selectThings} sumPrice={this.sumPrice}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => ({
    equipment: getEquipment(state),
    person: getPerson(state),
    selectThings: getSelectThing(state)
});

export default connect(mapStateToProps, {
    getCustomizationData, pushSelectThings
})(CustomizationPage);