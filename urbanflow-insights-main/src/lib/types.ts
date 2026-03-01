export interface AnalysisResult {
  economic_growth: number;
  safety_impact: number;
  environmental_impact: number;
  public_trust: number;
  explanation: string;
}

export const mockResult: AnalysisResult = {
  economic_growth: 7.8,
  safety_impact: 8.2,
  environmental_impact: 9.1,
  public_trust: 7.5,
  explanation:
    "The proposed investment in solar-powered street lighting across low-income neighborhoods demonstrates strong potential for positive urban impact. Economically, this initiative is projected to reduce municipal energy costs by 35% while creating approximately 120 local installation and maintenance jobs. The safety impact is significant — improved street lighting has been shown to reduce nighttime crime by up to 20% in similar deployments. Environmentally, transitioning to solar reduces carbon emissions and supports the city's renewable energy goals. Public trust scores positively due to the equitable focus on underserved communities, though sustained community engagement will be essential for long-term success.",
};

export interface MetricConfig {
  key: keyof Omit<AnalysisResult, "explanation">;
  label: string;
  shortLabel: string;
  colorVar: string;
}

export const METRICS: MetricConfig[] = [
  { key: "economic_growth", label: "Economic Growth", shortLabel: "Economic", colorVar: "--metric-economic" },
  { key: "safety_impact", label: "Safety Impact", shortLabel: "Safety", colorVar: "--metric-safety" },
  { key: "environmental_impact", label: "Environmental Impact", shortLabel: "Environment", colorVar: "--metric-environment" },
  { key: "public_trust", label: "Public Trust", shortLabel: "Trust", colorVar: "--metric-trust" },
];
