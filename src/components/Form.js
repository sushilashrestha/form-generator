import { useState } from "react";
import Input from "./Input"


const Form = ({ schema, onSubmit}) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            {schema.map(field => (
                <Input 
                key={field.name}
                {...field}
                value={formData[field.name] || ''}
                onChange = {handleChange}
                />
            ))}
            <button type = "submit">Submit</button>
        </form>
    );
};

export default Form;
