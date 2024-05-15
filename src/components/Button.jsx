import React from 'react';

function Button({ variant = 'primary', children, onClick }) {
  const buttonClasses = `
    py-2 px-4 rounded-lg font-medium text-white
    ${variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : ''}
    ${variant === 'secondary' ? 'bg-gray-400 hover:bg-gray-500' : ''}
    ${variant === 'outline' ? 'border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-white' : ''}
  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// import React from 'react';
// const Button = () => {
//   return (
//     <> 
//     <button className="m-5 rounded-md px-5 py-2 justify-center text-body-2 bg-primary-40  text-grayscale-10 hover:bg-primary-20 active:text-primary-10">Primary</button>



//     </>
//   )
// }
// export default Button




// class Button extends React.Component {
    //     render() {
    //         return (
    
    //         <>
    
    //                  <button onClick={this.props.onClick} >{this.props.text}</button>   
    
           
    //         </>
                
             
    //         );
    //     }
    // }