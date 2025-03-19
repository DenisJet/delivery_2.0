"use client";
import { fetchPlaces } from "@/store/places.slice";
import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function PlacesList() {
  const places = useAppSelector((state) => state.places).places;
  const isLoading = useAppSelector((state) => state.places).isLoading;
  const isError = useAppSelector((state) => state.places).isError;

  const DEFAULT_IMAGE_URL = "/placeholder.png";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {places &&
            places.map((place) => (
              <CarouselItem
                key={place.slug}
                className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <Card className="">
                  <CardContent className="flex flex-col items-center justify-between p-0">
                    <Image
                      width={300}
                      height={100}
                      src={place.imageUrl ? place.imageUrl : DEFAULT_IMAGE_URL}
                      alt={place.name}
                      className="rounded-t-sm h-[75] sm:h-[100] lg:h-[125]"
                    />
                  </CardContent>
                  <p className="text-xs font-semibold p-1">{place.name}</p>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
