import React from 'react';

const Input = ({type,desc,clas,setValue, val}) => {
    return (
        <>
            <input type={type} placeholder={desc} className={clas} value={val}  onChange={(e) => {
                setValue(e.target.value)
            }}/>
        </>
    );
};

export default Input;