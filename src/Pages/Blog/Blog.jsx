import React from 'react';

const Blog = () => {
    return (
        <div className='text-white mx-2 md:mx-28 my-10'>
            <div className='mb-5'>
                <h2 className='text-2xl text-lime-500'>Question: Tell us the differences between uncontrolled and controlled components.?</h2>
                <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-lime-500'>Question: How to validate React props using PropTypes?</h2>
                <p>Ans: Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-lime-500'>Question: Tell us the difference between nodejs and express js.?</h2>
                <p>Ans: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='mb-5'>
                <h2 className='text-2xl text-lime-500'>Question: What is a custom hook, and why will you create a custom hook.?</h2>
                <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;