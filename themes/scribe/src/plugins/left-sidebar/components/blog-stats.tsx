import { useQueryDom } from '@acnb/hooks';
import { Eye, FileText, MessageCircle, TrendingUp } from 'lucide-preact';

function query(el: Element | null) {
  if (!el) {
    return {
      postCount: 0,
      articleCount: 0,
      commentCount: 0,
      viewCount: 0,
    };
  }

  const postCountText =
    el.querySelector('#stats_post_count')?.textContent || '';
  const articleCountText =
    el.querySelector('#stats_article_count')?.textContent || '';
  const commentCountText =
    el.querySelector('#stats-comment_count')?.textContent || '';
  const viewCountText =
    el.querySelector('#stats-total-view-count')?.textContent || '';

  const extractNumber = (text: string) => {
    const match = text.match(/\d+/);
    return match ? Number.parseInt(match[0], 10) : 0;
  };

  return {
    postCount: extractNumber(postCountText),
    articleCount: extractNumber(articleCountText),
    commentCount: extractNumber(commentCountText),
    viewCount: extractNumber(viewCountText),
  };
}

function Skeleton() {
  return (
    <div className='rounded-xl border bg-card shadow-sm animate-pulse'>
      <div className='p-4'>
        <div className='flex items-center gap-2 mb-4'>
          <div className='h-4 w-4 bg-muted rounded'></div>
          <div className='h-4 bg-muted rounded w-16'></div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col items-center space-y-2 p-2'>
            <div className='h-8 w-8 bg-muted rounded-full'></div>
            <div className='h-6 bg-muted rounded w-12'></div>
            <div className='h-3 bg-muted rounded w-8'></div>
          </div>
          <div className='flex flex-col items-center space-y-2 p-2'>
            <div className='h-8 w-8 bg-muted rounded-full'></div>
            <div className='h-6 bg-muted rounded w-12'></div>
            <div className='h-3 bg-muted rounded w-8'></div>
          </div>
          <div className='col-span-2 flex justify-center'>
            <div className='flex flex-col items-center space-y-2 p-2'>
              <div className='h-8 w-8 bg-muted rounded-full'></div>
              <div className='h-6 bg-muted rounded w-16'></div>
              <div className='h-3 bg-muted rounded w-12'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatItemProps {
  icon: any;
  count: number;
  label: string;
  color?: string;
}

function StatItem({
  icon: Icon,
  count,
  label,
  color = 'text-primary',
}: StatItemProps) {
  return (
    <div className='flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-muted/50 transition-colors'>
      <div className={`p-2 rounded-full bg-primary/10 ${color}`}>
        <Icon className='w-4 h-4' />
      </div>
      <span className='font-bold text-xl tabular-nums'>
        {count.toLocaleString()}
      </span>
      <span className='text-muted-foreground text-xs font-medium'>{label}</span>
    </div>
  );
}

export function BlogStatsCard() {
  const { data, isPending } = useQueryDom({
    selector: '.blogStats',
    queryFn: query,
  });

  if (isPending || !data) {
    return <Skeleton />;
  }

  return (
    <div className='rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md'>
      <div className='p-4'>
        <div className='flex items-center gap-2 mb-4'>
          <TrendingUp className='w-4 h-4 text-primary' />
          <h3 className='font-semibold text-sm text-foreground'>博客统计</h3>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <StatItem
            icon={FileText}
            count={data.postCount}
            label='随笔'
            color='text-blue-600 dark:text-blue-400'
          />
          <StatItem
            icon={MessageCircle}
            count={data.commentCount}
            label='评论'
            color='text-green-600 dark:text-green-400'
          />
          <div className='col-span-2 flex justify-center'>
            <StatItem
              icon={Eye}
              count={data.viewCount}
              label='总阅读量'
              color='text-purple-600 dark:text-purple-400'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
