
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
};

type ArticlePreviewProps = {
  article: Article;
};

export function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <Badge className="absolute top-3 left-3">
          {article.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium line-clamp-2">{article.title}</h3>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 text-xs text-muted-foreground flex justify-between border-t mt-auto">
        <span>{article.date}</span>
        <span>By {article.author}</span>
      </CardFooter>
    </Card>
  );
}
