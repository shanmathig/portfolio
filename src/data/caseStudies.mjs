export const caseStudies = [
	{
		slug: 'uber-experiment-analysis',
		company: 'Uber',
		category: 'Data tooling · Applied AI',
		title: 'Self-serve experiment analysis for Uber’s Earner Intelligence Platform',
		role: 'Software Engineering Intern, Earner Intelligence Platform',
		dates: 'May–Aug 2026',
		summary:
			'I built a self-serve analysis assistant to help teams explore experiment results.',
		diagramTitle: 'From question to experiment insight',
		diagramDescription:
			'High-level conceptual flow from a question to an experiment reporting experience; implementation details are omitted.',
		steps: ['Question', 'Analysis', 'Results', 'Report'],
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'Understanding experiment results across different segments relied on a manual, cross-team workflow. Teams needed a more efficient way to explore experiment data and answer focused questions.',
				],
			},
			{
				heading: 'What I owned',
				paragraphs: [
					'I built a Python- and LangChain-based assistant to make experiment analysis more self-serve, connecting natural-language questions to relevant analysis and a reporting experience. It supported filtering, sorting, generated summaries, and conversational follow-ups.',
				],
			},
			{
				heading: 'What changed',
				paragraphs: [
					'The workflow made experiment reporting more self-serve, reducing reliance on manual handoffs for routine analysis.',
				],
			},
		],
	},
	{
		slug: 'bedrock-guardrails',
		company: 'AWS',
		category: 'Cloud infrastructure · Automation',
		title: 'Automating capacity management for Amazon Bedrock',
		role: 'AI/ML Software Development Intern',
		dates: 'May–Aug 2025',
		summary:
			'I built backend automation to manage capacity for hosted ML services.',
		diagramTitle: 'Automated service-capacity updates',
		diagramDescription:
			'High-level conceptual flow for automated service-capacity updates and monitoring; implementation details are omitted.',
		steps: ['Capacity signal', 'Queued work', 'Automated update', 'Monitoring'],
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'Adjusting capacity for hosted ML services involved a manual process. The work called for backend automation to handle updates more efficiently.',
				],
			},
			{
				heading: 'What I owned',
				paragraphs: [
					'I built Java-based backend automation to adjust service capacity and used TypeScript infrastructure-as-code to define supporting cloud resources. The high-level workflow included event processing and operational monitoring.',
				],
			},
			{
				heading: 'What changed',
				paragraphs: [
					'A manual capacity-management process became an automated update workflow.',
				],
			},
		],
	},
	{
		slug: 'brainbridge',
		company: 'Georgia Tech · VIP',
		category: 'Applied AI · Accessibility',
		title: 'BrainBridge, a translator for scientific jargon',
		role: 'AI/ML Software Engineer, Vertically Integrated Projects',
		dates: 'May 2024–May 2026',
		summary:
			'I worked on a tool that transcribes multidisciplinary discussions and explains scientific jargon in plain language.',
		diagramTitle: 'Two distinct language tasks',
		diagramDescription:
			'Conceptual flow: a discussion transcript goes through BERT-based jargon detection, then a retrieval-augmented generation approach provides context for a plain-language explanation.',
		steps: ['Discussion transcript', 'BERT jargon detection', 'Retrieved context', 'Plain-language explanation'],
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'Multidisciplinary teams can lose the thread of a discussion when a technical term is unfamiliar. BrainBridge aims to make those conversations more accessible by transcribing discussion and translating scientific jargon into plain language.',
				],
			},
			{
				heading: 'What I owned',
				paragraphs: [
					'I helped design and build the end-to-end language pipeline, including the jargon-detection flow and retrieval-augmented generation architecture. I also generated and cleaned more than 5,000 text samples to support this work.',
				],
			},
			{
				heading: 'The technical approach',
				paragraphs: [
					'Our team designed the pipeline as two connected tasks: BERT identifies jargon in a transcript, then our RAG architecture retrieves relevant context to ground a plain-language explanation. I built the components that connect detection, retrieval, and generation.',
				],
				points: [
					'Transcribe a multidisciplinary discussion.',
					'Use BERT to identify unfamiliar scientific terminology.',
					'Explore retrieval-augmented context for plain-language explanations.',
				],
			},
			{
				heading: 'What changed',
				paragraphs: [
					'The project created a path from spoken technical discussion to contextual explanations, helping participants get the meaning of unfamiliar terms without derailing the conversation.',
				],
			},
		],
	},
];
