import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Lock, Cpu } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (!message.trim()) {
      toast.error("Please enter a message to analyze");
      return;
    }
    navigate("/analyzer", { state: { message } });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleAnalyze();
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Spot scams before they{" "}
              <span className="text-gradient">spot you.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Paste any email or text message and let AI detect phishing, fraud, and scam tricks — privately, in your browser.
            </p>
          </div>

          {/* Message Input */}
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 md:p-8 shadow-2xl">
            <Textarea
              placeholder="Paste suspicious email or text message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-[200px] bg-muted/50 border-border text-foreground resize-none text-base"
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
              <p className="text-sm text-muted-foreground">
                Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd> + <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> to analyze
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={handleAnalyze}
                disabled={!message.trim()}
                className="w-full md:w-auto"
              >
                <Shield className="h-5 w-5" />
                Analyze Message
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Privacy-First</h3>
                <p className="text-sm text-muted-foreground">No data stored without consent</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Cpu className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">Advanced detection algorithms</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Instant Results</h3>
                <p className="text-sm text-muted-foreground">Get analysis in seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
