import type { LoginPageLayoutProps } from '@/Layouts/LoginLayout/LoginLayout.type'

import backgroundImg from '/img/shape-background.png'

export function LoginPageLayout({ className, children }: LoginPageLayoutProps) {
  return (
    <div className={className}>
      <img
        src={backgroundImg}
        alt="Imagem de formas geométricas para o background de toda a aplicação"
        className="absolute inset-0 m-auto object-cover sepia opacity-10"
      />

      {children}
    </div>
  )
}
