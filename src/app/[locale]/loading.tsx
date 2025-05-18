import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations('messages');

  return (
    <h2>
      {t('loading')}
    </h2>
  )
}