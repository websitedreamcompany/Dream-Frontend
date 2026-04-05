"use client";

import useDreamTradingStore from "@/store/store";
import { useEffect, useCallback } from "react";

const useFetchInitialData = () => {
  const { setProjectData, setMoreData } = useDreamTradingStore(
    (state) => state,
  );

  const handleFetchImages = useCallback(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=houses&&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk",
      {
        method: "get",
      },
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
        setProjectData({ data: r.results });
        // setData(r.results)
      })
      .catch(console.log);
  }, [setProjectData]);

  const handleFetchImagesNextPage = useCallback(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=3&query=houses&client_id=PG4lf1B0kp4ZKEVlfaLmOLzldpPEQK0yyMt5Ml_9Vyk",
      {
        method: "get",
      },
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log("page two..");
        console.log(r);

        setMoreData(r.results);
      })
      .catch(console.log);
  }, [setMoreData]);

  useEffect(() => {
    handleFetchImages();
    handleFetchImagesNextPage();
  }, [handleFetchImages, handleFetchImagesNextPage]);
};

export default useFetchInitialData;
