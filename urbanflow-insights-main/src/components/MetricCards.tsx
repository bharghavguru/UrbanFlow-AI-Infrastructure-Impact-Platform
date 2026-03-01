import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { AnalysisResult, METRICS } from "@/lib/types";

interface MetricCardsProps {
  result: AnalysisResult;
}

const getTrend = (value: number) => {
  if (value >= 7.5)
    return { icon: <TrendingUp className="h-3.5 w-3.5 text-success" />, label: "Strong" };
  if (value >= 5)
    return { icon: <Minus className="h-3.5 w-3.5 text-warning" />, label: "Moderate" };
  return { icon: <TrendingDown className="h-3.5 w-3.5 text-destructive" />, label: "Low" };
};

const MetricCards = ({ result }: MetricCardsProps) => (
  <div className="grid grid-cols-2 gap-3">
    {METRICS.map((m, i) => {
      const value = result[m.key] as number;
      const trend = getTrend(value);
      return (
        <div
          key={m.key}
          className="dashboard-card opacity-0 animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="section-label">{m.shortLabel}</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
              {trend.icon}
              {trend.label}
            </span>
          </div>
          <div className="mb-2 text-3xl font-bold text-foreground">
            {value.toFixed(1)}
            <span className="ml-0.5 text-sm font-normal text-muted-foreground">/10</span>
          </div>
          <div className="metric-bar">
            <div
              className="h-full rounded-full animate-bar-fill"
              style={{
                ["--bar-width" as string]: `${(value / 10) * 100}%`,
                backgroundColor: `hsl(var(${m.colorVar}))`,
                animationDelay: `${i * 80 + 300}ms`,
              }}
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default MetricCards;
