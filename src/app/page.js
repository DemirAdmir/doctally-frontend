"use client";

import { useState } from "react";
import axios from "axios";
import UploadFile from "../components/UploadFile";
import MetricsDisplay from "../components/MetricsDisplay";
import Footer from "@/components/Footer";

export default function Home() {
  const [metrics, setMetrics] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://doctally-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            setProgress(Math.round((loaded * 100) / total));
          },
        }
      );
      setMetrics(response.data);
      setProgress(0); // Reset progress after upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-2">DocTally</h1>
      <p className="text-lg mb-6">Counting Words in a PDF Document</p>
      <UploadFile onFileUpload={handleFileUpload} progress={progress} />
      <MetricsDisplay metrics={metrics} />
      <Footer />
    </div>
  );
}
