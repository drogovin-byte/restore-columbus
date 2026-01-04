import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function TermsOfService() {
  return (
    <Layout>
      <div className="bg-primary text-white py-12">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service" }
            ]}
          />
        </div>
      </div>

      <div className="container py-16 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8 text-primary">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          
          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Introduction</h2>
            <p>
              Welcome to Restore Hyper Wellness Columbus. These Terms of Service ("Agreement") govern your use of our website, mobile applications, and services ("Services"). By accessing or using our Services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our Services.
            </p>
            <p>
              Restore Hyper Wellness Columbus reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Age Requirement</h2>
            <p>
              You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you are 18 years of age or older. If you are under 18, you may only use our Services with parental or guardian consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Medical Disclaimer</h2>
            <p>
              <strong>IMPORTANT:</strong> The information provided on our website and through our Services is for informational purposes only and is not intended as medical advice or a substitute for professional medical treatment.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Always consult with a qualified healthcare provider before beginning any new therapy, treatment, or wellness program</li>
              <li>Our Services are not intended to diagnose, treat, cure, or prevent any disease</li>
              <li>Individual results may vary based on personal health status, medications, and other factors</li>
              <li>Some therapies may not be suitable for certain medical conditions or medications</li>
              <li>Pregnant women, nursing mothers, and individuals with certain medical conditions should consult their physician before using our Services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Cancellation & No-Show Policy</h2>
            
            <h3 className="font-bold text-lg mb-2 text-primary">Late Cancellation Policy</h3>
            <p>
              Appointments can be canceled up to 24 hours before the scheduled start time without penalty. Any credits or payments used to book the appointment will be automatically returned to your account.
            </p>
            <p>
              If a cancellation occurs within 24 hours of the appointment start time, a late cancellation fee of 25% of the non-member service cost will be charged to the credit card on file.
            </p>

            <h3 className="font-bold text-lg mb-2 mt-6 text-primary">No-Show Policy</h3>
            <p>
              Missed appointments will incur a penalty fee of 50% of the non-member service cost. This fee will be charged to the credit card on file.
            </p>
            <p>
              The Late Cancellation and No-Show policies apply to the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IV Drip Therapy</li>
              <li>Esthetic Services</li>
              <li>Hyperbaric Oxygen Therapy</li>
              <li>Infrared Sauna</li>
              <li>Medical Services</li>
              <li>GLP-1 Weight Loss Programs</li>
            </ul>

            <h3 className="font-bold text-lg mb-2 mt-6 text-primary">Late Arrival Policy</h3>
            <p>
              If you are running late to your appointment, please call us as soon as possible at <a href="tel:6149449041" className="text-primary hover:underline">614-944-9041</a> to notify our staff.
            </p>
            <p>
              We maintain a 5-minute grace period for late arrivals. If you arrive more than 5 minutes late, we may not be able to accommodate your appointment and you will be asked to reschedule. This will be treated as a no-show.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Refund Policy</h2>
            <p>
              We do not offer refunds for services rendered. Once a service has been completed, payment is non-refundable. Unused membership credits may be subject to expiration based on your membership agreement.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Membership Terms</h2>
            <p>
              Membership terms, benefits, and pricing are subject to the Membership Agreement provided at enrollment. Members agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pay membership fees on the agreed-upon schedule</li>
              <li>Adhere to cancellation and no-show policies</li>
              <li>Comply with studio policies and health requirements</li>
              <li>Notify us of any changes to contact information or payment methods</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Health & Safety Requirements</h2>
            <p>
              Clients must disclose any relevant health conditions, medications, or allergies before using our Services. By booking an appointment, you represent that you are in good health and able to safely participate in the selected therapy.
            </p>
            <p>
              Restore Hyper Wellness Columbus reserves the right to refuse service to anyone who does not meet health and safety requirements or who poses a risk to themselves or others.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Liability Waiver</h2>
            <p>
              <strong>ASSUMPTION OF RISK:</strong> By using our Services, you acknowledge that you understand the potential risks associated with wellness therapies and voluntarily assume all risks related to your participation.
            </p>
            <p>
              Restore Hyper Wellness Columbus, its owners, employees, and agents are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any injury, illness, or adverse reactions resulting from our Services</li>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of income or profits</li>
              <li>Any damages arising from service interruptions or technical issues</li>
            </ul>
            <p className="mt-4">
              To the extent permitted by law, our total liability shall not exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of Restore Hyper Wellness Columbus or its content providers and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, or transmit any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">User Conduct</h2>
            <p>
              You agree not to use our Services to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, threaten, or abuse our staff or other clients</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Disrupt or interfere with our operations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is subject to their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts located in Franklin County, Ohio.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
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
