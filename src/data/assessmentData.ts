export type QuestionType = 'likert' | 'multiple-choice' | 'scenario';

export interface BaseQuestion {
  id: number;
  section: string;
  type: QuestionType;
  question: string;
  category: string;
}

export interface LikertQuestion extends BaseQuestion {
  type: 'likert';
  trait: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
  reverseScored: boolean;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: { label: string; value: string; isCorrect?: boolean }[];
}

export interface ScenarioQuestion extends BaseQuestion {
  type: 'scenario';
  options: { label: string; value: string; score: number }[];
}

export type Question = LikertQuestion | MultipleChoiceQuestion | ScenarioQuestion;

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  timeLimit: number;
  questions: Question[];
}

export interface CandidateInfo {
  fullName: string;
  email: string;
  phone: string;
  roleApplied: string;
  experience: string;
  education: string;
}

export interface SectionResult {
  sectionId: string;
  sectionTitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  feedback: string;
}

export interface PersonalityProfile {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
  dominantTrait: string;
  profileSummary: string;
}

export interface TestResult {
  candidateInfo: CandidateInfo;
  overallScore: number;
  overallPercentage: number;
  grade: string;
  sectionResults: SectionResult[];
  personalityProfile: PersonalityProfile;
  strengths: string[];
  developmentAreas: string[];
  recommendation: string;
  completedAt: string;
}

const personalityQuestions: Question[] = [
  {
    id: 1,
    section: 'personality',
    type: 'likert',
    trait: 'openness',
    reverseScored: false,
    category: 'Openness to Experience',
    question: 'I enjoy exploring new ideas and trying different approaches to solve problems.',
  },
  {
    id: 2,
    section: 'personality',
    type: 'likert',
    trait: 'openness',
    reverseScored: true,
    category: 'Openness to Experience',
    question: 'I prefer following established methods rather than experimenting with new ways of working.',
  },
  {
    id: 3,
    section: 'personality',
    type: 'likert',
    trait: 'conscientiousness',
    reverseScored: false,
    category: 'Conscientiousness',
    question: 'I am meticulous about details and take pride in delivering high-quality work.',
  },
  {
    id: 4,
    section: 'personality',
    type: 'likert',
    trait: 'conscientiousness',
    reverseScored: true,
    category: 'Conscientiousness',
    question: 'I often find it difficult to stay organized and meet deadlines consistently.',
  },
  {
    id: 5,
    section: 'personality',
    type: 'likert',
    trait: 'extraversion',
    reverseScored: false,
    category: 'Extraversion',
    question: 'I feel energized when collaborating with team members and leading discussions.',
  },
  {
    id: 6,
    section: 'personality',
    type: 'likert',
    trait: 'extraversion',
    reverseScored: true,
    category: 'Extraversion',
    question: 'I prefer working independently and find extended social interaction draining.',
  },
  {
    id: 7,
    section: 'personality',
    type: 'likert',
    trait: 'agreeableness',
    reverseScored: false,
    category: 'Agreeableness',
    question: 'I actively listen to others and strive to maintain harmonious team relationships.',
  },
  {
    id: 8,
    section: 'personality',
    type: 'likert',
    trait: 'agreeableness',
    reverseScored: true,
    category: 'Agreeableness',
    question: 'I prioritize getting results over being concerned about how others feel about my decisions.',
  },
  {
    id: 9,
    section: 'personality',
    type: 'likert',
    trait: 'neuroticism',
    reverseScored: true,
    category: 'Emotional Stability',
    question: 'I remain calm and focused even when facing tight deadlines or high-pressure situations.',
  },
  {
    id: 10,
    section: 'personality',
    type: 'likert',
    trait: 'neuroticism',
    reverseScored: false,
    category: 'Emotional Stability',
    question: 'I often worry about making mistakes or being criticized by my colleagues or superiors.',
  },
  {
    id: 11,
    section: 'personality',
    type: 'likert',
    trait: 'conscientiousness',
    reverseScored: false,
    category: 'Work Ethic',
    question: 'I consistently go above and beyond what is expected to ensure project success.',
  },
  {
    id: 12,
    section: 'personality',
    type: 'likert',
    trait: 'openness',
    reverseScored: false,
    category: 'Learning Orientation',
    question: 'I actively seek feedback and view constructive criticism as an opportunity to grow.',
  },
];

const cognitiveQuestions: Question[] = [
  {
    id: 1,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Numerical Reasoning',
    question: 'A project requires 480 hours of work. If 6 employees work 8 hours per day, how many days will it take to complete the project?',
    options: [
      { label: '8 days', value: 'A' },
      { label: '10 days', value: 'B', isCorrect: true },
      { label: '12 days', value: 'C' },
      { label: '14 days', value: 'D' },
    ],
  },
  {
    id: 2,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Numerical Reasoning',
    question: "A company's revenue grew by 25% from Rs.80 lakhs in 2024. What is the projected revenue for 2025?",
    options: [
      { label: 'Rs.95 lakhs', value: 'A' },
      { label: 'Rs.100 lakhs', value: 'B', isCorrect: true },
      { label: 'Rs.105 lakhs', value: 'C' },
      { label: 'Rs.110 lakhs', value: 'D' },
    ],
  },
  {
    id: 3,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Numerical Reasoning',
    question: 'Complete the number series: 3, 9, 27, 81, ?',
    options: [
      { label: '162', value: 'A' },
      { label: '243', value: 'B', isCorrect: true },
      { label: '324', value: 'C' },
      { label: '108', value: 'D' },
    ],
  },
  {
    id: 4,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Numerical Reasoning',
    question: 'If 15 workers can complete a task in 24 days, how many days will 18 workers take to complete the same task?',
    options: [
      { label: '18 days', value: 'A' },
      { label: '20 days', value: 'B', isCorrect: true },
      { label: '22 days', value: 'C' },
      { label: '16 days', value: 'D' },
    ],
  },
  {
    id: 5,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Verbal Reasoning',
    question: 'Choose the word that is most nearly OPPOSITE in meaning to "PRAGMATIC":',
    options: [
      { label: 'Realistic', value: 'A' },
      { label: 'Practical', value: 'B' },
      { label: 'Idealistic', value: 'C', isCorrect: true },
      { label: 'Sensible', value: 'D' },
    ],
  },
  {
    id: 6,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Verbal Reasoning',
    question: 'Complete the analogy: INNOVATION is to PROGRESS as EDUCATION is to:',
    options: [
      { label: 'School', value: 'A' },
      { label: 'Knowledge', value: 'B', isCorrect: true },
      { label: 'Teacher', value: 'C' },
      { label: 'Student', value: 'D' },
    ],
  },
  {
    id: 7,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Verbal Reasoning',
    question: 'Which of the following best describes a "PARADIGM SHIFT" in a professional context?',
    options: [
      { label: 'A minor adjustment to existing processes', value: 'A' },
      { label: 'A fundamental change in approach or methodology', value: 'B', isCorrect: true },
      { label: 'A temporary deviation from standard practices', value: 'C' },
      { label: 'A routine performance evaluation', value: 'D' },
    ],
  },
  {
    id: 8,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Verbal Reasoning',
    question: 'Select the grammatically correct sentence:',
    options: [
      { label: 'The team have completed their project successfully.', value: 'A' },
      { label: 'Neither the manager nor the employees was present at the meeting.', value: 'B' },
      { label: 'The data clearly indicates a significant improvement in performance.', value: 'C', isCorrect: true },
      { label: 'Between you and I, the decision was poorly timed.', value: 'D' },
    ],
  },
  {
    id: 9,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Logical Reasoning',
    question: 'All managers are leaders. Some leaders are mentors. Therefore:',
    options: [
      { label: 'All managers are mentors', value: 'A' },
      { label: 'Some managers are mentors', value: 'B' },
      { label: 'No conclusion can be definitively drawn', value: 'C', isCorrect: true },
      { label: 'All mentors are managers', value: 'D' },
    ],
  },
  {
    id: 10,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Logical Reasoning',
    question: 'If all committed employees are punctual, and Rahul is not punctual, which conclusion logically follows?',
    options: [
      { label: 'Rahul is not a committed employee', value: 'A', isCorrect: true },
      { label: 'Rahul is a committed employee', value: 'B' },
      { label: 'All punctual people are committed', value: 'C' },
      { label: 'No conclusion can be drawn', value: 'D' },
    ],
  },
  {
    id: 11,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Logical Reasoning',
    question: 'Find the odd one out: 2, 3, 5, 9, 11, 13',
    options: [
      { label: '2', value: 'A' },
      { label: '9', value: 'B', isCorrect: true },
      { label: '11', value: 'C' },
      { label: '5', value: 'D' },
    ],
  },
  {
    id: 12,
    section: 'cognitive',
    type: 'multiple-choice',
    category: 'Logical Reasoning',
    question: 'A is taller than B. C is shorter than A but taller than D. B and D are the same height. Who is the shortest?',
    options: [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D (and B)', value: 'D', isCorrect: true },
    ],
  },
];

const situationalQuestions: Question[] = [
  {
    id: 1,
    section: 'situational',
    type: 'scenario',
    category: 'Conflict Resolution',
    question: 'You are leading a project team. Two senior team members have a disagreement about the technical approach that is causing delays. One wants to use a proven method; the other advocates for a newer but riskier technology. What would you do?',
    options: [
      { label: 'Make the decision yourself based on your technical knowledge to save time.', value: 'A', score: 2 },
      { label: 'Schedule a meeting to hear both perspectives, evaluate risks/benefits, and decide collaboratively.', value: 'B', score: 5 },
      { label: 'Let the team vote and go with the majority to maintain harmony.', value: 'C', score: 3 },
      { label: 'Escalate to upper management to make the final call.', value: 'D', score: 1 },
    ],
  },
  {
    id: 2,
    section: 'situational',
    type: 'scenario',
    category: 'Time Management',
    question: "It is 4 PM on a Friday. You have three competing priorities: (1) A client report due Monday, (2) An urgent email from your manager requesting data by end of day, (3) A team member needs help with a critical bug fix. How do you handle this?",
    options: [
      { label: 'Focus on the client report since it has the earliest deadline.', value: 'A', score: 2 },
      { label: 'Quickly gather the data for your manager first, then help the team member, and tackle the report over the weekend.', value: 'B', score: 3 },
      { label: "Prioritize the manager's request, delegate helping the team member, and schedule focused time Monday morning for the report.", value: 'C', score: 5 },
      { label: 'Help the team member first since they are blocked, then handle the other tasks.', value: 'D', score: 4 },
    ],
  },
  {
    id: 3,
    section: 'situational',
    type: 'scenario',
    category: 'Ethics & Integrity',
    question: 'You discover that a colleague has been taking credit for your work in meetings with senior leadership. You have evidence of your contributions. What is your best course of action?',
    options: [
      { label: 'Confront the colleague publicly in the next meeting to expose the behavior.', value: 'A', score: 1 },
      { label: 'Document everything and escalate directly to HR without speaking to the colleague.', value: 'B', score: 2 },
      { label: 'Have a private, professional conversation with the colleague to address the issue and seek resolution.', value: 'C', score: 5 },
      { label: 'Start doing the same to them to teach them a lesson.', value: 'D', score: 0 },
    ],
  },
  {
    id: 4,
    section: 'situational',
    type: 'scenario',
    category: 'Team Leadership',
    question: 'You are assigned to lead a cross-functional team for a high-visibility project. Some team members from other departments are not responding to your requests and seem resistant to your leadership. How do you handle this?',
    options: [
      { label: 'Escalate to their department heads and ask them to enforce compliance.', value: 'A', score: 2 },
      { label: 'Schedule one-on-one meetings to understand their concerns and build rapport.', value: 'B', score: 5 },
      { label: 'Proceed without their input and document their non-cooperation.', value: 'C', score: 1 },
      { label: 'Request to be removed from the project leadership role.', value: 'D', score: 0 },
    ],
  },
  {
    id: 5,
    section: 'situational',
    type: 'scenario',
    category: 'Client Management',
    question: "A long-term client sends an angry email stating they are considering ending their contract due to a recent service issue. Your analysis shows the issue was partly caused by the client's own team. How do you respond?",
    options: [
      { label: 'Reply immediately explaining that the issue was their fault and provide evidence.', value: 'A', score: 1 },
      { label: 'Acknowledge their frustration, take ownership of your part, and propose a collaborative solution meeting.', value: 'B', score: 5 },
      { label: 'Wait a day for them to cool down before responding.', value: 'C', score: 2 },
      { label: 'Forward the email to your manager and ask them to handle it.', value: 'D', score: 2 },
    ],
  },
  {
    id: 6,
    section: 'situational',
    type: 'scenario',
    category: 'Decision Making',
    question: 'You have a tight budget for a project. Unexpectedly, a critical vendor increases their price by 30%. This would mean cutting features from the project. What do you do?',
    options: [
      { label: 'Accept the price increase and reduce features as needed.', value: 'A', score: 2 },
      { label: 'Immediately switch to a cheaper vendor without full evaluation.', value: 'B', score: 1 },
      { label: 'Negotiate with the vendor while simultaneously evaluating alternatives, then present options to stakeholders.', value: 'C', score: 5 },
      { label: 'Request additional budget from leadership.', value: 'D', score: 3 },
    ],
  },
  {
    id: 7,
    section: 'situational',
    type: 'scenario',
    category: 'Communication',
    question: 'You need to present a complex technical concept to non-technical senior executives who have limited time. How do you prepare?',
    options: [
      { label: 'Present all technical details to show thoroughness and expertise.', value: 'A', score: 1 },
      { label: 'Focus on business impact, use analogies, and prepare a one-page summary with details as backup.', value: 'B', score: 5 },
      { label: 'Ask a technical colleague to present instead.', value: 'C', score: 2 },
      { label: 'Skip the technical explanation entirely and just discuss outcomes.', value: 'D', score: 3 },
    ],
  },
  {
    id: 8,
    section: 'situational',
    type: 'scenario',
    category: 'Delegation',
    question: 'You are overwhelmed with tasks and realize you cannot meet all deadlines. A capable junior team member offers to help, but you are concerned about the quality of their work. What do you do?',
    options: [
      { label: 'Decline the offer and work overtime to complete everything yourself.', value: 'A', score: 1 },
      { label: 'Delegate a less critical task with clear instructions, checkpoints, and offer support.', value: 'B', score: 5 },
      { label: 'Delegate everything and hope they can handle it.', value: 'C', score: 2 },
      { label: 'Complain to your manager about your workload.', value: 'D', score: 1 },
    ],
  },
  {
    id: 9,
    section: 'situational',
    type: 'scenario',
    category: 'Problem Solving',
    question: 'Two days before a major product launch, you discover a significant flaw that could affect user experience. The fix requires at least a week. What is your best course of action?',
    options: [
      { label: 'Launch on schedule and fix the issue in the first update.', value: 'A', score: 1 },
      { label: 'Immediately delay the launch and inform stakeholders with a proposed new timeline.', value: 'B', score: 4 },
      { label: 'Assess the severity, identify quick mitigations, and present options to leadership with your recommendation.', value: 'C', score: 5 },
      { label: "Hope users don't notice the flaw and address it quietly later.", value: 'D', score: 0 },
    ],
  },
  {
    id: 10,
    section: 'situational',
    type: 'scenario',
    category: 'Professional Development',
    question: 'Your organization is implementing a new technology platform that will change how your team works. Many team members are resistant and worried about their job security. As a team lead, how do you handle this?',
    options: [
      { label: 'Tell them the change is mandatory and they need to adapt quickly.', value: 'A', score: 1 },
      { label: 'Share your own learning journey, organize training sessions, and highlight how the new skills will enhance their career prospects.', value: 'B', score: 5 },
      { label: 'Support their resistance and petition management to delay the implementation.', value: 'C', score: 0 },
      { label: 'Ignore their concerns assuming they will adapt over time.', value: 'D', score: 1 },
    ],
  },
];

const criticalThinkingQuestions: Question[] = [
  {
    id: 1,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Analytical Reasoning',
    question: "A company's employee satisfaction scores have dropped by 15% over the past year, yet productivity has increased by 10%. Exit interviews indicate that employees feel 'underappreciated.' What is the most logical conclusion?",
    options: [
      { label: 'Employees are lying in exit interviews about their reasons for leaving.', value: 'A' },
      { label: 'The company may be achieving short-term productivity gains at the cost of long-term employee retention.', value: 'B', isCorrect: true },
      { label: 'Productivity and satisfaction are completely unrelated metrics.', value: 'C' },
      { label: 'The company should reduce productivity targets to improve satisfaction.', value: 'D' },
    ],
  },
  {
    id: 2,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Pattern Recognition',
    question: 'In a sequence of project phases: Planning -> Execution -> Monitoring -> ? Which phase should logically follow?',
    options: [
      { label: 'Planning (cycle repeats)', value: 'A' },
      { label: 'Closure/Review', value: 'B', isCorrect: true },
      { label: 'Execution (cycle repeats)', value: 'C' },
      { label: 'Expansion', value: 'D' },
    ],
  },
  {
    id: 3,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Data Interpretation',
    question: 'A sales report shows that Product A sold 1,200 units, Product B sold 800 units, and Product C sold 1,500 units. However, Product A generated the highest total revenue. What can you infer?',
    options: [
      { label: 'Product A has the lowest price per unit.', value: 'A' },
      { label: 'Product A has the highest price per unit.', value: 'B', isCorrect: true },
      { label: 'Product C is the most profitable.', value: 'C' },
      { label: 'Product B should be discontinued.', value: 'D' },
    ],
  },
  {
    id: 4,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Inference',
    question: 'Statement: "Organizations that invest in employee training see 24% higher profit margins than those that do not." Which of the following can be validly inferred?',
    options: [
      { label: 'All organizations should invest 50% of their budget in training.', value: 'A' },
      { label: 'Training investment is the only factor affecting profit margins.', value: 'B' },
      { label: 'There is a positive correlation between training investment and profitability.', value: 'C', isCorrect: true },
      { label: 'Organizations without training will definitely fail.', value: 'D' },
    ],
  },
  {
    id: 5,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Strategic Thinking',
    question: 'A retail company notices that their online sales are growing 40% annually while in-store sales are declining 10% annually. They have 50 physical stores. What is the most strategic response?',
    options: [
      { label: 'Close all physical stores immediately and go fully online.', value: 'A' },
      { label: 'Invest heavily in expanding physical store presence.', value: 'B' },
      { label: 'Develop an omnichannel strategy that leverages stores as fulfillment centers and experience hubs.', value: 'C', isCorrect: true },
      { label: 'Maintain the current strategy and wait for market stabilization.', value: 'D' },
    ],
  },
  {
    id: 6,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Problem Decomposition',
    question: 'A software application has been experiencing intermittent crashes reported by 5% of users. The crashes seem random and cannot be reproduced consistently. What is the most systematic approach to solving this?',
    options: [
      { label: 'Rewrite the entire application from scratch.', value: 'A' },
      { label: 'Ignore the issue since only 5% of users are affected.', value: 'B' },
      { label: 'Collect detailed logs from affected users, identify common patterns, create a hypothesis, and test fixes incrementally.', value: 'C', isCorrect: true },
      { label: 'Wait for more users to report the issue.', value: 'D' },
    ],
  },
  {
    id: 7,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Evaluating Arguments',
    question: 'Argument: "Remote work should be eliminated because collaboration is always better in person." What is the main weakness of this argument?',
    options: [
      { label: 'It assumes all types of collaboration require physical presence without considering evidence to the contrary.', value: 'A', isCorrect: true },
      { label: 'It underestimates the cost of office space.', value: 'B' },
      { label: 'It overestimates employee preferences.', value: 'C' },
      { label: 'The argument is logically sound.', value: 'D' },
    ],
  },
  {
    id: 8,
    section: 'critical-thinking',
    type: 'multiple-choice',
    category: 'Decision Analysis',
    question: 'You must choose between two candidates: Candidate X has 10 years of experience but is resistant to new technologies. Candidate Y has 3 years of experience but demonstrates rapid learning and adaptability. Your team is adopting AI tools. Which factor should most influence your decision?',
    options: [
      { label: 'Years of experience should always be the primary criterion.', value: 'A' },
      { label: 'The ability to adapt and learn new technologies is more critical for the future success.', value: 'B', isCorrect: true },
      { label: 'Hire both and let them compete.', value: 'C' },
      { label: 'Choose the candidate who asks for the lowest salary.', value: 'D' },
    ],
  },
];

const adaptabilityQuestions: Question[] = [
  {
    id: 1,
    section: 'adaptability',
    type: 'scenario',
    category: 'Change Management',
    question: 'Your organization announces a major restructuring that will change your role, reporting lines, and potentially your location. Your initial reaction is:',
    options: [
      { label: 'I feel anxious and start looking for jobs elsewhere immediately.', value: 'A', score: 1 },
      { label: 'I wait for more information before forming any opinion.', value: 'B', score: 3 },
      { label: 'I proactively seek information, identify potential opportunities in the change, and prepare myself for the transition.', value: 'C', score: 5 },
      { label: 'I complain to colleagues about the unfairness of the decision.', value: 'D', score: 0 },
    ],
  },
  {
    id: 2,
    section: 'adaptability',
    type: 'scenario',
    category: 'Emotional Intelligence',
    question: 'A team member who is usually productive has become withdrawn and missed two deadlines. When you check in, they seem defensive. How do you respond?',
    options: [
      { label: 'Issue a formal warning about the missed deadlines.', value: 'A', score: 1 },
      { label: 'Give them space and hope they sort it out themselves.', value: 'B', score: 2 },
      { label: 'Express genuine concern, ask open-ended questions, and offer support resources.', value: 'C', score: 5 },
      { label: 'Reassign their tasks to other team members.', value: 'D', score: 2 },
    ],
  },
  {
    id: 3,
    section: 'adaptability',
    type: 'scenario',
    category: 'Resilience',
    question: 'You have been working on a proposal for weeks. The client rejects it without detailed feedback. How do you handle this setback?',
    options: [
      { label: 'Feel demotivated and question your abilities.', value: 'A', score: 1 },
      { label: 'Blame the client for being unreasonable.', value: 'B', score: 0 },
      { label: 'Request specific feedback, analyze what can be improved, and use it as a learning opportunity.', value: 'C', score: 5 },
      { label: 'Submit the same proposal to another client without changes.', value: 'D', score: 1 },
    ],
  },
  {
    id: 4,
    section: 'adaptability',
    type: 'scenario',
    category: 'Learning Agility',
    question: 'You are asked to lead a project in a domain you are unfamiliar with. The timeline is aggressive. How do you approach this?',
    options: [
      { label: 'Decline the opportunity citing lack of expertise.', value: 'A', score: 1 },
      { label: 'Accept and try to figure it out without asking for help.', value: 'B', score: 2 },
      { label: 'Accept the challenge, create a rapid learning plan, consult experts, and leverage your transferable skills.', value: 'C', score: 5 },
      { label: 'Ask for an extension before even starting.', value: 'D', score: 3 },
    ],
  },
  {
    id: 5,
    section: 'adaptability',
    type: 'scenario',
    category: 'Empathy',
    question: 'During a team meeting, a junior member presents an idea that has significant flaws. Other senior members immediately criticize it. You notice the junior member looks distressed. What do you do?',
    options: [
      { label: 'Stay silent and let them learn from the criticism.', value: 'A', score: 2 },
      { label: 'Acknowledge the creative thinking behind the idea, identify one positive aspect, and suggest constructive improvements.', value: 'B', score: 5 },
      { label: 'Agree with the senior members to maintain credibility.', value: 'C', score: 0 },
      { label: 'Change the subject to avoid further embarrassment.', value: 'D', score: 1 },
    ],
  },
  {
    id: 6,
    section: 'adaptability',
    type: 'scenario',
    category: 'Stress Management',
    question: 'You are managing three concurrent projects and all have deadlines in the same week. The stress is affecting your sleep and focus. What is your best response?',
    options: [
      { label: 'Push through and work longer hours regardless of the impact on your health.', value: 'A', score: 1 },
      { label: 'Re-prioritize tasks, delegate where possible, communicate realistic timelines to stakeholders, and establish boundaries.', value: 'B', score: 5 },
      { label: 'Ask to be removed from at least one project.', value: 'C', score: 2 },
      { label: 'Deliver mediocre work on all three projects just to meet deadlines.', value: 'D', score: 0 },
    ],
  },
  {
    id: 7,
    section: 'adaptability',
    type: 'scenario',
    category: 'Interpersonal Skills',
    question: 'You receive critical feedback from a peer review that you feel is unfair and inaccurate. How do you respond?',
    options: [
      { label: 'Dismiss the feedback and avoid working with that peer in the future.', value: 'A', score: 1 },
      { label: 'Reflect on whether any part of the feedback has merit, then have a respectful conversation to understand their perspective.', value: 'B', score: 5 },
      { label: 'Write a detailed rebuttal to your manager explaining why the feedback is wrong.', value: 'C', score: 2 },
      { label: 'Give equally negative feedback about that peer in retaliation.', value: 'D', score: 0 },
    ],
  },
  {
    id: 8,
    section: 'adaptability',
    type: 'scenario',
    category: 'Growth Mindset',
    question: 'You failed to achieve a professional certification on your first attempt after significant preparation. How do you process this?',
    options: [
      { label: 'Accept that the certification is beyond your capability.', value: 'A', score: 0 },
      { label: 'Analyze which areas you struggled with, adjust your study approach, and plan a retake with a better strategy.', value: 'B', score: 5 },
      { label: 'Blame the exam format for being unfair.', value: 'C', score: 1 },
      { label: 'Pretend you passed when colleagues ask about it.', value: 'D', score: 0 },
    ],
  },
];

export const assessmentSections: Section[] = [
  {
    id: 'personality',
    title: 'Personality Assessment',
    description: 'Evaluate your personality traits across the OCEAN model: Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability. There are no right or wrong answers - respond honestly.',
    icon: 'Users',
    timeLimit: 10,
    questions: personalityQuestions,
  },
  {
    id: 'cognitive',
    title: 'Cognitive Aptitude',
    description: 'Test your numerical reasoning, verbal reasoning, and logical thinking abilities. These questions assess your analytical capabilities and problem-solving skills.',
    icon: 'Brain',
    timeLimit: 15,
    questions: cognitiveQuestions,
  },
  {
    id: 'situational',
    title: 'Situational Judgment',
    description: 'Navigate realistic workplace scenarios that test your decision-making, ethics, leadership, and interpersonal skills. Choose the response that best reflects your approach.',
    icon: 'Briefcase',
    timeLimit: 12,
    questions: situationalQuestions,
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking & Problem Solving',
    description: 'Assess your ability to analyze information, identify patterns, evaluate arguments, and make logical deductions. These questions test your strategic thinking capabilities.',
    icon: 'Lightbulb',
    timeLimit: 10,
    questions: criticalThinkingQuestions,
  },
  {
    id: 'adaptability',
    title: 'Adaptability & Emotional Intelligence',
    description: 'Evaluate your resilience, emotional intelligence, learning agility, and ability to navigate change. These scenarios assess how you handle pressure and uncertainty.',
    icon: 'TrendingUp',
    timeLimit: 10,
    questions: adaptabilityQuestions,
  },
];

export const likertOptions = [
  { label: 'Strongly Disagree', value: 1 },
  { label: 'Disagree', value: 2 },
  { label: 'Neutral', value: 3 },
  { label: 'Agree', value: 4 },
  { label: 'Strongly Agree', value: 5 },
];

export const totalQuestions = assessmentSections.reduce((acc, s) => acc + s.questions.length, 0);
export const totalTimeMinutes = assessmentSections.reduce((acc, s) => acc + s.timeLimit, 0);

export function calculatePersonalityScore(answers: Record<number, number>): PersonalityProfile {
  const traitScores: Record<string, number[]> = {
    openness: [],
    conscientiousness: [],
    extraversion: [],
    agreeableness: [],
    neuroticism: [],
  };

  const personalityQ = personalityQuestions as LikertQuestion[];
  personalityQ.forEach((q) => {
    const answer = answers[q.id];
    if (answer !== undefined) {
      const score = q.reverseScored ? 6 - answer : answer;
      traitScores[q.trait].push(score);
    }
  });

  const avg = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 3;

  const neuroticismRaw = avg(traitScores.neuroticism);
  const emotionalStability = 6 - neuroticismRaw;

  const profile: PersonalityProfile = {
    openness: Math.round((avg(traitScores.openness) / 5) * 100),
    conscientiousness: Math.round((avg(traitScores.conscientiousness) / 5) * 100),
    extraversion: Math.round((avg(traitScores.extraversion) / 5) * 100),
    agreeableness: Math.round((avg(traitScores.agreeableness) / 5) * 100),
    neuroticism: Math.round((emotionalStability / 5) * 100),
    dominantTrait: '',
    profileSummary: '',
  };

  const traits = [
    { name: 'Openness', value: profile.openness },
    { name: 'Conscientiousness', value: profile.conscientiousness },
    { name: 'Extraversion', value: profile.extraversion },
    { name: 'Agreeableness', value: profile.agreeableness },
    { name: 'Emotional Stability', value: profile.neuroticism },
  ];
  traits.sort((a, b) => b.value - a.value);
  profile.dominantTrait = traits[0].name;

  const summaries: Record<string, string> = {
    'Openness': 'You are highly creative and intellectually curious. You thrive in dynamic environments and embrace new ideas and experiences.',
    'Conscientiousness': 'You are highly organized, reliable, and detail-oriented. You excel at meeting deadlines and maintaining high-quality standards.',
    'Extraversion': 'You are socially confident and energized by collaboration. You naturally take initiative in team settings and excel at building relationships.',
    'Agreeableness': 'You are empathetic, cooperative, and focused on maintaining harmonious relationships. You excel at teamwork and conflict resolution.',
    'Emotional Stability': 'You demonstrate exceptional resilience and composure under pressure. You maintain consistent performance even in challenging situations.',
  };

  profile.profileSummary = summaries[profile.dominantTrait] || summaries['Conscientiousness'];

  return profile;
}

export function calculateSectionScore(
  sectionId: string,
  answers: Record<number, string | number>
): SectionResult {
  const section = assessmentSections.find((s) => s.id === sectionId);
  if (!section) throw new Error(`Section ${sectionId} not found`);

  let score = 0;
  let maxScore = 0;

  section.questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer === undefined) return;

    if (q.type === 'multiple-choice') {
      maxScore += 1;
      const mcq = q as MultipleChoiceQuestion;
      const selected = mcq.options.find((o) => o.value === answer);
      if (selected?.isCorrect) score += 1;
    } else if (q.type === 'scenario') {
      maxScore += 5;
      const sq = q as ScenarioQuestion;
      const selected = sq.options.find((o) => o.value === answer);
      if (selected) score += selected.score;
    } else if (q.type === 'likert') {
      maxScore += 5;
      score += typeof answer === 'number' ? answer : 0;
    }
  });

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  const feedbackMap: Record<string, Record<string, string>> = {
    personality: {
      high: 'Your personality profile shows strong alignment with professional success factors.',
      medium: 'Your personality profile indicates a balanced approach to workplace dynamics.',
      low: 'Your personality profile suggests areas where intentional development can enhance your professional effectiveness.',
    },
    cognitive: {
      high: 'Excellent analytical and reasoning abilities. You demonstrate strong cognitive aptitude.',
      medium: 'Good cognitive skills with room for development in specific reasoning areas.',
      low: 'Your cognitive scores indicate areas where structured practice and learning can significantly improve your analytical capabilities.',
    },
    situational: {
      high: 'Outstanding judgment in workplace scenarios. You consistently choose effective and professional approaches.',
      medium: 'Good situational judgment with some areas for refinement in complex workplace dynamics.',
      low: 'Your situational responses suggest opportunities to develop more effective workplace strategies.',
    },
    'critical-thinking': {
      high: 'Exceptional critical thinking and problem-solving skills. You demonstrate strong analytical depth.',
      medium: 'Solid critical thinking foundation with potential for further development in complex analysis.',
      low: 'Your critical thinking scores highlight valuable opportunities for structured skill development.',
    },
    adaptability: {
      high: 'Remarkable adaptability and emotional intelligence. You excel at navigating change and managing relationships.',
      medium: 'Good adaptability with identified areas for strengthening resilience and emotional intelligence.',
      low: 'Your adaptability scores highlight important opportunities for developing greater flexibility and emotional awareness.',
    },
  };

  const level = percentage >= 70 ? 'high' : percentage >= 40 ? 'medium' : 'low';
  const feedback = feedbackMap[sectionId]?.[level] || 'Assessment completed.';

  return {
    sectionId,
    sectionTitle: section.title,
    score,
    maxScore,
    percentage,
    feedback,
  };
}

export function calculateOverallResult(
  candidateInfo: CandidateInfo,
  allAnswers: Record<string, Record<number, string | number>>
): TestResult {
  const personalityAnswers: Record<number, number> = {};
  const personalityRaw = allAnswers['personality'] || {};
  Object.entries(personalityRaw).forEach(([key, val]) => {
    personalityAnswers[Number(key)] = Number(val);
  });
  const personalityProfile = calculatePersonalityScore(personalityAnswers);

  const cognitiveResult = calculateSectionScore('cognitive', allAnswers['cognitive'] || {});
  const situationalResult = calculateSectionScore('situational', allAnswers['situational'] || {});
  const criticalThinkingResult = calculateSectionScore('critical-thinking', allAnswers['critical-thinking'] || {});
  const adaptabilityResult = calculateSectionScore('adaptability', allAnswers['adaptability'] || {});

  const personalitySectionResult: SectionResult = {
    sectionId: 'personality',
    sectionTitle: 'Personality Assessment',
    score: Object.values(personalityProfile)
      .filter((v): v is number => typeof v === 'number')
      .reduce((a: number, b: number) => a + b, 0) / 5,
    maxScore: 100,
    percentage: Math.round(
      (personalityProfile.openness +
        personalityProfile.conscientiousness +
        personalityProfile.extraversion +
        personalityProfile.agreeableness +
        personalityProfile.neuroticism) / 5
    ),
    feedback: `Dominant trait: ${personalityProfile.dominantTrait}. ${personalityProfile.profileSummary}`,
  };

  const sectionResults = [personalitySectionResult, cognitiveResult, situationalResult, criticalThinkingResult, adaptabilityResult];

  const weights: Record<string, number> = {
    personality: 0.20,
    cognitive: 0.25,
    situational: 0.25,
    'critical-thinking': 0.15,
    adaptability: 0.15,
  };

  let overallPercentage = 0;
  sectionResults.forEach((sr) => {
    overallPercentage += sr.percentage * (weights[sr.sectionId] || 0.2);
  });
  overallPercentage = Math.round(overallPercentage);

  let grade = 'F';
  if (overallPercentage >= 90) grade = 'A+';
  else if (overallPercentage >= 80) grade = 'A';
  else if (overallPercentage >= 70) grade = 'B+';
  else if (overallPercentage >= 60) grade = 'B';
  else if (overallPercentage >= 50) grade = 'C';
  else if (overallPercentage >= 40) grade = 'D';

  const strengths: string[] = [];
  const developmentAreas: string[] = [];

  if (personalityProfile.conscientiousness >= 70) strengths.push('Strong work ethic and reliability');
  else if (personalityProfile.conscientiousness < 50) developmentAreas.push('Focus on organizational skills and deadline management');

  if (personalityProfile.openness >= 70) strengths.push('High creativity and innovation mindset');
  else if (personalityProfile.openness < 50) developmentAreas.push('Cultivate openness to new ideas and approaches');

  if (cognitiveResult.percentage >= 70) strengths.push('Strong analytical and cognitive abilities');
  else if (cognitiveResult.percentage < 50) developmentAreas.push('Develop numerical and logical reasoning skills');

  if (situationalResult.percentage >= 70) strengths.push('Excellent workplace judgment and professionalism');
  else if (situationalResult.percentage < 50) developmentAreas.push('Enhance situational decision-making skills');

  if (adaptabilityResult.percentage >= 70) strengths.push('High adaptability and emotional intelligence');
  else if (adaptabilityResult.percentage < 50) developmentAreas.push('Build resilience and stress management capabilities');

  if (criticalThinkingResult.percentage >= 70) strengths.push('Strong critical thinking and strategic reasoning');
  else if (criticalThinkingResult.percentage < 50) developmentAreas.push('Strengthen critical thinking and problem analysis');

  if (personalityProfile.extraversion >= 70) strengths.push('Strong collaboration and communication skills');
  else if (personalityProfile.extraversion < 50) developmentAreas.push('Develop confidence in team interactions and presentations');

  if (strengths.length === 0) strengths.push('Demonstrated commitment to completing a comprehensive assessment');
  if (developmentAreas.length === 0) developmentAreas.push('Continuous learning mindset will drive ongoing professional growth');

  let recommendation = '';
  if (overallPercentage >= 80) {
    recommendation = 'Highly Recommended: This candidate demonstrates exceptional aptitude across all assessed dimensions. Strong potential for high-performance roles and leadership tracks.';
  } else if (overallPercentage >= 65) {
    recommendation = 'Recommended: This candidate shows solid capabilities with specific strengths. Well-suited for roles aligned with their dominant traits. Targeted development can maximize potential.';
  } else if (overallPercentage >= 50) {
    recommendation = 'Conditionally Recommended: This candidate has demonstrated potential with notable strengths. Consider for roles with structured support and development pathways.';
  } else {
    recommendation = 'Further Assessment Needed: This candidate may benefit from additional evaluation. Consider role-specific assessments and interviews to better understand fit.';
  }

  return {
    candidateInfo,
    overallScore: overallPercentage,
    overallPercentage,
    grade,
    sectionResults,
    personalityProfile,
    strengths,
    developmentAreas,
    recommendation,
    completedAt: new Date().toISOString(),
  };
}

export function formatResultForEmail(result: TestResult): string {
  const lines = [
    'CANDIDATE ASSESSMENT REPORT - CLANN STAFFING',
    '=============================================',
    '',
    'CANDIDATE INFORMATION:',
    `  Name: ${result.candidateInfo.fullName}`,
    `  Email: ${result.candidateInfo.email}`,
    `  Phone: ${result.candidateInfo.phone}`,
    `  Role Applied: ${result.candidateInfo.roleApplied}`,
    `  Experience: ${result.candidateInfo.experience}`,
    `  Education: ${result.candidateInfo.education}`,
    `  Completed: ${new Date(result.completedAt).toLocaleString()}`,
    '',
    'OVERALL RESULTS:',
    `  Overall Score: ${result.overallPercentage}%`,
    `  Grade: ${result.grade}`,
    '',
    'SECTION SCORES:',
  ];

  result.sectionResults.forEach((section) => {
    lines.push(`  ${section.sectionTitle}: ${section.percentage}% (${section.score}/${section.maxScore})`);
  });

  lines.push(
    '',
    'PERSONALITY PROFILE (OCEAN Model):',
    `  Dominant Trait: ${result.personalityProfile.dominantTrait}`,
    `  Openness: ${result.personalityProfile.openness}%`,
    `  Conscientiousness: ${result.personalityProfile.conscientiousness}%`,
    `  Extraversion: ${result.personalityProfile.extraversion}%`,
    `  Agreeableness: ${result.personalityProfile.agreeableness}%`,
    `  Emotional Stability: ${result.personalityProfile.neuroticism}%`,
    '',
    'KEY STRENGTHS:',
  );

  result.strengths.forEach((s) => lines.push(`  - ${s}`));

  lines.push('', 'DEVELOPMENT AREAS:');
  result.developmentAreas.forEach((d) => lines.push(`  - ${d}`));

  lines.push('', `RECOMMENDATION:`, `  ${result.recommendation}`, '', 'Generated by Clann Staffing Assessment Platform');

  return lines.join('\n');
}
