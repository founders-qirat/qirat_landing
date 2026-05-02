'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized learning path overview based on a child's age range.
 *
 * - generateLearningPath - A function that handles the learning path generation process.
 * - ChildAgeInput - The input type for the generateLearningPath function.
 * - LearningPathOutput - The return type for the generateLearningPath function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChildAgeInputSchema = z.object({
  ageRange: z.string().describe("The age range of the child, e.g., '4-6 Years', '7-9 Years', '10-12 Years', '13+ Years'."),
});
export type ChildAgeInput = z.infer<typeof ChildAgeInputSchema>;

const LearningPathOutputSchema = z.object({
  learningPathOverview: z.string().describe("A personalized overview of the child's recommended learning path at Qirat Academy."),
});
export type LearningPathOutput = z.infer<typeof LearningPathOutputSchema>;

export async function generateLearningPath(input: ChildAgeInput): Promise<LearningPathOutput> {
  return generateLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLearningPathPrompt',
  input: { schema: ChildAgeInputSchema },
  output: { schema: LearningPathOutputSchema },
  prompt: `You are an expert educational consultant for Qirat Academy, a premium Ed-Tech startup offering live, interactive Islamic and Arabic education for kids. Your goal is to generate a personalized, engaging, and professional overview of the recommended learning path for a child based on their age range.

Qirat Academy's key features:
- Live, interactive 45-minute sessions
- Led by certified Aalims
- Teaches Quran, Tajweed, and Tarjuma
- Collaborative, gamified environment
- Strict 1:10 Teacher-to-Student Ratio
- Focus on holistic curriculum beyond basic reading to proper Tajweed, Tarjuma, and character building.

Based on the child's age range, provide a detailed, encouraging, and professional overview of what their learning journey will look like at Qirat Academy. Highlight how the curriculum adapts to their developmental stage and how Qirat's unique methodology ensures active learning and engagement.

Child's Age Range: {{{ageRange}}}`,
});

const generateLearningPathFlow = ai.defineFlow(
  {
    name: 'generateLearningPathFlow',
    inputSchema: ChildAgeInputSchema,
    outputSchema: LearningPathOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate learning path overview.');
    }
    return output;
  }
);
