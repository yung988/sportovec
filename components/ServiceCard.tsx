import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
};

const ServiceCard = ({ title, description, content, imageSrc, imageAlt, icon }: ServiceCardProps) => {
  return (
    <CardContainer className="w-full">
      <CardBody className="bg-white relative border-0 shadow-lg rounded-3xl overflow-hidden p-0 w-full h-auto">
        <CardItem translateZ="50" className="w-full">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <CardItem translateZ="100">
                {icon}
              </CardItem>
            </div>
          </div>
        </CardItem>
        
        <div className="p-6">
          <CardItem translateZ="60" as="h3" className="text-xl font-medium mb-1">
            {title}
          </CardItem>
          
          <CardItem translateZ="50" as="p" className="text-sm text-gray-500 mb-4">
            {description}
          </CardItem>
          
          <CardItem translateZ="40" as="p" className="text-gray-700 mb-6">
            {content}
          </CardItem>
          
          <CardItem translateZ="30">
            <Button variant="ghost" className="rounded-full">
              Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard; 