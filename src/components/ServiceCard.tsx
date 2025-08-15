import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, benefits, Icon }: ServiceCardProps) => {
  return (
    <Card className="card-elevated h-full">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon size={24} className="text-primary" />
          </div>
          <CardTitle className="text-card-title">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;