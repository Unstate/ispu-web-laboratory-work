import DropdownList from "./DropdownList";


const Header = () => {
  return (
    <> 
      <header className="flex items-center justify-between h-[5%] text-xl" id="header1">
        <p>Фетисов Роман Алексеевич</p>
        <nav>
          <DropdownList />
        </nav>
      </header>
    </>
  );
};

export default Header;
