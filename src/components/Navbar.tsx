
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <a href="#" className="text-lg font-bold">Logo</a>
        <div>
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4">About</a>
          <a href="#" className="px-4">Contact</a>
        </div>
      </div>
    </nav>
  )
}
