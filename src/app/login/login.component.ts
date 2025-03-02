import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [MaterialModule, ReactiveFormsModule, CommonModule, FormsModule],
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: [false]
        });
    }

    async onSubmit() {
        if (this.loginForm.valid) {
            try {
                console.log('Login Form Value:', this.loginForm.value); 
                this.router.navigate(['/summary']); 
            } catch (error) {
                console.error('Login Fehler:', error);
                // TODO: Benutzerfreundliche Fehleranzeige implementieren (z.B. MatSnackBar)
            }
        } else {
            console.log('Formular ist ungültig');
        }
    }

    loginAsGuest() {
        this.router.navigate(['/summary']);  }
}