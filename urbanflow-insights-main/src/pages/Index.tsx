import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProposalInput from "@/components/ProposalInput";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import MetricCards from "@/components/MetricCards";
import ChartsGrid from "@/components/ChartsGrid";
import OverallIndex from "@/components/OverallIndex";
import InterpretationPanel from "@/components/InterpretationPanel";
import { AnalysisResult } from "@/lib/types";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (proposal: string) => {
    try {
      setIsLoading(true);
      setResult(null);

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ proposal })
      });

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-6 md:px-6">
        {!result ? (
          <div className="mx-auto max-w-xl pt-12">
            <div className="mb-6 text-center">
              <h1 className="font-display text-2xl font-bold text-foreground">
                Infrastructure Impact Analysis
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Submit a proposal to receive AI-powered impact scoring across economic, safety, environmental, and public trust dimensions.
              </p>
            </div>
            <ProposalInput onAnalyze={handleAnalyze} isLoading={isLoading} />
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
            <div className="space-y-3">
              <ProposalInput onAnalyze={handleAnalyze} isLoading={isLoading} />
              <ExecutiveSummary result={result} />
            </div>

            <div className="space-y-3">
              <MetricCards result={result} />
              <ChartsGrid result={result} />

              <div className="grid gap-3 md:grid-cols-2">
                <OverallIndex result={result} />
                <InterpretationPanel result={result} />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-4 text-center text-[11px] text-muted-foreground">
        UrbanFlow © {new Date().getFullYear()} — AI Infrastructure Decision Intelligence Platform
      </footer>
    </div>
  );
};

export default Index;