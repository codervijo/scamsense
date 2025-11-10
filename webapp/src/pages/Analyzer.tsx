import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultCard, { AnalysisResult } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Analyzer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      // Auto-analyze the message
      analyzeMessage(location.state.message);
    }
  }, [location.state]);

  const saveToHistory = (analysisResult: AnalysisResult, analyzedMessage: string) => {
    const historyItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      message: analyzedMessage,
      verdict: analysisResult.verdict,
      confidence: analysisResult.confidence,
    };

    const existing = localStorage.getItem("scamsense-history");
    const history = existing ? JSON.parse(existing) : [];
    history.push(historyItem);
    
    // Keep only last 50 items
    if (history.length > 50) {
      history.shift();
    }
    
    localStorage.setItem("scamsense-history", JSON.stringify(history));
  };

  const analyzeMessage = async (text: string) => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock analysis result (in production, this would call a real AI service)
    const mockResult: AnalysisResult = {
      verdict: text.toLowerCase().includes("urgent") || text.toLowerCase().includes("verify") ? "scam" : 
               text.toLowerCase().includes("suspicious") ? "suspicious" : "safe",
      confidence: Math.floor(Math.random() * 20) + 80,
      signals: {
        urgency: text.toLowerCase().includes("urgent") || text.toLowerCase().includes("immediately"),
        fakeLinks: text.includes("http") || text.includes("click"),
        impersonation: text.toLowerCase().includes("bank") || text.toLowerCase().includes("support"),
        suspicious: text.toLowerCase().includes("verify") || text.toLowerCase().includes("account"),
      },
      explanation: text.toLowerCase().includes("urgent") 
        ? "This message shows multiple red flags including urgency tactics, suspicious links, and potential impersonation. The sender is trying to create panic to make you act without thinking. Always verify such requests through official channels."
        : text.toLowerCase().includes("suspicious")
        ? "This message contains some suspicious elements. While not definitively a scam, we recommend exercising caution and verifying the sender's identity through official channels before taking any action."
        : "This message appears to be legitimate. No significant red flags were detected. However, always remain cautious and verify important requests through known official channels.",
    };

    setResult(mockResult);
    saveToHistory(mockResult, text);
    setIsAnalyzing(false);
    toast.success("Analysis complete!");
  };

  const handleAnalyze = () => {
    if (!message.trim()) {
      toast.error("Please enter a message to analyze");
      return;
    }
    analyzeMessage(message);
  };

  const handleReset = () => {
    setMessage("");
    setResult(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 radial-glow opacity-50" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>

          {/* Title */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Message <span className="text-gradient">Analyzer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Paste your message below for AI-powered scam detection
            </p>
          </div>

          {/* Input Section */}
          {!result && (
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 md:p-8 shadow-2xl mb-8 animate-fade-in">
              <Textarea
                placeholder="Paste suspicious email or text message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[250px] bg-muted/50 border-border text-foreground resize-none text-base mb-6"
                disabled={isAnalyzing}
              />
              <div className="flex justify-end">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={!message.trim() || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5" />
                      Analyze Message
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isAnalyzing && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-fade-in">
              <div className="relative">
                <Shield className="h-16 w-16 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Shield className="h-16 w-16 text-primary opacity-20" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Analyzing Message...</h3>
                <p className="text-muted-foreground">AI is scanning for threats and patterns</p>
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="space-y-6">
              <ResultCard result={result} />
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleReset} size="lg">
                  Analyze Another Message
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analyzer;
