import Link from "next/link"
import { Facebook, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-red-600">MyShop</h2>
          <p className="text-sm text-gray-600 mt-2">
            Simple e-commerce demo built with Next.js and Redux Toolkit.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3 text-red-600">Navigation</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-blue-600">
                Users
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-blue-600">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3 text-red-600">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Github size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  )
}