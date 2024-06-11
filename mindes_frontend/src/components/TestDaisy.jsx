import React from "react";

const TestDaisy = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
            <div>
              <input type="checkbox" className="toggle" checked />
            </div>
            <div>
              <input type="checkbox" className="toggle" checked />
            </div>

            <input
              type="checkbox"
              className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"
              checked
            />
            <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary text-white">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDaisy;
