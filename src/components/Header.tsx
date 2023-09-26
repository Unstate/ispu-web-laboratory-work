import DropdownList from "./DropDownList";

const Header = () => {
  return (
    <> 
      <header className="flex items-center justify-between h-[5%] px-24 text-xl">
        <p>Лабораторная 3. О себе</p>
        <nav>
          <ul className="flex items-center justify-cente gap-5">
            <li className="hover:text-cyan-500 hover:cursor-pointer transition-all ease-in">
              Главная
            </li>
            <li className="hover:text-cyan-500 hover:cursor-pointer transition-all ease-in">
              Не главная
            </li>
            <li className="hover:text-cyan-500 hover:cursor-pointer transition-all ease-in">
              Контакт
            </li>
            <li className="hover:text-cyan-500 hover:cursor-pointer transition-all ease-in">
              Какая-то
            </li>
            <DropdownList />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
