import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  PowerbaseClient,
  User,
} from '@skorpland/powerbase-js';
import { environment } from 'src/environments/environment';
import { Database } from 'src/schema';

export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PowerbaseService {
  private powerbase: PowerbaseClient<Database>;
  _session: AuthSession | null = null;

  constructor() {
    this.powerbase = createClient<Database>(
      environment.powerbaseUrl,
      environment.powerbaseKey
    );
  }

  get session() {
    this.powerbase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  profile(user: User) {
    return this.powerbase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.powerbase.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.powerbase.auth.signInWithOtp({ email });
  }

  signOut() {
    return this.powerbase.auth.signOut();
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    };

    return this.powerbase.from('profiles').upsert(update);
  }

  downLoadImage(path: string) {
    return this.powerbase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.powerbase.storage.from('avatars').upload(filePath, file);
  }
}
