import { Heart } from 'lucide-preact'
import { ThemeToggle } from './theme-toggle'

export function Component() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex justify-center md:justify-start">
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground">
            <span>Built by zane.</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>Powered by 博客园.</span>
            <span>The source code is available on</span>
            <a
              href="https://github.com/cnbloglabs/awescnb"
              target="_blank"
              className="hover:text-foreground transition-colors underline"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <span>.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
