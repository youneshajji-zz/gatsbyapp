import React, { useContext, useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import { UserContext, userInfo } from "../Security/UserContext"
import { LinkItemUserSettingsDesktop } from "../Navbars/NavLinks"
import LogoHeader from "../../images/gylden-header.jpg"

const Header = () => {
  const { user, setUser } = useContext(UserContext)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)

  return (
    <>
      <nav className="relative bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={LogoHeader}
                  alt="Gyldendal"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={LogoHeader}
                  alt="Gyldendal"
                />
              </div>

              <div className="">
                <div className="">
                  <button
                    type="button"
                    onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
                    className="absolute inset-y-0 right-0 w-16 bg-gray-800 flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Åpne Min Side</span>
                    <strong className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                      {user.isLoggedInn ? "Hei " + user.name : "ikke pålogget"}
                    </strong>
                  </button>
                </div>
                <Transition
                  show={isSettingsMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      {user.isLoggedInn ? (
                        <div>
                          {user.name}
                          {/* <LinkItemUserSettingsDesktop url="/minside/innstillinger/brukerprofil" title="Profil" /> */}
                          {/* <LinkItemUserSettingsDesktop url="/minside/innstillinger/Logout" title="Logg ut" /> */}
                        </div>
                      ) : (
                          <div>
                            Not Logged inn
                          </div>
                        )}
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
