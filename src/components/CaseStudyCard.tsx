import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Card className="card-elevated h-full flex flex-col">
      {caseStudy.imageUrl && (
        <div className="aspect-video bg-muted rounded-t-lg">
          <img 
            src={caseStudy.imageUrl} 
            alt={caseStudy.title}
            className="w-full h-full object-cover rounded-t-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          {caseStudy.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-card-title line-clamp-2">
          {caseStudy.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {caseStudy.summary}
        </CardDescription>
        <div className="text-sm font-medium text-accent mt-2">
          {caseStudy.impact}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button asChild variant="outline" className="w-full group">
          <Link to={`/case-studies/${caseStudy.slug}`}>
            Read Full Case Study
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;