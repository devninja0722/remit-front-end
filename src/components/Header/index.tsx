import React, { useState } from 'react'
import NavLink from '../NavLink'
import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import { classNames } from 'app/functions'
import Image from 'next/image'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import Drawer from './Drawer'

const AppBar = () => {
  const navLinkStyle =
    'p-2 text-sm md:text-base font-normal transition-all md:p-3 whitespace-nowrap !text-primary hover:!opacity-60 outline-none'
  const activeNavLinkStyle = '!text-blue !font-semibold hover:!opacity-100 disabled'
  const dropMenuStyle = 'flex justify-left items-center space-x-1 hover:!opacity-60 p-2 text-sm md:text-base transition-all outline-none'
  const activeDropMenuStyle = '!font-semibold hover:!opacity-100 disabled'
  const routeTag: any = useRouter().asPath.split('/')[1].split('?')[0]

  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <header className={classNames("z-[10001] flex-shrink-0 w-full text-sm md:text-base font-montserrat border-b border-stroke fixed", ["signin", "signup", "country", "identity"].includes(routeTag) ? "!hidden" : "")}>
      <Popover as="nav" className="z-10 w-full bg-transparent">
        <div className="px-8 mx-0.5 sm:px-16 lg:px-24 py-4 bg-white/50 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-base md:text-md lg:text-lg font-bold">
                <NavLink href="/"><a>RemitWise</a></NavLink>
              </div>
              <div className="hidden lg:flex space-x-2">
                <NavLink href="/send">
                  <a id={`send-nav-link`} className={classNames(navLinkStyle, routeTag === 'send' ? activeNavLinkStyle : '')}>
                    Send money
                  </a>
                </NavLink>
                <NavLink href="/history">
                  <a id={`history-nav-link`} className={classNames(navLinkStyle, routeTag === 'history' ? activeNavLinkStyle : '')}>
                    Remittance history
                  </a>
                </NavLink>
                <NavLink href="/bank">
                  <a id={`bank-nav-link`} className={classNames(navLinkStyle, routeTag === 'bank' ? activeNavLinkStyle : '')}>
                    Bank account
                  </a>
                </NavLink>
                <NavLink href="/order">
                  <a id={`order-nav-link`} className={classNames(navLinkStyle, routeTag === 'order' ? activeNavLinkStyle : '')}>
                    Order table
                  </a>
                </NavLink>
                <NavLink href="/asset">
                  <a id={`asset-nav-link`} className={classNames(navLinkStyle, routeTag === 'asset' ? activeNavLinkStyle : '')}>
                    My asset
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="hidden lg:flex text-secondary" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
              <div className="flex justify-center items-center space-x-2 hover:bg-stroke/40 rounded-3xl p-1 pr-2 transition-all cursor-pointer">
                <Image src="/img/user.png" alt="user" width={42} height={42} className={classNames("rounded-full", menuOpen ? "border-2 border-blue" : "")} />
                <ChevronDownIcon width={16} height={16} className={classNames("transition-all", menuOpen ? "rotate-180" : "")} />
              </div>
              <div className={classNames("absolute bg-white/50 border-t-2 border-t-blue/50 p-2 pt-3 dropdown-menu gap-1 -translate-x-12 translate-y-14", menuOpen ? "grid" : "hidden")}>
                <NavLink href="/setting">
                  <a id={`setting-nav-link`}>
                    <div className={classNames(dropMenuStyle, routeTag === 'setting' ? activeDropMenuStyle : '', '!p-1')}><Image src="/img/menu/setting.svg" width={18} height={18} alt="setting" /><p>Settings</p></div>
                  </a>
                </NavLink>
                <NavLink href="/security">
                  <a id={`security-nav-link`}>
                    <div className={classNames(dropMenuStyle, routeTag === 'security' ? activeDropMenuStyle : '', '!p-1')}><Image src="/img/menu/security.svg" width={18} height={18} alt="security" /><p>Security</p></div>
                  </a></NavLink>
                <NavLink href="/contact">
                  <a id={`contact-nav-link`}>
                    <div className={classNames(dropMenuStyle, routeTag === 'contact' ? activeDropMenuStyle : '', '!p-1')}><Image src="/img/menu/contact.svg" width={18} height={18} alt="contact us" /><p>Contact us</p></div>
                  </a>
                </NavLink>
                <hr className="w-40 border-stroke" />
                <NavLink href="/logout">
                  <a id={`logout-nav-link`}>
                    <div className={classNames(dropMenuStyle, '!p-1')}><Image src="/img/menu/logout.svg" width={18} height={18} alt="log out" /><p>Log out</p></div>
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="flex lg:hidden">
              <MenuIcon width={20} height={20} className={classNames("hover:scale-105 cursor-pointer", drawerOpen ? "hidden" : '')} onClick={() => setDrawerOpen(!drawerOpen)} />
              <Drawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                position="left"
              >
                <div className="demo-content grid p-6 font-montserrat space-y-4">
                  <div className="flex justify-center mt-16">
                    <Image src="/img/user.png" alt="user" width={64} height={64} className="rounded-full" />
                  </div>
                  <div className="grid py-2">
                    <div className="font-semibold uppercase mb-2">Menu</div>
                    <NavLink href="/send">
                      <a id={`send-nav-link`} className={classNames(navLinkStyle, routeTag === 'send' ? activeNavLinkStyle : '')}>
                        Send money
                      </a>
                    </NavLink>
                    <NavLink href="/history">
                      <a id={`history-nav-link`} className={classNames(navLinkStyle, routeTag === 'history' ? activeNavLinkStyle : '')}>
                        Remittance history
                      </a>
                    </NavLink>
                    <NavLink href="/bank">
                      <a id={`bank-nav-link`} className={classNames(navLinkStyle, routeTag === 'bank' ? activeNavLinkStyle : '')}>
                        Bank account
                      </a>
                    </NavLink>
                    <NavLink href="/order">
                      <a id={`order-nav-link`} className={classNames(navLinkStyle, routeTag === 'order' ? activeNavLinkStyle : '')}>
                        Order table
                      </a>
                    </NavLink>
                    <NavLink href="/asset">
                      <a id={`asset-nav-link`} className={classNames(navLinkStyle, routeTag === 'asset' ? activeNavLinkStyle : '')}>
                        My asset
                      </a>
                    </NavLink>
                  </div>
                  <hr className="w-full border-stroke" />
                  <div className="grid py-2">
                    <div className="font-semibold uppercase mb-2">Setting</div>
                    <NavLink href="/setting">
                      <a id={`setting-nav-link`}>
                        <div className={classNames(dropMenuStyle, routeTag === 'setting' ? activeDropMenuStyle : '')}><Image src="/img/menu/setting.svg" width={18} height={18} alt="setting" /><p>Settings</p></div>
                      </a>
                    </NavLink>
                    <NavLink href="/security">
                      <a id={`security-nav-link`}>
                        <div className={classNames(dropMenuStyle, routeTag === 'security' ? activeDropMenuStyle : '')}><Image src="/img/menu/security.svg" width={18} height={18} alt="security" /><p>Security</p></div>
                      </a></NavLink>
                    <NavLink href="/contact">
                      <a id={`contact-nav-link`}>
                        <div className={classNames(dropMenuStyle, routeTag === 'contact' ? activeDropMenuStyle : '')}><Image src="/img/menu/contact.svg" width={18} height={18} alt="contact us" /><p>Contact us</p></div>
                      </a>
                    </NavLink>
                    <NavLink href="/logout">
                      <a id={`logout-nav-link`}>
                        <div className={dropMenuStyle}><Image src="/img/menu/logout.svg" width={18} height={18} alt="log out" /><p>Log out</p></div>
                      </a>
                    </NavLink>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </Popover>
    </header>
  )
}

export default AppBar
