import { useEffect, useState } from "react";
import { IconQuote } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

const quotes = [
  {
    text: "Your home should tell the story of who you are, and be a collection of what you love.",
    author: "Nate Berkus",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Be faithful to your own taste, because nothing you really like is ever out of style.",
    author: "Billy Baldwin",
  },
  {
    text: "An interior is the natural projection of the soul.",
    author: "Coco Chanel",
  },
  {
    text: "We shape our homes and then our homes shape us.",
    author: "Winston Churchill",
  },
  {
    text: "The best rooms have something to say about the people who live in them.",
    author: "David Hicks",
  },
  {
    text: "Luxury is when it seems flawless, when you reach the right balance between all elements.",
    author: "Jean-Louis Deniot",
  },
  {
    text: "The essence of interior design will always be about people and how they live.",
    author: "Albert Hadley",
  },
  {
    text: "Decorating golden rule: Live with what you love.",
    author: "Unknown",
  },
];

export default function RandomQuote() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-theme="dark"
      className={twMerge("flex flex-col items-center justify-center h-36 px-4")}
    >
      <p className="text-2xl md:text-3xl xl:text-4xl font-medium text-center text-gray-400 flex gap-0.5 font-marck-script">
        <IconQuote stroke={2} className="-rotate-180" />
        {quote.text}
        <IconQuote stroke={2} />
      </p>
      <p className="text-sm text-gray-400 mt-2">- {quote.author}</p>
    </div>
  );
}
