import type { NextAuthOptions } from 'next-auth';
import DuendeIdentityServer6, { type DuendeISUser } from 'next-auth/providers/duende-identity-server6';

type Profile = DuendeISUser & {
	sub: string;
};

export const duendeProvider = DuendeIdentityServer6<Profile>({
	authorization: {
		params: {
			scope: 'email openid profile offline_access',
		},
	},
	clientId: process.env.IDENTITY_CLIENT_ID || '',
	clientSecret: process.env.IDENTITY_CLIENT_SECRET || '',
	wellKnown: process.env.IDENTITY_WELL_KNOWN,
	profile(profile) {
		return {
			id: profile.sub,
			name: profile.name,
			email: profile.email,
		};
	},
});

export const authOptions: NextAuthOptions = {
	providers: [duendeProvider],
};
