import { AnalysisResult } from "@/lib/types";
import { Award } from "lucide-react";

interface OverallIndexProps {
  result: AnalysisResult;
}

const getOverall = (r: AnalysisResult) =>
  Number(((r.economic_growth + r.safety_impact + r.environmental_impact + r.public_trust) / 4).toFixed(1));

const getLabel = (s: number) => {
  if (s >= 8.5) return "Exceptional Urban Impact";
  if (s >= 7.5) return "High Positive Urban Impact";
  if (s >= 6) return "Moderate Positive Impact";
  if (s >= 4) return "Neutral Impact";
  return "Low Impact — Needs Revision";
};

const getColor = (s: number) => {
  if (s >= 7.5) return "text-success";
  if (s >= 5) return "text-accent";
  return "text-destructive";
};

const OverallIndex = ({ result }: OverallIndexProps) => {
  const score = getOverall(result);
  return (
    <div
      className="dashboard-card-elevated flex flex-col items-center py-6 text-center opacity-0 animate-fade-in"
      style={{ animationDelay: "600ms" }}
    >
      <Award className="mb-2 h-5 w-5 text-muted-foreground" />
      <span className="section-label mb-1">Overall Urban Impact Index</span>
      <span className={`text-5xl font-bold ${getColor(score)}`}>{score}</span>
      <span className="mt-0.5 text-xs text-muted-foreground">/10</span>
      <p className="mt-2 text-sm font-medium text-foreground">{getLabel(score)}</p>
    </div>
  );
};

export default OverallIndex;
