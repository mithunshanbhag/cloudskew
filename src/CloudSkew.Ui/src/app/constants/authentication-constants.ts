import { environment } from 'src/environments/environment';

export class AuthenticationConstants {
    public static readonly auth0ClientId = environment.auth0ClientId;
    public static readonly auth0Domain = environment.auth0Domain;
    public static readonly auth0RedirectUri = environment.auth0RedirectUri;
    public static readonly auth0ResponseType = 'token id_token';
    public static readonly auth0Scope = 'openid email profile';
    public static readonly auth0Audience = environment.auth0Audience;
    public static readonly auth0LogoutUrl = environment.auth0LogoutUrl;
}
