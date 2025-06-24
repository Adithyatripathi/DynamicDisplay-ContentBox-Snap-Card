function Footer() {
  return (
    <footer className="footer">
      <h1 className="text-xl font-semibold mb-2">
        This is the end of the world, check this out!!
      </h1>
      <p className="text-sm mb-2">
        @Adithya Tripathi; &copy; {new Date().getFullYear()} - You are ready to do it
      </p>
      <p className="text-sm">
        Contact:{" "}
        <a href="mailto:adithyatripathi1279@gmail.com">adithyatripathi1279@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;