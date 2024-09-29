import logo from '!/assets/talentflow.png';
import { CoolMode } from '@/components/magicui/cool-mode';
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
      <header className="text-gray-600 body-font inter sticky top-0 z-50 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to="/"><a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-12 h-12" src={ logo } />
            <span className="ml-3 text-xl">TalentFlow</span>
          </a></NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/"><a className="mr-5 hover:text-gray-900">Home</a></NavLink>
          <NavLink to="/about"><a className="mr-5 hover:text-gray-900">About</a></NavLink>
          <NavLink to="/profile"><a className="mr-5 hover:text-gray-900">Profile</a></NavLink>
          </nav>
          <CoolMode
              options={{
                particle:
                  "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/044/129/datas/medium.png",
              }}
          >
            <NavLink to="/">
              <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
                Login
              </button>
            </NavLink>
          </CoolMode>
        </div>
      </header>
    </>
  )
}

export default Header;
