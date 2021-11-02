import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputVal, setInputVal] = useState('Hello world')

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputVal.trim().length > 2) {
            setCategories(cats => [inputVal, ...cats])
            setInputVal('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputVal}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func
}
