import { AnalysisResult } from "@/lib/types";
import { Lightbulb, Sparkles } from "lucide-react";

interface ExecutiveSummaryProps {
  result: AnalysisResult;
}

const getKeyInsight = (r: AnalysisResult): string => {
  const scores = [
    { label: "Environmental Impact", value: r.environmental_impact },
    { label: "Safety Impact", value: r.safety_impact },
    { label: "Economic Growth", value: r.economic_growth },
    { label: "Public Trust", value: r.public_trust },
  ];
  const best = scores.sort((a, b) => b.value - a.value)[0];
  return `Strongest dimension: ${best.label} at ${best.value.toFixed(1)}/10`;
};

const ExecutiveSummary = ({ result }: ExecutiveSummaryProps) => (
  <div className="dashboard-card animate-fade-in" style={{ animationDelay: "200ms" }}>
    <h2 className="section-label mb-3 flex items-center gap-1.5">
      <Sparkles className="h-3.5 w-3.5" />
      AI Executive Summary
    </h2>
    <p className="mb-3 text-sm leading-relaxed text-card-foreground/80">
      {result.explanation}
    </p>
    <div className="flex items-start gap-2 rounded-md bg-accent/10 p-3">
      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
      <p className="text-xs font-medium text-accent">
        {getKeyInsight(result)}
      </p>
    </div>
  </div>
);

export default ExecutiveSummary;
