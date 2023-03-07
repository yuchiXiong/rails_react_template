import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IPost } from '@services/post';
import Logo from './logo';

export default function HomePage() {
  const { posts: posts } = useLoaderData() as { posts: IPost[] };

  return (
    <div className='text-white text-center p-8'>
      <div className='text-center'>
        <Logo />

        <h1>立刻使用 React + Rails 构建您的应用。</h1>

        <p>修改 <code>app/javascript/src/pages</code> 并保存以自动更新。</p>

        {posts.map(post => (
          <React.Fragment key={post.id}>
            <h3 className='mt-10'>{post.title}</h3>
            <ul>
              {post.articles.map(article => (
                <li key={article.id} className="inline-block mx-2">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener"
                    className='font-bold'
                  >{article.title}</a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}

      </div>
    </div >
  );
}
