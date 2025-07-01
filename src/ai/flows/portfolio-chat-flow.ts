'use server';
/**
 * @fileOverview A portfolio navigation chatbot flow.
 *
 * - portfolioChat - A function that handles the chatbot conversation.
 * - PortfolioChatInput - The input type for the portfolioChat function.
 * - PortfolioChatOutput - The return type for the portfolioChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const PortfolioChatInputSchema = z.object({
  message: z.string().describe('The latest message from the user.'),
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      content: z.string(),
    })
  ).describe('The history of the conversation.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  response: z.string().describe("The chatbot's text response to the user."),
  navigationTarget: z
    .string()
    .optional()
    .describe(
      "The ID of the page section to navigate to, if any. e.g., '#contact'"
    ),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;


const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: {schema: PortfolioChatInputSchema},
  output: {schema: PortfolioChatOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for Alif Sakib's portfolio website. Your goal is to help users navigate the site and learn about Alif.

The website has the following sections, identifiable by these IDs:
- 'Home' (ID: #home)
- 'About Me' (ID: #about)
- 'Portfolio' or 'Work/Projects' (ID: #portfolio)
- 'Experience' (ID: #experience)
- 'Contact' (ID: #contact)

When a user asks a question that can be answered by navigating to a section, you MUST provide the corresponding section ID in the 'navigationTarget' field.
- If they ask to see projects, work, or portfolio, set navigationTarget to '#portfolio'.
- If they ask about Alif's skills or background, set navigationTarget to '#about'.
- If they ask about his work history, set navigationTarget to '#experience'.
- If they ask how to get in touch or for contact information, set navigationTarget to '#contact'.

For filtering projects, the portfolio section contains projects tagged with "React" and "Next.js". You can mention this, but the site doesn't support automatic filtering, so just direct them to the #portfolio section and tell them they can filter there.

Keep your responses concise and friendly. Use the provided conversation history for context.

Conversation History:
{{#each history}}
- {{role}}: {{content}}
{{/each}}

User's new message:
{{{message}}}
`,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);


export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}
