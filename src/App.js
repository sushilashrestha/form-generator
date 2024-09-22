import React from "react";
import Form from "./components/Form";

const App = () => {
  const schema = [
    {type:'text', name:'name', label:'Name'},
    {type:'email', name:'email', label:'Email'},
    {type:'select', name:'FieldOfInterest', label:'Field of Interest', options : [
      { value: 'webDevelopment', label: 'Web Development' },
      { value: 'dataScience', label: 'Data Science' },
      { value: 'ai', label: 'Artificial Intelligence' },,
    ]},
    {type: 'textarea', name:'message', label:'Message'},
    {type:'text', name:'address', label:'Address'},
  ];

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return(
    <div>
      <h1>User Info</h1>
      <Form schema={schema} onSubmit={handleSubmit} />
    </div>
  );
};
export default App;
