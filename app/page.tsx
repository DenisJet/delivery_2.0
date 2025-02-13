"use client";
import { fetchPlaces } from "@/store/places.slice";
import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { useEffect } from "react";

export default function Home() {
  const places = useAppSelector((state) => state.places).places;
  const isLoading = useAppSelector((state) => state.places).isLoading;
  const isError = useAppSelector((state) => state.places).isError;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
}
