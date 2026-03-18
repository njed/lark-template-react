import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui';
import { LanguageSwitcher } from '@/components/i18n';

export function HomePage() {
  const { t } = useTranslation('home');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      <div className="mt-8 grid gap-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          <span>{t('techStack.buildTool')}:</span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {t('techStack.buildToolValue')}
          </span>
          <span>{t('techStack.state')}:</span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {t('techStack.stateValue')}
          </span>
          <span>{t('techStack.styling')}:</span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {t('techStack.stylingValue')}
          </span>
          <span>{t('techStack.testing')}:</span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {t('techStack.testingValue')}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <LanguageSwitcher />
      </div>
    </div>
  );
}