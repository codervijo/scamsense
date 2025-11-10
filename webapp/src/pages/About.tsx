import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Lock, AlertTriangle, CheckCircle, Link2, UserX, Clock, Eye, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const detectionMethods = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Urgency Detection",
      description: "Identifies pressure tactics like 'act now' or 'immediate action required' that scammers use to bypass critical thinking.",
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "Link Analysis",
      description: "Scans for suspicious URLs, shortened links, and domain mismatches that indicate phishing attempts.",
    },
    {
      icon: <UserX className="h-6 w-6" />,
      title: "Impersonation Detection",
      description: "Recognizes attempts to impersonate banks, government agencies, or trusted organizations.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Pattern Recognition",
      description: "Uses AI to identify common scam patterns, suspicious wording, and social engineering tactics.",
    },
  ];

  const safetyTips = [
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Verify the Source",
      tip: "Always verify unexpected messages through official channels. Contact organizations directly using known phone numbers or websites.",
    },
    {
      icon: <Link2 className="h-5 w-5" />,
      title: "Check Links Carefully",
      tip: "Hover over links before clicking. Look for misspellings or suspicious domains. When in doubt, don't click.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Protect Your Information",
      tip: "Never share passwords, PINs, or sensitive data via email or text. Legitimate organizations won't ask for these.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Resist Urgency",
      tip: "Scammers create false urgency. Take time to verify before acting on 'urgent' requests for money or information.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Use Secure Connections",
      tip: "Only enter sensitive information on websites with HTTPS. Avoid public Wi-Fi for banking or shopping.",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Keep Records",
      tip: "Save suspicious messages and report them to authorities. Your report could help protect others.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Paste Message",
      description: "Copy and paste any suspicious email or text message into our analyzer.",
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Our AI scans for red flags, suspicious patterns, and known scam indicators.",
    },
    {
      step: "3",
      title: "Get Results",
      description: "Receive a detailed verdict with confidence score and explanation of detected threats.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background cyber-grid">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl radial-glow">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              About ScamSense
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Your AI-powered shield against phishing, fraud, and online scams
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-card/80 backdrop-blur-lg border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ScamSense leverages advanced AI technology to protect users from increasingly sophisticated online scams. 
                    We believe everyone deserves access to powerful fraud detection tools that work instantly, privately, and effectively. 
                    Our mission is to make the digital world safer by empowering individuals with the knowledge and tools to identify threats before they become victims.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-foreground">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorks.map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-lg border-border relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none">
                    {item.step}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detection Methods */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-foreground">Detection Methods</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ScamSense uses multiple AI-powered techniques to identify scams and phishing attempts
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detectionMethods.map((method, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-lg border-border hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
                        {method.icon}
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Tips */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-foreground">Stay Safe Online</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential tips to protect yourself from scams and phishing attacks
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-lg border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {tip.icon}
                      </div>
                      <CardTitle className="text-base">{tip.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.tip}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Privacy Section */}
          <Card className="bg-primary/5 backdrop-blur-lg border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">Privacy First</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is our priority. All message analysis happens securely, and we don't store your messages 
                    unless you explicitly choose to save them in your browser's local storage. We never share, sell, or 
                    transmit your data to third parties. Analysis results are kept private and can be cleared at any time.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/privacy")}
                    className="mt-4"
                  >
                    Read Privacy Policy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-6 py-8">
            <h2 className="text-3xl font-bold text-foreground">Ready to Stay Protected?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start analyzing suspicious messages now and protect yourself from scams
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate("/analyzer")}
              className="gap-2"
            >
              <Shield className="h-5 w-5" />
              Try ScamSense Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
