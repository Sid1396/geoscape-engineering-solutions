import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function PrivacyPolicy() {
  const heroSection = useScrollAnimation();
  const contentSection = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              Legal
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Privacy Policy & Terms of Service
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Your privacy and trust are important to us. This page outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div ref={contentSection.ref} className={cn("max-w-4xl mx-auto space-y-12 scroll-fade-up", contentSection.isVisible && "visible")}>
            
            {/* Privacy Policy */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Privacy Policy</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Protecting your private information is our priority. This Statement of Privacy applies to the geoscapesolutions.com website and governs data collection and usage. By using the geoscapesolutions.com website, you consent to the data practices described in this statement.
                </p>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Collection of Your Personal Information</h3>
                  <p className="mb-3">
                    Geoscape Engineering Solutions may collect personally identifiable information, such as your e-mail address, name, home or work address, or telephone number when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fill out our contact form or request a quote</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Contact us via email or phone</li>
                    <li>Engage with our services</li>
                  </ul>
                  <p className="mt-3">
                    Information about your computer hardware and software may also be automatically collected by geoscapesolutions.com. This information can include: your IP address, browser type, domain names, access times, and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Use of Your Personal Information</h3>
                  <p className="mb-3">
                    Geoscape Engineering Solutions collects and uses your personal information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Operate the website and deliver the services you have requested</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Inform you of other products or services available from Geoscape Engineering Solutions</li>
                    <li>Conduct research about your opinion of current services or potential new services</li>
                    <li>Send you service updates and important information</li>
                  </ul>
                  <p className="mt-3">
                    Geoscape Engineering Solutions does not sell, rent, or lease its customer lists to third parties. We may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Geoscape Engineering Solutions, and they are required to maintain the confidentiality of your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Security of Your Personal Information</h3>
                  <p>
                    You are responsible for safeguarding and preventing unauthorized access to any information and credentials you use to access our website. You agree not to disclose your password to any third party and you are responsible for any activity using your account, whether or not you authorized that activity. You must immediately notify Geoscape Engineering Solutions of any unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Changes to This Statement</h3>
                  <p>
                    Geoscape Engineering Solutions will occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage you to periodically review this Statement to be informed of how Geoscape Engineering Solutions is protecting your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="space-y-6 pt-12 border-t border-border">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Terms and Conditions</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms and Conditions ("Agreement" or "Terms") are an agreement between you and Geoscape Engineering Solutions concerning the terms under which we offer you information, products, and services available through geoscapesolutions.com (collectively the "Service"). By using geoscapesolutions.com, you agree to be bound by these Terms and Conditions.
                </p>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Acceptance of Terms</h3>
                  <p>
                    By accessing and using geoscapesolutions.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Use License</h3>
                  <p>
                    Permission is granted to temporarily access the materials on Geoscape Engineering Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Service Delivery</h3>
                  <p>
                    Geoscape Engineering Solutions is committed to delivering services as per the fee quote shared with you on a case-to-case basis. We continuously improve our service delivery system from time to time. If you are not satisfied with our services, please contact us immediately so that we can take corrective actions or clarifications to your satisfaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Limited Liability</h3>
                  <p>
                    Under any circumstances, the maximum liability of Geoscape Engineering Solutions shall be limited to the fee we collected for the services. We will not be liable for any loss or damages that may be incurred or claimed by the customer due to delay in process or any other circumstances beyond our reasonable control.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Jurisdiction</h3>
                  <p>
                    Any disputes or claims arising in connection with service engagements with Geoscape Engineering Solutions shall be governed in accordance with the laws of India. Courts in Mumbai, Maharashtra shall have the exclusive jurisdiction to settle any matters.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 mt-6">Contact Information</h3>
                  <p>
                    For any clarification regarding these Terms and Conditions or Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-sage rounded-lg">
                    <p className="text-foreground font-medium mb-2">Geoscape Engineering Solutions</p>
                    <p className="text-sm">Email: <a href="mailto:info@geoscapesolutions.com" className="text-primary hover:underline">info@geoscapesolutions.com</a></p>
                    <p className="text-sm">Phone: <a href="tel:+918425984962" className="text-primary hover:underline">+91 84259 84962</a></p>
                    <p className="text-sm mt-2">
                      B-05, Plot Number 612, Anita CHS LTD<br />
                      Charkop Sector 6, Near Charkop Petrol Pump<br />
                      Kandivali west, Mumbai 400067
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

