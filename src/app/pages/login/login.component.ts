import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Analog zu loginInit() im alten JS
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Beispiel: Firebase-Login via Service (Implementierung im FirebaseService)
      this.firebaseService.login(email, password)
        .then(() => {
          // Bei erfolgreichem Login zur Board-Seite navigieren
          this.router.navigate(['/board']);
        })
        .catch(err => {
          console.error('Login failed:', err);
          // Hier kannst du auch eine Fehlermeldung anzeigen
        });
    }
  }

  loginAsGuest(): void {
    // Beispiel-Implementierung für Guest Login – hier kannst du deine Logik einfügen
    this.firebaseService.loginAsGuest()
      .then(() => this.router.navigate(['/board']))
      .catch(err => console.error('Guest login failed:', err));
  }
}