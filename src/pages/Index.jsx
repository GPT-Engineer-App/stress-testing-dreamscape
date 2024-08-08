import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const CatBreed = ({ name, description, rating, onRate }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>{name}</span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 cursor-pointer ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              onClick={() => onRate(star)}
            />
          ))}
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [catBreeds, setCatBreeds] = useState([
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", rating: 0 },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", rating: 0 },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", rating: 0 },
  ]);

  const handleRate = (index, rating) => {
    const updatedBreeds = [...catBreeds];
    updatedBreeds[index].rating = rating;
    setCatBreeds(updatedBreeds);
  };

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-purple-800">All About Cats</h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[400px] rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="care">Care Tips</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Cat Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700">
                  Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
                  independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
                  characteristics and personalities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
              </CardHeader>
              <CardContent>
                {catBreeds.map((breed, index) => (
                  <CatBreed
                    key={index}
                    name={breed.name}
                    description={breed.description}
                    rating={breed.rating}
                    onRate={(rating) => handleRate(index, rating)}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="care">
            <Card>
              <CardHeader>
                <CardTitle>Cat Care Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide a balanced diet suitable for your cat's age and health condition</li>
                  <li>Ensure fresh water is always available</li>
                  <li>Regular grooming to keep their coat healthy</li>
                  <li>Schedule regular check-ups with a veterinarian</li>
                  <li>Provide mental stimulation with toys and play sessions</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700">Learn More About Cats</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
