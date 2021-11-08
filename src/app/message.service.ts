import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: string[] = [];

  constructor() { }

  /**
   * Adds a string to the Messages array.
   * @param message - The string to add to the Messages Array.
   */
  public add(message: string): void {
    this.messages.push(message);
  }

  /**
   * Clears the message array.
   */
  public clear(): void {
    this.messages = [];
  }
}
