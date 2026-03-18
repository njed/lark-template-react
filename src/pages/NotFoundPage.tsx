import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation('errors');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-[hsl(var(--foreground))]">404</h1>
      <p className="text-xl text-[hsl(var(--muted-foreground))]">
        {t('notFound')}
      </p>
      <Link
        to="/"
        className="mt-4 text-[hsl(var(--primary))] hover:underline"
      >
        {t('goHome')}
      </Link>
    </div>
  );
}