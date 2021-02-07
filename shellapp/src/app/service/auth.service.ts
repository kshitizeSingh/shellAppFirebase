import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<any>

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$=this.auth.authState.pipe(
      switchMap(user=>{
        if(user){
          return afs.doc<any>(`users/${user.uid}`).valueChanges()
        }else{
          return of(null)
        }
      }))
   }

  async googleSingIn(){
    console.log('authService')
    const provider=new firebase.auth.GoogleAuthProvider()
    const credentials= await this.auth.signInWithPopup(provider);
    console.log(credentials,'auth')
    return this.updateUserData(credentials.user)
  }

  async facebookSingIn(){
    // register facebook developer app to start
    const provider=new firebase.auth.FacebookAuthProvider()
    const credentials= await this.auth.signInWithPopup(provider);
    return this.updateUserData(credentials.user)
  }
  
  logout() {
    this.auth.signOut();
  }

  private updateUserData(user:any){
    // ipdate the data info as per requirment to store additional user info.
    const userRef: AngularFirestoreDocument<any>=this.afs.doc(`users/${user.uid}`)
    const data={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoUrl:user.photoURL,      
    }
    return userRef.set(data,{merge:true})
  }
}
