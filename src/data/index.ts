// ... previous interfaces and helper functions remain the same

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Building a Modern React Application: A Complete Guide",
    excerpt: "Learn how to build a production-ready React application with TypeScript, Tailwind CSS, and best practices for 2024.",
    content: `
      <article class="prose prose-invert prose-blue max-w-none">
        <h1>Building a Modern React Application</h1>
        
        <p class="lead text-xl text-slate-300 mb-8">
          In this comprehensive guide, we'll walk through building a modern React application from scratch, incorporating best practices and powerful tools that make development both enjoyable and productive.
        </p>

        <h2>Getting Started</h2>
        
        <p>Before we dive in, make sure you have the following prerequisites installed:</p>
        
        <ul>
          <li>Node.js (version 18 or higher)</li>
          <li>npm or yarn package manager</li>
          <li>Your favorite code editor (VS Code recommended)</li>
        </ul>

        <h2>Project Setup</h2>
        
        <p>Let's start by creating a new Vite project with React and TypeScript:</p>

        <pre class="bg-slate-800 rounded-lg p-4 overflow-x-auto"><code class="text-sm">npm create vite@latest my-app -- --template react-ts
cd my-app
npm install</code></pre>

        <h3>Adding Essential Dependencies</h3>
        
        <p><em>First, we'll add some key dependencies that will help us build a robust application:</em></p>

        <pre class="bg-slate-800 rounded-lg p-4 overflow-x-auto"><code class="text-sm">npm install @tanstack/react-query tailwindcss @headlessui/react lucide-react</code></pre>

        <blockquote>
          <p>💡 <strong>Pro Tip:</strong> Always consider the bundle size when adding new dependencies. Choose libraries that support tree-shaking and have a good maintenance record.</p>
        </blockquote>

        <h2>Project Structure</h2>
        
        <p>A well-organized project structure is crucial for maintainability. Here's our recommended structure:</p>

        <pre class="bg-slate-800 rounded-lg p-4 overflow-x-auto"><code class="text-sm">src/
  ├── components/
  │   ├── ui/
  │   └── features/
  ├── hooks/
  ├── pages/
  ├── services/
  ├── utils/
  └── types/</code></pre>

        <h3>Component Organization</h3>
        
        <p>Let's create a reusable button component as an example:</p>

        <pre class="bg-slate-800 rounded-lg p-4 overflow-x-auto"><code class="language-typescript">interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  children,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-lg font-medium transition-colors',
        {
          'bg-blue-500 hover:bg-blue-600': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300': variant === 'secondary',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        }
      )}
    >
      {children}
    </button>
  );
}</code></pre>

        <h2>Styling with Tailwind CSS</h2>
        
        <p>We use Tailwind CSS for rapid UI development. Here's an example of a card component:</p>

        <div class="bg-slate-800/50 rounded-lg p-6 my-6 border border-slate-700/50">
          <h3 class="text-xl font-semibold mb-4">Example Card Component</h3>
          <p class="text-slate-300">This is how your styled components will look.</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
            Learn More
          </button>
        </div>

        <h2>Best Practices</h2>
        
        <ol>
          <li>Use TypeScript for better type safety and developer experience</li>
          <li>Implement proper error boundaries</li>
          <li>Write unit tests for critical components</li>
          <li>Optimize performance with React.memo and useMemo</li>
        </ol>

        <h3>Performance Optimization</h3>
        
        <p>Here's an example of implementing <code>useMemo</code> for expensive calculations:</p>

        <pre class="bg-slate-800 rounded-lg p-4 overflow-x-auto"><code class="language-typescript">const ExpensiveComponent = ({ data }: { data: number[] }) => {
  const processedData = useMemo(() => {
    return data.filter(n => n > 0).map(n => n * 2);
  }, [data]);

  return (
    <ul>
      {processedData.map(n => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
};</code></pre>

        <h2>Conclusion</h2>
        
        <p>Building a modern React application requires careful consideration of architecture, performance, and developer experience. By following these patterns and best practices, you'll be well on your way to creating robust and maintainable applications.</p>

        <div class="flex items-center gap-4 mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <div class="flex-shrink-0">
            <img 
              src="https://avatars.githubusercontent.com/u/91181868?v=4"
              alt="Author"
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <p class="font-medium text-white">About the Author</p>
            <p class="text-sm text-slate-300">
              Baha is a software engineer specializing in React and TypeScript. 
              Follow him for more web development tips and tutorials.
            </p>
          </div>
        </div>
      </article>
    `,
    date: '2024-03-15',
    tags: ['react', 'typescript', 'tutorial'],
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Baha',
      avatar: 'https://avatars.githubusercontent.com/u/91181868?v=4',
    },
  },
  // ... other blog posts remain the same
];