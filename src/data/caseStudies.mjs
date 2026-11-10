export const caseStudies = [
	{
		slug: 'uber-experiment-analysis',
		company: 'Uber',
		category: 'Data tooling · Applied AI',
		title: 'Self-serve experiment analysis at Uber',
		role: 'Software Engineering Intern, Earner Intelligence Platform',
		dates: 'May–Aug 2026',
		summary:
			'I built a Python and LangChain agent that helps product managers and scientists explore A/B experiment results by driver and courier traits.',
		diagramTitle: 'A grounded path from question to report',
		diagramDescription:
			'Conceptual flow: a natural-language question is grounded with retrieved schema and business context before SQL is generated, then results become a report.',
		steps: ['Question', 'Schema + context', 'Generated SQL', 'Filtered report'],
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'Understanding experiment results by driver and courier traits depended on a manual workflow across teams. Product managers and scientists needed a faster way to ask focused questions and get useful, trustworthy slices of experiment data.',
				],
			},
			{
				heading: 'What I owned',
				paragraphs: [
					'I built a Python agent with LangChain to make experiment analysis more self-serve. The experience supports report filtering and sorting, AI-generated summaries, and conversational follow-up questions.',
				],
			},
			{
				heading: 'The technical approach',
				paragraphs: [
					'The key design choice was to retrieve relevant schema metadata and business context before generating SQL. Grounding the model in the available data gives it a concrete vocabulary for the query instead of asking it to guess table and field names.',
					'The resulting query feeds a report that people can filter and sort. A summary and follow-up conversation help users move from a broad question to a more specific view of the experiment.',
				],
				points: [
					'Retrieve schema and business context first.',
					'Generate a query against the available experiment data.',
					'Present results in a filterable, sortable report with summaries and follow-ups.',
				],
			},
			{
				heading: 'What changed',
				paragraphs: [
					'The workflow moved toward self-serve reporting: product managers and scientists could explore experiment segments without relying on the same manual, cross-team handoff for every question.',
				],
			},
		],
	},
	{
		slug: 'bedrock-guardrails',
		company: 'AWS',
		category: 'Cloud infrastructure · Automation',
		title: 'Automating endpoint throttling for Amazon Bedrock Guardrails',
		role: 'AI/ML Software Development Intern',
		dates: 'May–Aug 2025',
		summary:
			'I built a backend system to automate throttling adjustments for SageMaker endpoints hosting Guardrails models.',
		diagramTitle: 'Automated endpoint capacity updates',
		diagramDescription:
			'Conceptual component view: AWS event and queue services connect a Java Lambda using SageMaker APIs to endpoint limit updates, with CloudWatch monitoring.',
		steps: ['EventBridge', 'SQS', 'Java Lambda + SageMaker APIs', 'Endpoint limits'],
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'Adjusting throttling limits for SageMaker endpoints hosting Guardrails models was a manual, multi-day process. The work required a backend path that could calculate and apply appropriate limit changes automatically.',
				],
			},
			{
				heading: 'What I owned',
				paragraphs: [
					'I built the backend automation, including a Java Lambda that uses SageMaker APIs to compute endpoint throttling limits. I also used TypeScript and AWS CDK to define the supporting infrastructure.',
				],
			},
			{
				heading: 'The technical approach',
				paragraphs: [
					'The system uses AWS building blocks including EventBridge, SQS, Lambda, SageMaker, and CloudWatch. At a high level, event and queue services support the automated work, the Lambda calculates limit changes through SageMaker APIs, and CloudWatch provides operational visibility.',
					'This overview intentionally keeps the event sequence and production configuration abstract.',
				],
				points: [
					'Java Lambda performs the throttling-limit calculation with SageMaker APIs.',
					'TypeScript and AWS CDK define the infrastructure.',
					'EventBridge, SQS, and CloudWatch support orchestration and monitoring.',
				],
			},
			{
				heading: 'What changed',
				paragraphs: [
					'A process that had taken multiple days of manual coordination became an automated endpoint update workflow.',
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
					'I designed the pipeline as two connected tasks: BERT identifies jargon in a transcript, then the RAG architecture retrieves relevant context to ground a plain-language explanation. I built the components that connect detection, retrieval, and generation.',
					'A RAG-enhanced LLaMA approach was explored during the project; this description does not imply that a specific model was ultimately deployed.',
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
