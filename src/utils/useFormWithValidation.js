import React from "react";

export function useFormWithValidation(initialValues) {
    const [values, setValues] = React.useState(initialValues);
    const [error, setError] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setError({ ...error, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = React.useCallback(
        (newValues = {}, newError = {}, newIsValid = false) => {
            setValues(newValues);
            setError(newError);
            setIsValid(newIsValid);
        },
        [setValues, setError, setIsValid]
    );

    return { values, handleChange, error, isValid, resetForm };
}