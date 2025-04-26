import Link from "next/link";

export function Navigation() {
    return (
        <div className="md:flex pt-12 hidden justify-between">
            <div className="w-[40%] flex text-md pl-8 gap-x-8">
                <Link href={'#'} className="hover:text-yellow-500">Home</Link>
                <Link href={'#'} className="hover:text-yellow-500">About</Link>
                <Link href={'#'} className="hover:text-yellow-500">Services</Link>
                <Link href={'#'} className="hover:text-yellow-500">Contact Us</Link>
            </div>
            <button className="bg-yellow-300 text-black py-3 px-12">
                GET A QUOTE
            </button>
        </div>
    )
}