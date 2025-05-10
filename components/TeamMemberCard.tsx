import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string | null;
  position: string;
  image: string;
  bio: string | null;
}

export default function TeamMemberCard({
  name,
  position,
  image,
  bio,
}: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={name || "Team Member"}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{name || "Team Member"}</h3>
        <p className="text-sm text-primary font-medium">{position}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {bio || "No bio available"}
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn profile</span>
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
