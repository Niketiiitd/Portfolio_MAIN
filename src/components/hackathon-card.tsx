import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";

interface Props {
  title: string;
  position: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  winner?: boolean;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  position,
  description,
  dates,
  location,
  image,
  winner,
  links,
}: Props) {
  return (
    <div className="">
      <li className="relative ml-10 py-4">
        {/* Avatar Section */}
        <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
          <Avatar className="border size-12 m-auto">
            <AvatarImage src={image} alt={title} className="object-contain" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-1 flex-col gap-2">
          {/* Title and Shiny Button */}
          <div className="flex items-center justify-between">
          <h2 className="font-semibold leading-none">{title}</h2>
          {winner && <ShinyButton>Winner</ShinyButton>}
          </div>
          {/* Dates */}
          {dates && (
            <time className="text-xs text-muted-foreground">{dates}</time>
          )}
          {/* position */}
          {position && (
            <time className="text-xs text-muted-foreground">{position}</time>
          )}
          {/* Location */}
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
          {/* Description */}
          {description && (
            <span className="prose dark:prose-invert text-sm text-muted-foreground">
              {description}
            </span>
          )}
        </div>

        {/* Links Section */}
        {links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge key={idx} title={link.title} className="flex gap-2">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </li>
    </div>
  );
}
