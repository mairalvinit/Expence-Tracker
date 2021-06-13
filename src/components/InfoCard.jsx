import React from 'react'

const isIncome  = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{textAlign: 'center',padding: '0 10%'}}>
            Try saying : <br/> 
            Add {isIncome ? 'Income ' : 'Expense '}
            for $100 in Category {isIncome ? 'Business ' : 'Bills '} 
            for {isIncome ? 'Monday ' : 'Tuesday '}....
        </div>
    )
}

export default InfoCard
