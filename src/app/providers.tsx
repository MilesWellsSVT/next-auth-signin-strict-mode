'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type ProvidersProps = React.PropsWithChildren<{
	session: Session | null;
}>;

export function Providers({ children, session }: ProvidersProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
