/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/outline"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
]
export default function About() {
    return (
        <div  >
            about page


        </div >
    )
}
