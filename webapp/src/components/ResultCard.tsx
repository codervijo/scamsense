import { Shield, AlertTriangle, XCircle, CheckCircle, Clock, Link2, UserX, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Signal {
  icon: React.ReactNode;
  label: string;
  detected: boolean;
}

export interface AnalysisResult {
  verdict: "safe" | "suspicious" | "scam";
  confidence: number;
  signals: {
    urgency: boolean;
    fakeLinks: boolean;
    impersonation: boolean;
    suspicious: boolean;
  };
  explanation: string;
}

interface ResultCardProps {
  result: AnalysisResult;
}

const ResultCard = ({ result }: ResultCardProps) => {
  const verdictConfig = {
    safe: {
      icon: <CheckCircle className="h-8 w-8" />,
      label: "Safe",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    suspicious: {
      icon: <AlertTriangle className="h-8 w-8" />,
      label: "Suspicious",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    scam: {
      icon: <XCircle className="h-8 w-8" />,
      label: "Likely Scam",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
  };

  const config = verdictConfig[result.verdict];

  const signals: Signal[] = [
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Urgency Tactics",
      detected: result.signals.urgency,
    },
    {
      icon: <Link2 className="h-4 w-4" />,
      label: "Fake Links",
      detected: result.signals.fakeLinks,
    },
    {
      icon: <UserX className="h-4 w-4" />,
      label: "Impersonation",
      detected: result.signals.impersonation,
    },
    {
      icon: <AlertCircle className="h-4 w-4" />,
      label: "Suspicious Patterns",
      detected: result.signals.suspicious,
    },
  ];

  return (
    <Card className="p-8 space-y-8 bg-card/80 backdrop-blur-lg border-border shadow-2xl animate-fade-in">
      {/* Verdict */}
      <div className="text-center space-y-4">
        <div className={`inline-flex p-4 rounded-2xl ${config.bgColor} ${config.borderColor} border-2`}>
          <div className={config.color}>{config.icon}</div>
        </div>
        <div>
          <h2 className={`text-3xl font-bold ${config.color}`}>{config.label}</h2>
          <p className="text-muted-foreground mt-2">Analysis Complete</p>
        </div>
      </div>

      {/* Confidence Score */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Confidence Score</span>
          <span className={`text-sm font-bold ${config.color}`}>{result.confidence}%</span>
        </div>
        <Progress value={result.confidence} className="h-3" />
      </div>

      {/* Detected Signals */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Detected Signals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {signals.map((signal, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                signal.detected
                  ? "bg-destructive/10 border-destructive/30"
                  : "bg-muted/30 border-border"
              }`}
            >
              <div className={signal.detected ? "text-destructive" : "text-muted-foreground"}>
                {signal.icon}
              </div>
              <span className={`text-sm font-medium ${signal.detected ? "text-foreground" : "text-muted-foreground"}`}>
                {signal.label}
              </span>
              {signal.detected && (
                <Badge variant="destructive" className="ml-auto">Detected</Badge>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div className="space-y-3 p-4 bg-muted/30 rounded-lg border border-border">
        <h3 className="text-sm font-semibold text-foreground">Analysis Explanation</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{result.explanation}</p>
      </div>
    </Card>
  );
};

export default ResultCard;
