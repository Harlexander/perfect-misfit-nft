import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Container() {
    return (
      <div className="w-full pt-4">
        <div className="w-full md:max-w-md p-2   bg-transparent rounded-2l">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left border-b text-l focus:text-[#FCD377] hover:text-[#FCD377]" style={{fontFamily : 'Luckiest Guy, cursive'}}>
                  <span>How many MISFITS will be minted?</span> 
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-[#6666]-500">
                %10 of the revenue gained from the collection would be donated to anti-police brutality organizations
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-8">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left border-b text-l focus:text-[#FCD377] hover:text-[#FCD377]" style={{fontFamily : 'Luckiest Guy, cursive'}}>
                  <span>Will there be rarity attached to each MISFIT?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-[#6666]-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-8">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left border-b text-l focus:text-[#FCD377] hover:text-[#FCD377]" style={{fontFamily : 'Luckiest Guy, cursive'}}>
                  <span>When is the launch date?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-[#6666]-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-8">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left border-b text-l focus:text-[#FCD377] hover:text-[#FCD377]" style={{fontFamily : 'Luckiest Guy, cursive'}}>
                  <span>How much will each MISFIT cost to mint?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-[#6666]-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-8">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left border-b text-l focus:text-[#FCD377] hover:text-[#FCD377]" style={{fontFamily : 'Luckiest Guy, cursive'}}>
                  <span>How will you ensure fair distribution?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-[#6666]-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    )
  }