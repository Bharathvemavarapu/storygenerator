import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile
} from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  
  private authStateResolved = false;

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
      this.authStateResolved = true;
    });
  }

  /**
   * Returns a promise that resolves when the initial auth state is determined.
   */
  public waitForAuthResolved(): Promise<void> {
    return new Promise((resolve) => {
      if (this.authStateResolved) {
        resolve();
      } else {
        const unsubscribe = onAuthStateChanged(this.auth, () => {
          unsubscribe();
          resolve();
        });
      }
    });
  }

  public get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  public async register(email: string, password: string, displayName?: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }
    return userCredential.user;
  }

  public async login(email: string, password: string) {
    // Mock login to bypass local network/adblocker Firebase issues
    console.log('Mock login triggered for', email);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          uid: 'mock-user-123',
          email: email,
          displayName: 'Test User'
        } as any);
      }, 1000);
    });
  }

  public async logout() {
    await signOut(this.auth);
  }
}
