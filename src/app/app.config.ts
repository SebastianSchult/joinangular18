import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"join-1ea34","appId":"1:1055261912974:web:49be533bfacb22f3403edf","databaseURL":"https://join-1ea34-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"join-1ea34.firebasestorage.app","apiKey":"AIzaSyAhoDdpyX4TbK9x36W3wIMJszrnRy6ls6Y","authDomain":"join-1ea34.firebaseapp.com","messagingSenderId":"1055261912974","measurementId":"G-841X2T90KX"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideAnimationsAsync()]
};
