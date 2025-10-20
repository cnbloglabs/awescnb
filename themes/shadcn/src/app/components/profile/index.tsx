import { Github, Mail, MapPin } from 'lucide-preact'

interface ProfileData {
  name: string
  title: string
  location: string
  email: string
  github: string
  avatar: string
  bio: string
}

const defaultProfile: ProfileData = {
  name: '博主',
  title: '全栈开发者',
  location: '中国',
  email: 'example@email.com',
  github: 'https://github.com/username',
  avatar: '/images/avatar.png',
  bio: '热爱技术，分享生活。专注于前端开发，喜欢探索新技术，记录学习心得。',
}

export function Profile() {
  const profile = defaultProfile

  return (
    <div className='mx-auto w-full max-w-2xl px-4 py-8'>
      <div className='rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md'>
        <div className='flex flex-col items-center text-center sm:flex-row sm:text-left'>
          <div className='mb-4 sm:mr-6 sm:mb-0'>
            <div className='relative'>
              <img
                src={profile.avatar}
                alt={profile.name}
                className='h-20 w-20 rounded-full border-2 border-primary object-cover'
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNmM2Y0ZjYiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOWNhM2FmIj4KPHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjMzLTggNHYyaDE2di0yYzAtMi42Ny01LjMzLTQtOC00eiIvPgo8L3N2Zz4KPC9zdmc+'
                }}
              />
            </div>
          </div>
          <div className='flex-1'>
            <h2 className='mb-2 font-bold text-2xl text-foreground'>
              {profile.name}
            </h2>
            <p className='mb-3 text-muted-foreground'>{profile.title}</p>
            <p className='mb-4 text-muted-foreground text-sm leading-relaxed'>
              {profile.bio}
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4 sm:justify-start'>
              <div className='flex items-center gap-2 text-muted-foreground text-sm'>
                <MapPin className='h-4 w-4' />
                <span>{profile.location}</span>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className='flex items-center gap-2 text-primary text-sm transition-colors hover:text-primary/80'
              >
                <Mail className='h-4 w-4' />
                <span>联系我</span>
              </a>
              <a
                href={profile.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-primary text-sm transition-colors hover:text-primary/80'
              >
                <Github className='h-4 w-4' />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
