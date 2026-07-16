import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface AiResponse {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiGeneratorService {
  
  // We use the gemini-1.5-flash model for fast text generation
  private readonly apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  constructor(private http: HttpClient) { }

  generateStory(prompt: string): Observable<AiResponse> {
    const apiKey = environment.geminiApiKey;
    
    if (!apiKey) {
      return of({ 
        text: 'System: Google Gemini API Key is missing. Please add your key to src/environments/environment.ts to enable real AI generation.' 
      });
    }

    const payload = {
      contents: [{
        parts: [{
          text: `You are a creative writing assistant for Storyverse AI. Keep responses concise, creative, and engaging. User prompt: ${prompt}`
        }]
      }]
    };

    return this.http.post<any>(`${this.apiUrl}?key=${apiKey}`, payload).pipe(
      map(response => {
        // Extract the text from the Gemini response payload structure
        const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
        return { text };
      }),
      catchError(error => {
        console.error('AI Generation Error:', error);
        
        let errorMsg = 'Unknown error occurred.';
        if (error.error && error.error.error && error.error.error.message) {
          errorMsg = error.error.error.message;
        } else if (error.message) {
          errorMsg = error.message;
        }

        return of({ text: `Sorry, the AI server returned an error: ${errorMsg}` });
      })
    );
  }
}
