import { Component } from '@angular/core';
import { AiGeneratorService } from '../../../core/services/ai-generator.service';

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent {
  isOpen = false;
  isLoading = false;
  messages: { text: string; sender: 'ai' | 'user' }[] = [
    { text: "Hi! I'm your Storyverse Assistant. I'm connected to the real Gemini AI API. How can I help you write today?", sender: 'ai' }
  ];
  userInput = '';

  constructor(private aiService: AiGeneratorService) {}

  toggleAssistant() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim() || this.isLoading) return;

    // Add user message
    const query = this.userInput;
    this.messages.push({ text: query, sender: 'user' });
    this.userInput = '';
    this.isLoading = true;

    // Call Real AI Service
    this.aiService.generateStory(query).subscribe({
      next: (response: any) => {
        this.messages.push({
          text: response.text,
          sender: 'ai'
        });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
