import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

interface ProposalInputProps {
  onAnalyze: (proposal: string) => void;
  isLoading: boolean;
}

const ProposalInput = ({ onAnalyze, isLoading }: ProposalInputProps) => {
  const [proposal, setProposal] = useState("");

  const handleSubmit = () => {
    if (proposal.trim()) onAnalyze(proposal);
  };

  return (
    <div className="dashboard-card">
      <h2 className="section-label mb-3">Infrastructure Proposal</h2>
      <Textarea
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        placeholder="Example: Invest $5 million in solar-powered street lighting across low-income neighborhoods."
        className="mb-3 min-h-[130px] resize-none border-input bg-background text-sm leading-relaxed placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary/30"
        disabled={isLoading}
      />
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !proposal.trim()}
        className="w-full gap-2"
        size="sm"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Analyzing Proposal…
          </>
        ) : (
          <>
            <Send className="h-3.5 w-3.5" />
            Analyze Proposal
          </>
        )}
      </Button>
    </div>
  );
};

export default ProposalInput;
