const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm mb-2">
            <strong>Geffrey H. Klein, MD, FACOG</strong>
          </p>
          <p className="text-sm opacity-90 mb-2">
            Women's Specialists of Clear Lake | 400 Medical Center Blvd, Suite 300, Webster, TX 77598
          </p>
          <p className="text-sm opacity-90 mb-4">
            Phone: (281) 557-0300 | Fax: (281) 557-3301
          </p>
          <div className="border-t border-background/20 pt-4 mt-4">
            <p className="text-xs opacity-75">
              Copyright 1999-2025 C-HCA, Inc. | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
