import { AnalysisResult, METRICS } from "@/lib/types";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie,
} from "recharts";

interface ChartsGridProps {
  result: AnalysisResult;
}

const COLORS = [
  "hsl(200, 50%, 38%)",
  "hsl(222, 52%, 30%)",
  "hsl(158, 36%, 38%)",
  "hsl(38, 60%, 48%)",
];

const tooltipStyle = {
  backgroundColor: "hsl(0, 0%, 100%)",
  border: "1px solid hsl(216, 16%, 90%)",
  borderRadius: "6px",
  fontSize: "12px",
  boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)",
};

const ChartsGrid = ({ result }: ChartsGridProps) => {
  const barData = METRICS.map((m, i) => ({
    name: m.shortLabel,
    value: result[m.key] as number,
    fill: COLORS[i],
  }));

  const radarData = METRICS.map((m) => ({
    metric: m.shortLabel,
    value: result[m.key] as number,
    fullMark: 10,
  }));

  const total = METRICS.reduce((sum, m) => sum + (result[m.key] as number), 0);
  const pieData = METRICS.map((m, i) => ({
    name: m.shortLabel,
    value: Number(((result[m.key] as number) / total * 100).toFixed(1)),
    fill: COLORS[i],
  }));

  return (
    <div className="grid gap-3 md:grid-cols-3 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      {/* Bar Chart */}
      <div className="dashboard-card">
        <h3 className="section-label mb-3">Impact Comparison</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(216, 16%, 92%)" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(218, 12%, 52%)" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 10, fill: "hsl(218, 12%, 52%)" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={36}>
              {barData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart */}
      <div className="dashboard-card">
        <h3 className="section-label mb-3">Balance Profile</h3>
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="hsl(216, 16%, 90%)" />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "hsl(218, 12%, 52%)" }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fontSize: 9, fill: "hsl(218, 12%, 52%)" }} axisLine={false} />
            <Radar
              name="Score"
              dataKey="value"
              stroke="hsl(222, 52%, 24%)"
              fill="hsl(222, 52%, 24%)"
              fillOpacity={0.15}
              strokeWidth={2}
            />
            <Tooltip contentStyle={tooltipStyle} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="dashboard-card">
        <h3 className="section-label mb-3">Weighted Contribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={75}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1">
          {pieData.map((d, i) => (
            <span key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              {d.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartsGrid;
