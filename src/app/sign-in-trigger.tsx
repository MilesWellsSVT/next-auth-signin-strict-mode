'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { duendeProvider } from './auth';

type SignInTriggerProps = React.PropsWithChildren;

export function SignInTrigger({ children }: SignInTriggerProps) {
	const { status } = useSession();
  const [authInitiated, setAuthInitiated] = useState(false);

	useEffect(() => {
		if (!authInitiated && status === 'unauthenticated') {
			setAuthInitiated(true);
			void signIn(duendeProvider.id);
		}
	}, [authInitiated, status]);

	if (status === 'unauthenticated') return null;

	return <>{children}</>;
}
