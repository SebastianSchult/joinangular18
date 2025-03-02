import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // Login mit E-Mail und Passwort
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Guest-Login (anonym)
  loginAsGuest(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInAnonymously();
  }

  // Logout
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Registrierung eines neuen Nutzers (optional)
  register(email: string, password: string, displayName: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        if (credential.user) {
          return credential.user.updateProfile({ displayName }).then(() => credential);
        }
        return credential;
      });
  }

  // Beispiel: Abruf von Tasks aus Firestore
  getTasks(): Observable<any[]> {
    return this.firestore.collection('tasks').valueChanges({ idField: 'id' });
  }

  // Weitere Methoden (z.B. addTask, updateTask, deleteTask) kannst du hier hinzufügen…
}