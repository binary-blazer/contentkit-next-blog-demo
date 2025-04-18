import type { ContentKitConfig } from "contentkit/types";

const config: ContentKitConfig = {
  contentDirPath: "content",
  outputFormat: "esm",
  generateTypes: true,
  documentTypes: [
    {
      name: "Post",
      filePathPattern: "posts/*.md",
      fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        description: { type: "string", required: true },
        tags: { type: "array", required: false },
        image: { type: "string", required: false },
        slug: { type: "string", required: true },
      },
    },
  ],
};

export default config;
