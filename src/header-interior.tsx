import { useEffect, useState } from "react";

const HeaderInterior = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   const handleRequestButtonClick = () => {
    setShowModal(true);
  };

  return (
    <header
      className={`w-100 p-3 z-3 ${scrolled ? "fixed-top" : "position-absolute"}`}
      style={{ background: scrolled ? "white" : "transparent" }}
    >
      <div className="">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a className="" href="/">
              <img src={`${scrolled ? "./assets/horizontal-logo.svg" : "./assets/horizontal-logo.svg"}`}/>
            </a>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <nav className="d-lg-flex gap-3 fs-5 align-items-center d-none">
              <a className="text-info" href="/admissions">Admissions</a>
              <a className="text-info" href="/tuition-and-cost">Tuition &amp; Cost</a>
              <a className="text-info" href="/programs">Explore Programs</a>
              <a className="text-info" href="/student-support-services">Student Support Services</a>
              <a className="text-info" href="/current-students">Current Students</a>
            </nav>
            <div className="d-flex gap-2">
              <div className="btn btn-shadow" onClick={handleRequestButtonClick}>Request Information</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderInterior;
