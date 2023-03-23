
/* interface Props {   // Da ich im Header kein Appicon brauche, kann ich das hier auf mein layout (body) schieben. 
  Appicon: Appicon;
}
 */
import DarkModeButton from "./DarkModeButton"

const Header = () => {
  return (
    <header id="header" className="  justify-around z-10 bg-stone-200 text-zinc-800 dark:bg-stone-500 dark:text-zinc-100  shadow-lg sticky top-0 ">
    <span className="font-light text-lg  tracking-widest flex  sm:space-x-10 md:space-x-12 lg:space-x-40 xl:space-x-58 ">
        <div>meals</div>
        <div>exercise</div>
        <div>BURNO</div>
        <div>rest</div>
        <div>settings</div>    
        <DarkModeButton/>
    </span>
    
    </header>

  );
};

export default Header

