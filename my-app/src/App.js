import React from "react";

function App() {
  return (
    <div className="w-full pt-40">
      <div className="w-1/5 mx-auto">
        <header className="mb-20">
          <div className="flex justify-center self-center">
            <img
              className="x-14 h-14"
              src="./images/genuio.png"
              alt="genuiow"
            />
            <h2 className="text-5xl font-normal ml-2">GENUIO</h2>
          </div>
          <p className="text-center text-gray-400">HANDMADE IN ITALY</p>
        </header>
        <form action="">
          <p className="text-center text-2xl mb-16 border-b-4 border-blue-500 pb-5 w-40 mx-auto">
            Account Login
          </p>

          <input
            className="w-full h-14 border-2 mb-8 outline-none pl-4 rounded"
            type="text"
            placeholder="Username: admin or user"
          />
          <input
            className="w-full h-14 border-2 outline-none pl-4 rounded"
            type="password"
            placeholder="Password: ant.design"
          />
          <div className="mt-8 mb-8">
            <label>
              <input type="checkbox" className="w-5 h-5 align-middle mr-2 " />
              Remember me
            </label>
            <a href="#" className="float-right text-blue-600">
              Forgot Password
            </a>
          </div>
          <button className="w-full h-14 border-2 bg-blue-500 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
