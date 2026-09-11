import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: "var(--dark-olive)", color: "var(--pale-silver)" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white font-bold text-lg mb-3">Geffrey H. Klein, MD, FACOG</h2>
            <p className="text-sm">Women's Specialists of Clear Lake</p>
            <p className="text-sm">400 Medical Center Blvd, Suite 300</p>
            <p className="text-sm">Webster, TX 77598</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-3">Contact</h2>
            <p className="text-sm">
              Phone: <a href="tel:2815570300" className="hover:text-white">(281) 557-0300</a>
            </p>
            <p className="text-sm">Fax: (281) 557-3301</p>
            <p className="text-sm">Languages: English, Spanish</p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-3">Quick Links</h2>
            <div className="space-y-1">
              <Link to="/weight-loss" className="block text-sm hover:text-white">Weight Loss Clinic</Link>
              <Link to="/patient-education" className="block text-sm hover:text-white">Patient Education</Link>
              <Link to="/pregnancy-calculator" className="block text-sm hover:text-white">Due Date Calculator</Link>
              <Link to="/appointment" className="block text-sm hover:text-white">Book Appointment</Link>
              <a
                href="https://healow.com/apps/provider/geffrey-klein-1466084"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white"
              >
                Patient Portal
              </a>
              <a
                href="https://www.facebook.com/groups/64781863202"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-white"
              >
                Facebook Group
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm">Having trouble using this website or a handout? Call <a className="underline" href="tel:2815570300">(281) 557-0300</a> and tell our office what you need help accessing.</p>
        <div className="border-t mt-8 pt-8 text-sm text-center" style={{ borderColor: "var(--charcoal)" }}>
          &copy; {new Date().getFullYear()} Geffrey H. Klein, MD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
