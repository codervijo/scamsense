import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { History as HistoryIcon, Trash2, Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface HistoryItem {
  id: string;
  timestamp: number;
  message: string;
  verdict: "safe" | "suspicious" | "scam";
  confidence: number;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const stored = localStorage.getItem("scamsense-history");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setHistory(parsed.sort((a: HistoryItem, b: HistoryItem) => b.timestamp - a.timestamp));
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    }
  };

  const clearHistory = () => {
    localStorage.removeItem("scamsense-history");
    setHistory([]);
    toast.success("History cleared");
  };

  const deleteItem = (id: string) => {
    const updated = history.filter((item) => item.id !== id);
    localStorage.setItem("scamsense-history", JSON.stringify(updated));
    setHistory(updated);
    toast.success("Item removed");
  };

  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case "safe":
        return {
          icon: <CheckCircle className="h-5 w-5" />,
          label: "Safe",
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/30",
        };
      case "suspicious":
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          label: "Suspicious",
          color: "text-yellow-500",
          bgColor: "bg-yellow-500/10",
          borderColor: "border-yellow-500/30",
        };
      case "scam":
        return {
          icon: <XCircle className="h-5 w-5" />,
          label: "Scam",
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          borderColor: "border-red-500/30",
        };
      default:
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          label: "Unknown",
          color: "text-muted-foreground",
          bgColor: "bg-muted/10",
          borderColor: "border-border",
        };
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background cyber-grid">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl radial-glow">
              <HistoryIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Analysis History
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review your past scam analysis results
            </p>
          </div>

          {/* Actions */}
          {history.length > 0 && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {history.length} {history.length === 1 ? "analysis" : "analyses"}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={clearHistory}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
          )}

          {/* History List */}
          {history.length === 0 ? (
            <Card className="p-12 text-center bg-card/80 backdrop-blur-lg">
              <div className="space-y-4">
                <div className="inline-flex p-4 bg-muted/30 rounded-full">
                  <HistoryIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">No history yet</h3>
                  <p className="text-muted-foreground">
                    Analyze your first message to see it here
                  </p>
                </div>
                <Button onClick={() => navigate("/")} className="mt-4">
                  Analyze a Message
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {history.map((item) => {
                const config = getVerdictConfig(item.verdict);
                return (
                  <Card
                    key={item.id}
                    className="bg-card/80 backdrop-blur-lg border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg ${config.bgColor} ${config.borderColor} border`}>
                            <div className={config.color}>{config.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className={`${config.bgColor} ${config.color} border-0`}>
                                {config.label}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {formatDate(item.timestamp)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {item.message}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteItem(item.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Confidence:</span>
                        <span className={`font-semibold ${config.color}`}>
                          {item.confidence}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
