import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Blog = ({ slug }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Fetch the markdown file from the public folder
        const response = await fetch(`${process.env.PUBLIC_URL}/blogs/${slug}.md`);
        const text = await response.text();
        console.log('Raw markdown content:', text);

        // Split based on frontmatter --- delimiters
        const parts = text.split('---');
        if (parts.length >= 3) {
          const frontmatter = parts[1].trim();
          const markdownContent = parts[2].trim();

          console.log('Frontmatter:', frontmatter);
          console.log('Markdown Content:', markdownContent);

          // Split frontmatter into lines
          const frontmatterLines = frontmatter.split('\n').filter(Boolean);

          // Extract title and date
          const titleLine = frontmatterLines.find(line => line.startsWith('title: '));
          const dateLine = frontmatterLines.find(line => line.startsWith('date: '));

          const parsedTitle = titleLine ? titleLine.replace('title: ', '').trim() : 'Untitled';
          const parsedDate = dateLine ? new Date(dateLine.replace('date: ', '').trim()) : null;

          setTitle(parsedTitle);
          setDate(parsedDate);
          setContent(markdownContent);
        } else {
          setError('Invalid blog post structure.');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog post.');
      }
    };

    fetchBlogPost();
  }, [slug]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{date ? date.toLocaleDateString() : 'Unknown date'}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default Blog;
