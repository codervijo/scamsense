import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Privacy, <span className="text-gradient">Our Promise</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We take your privacy seriously. Here's how we protect your data.
            </p>
          </div>

          {/* Content */}
          <Card className="p-8 md:p-12 space-y-8 bg-card/50 backdrop-blur-lg border-border animate-fade-in">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">1. Data Collection</h3>
              <p className="text-muted-foreground leading-relaxed">
                ScamSense is designed with privacy as a core principle. By default, we do not store any messages you analyze. 
                All analysis happens in real-time, and the data is processed only for the duration needed to provide you with results.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">2. How We Use Your Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                The messages you submit are analyzed using AI algorithms to detect potential scams, phishing attempts, and fraudulent patterns. 
                This analysis is performed on secure servers, and no personally identifiable information is extracted or stored without your explicit consent.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">3. Data Storage</h3>
              <p className="text-muted-foreground leading-relaxed">
                By default, ScamSense does not store your analyzed messages. If you choose to save results for future reference, 
                this data is stored locally in your browser's local storage and never transmitted to our servers unless you explicitly opt-in to cloud storage features.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">4. Third-Party Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use industry-standard AI services to power our scam detection. These services are bound by strict data protection agreements 
                and do not retain your data beyond the time required to provide the analysis.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">5. Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                We employ industry-standard encryption and security measures to protect your data during transmission and analysis. 
                All communications between your device and our servers use HTTPS encryption.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">6. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to know what data we collect, request deletion of any stored data, and opt-out of optional features. 
                Since we don't store messages by default, there's typically no data to delete unless you've opted into storage features.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">7. Cookies and Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use minimal cookies strictly necessary for the website's functionality. We do not use tracking cookies or share data with advertising networks.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page 
                and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">9. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <a href="mailto:privacy@scamsense.ai" className="text-primary hover:text-primary/80 transition-colors">
                privacy@scamsense.ai
              </a>
            </section>

            <section className="pt-8 border-t border-border">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At ScamSense, we believe that protecting you from scams shouldn't come at the cost of your privacy. 
                  That's why we've built our service with privacy-first principles, ensuring your data remains yours.
                </p>
              </div>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
