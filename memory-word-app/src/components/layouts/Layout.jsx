export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <div>
        <header>
          <h1 className="text-gradient">MemoryWord App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <small>Created by </small>
          <a target="_blank" href="https://github.com/adamdobrogowski">
            <img
              alt="pfp"
              src="https://avatars.githubusercontent.com/u/63902430?v=4"
            />
            <p>@adamdobrogowski</p>
            <i className="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    </>
  );
}
