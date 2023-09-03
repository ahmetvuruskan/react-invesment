import React, {useState} from "react";
import '../../assets/css/InvesmentForm.css'

const initialFormData = {
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}
const InvestmentForm = props => {
    const [formData, setFormData] = useState(initialFormData);


    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(formData)
    }
    const resetHandler = (event) => {
        setFormData(initialFormData);
    }
    const calculateHandler = (event) => {

    }

    const inputChangeHandler = (input, value) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [input]: value
            }
        })
    }

    return <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} type="number"
                       value={formData['current-savings']}
                       id="current-savings"/>
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} type="number"
                       value={formData['yearly-contribution']}
                       id="yearly-contribution"/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} type="number"
                          value={formData['expected-return']}
                       id="expected-return"/>
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input onChange={(event) => inputChangeHandler('duration', event.target.value)} type="number"
                          value={formData['duration']}
                       id="duration"/>
            </p>
        </div>
        <p className="actions">
            <button onClick={resetHandler} type="reset" className="buttonAlt">
                Reset
            </button>
            <button onClick={calculateHandler} type="submit" className="button">
                Calculate
            </button>
        </p>
    </form>
}
export default InvestmentForm;