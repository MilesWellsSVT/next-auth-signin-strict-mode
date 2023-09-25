'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { duendeProvider } from './auth';

type SignInTriggerProps = React.PropsWithChildren;

export function SignInTrigger({ children }: SignInTriggerProps) {
	const { status } = useSession();

	useEffect(() => {
		if (status === 'unauthenticated') {
			void signIn(duendeProvider.id);
		}
	}, [status]);

	if (status === 'unauthenticated') return null;

	return <>{children}</>;
}
