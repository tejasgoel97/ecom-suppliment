import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { LoginIcon } from '@heroicons/react/24/outline'
export default function Example() {
  return (
    
      <Menu as="div" className="relative inline-block text-left">
        <div onClick={()=> console.log("Hi there")}>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Login
            <LoginIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      
      </Menu>
  )
}
