import { AnalysisResult } from "@/lib/types";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

interface InterpretationPanelProps {
  result: AnalysisResult;
}

interface Insight {
  label: string;
  level: "strong" | "moderate" | "low";
}

const getInsights = (r: AnalysisResult): Insight[] => {
  const insights: Insight[] = [];

  if (r.economic_growth >= 7)
    insights.push({ label: "High Economic Multiplier", level: "strong" });
  else if (r.economic_growth >= 5)
    insights.push({ label: "Moderate Economic Multiplier", level: "moderate" });
  else insights.push({ label: "Low Economic Multiplier", level: "low" });

  if (r.safety_impact >= 7)
    insights.push({ label: "Strong Safety Enhancement", level: "strong" });
  else if (r.safety_impact >= 5)
    insights.push({ label: "Moderate Safety Enhancement", level: "moderate" });
  else insights.push({ label: "Limited Safety Enhancement", level: "low" });

  if (r.environmental_impact >= 7)
    insights.push({ label: "Strong Sustainability Benefit", level: "strong" });
  else if (r.environmental_impact >= 5)
    insights.push({ label: "Moderate Sustainability Benefit", level: "moderate" });
  else insights.push({ label: "Limited Sustainability Benefit", level: "low" });

  if (r.public_trust >= 7)
    insights.push({ label: "High Institutional Strength Impact", level: "strong" });
  else if (r.public_trust >= 5)
    insights.push({ label: "Moderate Institutional Strength Impact", level: "moderate" });
  else insights.push({ label: "Low Institutional Strength Impact", level: "low" });

  return insights;
};

const iconMap = {
  strong: <CheckCircle2 className="h-3.5 w-3.5 text-success" />, 
  moderate: <Info className="h-3.5 w-3.5 text-warning" />,
  low: <AlertCircle className="h-3.5 w-3.5 text-destructive" />,
};

const bgMap = {
  strong: "bg-success-muted",
  moderate: "bg-warning-muted",
  low: "bg-danger-muted",
};

const InterpretationPanel = ({ result }: InterpretationPanelProps) => {
  const insights = getInsights(result);
  return (
    <div className="dashboard-card opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
      <h3 className="section-label mb-3">Impact Interpretation</h3>
      <div className="space-y-2">
        {insights.map((ins, i) => (
          <div
            key={i}
            className={`flex items-center gap-2.5 rounded-md px-3 py-2 ${bgMap[ins.level]}`}
          >
            {iconMap[ins.level]}
            <span className="text-xs font-medium text-foreground">{ins.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterpretationPanel;
