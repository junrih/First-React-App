import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>FIRST REACT APP INSTALLATION</h1>
      <h3>What is React?</h3>

      <h4>
        React.js is an open-source JavaScript library, crafted with precision by
        Facebook, that aims to simplify the intricate process of building
        interactive user interfaces. Imagine a user interface built with React
        as a collection of components, each responsible for outputting a small,
        reusable piece of HTML code. In React, you develop your applications by
        creating reusable components that you can think of as independent Lego
        blocks. These components are individual pieces of a final interface,
        which, when assembled, form the application’s entire user interface.
        React’s primary role in an application is to handle the view layer of
        that application just like the V in a model-view-controller (MVC)
        pattern by providing the best and most efficient rendering execution.
        Rather than dealing with the whole user interface as a single unit,
        React.js encourages developers to separate these complex UIs into
        individual reusable components that form the building blocks of the
        whole UI. In doing so, the ReactJS framework combines the speed and
        efficiency of JavaScript with a more efficient method of manipulating
        the DOM to render web pages faster and create highly dynamic and
        responsive web applications.
      </h4>

      <h4>Members Name:</h4>
      <li>Rizada, Junrih V.</li>
      <li>Algarme, Zean Mariuss C.</li>
    </div>
  );
}

export default App;
