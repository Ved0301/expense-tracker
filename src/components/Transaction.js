import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount<0? 'minus': 'plus'}>
          {transaction.text} <span>-$400</span>{sign}${Math.abs(transaction.amount)}<button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction
