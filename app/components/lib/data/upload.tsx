export type UploadResponse = {
  location: string;
};

export async function UploadImage(
  formData: FormData
): Promise<UploadResponse> {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/files/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}