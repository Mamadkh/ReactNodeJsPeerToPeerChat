import './process.scss'
import { useSelector } from 'react-redux'
import { ProcessReducer } from './../store/reducer/process';

export default function Process() {
    const state = useSelector(state => state.ProcessReducer);
    return (
        <div className='process'>
            <h5>
                secret Key: <span>"1qazxsw23edcvfr45tgbnhy67ujm,ki8"</span>
            </h5>
            <div className='incoming'>
                <h4>Incoming Data</h4>
                <p>{state.cypher}</p>
            </div>
            <div className='cypher'>
                <h4>Decrypted Data</h4>
                <p>{state.text}</p>
            </div>

        </div>
    )
}