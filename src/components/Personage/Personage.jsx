import React, {useEffect, useState} from 'react';
import styles from './Personage.module.css';
import health from '../../img/heart.svg';
import armor from '../../img/shield.svg';
import attack from '../../img/sword.svg';

const Personage = ({person = {}, selectThings, sumPrice}) => {
    const [mainImg, setImg] = useState(person.img);

    useEffect(() => {
        let mainImg =  selectThings.helmets.id ? person['alt-img'] : person.img;
        setImg(mainImg);
    }, [selectThings.helmets, person]);

    const sumStats = (indicator) => {
        return (+person[indicator] || 0) + sumPrice(selectThings, indicator)
    };

    const statsBlock = (indicator, img) => {
        return <div>
            <div className={styles.indicators}>{sumStats(indicator)}</div>
            <div className={styles.indicatorsImg}><img src={img} alt=""/></div>
        </div>
    };

    const thingBlock = (thing) => {
        return <div className={styles[thing]}>
            {selectThings[thing] && <img src={selectThings[thing].img} alt=""/>}
        </div>
    };

    return <>
        <div className={styles.img}>
            <img src={mainImg} alt="personage"/>
            {thingBlock(('helmets'))}
            {thingBlock(('gloves'))}
            {thingBlock(('chests'))}
            {thingBlock(('boots'))}
            {thingBlock(('swords'))}
        </div>

        <div className={styles.name}>
            <div>Name:</div>
            <div>{person.name}</div>
        </div>

        <div className={styles.stats}>
            <div>Stats:</div>
            <div className={styles.statsRightBlock}>
                {statsBlock('health', health)}
                {statsBlock('armor', armor)}
                {statsBlock('attack', attack)}
            </div>
        </div>
    </>
};

export default Personage;