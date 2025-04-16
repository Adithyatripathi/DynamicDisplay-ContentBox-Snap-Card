function Header({
  title = "Reusable Header Component",
  subtitle = "A flexible UI element designed to work seamlessly across apps—whether you're building a shopping site, a dating app, a blog, or a dashboard."
}) {
  return (
    <header className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}

export default Header;
