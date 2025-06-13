const App = () => {
  return (
    <div
      className="bg-red-500 h-screen text-xl"
      style={{ border: "5px solid black" }}
    >
      <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
    </div>
  );
};
export default App;
