import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jill",
    username: "@MIRA_On_TheWall",
    body: "To all my folks out there in data integration, just know I now include y'all in my daily prayers. This sh*t sucks!",
    img: "https://pbs.twimg.com/profile_images/1780238184246329345/A4jIFHb4_400x400.jpg",
  },
  {
    name: "Kierra",
    username: "@iamKierraD",
    body: "Data integration is heavily slept on, which is crazy because we are at a point where many company’s top priority is migrating their legacy data systems to the cloud",
    img: "https://pbs.twimg.com/profile_images/1649880501442818049/6SmTGbph_400x400.jpg",
  },
  {
    name: "Patrick Dichter",
    username: "@patrickdichter",
    body: "Just because your CRM says it integrates with Quickbooks Online, it doesn’t mean to integrates seamlessly. Keep seeing overstated revenue, inaccurate AR and chart of accounts mess.",
    img: "https://pbs.twimg.com/profile_images/1550280652167200770/Ba4P9OUt_400x400.jpg",
  },
  {
    name: "Emma",
    username: "@1331Eg",
    body: "Continuous maintenance effort - API integration is not a one-time thing. As business involves, API interfaces do change. Any functional changes can mess up the whole process of data access and manipulation.",
    img: "https://pbs.twimg.com/profile_images/1602227020007559168/D9rObN4E_400x400.jpg",
  },
  {
    name: "Milan Jovanović",
    username: "@mjovanovictech",
    body: "Nothing makes my day like having to integrate with an API that has terrible documentation. I don't even need your response schema, I'll figure it out myself. 🤦‍♂️",
    img: "https://pbs.twimg.com/profile_images/1627966190491430912/mBfznjgr_400x400.jpg",
  },
  {
    name: "Mim",
    username: "@mim_djo",
    body: "Modern data pipeline 🤡, I think the key learning for me, if you want a really good UX experience the data has to be next to the Viz layer, and doing table maintenance sucks 😜 it is better to pay someone else to do it for you, write concurrency is hard",
    img: "https://pbs.twimg.com/profile_images/1720335802759319552/AFnFX4ji_400x400.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TweetMarquee() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
