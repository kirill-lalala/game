import React from 'react';
import styles from './Shop.module.css';

class Shop extends React.Component {
    sumPrice(){
        return this.props.sumPrice(this.props.selectThings, 'price')
    }

    render() {
        return <div>
            <h1 className={styles.title}>Shop</h1>

            {   this.props.equipment &&
                Object.keys(this.props.equipment).map((elem, i) =>
                    <Select key={i}
                            equipmentpart={elem}
                            selectData={this.props.equipment[elem]}
                            pushSelectThings={this.props.pushSelectThings}/>)
            }

            <div className={styles.line}> </div>
            <div className={styles.cost}>Equiepment cost: <span>{this.sumPrice()}</span></div>
        </div>
    }
}

class Select extends React.Component {
    onChange(e){
        this.props.pushSelectThings(JSON.parse(e.target.value), e.target.name);
    }

    render(){
        let equipmentPart = this.props.equipmentpart;
        // the first letter in the name of the thing in uppercase
        let equipmentPartUpperCase = equipmentPart[0].toUpperCase() + equipmentPart.slice(1);

        return <div className={styles.customizationBlock}>
            <div className={styles.categoryName}>{equipmentPartUpperCase}</div>

            <div className={styles.select}>
                <select name={equipmentPart} onChange={(e) => this.onChange(e)}>
                    <option value={false}> </option>
                    {
                        this.props.selectData.map( item => {
                            let id = item.id;
                            return <option key={id}
                                           value={JSON.stringify(item)}>{item.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    }
}

export default Shop;