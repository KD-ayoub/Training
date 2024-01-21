export default function Footer() {

  return (
    <div className="h-[8%]">
      <div>
        <label
          htmlFor="toggle"
          className="w-20 h-8 bg-white inline-block relative"
        >
          <input type="checkbox" className="w-0 h-0"></input>
          <span className="before:w-4 before:h-4 before:rounded-full before:bg-slate-900 before:absolute top"></span>
        </label>
      </div>
    </div>
  );
}
