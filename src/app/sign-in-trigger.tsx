'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { duendeProvider } from './auth';

type SignInTriggerProps = React.PropsWithChildren;

export function SignInTrigger({ children }: SignInTriggerProps) {
	const { status } = useSession();
	const authInitiated = useRef(false);

	useEffect(() => {
		if (!authInitiated.current && status === 'unauthenticated') {
			authInitiated.current = true;
			void signIn(duendeProvider.id);
		}
	}, [status]);

	if (status === 'unauthenticated') return null;

	return <>{children}</>;
}
