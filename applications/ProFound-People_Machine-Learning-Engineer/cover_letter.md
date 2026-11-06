# FARAAZ MOHAMMED
Melbourne, VIC  •  0435 825 949  •  faraaz817@outlook.com
[linkedin.com/in/faraaz817](https://linkedin.com/in/faraaz817)  •  [github.com/faraaz817](https://github.com/faraaz817)

## Re: ML Engineer, Applied LLMs — Sydney

6 November 2026

Hiring Team, ProFound People

Dear Hiring Team,

I am applying for the ML Engineer (Applied LLMs) role with your client. The ad describes the job as owning how good the agents are and what they cost to run. The work I have done so far fits that brief: measuring whether a change actually helped, then keeping cost proportional to the task.

**Evaluation.** In my AI/ML engineering internship at Prodegee, I built an IoU evaluation harness that traced the failures of all three of the team's generators to an over-scoped upstream cluster, not a fitting fault. A ±20% sensitivity harness found the parameter driving a 90%+ under-count, and the recalibration fixed it (0.069 → 0.415). I co-built a 40-school satellite-verified ground-truth set that corrected a published baseline from 6–13% to 37%. I also documented that our XGBoost model's 0.816 "confidence" measured agreement with the training heuristic, not accuracy. I let the data settle those arguments, including when it produced a negative result.

**Cost, fine-tuning and datasets from usage.** I built a Claude API router that classifies task complexity with a cheap Haiku call before choosing Haiku, Sonnet or Opus. My Gemma Delegation System (public on GitHub) moves lightweight tasks off the frontier model onto a local Gemma model. Accept/reject feedback from real use curates a JSONL dataset, a QLoRA notebook fine-tunes on the confirmed examples, and the GGUF export goes back into Ollama. That is the "datasets from customer usage" loop from your ad, at personal scale.

**Retrieval and production Python.** I built a retrieval-grounded chatbot with anti-hallucination constraints. At Vayaa I am currently taking a Python (FastAPI) and PostgreSQL service live on AWS, with the cutover gated on 50 parity tests.

I will be direct about the gap: my production ML experience is internship-length, not three years. I have not worked with sensor or time-series data, or cut inference cost at scale. I am applying because the role's core is evaluation, retrieval, fine-tuning and cost, which is the work I already choose to do. If this role needs more seniority, I would welcome a conversation about other applied LLM roles you are recruiting for.

I hold full Australian working rights (Temporary Graduate visa, subclass 485, no sponsorship required), am available immediately and am open to relocating to Sydney.

Yours sincerely,

Faraaz Mohammed
