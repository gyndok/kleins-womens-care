import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Copy } from "lucide-react";

const MochiHealth = () => {
  const [billingCycle, setBillingCycle] = useState<"1" | "3" | "12">("1");
  const [copied, setCopied] = useState(false);

  const pricing = {
    "1": { label: "1 Month", price: "$79", period: "/mo" },
    "3": { label: "3 Months", price: "$79", period: "/mo", note: "billed quarterly" },
    "12": { label: "12 Months", price: "$79", period: "/mo", note: "billed annually" },
  };

  const included = [
    "Unlimited access to a physician & dietitian",
    "Nutrition coaching sessions",
    "Access to weight loss medications and more",
    "24/7 customer support",
  ];

  const addOns = [
    { name: "Compounded Semaglutide", price: "+$99/mo" },
    { name: "Compounded Tirzepatide", price: "+$199/mo" },
    { name: "Treatments across skincare, hair growth, and more", price: "" },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText("y7uo2n");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selected = pricing[billingCycle];

  return (
    <section id="mochi-health" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-olive)" }}>
              Mochi Health Weight Loss Membership
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--charcoal)" }}>
              As a Mochi Health provider, I offer my patients access to exceptional,
              affordable weight loss care with high-level human support. I am currently
              accepting Mochi patients in Texas, North Carolina, Missouri, and Kentucky.
            </p>
          </div>

          {/* Pricing Card */}
          <div
            className="rounded-2xl border p-8 mb-8 max-w-xl mx-auto"
            style={{ borderColor: "var(--pale-silver)", boxShadow: "var(--card-shadow)" }}
          >
            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div
                className="inline-flex rounded-full p-1"
                style={{ backgroundColor: "rgba(198, 197, 185, 0.3)" }}
              >
                {(["1", "3", "12"] as const).map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === cycle ? "text-white shadow-sm" : ""
                    }`}
                    style={
                      billingCycle === cycle
                        ? { backgroundColor: "var(--deep-teal)" }
                        : { color: "var(--charcoal)" }
                    }
                  >
                    {pricing[cycle].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold" style={{ color: "var(--dark-olive)" }}>
                  {selected.price}
                </span>
                <span className="text-lg" style={{ color: "var(--charcoal)" }}>
                  {selected.period}
                </span>
              </div>
              {"note" in selected && selected.note && (
                <p className="text-sm mt-1" style={{ color: "var(--charcoal)" }}>
                  {selected.note}
                </p>
              )}
              <p className="text-sm mt-1 font-medium" style={{ color: "var(--teal)" }}>
                Base membership
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--charcoal)" }}>
                What's Included
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--teal)" }} />
                    <span className="text-sm" style={{ color: "var(--dark-olive)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medication Add-Ons */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--charcoal)" }}>
                Medication Add-Ons
              </h3>
              <div className="space-y-3">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-center justify-between rounded-lg px-4 py-3"
                    style={{ backgroundColor: "rgba(198, 197, 185, 0.15)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--dark-olive)" }}>{addon.name}</span>
                    {addon.price && (
                      <span className="text-sm font-semibold whitespace-nowrap ml-4" style={{ color: "var(--deep-teal)" }}>
                        {addon.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-center mb-2" style={{ color: "var(--charcoal)" }}>
              Medication pricing subject to change. Prescription required.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-5 h-5" style={{ color: "var(--teal)" }} />
            <p className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>
              Join a community of 100,000+ patients
            </p>
          </div>

          {/* Referral Code Box */}
          <div
            className="rounded-2xl p-6 text-center max-w-md mx-auto mb-8"
            style={{ background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }}
          >
            <p className="text-white text-sm font-medium mb-2">
              Use my provider referral code at signup
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold tracking-widest text-white">
                y7uo2n
              </span>
              <button
                onClick={handleCopyCode}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Copy referral code"
              >
                <Copy className="w-5 h-5 text-white" />
              </button>
            </div>
            {copied && (
              <p className="text-white/80 text-xs mt-2">Copied to clipboard!</p>
            )}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white px-8 gap-2"
            >
              <a href="https://joinmochi.com" target="_blank" rel="noopener noreferrer">
                Sign Up at Mochi Health
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs mt-4" style={{ color: "var(--charcoal)" }}>
              Currently accepting patients in TX, NC, MO, and KY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MochiHealth;
