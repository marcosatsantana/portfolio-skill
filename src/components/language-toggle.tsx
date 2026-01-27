import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-mono text-xs">
      {i18n.language === 'pt' ? 'EN' : 'PT'}
    </Button>
  )
}
