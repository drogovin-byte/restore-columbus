import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" }
            ]}
          />
        </div>
      </div>

      <div className="container py-16 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          
          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Introduction</h2>
            <p>
              Welcome to Restore Hyper Wellness Columbus ("Restore Columbus," "Company," "We," or "Our"). We respect your privacy and are committed to protecting it through our compliance with this privacy policy ("Privacy Policy").
            </p>
            <p>
              This Privacy Policy describes the types of information we may collect from you or that you may provide when you (i) visit our website and other online services (collectively, "Technology Service"), (ii) use our services and therapies ("Services"), and (iii) our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Technology Service and/or Services, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Information We Collect</h2>
            
            <h3 className="font-bold text-lg mb-2 text-primary">Personal Information</h3>
            <p>
              We collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Account and membership information</li>
              <li>Payment and billing information</li>
              <li>Health and wellness information (collected for service customization)</li>
              <li>Communications you send us</li>
            </ul>

            <h3 className="font-bold text-lg mb-2 mt-6 text-primary">Non-Personal Information</h3>
            <p>
              We also collect non-personal information automatically as you use our services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Browser and device information</li>
              <li>IP address and location data</li>
              <li>Website usage and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and improve our Services</li>
              <li>To process bookings, payments, and memberships</li>
              <li>To communicate with you about your account and services</li>
              <li>To send promotional materials and updates (with your consent)</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
              <li>To analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Health Information & HIPAA</h2>
            <p>
              Some of our services involve health and wellness assessments. Any health information you provide is treated with strict confidentiality. We maintain appropriate safeguards to protect sensitive health data in accordance with applicable privacy laws.
            </p>
            <p>
              Please note: While we take privacy seriously, our services are not subject to HIPAA unless you are receiving care from a licensed healthcare provider. Always consult with our medical professionals regarding your health information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers who assist us in operating our website and services</li>
              <li>With payment processors to process transactions</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:info@restorecolumbus.com" className="text-primary hover:underline">info@restorecolumbus.com</a> or call <a href="tel:6149449041" className="text-primary hover:underline">614-944-9041</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p className="font-semibold mb-2">Restore Hyper Wellness Columbus</p>
              <p>Email: <a href="mailto:info@restorecolumbus.com" className="text-primary hover:underline">info@restorecolumbus.com</a></p>
              <p>Phone: <a href="tel:6149449041" className="text-primary hover:underline">614-944-9041</a></p>
              <p>Address: Columbus, Ohio</p>
            </div>
          </section>

          <p className="text-sm text-muted-foreground mt-12 pt-8 border-t">
            <strong>Last Updated:</strong> January 2025
          </p>

        </div>
      </div>
    </Layout>
  );
}
